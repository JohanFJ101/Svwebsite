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

interface ContentContextValue {
  content: SiteContent;
  loading: boolean;
  error: string;
  /** Replace the in-memory content after a successful backend save. */
  setContent: (next: SiteContent) => void;
  /** Restore the in-memory default content after a successful backend reset. */
  reset: () => void;
  refresh: () => Promise<void>;
}

const ContentContext = createContext<ContentContextValue | null>(null);

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

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContentState] = useState<SiteContent>(defaultContent);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const setContent = useCallback((next: SiteContent) => {
    setContentState(mergeWithDefaults(next));
  }, []);

  const reset = useCallback(() => {
    setContentState(defaultContent);
  }, []);

  const refresh = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/content", {
        credentials: "same-origin",
        cache: "no-store",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Unable to load site content.");
      setContentState(mergeWithDefaults(data.content));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to load site content.");
      setContentState(defaultContent);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  const value = useMemo(
    () => ({ content, loading, error, setContent, reset, refresh }),
    [content, loading, error, setContent, reset, refresh]
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
