import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { SiteContent } from "./types";
import { defaultContent } from "./defaultContent";

const STORAGE_KEY = "sv-site-content";

interface ContentContextValue {
  content: SiteContent;
  /** Replace the whole content tree (used by the admin Save action). */
  setContent: (next: SiteContent) => void;
  /** Restore the original hardcoded defaults. */
  reset: () => void;
}

const ContentContext = createContext<ContentContextValue | null>(null);

// Merge persisted content over defaults so new fields added later still get a
// value even if an older blob is in localStorage.
function mergeWithDefaults(stored: Partial<SiteContent> | null): SiteContent {
  if (!stored) return defaultContent;
  return {
    ...defaultContent,
    ...stored,
    hackathon: {
      ...defaultContent.hackathon,
      ...(stored.hackathon ?? {}),
      meta: {
        ...defaultContent.hackathon.meta,
        ...(stored.hackathon?.meta ?? {}),
      },
    },
  };
}

function loadContent(): SiteContent {
  if (typeof window === "undefined") return defaultContent;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return mergeWithDefaults(raw ? (JSON.parse(raw) as SiteContent) : null);
  } catch {
    return defaultContent;
  }
}

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContentState] = useState<SiteContent>(loadContent);

  // Persist on every change.
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
    } catch {
      /* storage may be unavailable (private mode); ignore */
    }
  }, [content]);

  // Keep other open tabs in sync.
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setContentState(loadContent());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const setContent = useCallback((next: SiteContent) => {
    setContentState(next);
  }, []);

  const reset = useCallback(() => {
    setContentState(defaultContent);
  }, []);

  const value = useMemo(
    () => ({ content, setContent, reset }),
    [content, setContent, reset]
  );

  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
}

export function useContent(): ContentContextValue {
  const ctx = useContext(ContentContext);
  if (!ctx) {
    throw new Error("useContent must be used within a ContentProvider");
  }
  return ctx;
}
