import { error } from "@sveltejs/kit";

export function load({ params }) {
  let product_type = params.type;

  switch (product_type) {
    case "nameplates":
    case "led-nameplates":
    case "dnd-panels":
    case "society-name-boards":
      return { type: product_type };
    default:
      return error(404, "Product Type Not Found");
  }
}
