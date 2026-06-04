import {
  setSessionCookie,
  verifyAdminCredentials,
} from "../_lib/auth.js";
import { json, methodNotAllowed, readJson } from "../_lib/http.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return methodNotAllowed(res, ["POST"]);

  try {
    const { username = "", password = "" } = await readJson(req);
    const ok = await verifyAdminCredentials(String(username), String(password));

    if (!ok) return json(res, 401, { error: "Incorrect username or password." });

    setSessionCookie(res, String(username).trim());
    return json(res, 200, { ok: true });
  } catch (error) {
    return json(res, 500, {
      error: error instanceof Error ? error.message : "Unable to sign in.",
    });
  }
}
