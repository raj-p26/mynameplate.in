import { json, type Handle } from "@sveltejs/kit";
import { verify } from "jsonwebtoken";

export const handle: Handle = async ({ event, resolve }) => {
  let { url, request } = event;
  let { pathname } = url;

  if (
    (pathname == "/api/products" ||
      pathname.match(/^\/api\/products\/.*$/) ||
      pathname.match(/^\/api\/gallery\/.*$/)) &&
    request.method == "POST"
  ) {
    let { success, next } = await authenticate_products_api(request);
    if (!success) return next;
  }

  if (
    pathname.match(/^\/api\/products\/.*\/.*$/) &&
    request.method == "PATCH"
  ) {
    let { success, next } = await authenticate_products_api(request);
    if (!success) return next;
  }

  return resolve(event);
};

async function authenticate_products_api(request: Request) {
  const auth_token = request.headers.get("authorization");

  if (auth_token == null)
    return {
      success: false,
      next: json({
          status: "failed",
          message: "Unauthorized"
        },
        { status: 401 }
      ),
    };

  try {
    verify(auth_token, process.env.JWT_SECRET as string);
  } catch (err: any) {
    return {
      success: false,
      next: json({
        status: "failed",
        message: err.message,
      }),
    };
  }

  return { success: true, next: new Response() };
}
