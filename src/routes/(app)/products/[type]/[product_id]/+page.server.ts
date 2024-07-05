import { Product } from "$lib/server/db.js";
import { error } from "@sveltejs/kit";

export const prerender = true;
export const ssr = true;

export const load = async ({ params }) => {
  let product_id = params.product_id;

  const product = Product.get(product_id);

  if (product == null) return error(404, "Product Not Found");

  return { product: product! };
};
