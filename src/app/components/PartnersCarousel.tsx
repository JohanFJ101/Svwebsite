import { Handshake } from "lucide-react";
import { motion } from "motion/react";

const headingFont = {
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontWeight: 700,
  letterSpacing: "0.02em",
};

interface PartnerLogo {
  id: string;
  name: string;
  src: string;
}

// Dynamically import all partner logos from the gallery folder
const partnerLogoImports = import.meta.glob(
  "../../imports/gallery/Our Partners Carosel/*.png",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
) as Record<string, string>;

// Clean up filename to get a friendly partner name
const formatPartnerName = (path: string) => {
  const filename = path.split("/").pop()?.replace(/\.[^.]+$/, "") ?? "";
  return filename
    .replace(/ - Copy$/i, "")
    .replace(/-logo$/i, "")
    .replace(/_logo$/i, "")
    .replace(/grangou-logo-red-bg-[a-zA-Z0-9]+/i, "Grangou")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .trim();
};

const partnerLogos: PartnerLogo[] = Object.entries(partnerLogoImports).map(
  ([path, src]) => {
    const id = path.split("/").pop() ?? path;
    const name = formatPartnerName(path);
    return { id, name, src };
  }
);

export function PartnersCarousel() {
  // Duplicate array 3 times to ensure a completely seamless continuous infinite loop
  const carouselItems = [...partnerLogos, ...partnerLogos, ...partnerLogos];

  return (
    <section className="relative w-full py-5 md:py-8 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14 mb-3">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Handshake className="h-4 w-4 text-[#ea5e28]" />
          <h3
            className="text-base md:text-lg uppercase tracking-wider font-semibold text-neutral-200"
            style={headingFont}
          >
            <span className="text-[#ea5e28]" style={{ fontStyle: "italic" }}>
              O
            </span>
            ur{" "}
            <span className="text-[#ea5e28]" style={{ fontStyle: "italic" }}>
              P
            </span>
            artners
          </h3>
        </motion.div>
      </div>

      {/* Infinite Horizontal Moving Carousel with Masking (no end border/overlay boxes) */}
      <div
        className="relative w-full overflow-hidden py-1"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        }}
      >
        <div className="flex w-max animate-marquee-slow hover:[animation-play-state:paused] gap-3 sm:gap-4 px-2">
          {carouselItems.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="group relative flex h-12 sm:h-14 w-28 sm:w-36 shrink-0 items-center justify-center rounded-xl bg-neutral-950/30 p-2 sm:p-3 transition-all duration-300 hover:bg-neutral-900/50 hover:scale-105"
            >
              <img
                src={partner.src}
                alt={partner.name}
                loading="lazy"
                decoding="async"
                className="max-h-7 sm:max-h-8 max-w-full object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
            </div>

          ))}
        </div>
      </div>
    </section>
  );
}
