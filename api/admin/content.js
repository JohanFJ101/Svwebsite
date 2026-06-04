import { getContent, resetContent, saveContent } from "../_lib/content.js";
import { requireAdmin } from "../_lib/auth.js";
import { json, methodNotAllowed, readJson } from "../_lib/http.js";

export default async function handler(req, res) {
  if (!["GET", "PUT", "DELETE"].includes(req.method)) {
    return methodNotAllowed(res, ["GET", "PUT", "DELETE"]);
  }

  const session = requireAdmin(req);
  if (!session) return json(res, 401, { error: "Admin session required." });

  try {
    if (req.method === "GET") {
      return json(res, 200, await getContent(), { "Cache-Control": "no-store" });
    }

    if (req.method === "DELETE") {
      return json(res, 200, await resetContent());
    }

    const body = await readJson(req);
    return json(res, 200, await saveContent(body.content ?? body));
  } catch (error) {
    return json(res, 500, {
      error: error instanceof Error ? error.message : "Unable to update content.",
    });
  }
}
