import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Camera,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router";

const headingFont = {
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontWeight: 700,
  letterSpacing: "0.02em",
};

interface GalleryPhoto {
  id: string;
  thumb: string;
  full: string;
}

const thumbnailImports = import.meta.glob(
  "../../imports/gallery/villagehacks-26/thumbs/*.jpg",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
) as Record<string, string>;

const fullImports = import.meta.glob(
  "../../imports/gallery/villagehacks-26/full/*.jpg",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
) as Record<string, string>;

const assetIdFromPath = (path: string) =>
  path.split("/").pop()?.replace(/\.[^.]+$/, "") ?? path;

const fullImagesById = Object.entries(fullImports).reduce<Record<string, string>>(
  (images, [path, src]) => {
    images[assetIdFromPath(path)] = src;
    return images;
  },
  {}
);

const villageHacksPhotos = Object.entries(thumbnailImports)
  .map<GalleryPhoto | null>(([path, thumb]) => {
    const id = assetIdFromPath(path);
    const full = fullImagesById[id];

    if (!full) return null;

    return { id, thumb, full };
  })
  .filter((photo): photo is GalleryPhoto => Boolean(photo))
  .sort((a, b) =>
    a.id.localeCompare(b.id, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  );

export default function GalleryPage() {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedPhoto =
    selectedIndex === null ? null : villageHacksPhotos[selectedIndex];

  const showPrevious = () => {
    setSelectedIndex((index) =>
      index === null
        ? null
        : (index - 1 + villageHacksPhotos.length) % villageHacksPhotos.length
    );
  };

  const showNext = () => {
    setSelectedIndex((index) =>
      index === null ? null : (index + 1) % villageHacksPhotos.length
    );
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <>
      <div className="relative pt-36 pb-20 md:pt-44 md:pb-28 px-6 md:px-10 lg:px-14 min-h-screen">
        <div className="mx-auto max-w-7xl">
          <motion.button
            onClick={() => navigate("/")}
            className="group inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm mb-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </motion.button>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <motion.div
                className="flex items-center gap-2 mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Camera className="h-5 w-5 text-[#ea5e28]" />
                <span className="text-xs uppercase tracking-widest text-[#ea5e28] font-bold">
                  Moments & Milestones
                </span>
              </motion.div>
              <motion.h1
                className="text-[clamp(44px,6vw,96px)] uppercase leading-[0.9]"
                style={headingFont}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              >
                <span className="text-[#ea5e28]" style={{ fontStyle: "italic" }}>
                  O
                </span>
                ur{" "}
                <span className="text-[#ea5e28]" style={{ fontStyle: "italic" }}>
                  G
                </span>
                allery
              </motion.h1>
            </div>
            <motion.p
              className="text-neutral-400 max-w-md text-sm md:text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Take a visual journey through our builds, workshops, late-night
              hackathons, and community socials that make up the Village spirit.
            </motion.p>
          </div>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="flex flex-col gap-4 border-b border-neutral-900 pb-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#ea5e28]/25 bg-[#ea5e28]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#ea5e28]">
                  <Zap className="h-3.5 w-3.5" />
                  VillageHacks '26
                </div>
                <h2
                  className="text-[clamp(32px,4vw,56px)] uppercase leading-none"
                  style={headingFont}
                >
                  <span className="text-[#ea5e28]" style={{ fontStyle: "italic" }}>
                    V
                  </span>
                  illageHacks '26
                </h2>
              </div>
              <span className="text-sm text-neutral-500">
                {villageHacksPhotos.length} photos
              </span>
            </div>

            {villageHacksPhotos.length === 0 ? (
              <div className="flex min-h-[320px] flex-col items-center justify-center rounded-2xl border border-neutral-900 bg-neutral-950/20 p-12 text-center backdrop-blur-md">
                <Camera className="mb-4 h-8 w-8 text-neutral-600" />
                <p className="max-w-sm text-sm leading-relaxed text-neutral-500">
                  VillageHacks '26 photos will appear here when optimized gallery
                  assets are available.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
                {villageHacksPhotos.map((photo, index) => (
                  <motion.button
                    key={photo.id}
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-neutral-900 bg-neutral-950/40 text-left transition-all duration-500 hover:border-[#ea5e28]/40 focus:outline-none focus:ring-2 focus:ring-[#ea5e28]/70 focus:ring-offset-2 focus:ring-offset-black"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.45,
                      delay: Math.min(index * 0.025, 0.35),
                      ease: "easeOut",
                    }}
                    aria-label={`Open VillageHacks '26 photo ${index + 1} of ${villageHacksPhotos.length}`}
                  >
                    <img
                      src={photo.thumb}
                      alt={`VillageHacks '26 photo ${index + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />
                    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between gap-3 p-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-white/90">
                        Photo {index + 1}
                      </span>
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white backdrop-blur-md transition-colors group-hover:border-[#ea5e28]/60 group-hover:text-[#ea5e28]">
                        <Maximize2 className="h-4 w-4" />
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            )}
          </motion.section>
        </div>
      </div>

      <AnimatePresence>
        {selectedPhoto && selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-4 py-6 backdrop-blur-xl md:px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setSelectedIndex(null)}
          >
            <div className="absolute left-4 right-4 top-4 z-10 flex items-center justify-between gap-4 md:left-8 md:right-8">
              <span className="rounded-full border border-white/10 bg-neutral-950/70 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-300 backdrop-blur-md">
                {selectedIndex + 1} / {villageHacksPhotos.length}
              </span>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setSelectedIndex(null);
                }}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-neutral-950/70 text-white backdrop-blur-md transition-colors hover:border-[#ea5e28]/50 hover:text-[#ea5e28] focus:outline-none focus:ring-2 focus:ring-[#ea5e28]/70"
                aria-label="Close photo"
                title="Close photo"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              className="absolute left-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-neutral-950/70 text-white backdrop-blur-md transition-colors hover:border-[#ea5e28]/50 hover:text-[#ea5e28] focus:outline-none focus:ring-2 focus:ring-[#ea5e28]/70 md:inline-flex"
              aria-label="Previous photo"
              title="Previous photo"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <motion.div
              key={selectedPhoto.id}
              className="max-h-[82vh] max-w-[min(1100px,100%)]"
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 8 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={selectedPhoto.full}
                alt={`VillageHacks '26 photo ${selectedIndex + 1}`}
                decoding="async"
                className="max-h-[82vh] max-w-full rounded-2xl border border-white/10 bg-neutral-950 object-contain shadow-2xl shadow-black/60"
              />
            </motion.div>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              className="absolute right-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-neutral-950/70 text-white backdrop-blur-md transition-colors hover:border-[#ea5e28]/50 hover:text-[#ea5e28] focus:outline-none focus:ring-2 focus:ring-[#ea5e28]/70 md:inline-flex"
              aria-label="Next photo"
              title="Next photo"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div
              className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3 md:hidden"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={showPrevious}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-neutral-950/70 text-white backdrop-blur-md transition-colors hover:text-[#ea5e28] focus:outline-none focus:ring-2 focus:ring-[#ea5e28]/70"
                aria-label="Previous photo"
                title="Previous photo"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={showNext}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-neutral-950/70 text-white backdrop-blur-md transition-colors hover:text-[#ea5e28] focus:outline-none focus:ring-2 focus:ring-[#ea5e28]/70"
                aria-label="Next photo"
                title="Next photo"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
