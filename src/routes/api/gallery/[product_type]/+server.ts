import { error, json } from "@sveltejs/kit";
import path from "path";

export async function POST({ request, params }) {
  let form_data = await request.formData();
  let img = form_data.get("image") as File;
  let product_type = params.product_type;

  switch (product_type) {
    case "nameplates":
    case "led-nameplates":
    case "dnd-panels":
    case "society-name-boards":
      break;
    default:
      return error(400);
  }

  if (!img.name || img.name == "undefined") {
    return json({
      status: "failed",
      message: "Please add an image",
    });
  }

  let image_path = `${crypto.randomUUID()}.${img.name.split(".").pop()}`.trim();

  let file_path = path.join(
    process.cwd(),
    `static/product-images/${product_type}`,
    image_path
  );

  let file = Bun.file(file_path);

  await Bun.write(file, await img.arrayBuffer());

  return json({ status: "success" });
}
