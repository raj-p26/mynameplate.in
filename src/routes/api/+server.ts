export const GET = async () => {
  return new Response(
    JSON.stringify({
      status: 200,
      message: "Hi There!",
    }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
};
