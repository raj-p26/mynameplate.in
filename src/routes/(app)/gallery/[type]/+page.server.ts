import { error } from "@sveltejs/kit";
import { promises as fs } from "fs";

export const prerender = true;
export const ssr = true;

export async function load({ params }) {
  let product_type = params.type;

  switch (params.type) {
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

  const dir_path = `${process.cwd()}/static/product-images/${params.type}/`;
  const files = await fs.readdir(dir_path);
  const image_paths = files.map(
    (file) => `/product-images/${params.type}/${file}`
  );

  return { type: product_type, image_paths };
}
