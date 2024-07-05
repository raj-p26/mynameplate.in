import { Product } from "$lib/server/db.js";
import { error } from "@sveltejs/kit";

export const prerender = true;
export const ssr = true;

export async function load({ params }) {
  let product_type = params.type;

  switch (product_type) {
    case "nameplates":
      product_type = "Nameplates";
      break;
    case "led-nameplates":
      product_type = "LED Nameplates";
      break;
    case "dnd-panels":
      product_type = "DND Panels";
      break;
    case "society-name-boards":
      product_type = "Society Name Boards";
      break;
    default:
      return error(404, "Product Type Not Found");
  }

  let [products, err] = Product.of(params.type);

  if (err != null) {
    return error(400, err);
  }

  let updated_products = products!.map((prod) => {
    return {
      ...prod,
      image_path: `/product-images/${params.type}/${prod.image_path}`,
    };
  });

  return { type: product_type, products: updated_products };
}
