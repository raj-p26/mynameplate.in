import { Product } from "$lib/server/db.js";
import { error, json } from "@sveltejs/kit";
import { unlinkSync } from "node:fs";
import path from "path";

export const GET = ({ params }) => {
  let product = Product.get(params.product_id);
  if (product == null) return error(404);

  return json({ status: "ok", product });
};

export const PATCH = async ({ params, request }) => {
  let product = Product.get(params.product_id);
  if (product == null) return error(404);
  product.image_path = "undefined";

  // TODO: go through middleware before getting here...
  let form_data = await request.formData();
  let product_type = form_data.get("type")?.toString();
  let image = form_data.get("image") as File | null;

  switch (params.product_type) {
    case "nameplates":
    case "led-nameplates":
    case "dnd-panels":
    case "society-name-boards":
      break;
    default:
      return error(400);
  }

  if (product_type != "undefined" && product_type) {
    // switch (product_type) {
    //   case "nameplates":
    //   case "led-nameplates":
    //   case "dnd-panels":
    //   case "society-name-boards":
    //     break;
    //   default:
    //     return error(400);
    // }

    if (product_type != product.product_type && image) {
      let new_path = path.join(
        process.cwd(),
        `static/product-images/${product_type}`,
        product.image_path
      );
      let old_path = path.join(
        process.cwd(),
        `static/product-images/${product.product_type}`,
        product.image_path
      );

      await Bun.write(new_path, old_path);
      product.product_type = product_type;
    }
  }

  if (image) {
    let old_img = path.join(
      process.cwd(),
      `static/product-images/${product.product_type}/${product.image_path}`
    );

    unlinkSync(old_img);
    let uuid = crypto.randomUUID();
    let new_img_path = path.join(
      process.cwd(),
      `static/product-images/${product.product_type}`,
      `${uuid}.${image.name.split(".").pop()}`
    );

    await Bun.write(new_img_path, await image.arrayBuffer());
    product.image_path = `${uuid}.${image.name.split(".").pop()}`;
  }

  let res = Product.update({
    id: params.product_id,
    name: form_data.get("name")?.toString(),
    title: form_data.get("title")?.toString(),
    summary: form_data.get("summary")?.toString(),
    description: form_data.get("description")?.toString(),
    image_path: product.image_path,
    price: form_data.get("price")?.toString(),
    product_type: product_type?.toString(),
  });

  return json({ status: "ok", res });
};

export const DELETE = async ({ params }) => {
  let changes = Product.delete(params.product_id, params.product_type);

  return json({
    status: changes ? "ok" : "failed",
  });
};
