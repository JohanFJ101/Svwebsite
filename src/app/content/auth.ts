interface LoginResult {
  ok: boolean;
  error?: string;
}

export async function verifyCredentials(
  username: string,
  password: string
): Promise<LoginResult> {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, error: data.error };
}

export async function isAuthed(): Promise<boolean> {
  const res = await fetch("/api/auth/session", {
    credentials: "same-origin",
    cache: "no-store",
  });
  if (!res.ok) return false;
  const data = await res.json();
  return Boolean(data.authed);
}

export async function logoutAdmin(): Promise<void> {
  await fetch("/api/auth/logout", {
    method: "POST",
    credentials: "same-origin",
  });
}
