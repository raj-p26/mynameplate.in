import { error } from "@sveltejs/kit";
import { promises as fs } from "fs";
import path from "path";

export async function load({ params }) {
  let product_type = params.type;

  switch (product_type) {
    case "nameplates":
    case "led-nameplates":
    case "dnd-panels":
    case "society-name-boards":
      break;
    default:
      return error(404, "Product Type Not Found");
  }

  const dir_path = `${process.cwd()}/static/product-images/${product_type}/`;
  const files = await fs.readdir(dir_path);
  const image_paths = files.map(
    (file) => `/product-images/${product_type}/${file}`
  );

  return { type: product_type, image_paths };
}
