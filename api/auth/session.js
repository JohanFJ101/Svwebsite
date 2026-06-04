import { getSession } from "../_lib/auth.js";
import { json, methodNotAllowed } from "../_lib/http.js";

export default async function handler(req, res) {
  if (req.method !== "GET") return methodNotAllowed(res, ["GET"]);

  const session = getSession(req);
  return json(
    res,
    200,
    session ? { authed: true, user: session.username } : { authed: false },
    { "Cache-Control": "no-store" }
  );
}
