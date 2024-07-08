import path from "path";
import { promises as fs } from "fs";
import { json } from "@sveltejs/kit";

export const DELETE = async ({ params }) => {
  let file_path = path.join(
    process.cwd(),
    `static/product-images/${params.product_type}`
  );
  let file = await contains_file(file_path, params.image_id);
  if (!file.found) {
    return json({
      status: "failed",
      message: "file not found",
    });
  }
  fs.unlink(`${file_path}/${file.file_name}`);
  return json({
    status: "success",
    message: "file deleted successfully.",
  });
};

async function contains_file(
  file_path: string,
  name: string
): Promise<{ file_name?: string; found: boolean }> {
  try {
    const files = await fs.readdir(file_path);
    const found_file = files.find((file) => file.includes(name));

    if (found_file) {
      return {
        file_name: found_file!,
        found: true,
      };
    } else {
      return {
        file_name: undefined,
        found: false,
      };
    }
  } catch (e) {
    console.log(e);
    return {
      file_name: undefined,
      found: false,
    };
  }
}
