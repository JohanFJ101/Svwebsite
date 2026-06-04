import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Lock, X } from "lucide-react";
import { verifyCredentials } from "../content/auth";

const headingFont = {
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontWeight: 700,
  letterSpacing: "0.02em",
};

const inputClass =
  "w-full rounded-xl border border-neutral-800 bg-neutral-900/60 px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition-colors focus:border-[#ea5e28]/50 focus:ring-1 focus:ring-[#ea5e28]/20";

export function LoginModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  // Reset fields whenever the modal opens, and allow Esc to close.
  useEffect(() => {
    if (open) {
      setUsername("");
      setPassword("");
      setError("");
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    const result = await verifyCredentials(username, password);
    setBusy(false);
    if (result.ok) {
      onClose();
      navigate("/admin");
      window.scrollTo({ top: 0 });
    } else {
      setError(result.error || "Incorrect username or password.");
      setPassword("");
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-6"
      style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm rounded-2xl border border-neutral-800 bg-neutral-950/90 p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-2 text-neutral-500 hover:text-white hover:bg-neutral-800 transition-colors"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#ea5e28]/10 border border-[#ea5e28]/25 mb-5">
          <Lock className="h-5 w-5 text-[#ea5e28]" />
        </div>
        <h2 className="text-2xl uppercase mb-1" style={headingFont}>
          <span className="text-[#ea5e28]" style={{ fontStyle: "italic" }}>
            A
          </span>
          dmin Access
        </h2>
        <p className="text-sm text-neutral-500 mb-6">
          Enter your credentials to manage site content.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">
              Username
            </label>
            <input
              type="text"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="admin"
              autoComplete="username"
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              autoComplete="current-password"
              className={inputClass}
            />
          </div>

          {error && <p className="text-xs text-red-400">{error}</p>}

          <button
            type="submit"
            disabled={busy}
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#ea5e28] hover:bg-[#ff6a30] disabled:opacity-50 transition-colors py-3.5 text-sm font-semibold text-black mt-2"
          >
            {busy ? "Checking…" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
