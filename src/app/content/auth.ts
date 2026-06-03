// Lightweight client-side gate for the admin panel.
//
// NOTE: This is a static site with no backend, so this is obfuscation, not true
// security — anyone determined can read the bundle. We never store the password
// in plain text: only a SHA-256 hash ships in the source, and the entered
// password is hashed in the browser and compared against it.

const ADMIN_USERNAME = "admin";
// SHA-256 of the admin password.
const ADMIN_PASSWORD_HASH =
  "7fd411f515994111b00a0d1b3515c9f9ff7ed002f873cffa3fbf0171d190d23e";

const AUTH_KEY = "sv-admin-auth";

async function sha256Hex(input: string): Promise<string> {
  const bytes = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function verifyCredentials(
  username: string,
  password: string
): Promise<boolean> {
  if (username.trim().toLowerCase() !== ADMIN_USERNAME) return false;
  const hash = await sha256Hex(password);
  return hash === ADMIN_PASSWORD_HASH;
}

/** Auth lives in sessionStorage, so it clears when the tab/browser closes. */
export function isAuthed(): boolean {
  try {
    return sessionStorage.getItem(AUTH_KEY) === "1";
  } catch {
    return false;
  }
}

export function setAuthed(value: boolean) {
  try {
    if (value) sessionStorage.setItem(AUTH_KEY, "1");
    else sessionStorage.removeItem(AUTH_KEY);
  } catch {
    /* storage unavailable; ignore */
  }
}
