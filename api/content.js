import { getContent } from "./_lib/content.js";
import { json, methodNotAllowed } from "./_lib/http.js";

export default async function handler(req, res) {
  if (req.method !== "GET") return methodNotAllowed(res, ["GET"]);

  try {
    const result = await getContent();
    return json(res, 200, result, { "Cache-Control": "no-store" });
  } catch (error) {
    return json(res, 500, {
      error: error instanceof Error ? error.message : "Unable to load content.",
    });
  }
}
