import { Product } from "$lib/server/db";
import { json } from "@sveltejs/kit";
import path from "path";

interface ProductResponse {
  status: string;
  product_type_err?: string;
  product_name_err?: string;
  product_title_err?: string;
  product_summary_err?: string;
  product_image_err?: string;
  product_description_err?: string;
  product_price_err?: string;
}

export const GET = async () => {
  let products = Product.all();

  products = products.map((product) => {
    return {
      ...product,
      image_path: `${product.product_type}/${product.image_path}`,
    };
  });

  return json(products);
};

export const POST = async ({ request }) => {
  let response: ProductResponse = { status: "success" };
  let form_data = await request.formData();

  let product_type = form_data.get("type");
  let name = form_data.get("name");
  let title = form_data.get("title");
  let summary = form_data.get("summary");
  let image = form_data.get("image");
  let description = form_data.get("description");
  let price = form_data.get("price");

  if (product_type == null || product_type.toString().trim() == "") {
    response.status = "failed";
    response.product_title_err = "Product Type is required.";
  }

  if (name == null || name.toString().trim() == "") {
    response.status = "failed";
    response.product_name_err = "Product Name is required.";
  }

  if (title == null || title.toString().trim() == "") {
    response.status = "failed";
    response.product_title_err = "Product Title is required.";
  }

  if (summary == null || summary.toString().trim() == "") {
    response.status = "failed";
    response.product_summary_err = "Product Title is required.";
  }

  let img = image as File;

  if (!img.name || img.name == "undefined") {
    response.status = "failed";
    response.product_image_err = "Product Image is required.";
  }

  if (description == null || description.toString().trim() == "") {
    response.status = "failed";
    response.product_description_err = "Product Description is required.";
  }

  if (price == null || price.toString().trim() == "") {
    response.status = "failed";
    response.product_price_err = "Product Price is required.";
  }

  if (response.status == "failed") {
    return new Response(JSON.stringify(response));
  }

  if (!Product.is_created) Product.up();

  let image_path = `${crypto.randomUUID()}.${img.name.split(".").pop()}`.trim();

  let [_, err] = Product.add_product({
    title: title!.toString(),
    name: name!.toString(),
    product_type: product_type!.toString(),
    summary: summary!.toString(),
    description: description!.toString(),
    image_path,
    price: price!.toString(),
  });

  if (err != null) {
    response.status = err;
    return new Response(JSON.stringify(response));
  }

  let file_path = path.join(
    process.cwd(),
    `static/product-images/${product_type}`,
    image_path
  );

  let file = Bun.file(file_path);

  await Bun.write(file, await img.arrayBuffer());

  return new Response(JSON.stringify(response));
};
