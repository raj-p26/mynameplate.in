import { Product } from "$lib/server/db.js";
import { json } from "@sveltejs/kit";

export const GET = async ({ params }) => {
  let [products, err] = Product.of(params.product_type);

  if (err != null) {
    return json(
      { err },
      {
        status: 404,
      }
    );
  }

  products = products!.map((product) => {
    return {
      ...product,
      image_path: `/product-images/${product.product_type}/${product.image_path}`,
    };
  });

  return json(products);
};
