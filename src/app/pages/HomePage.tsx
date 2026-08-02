import {
  ArrowUpRight,
  ArrowRight,
  Calendar,
  MapPin,
  Clock,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import heroVillage from "../../imports/Finalized.png";
import { StarDestroyer } from "../components/StarDestroyer";
import { useContent } from "../content/ContentContext";
import { PartnersCarousel } from "../components/PartnersCarousel";

const headingFont = {
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontWeight: 700,
  letterSpacing: "0.02em",
};

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export default function HomePage() {
  const navigate = useNavigate();
  const { content } = useContent();
  const { events, eventsHeading, eventsSubtitle } = content;

  const scrollToEvents = () => {
    document.getElementById("events")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* HERO */}
      <section className="relative grid min-h-[92vh] w-full grid-cols-1 items-center gap-4 overflow-hidden pb-32 pt-28 md:min-h-screen md:grid-cols-[50vw_minmax(0,1fr)] md:gap-0 md:pb-40 md:pt-24">
        {/* Hero image — on mobile it becomes a full-bleed background behind the
            text; on desktop it sits in its own grid column. */}
        <motion.div
          className="absolute inset-0 overflow-hidden md:overflow-visible md:relative md:inset-auto md:top-20 md:h-[90vh] md:min-h-[700px] md:w-[55vw] lg:w-[57vw]"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <img
            src={heroVillage}
            alt="Village illustration"
            className="h-full w-full origin-center scale-110 object-contain object-center md:origin-left md:scale-[1.48] md:object-left"
            style={{
              mixBlendMode: "screen",
              filter:
                "brightness(0.9) contrast(1.1) saturate(1.1)",
            }}
          />
        </motion.div>

        {/* Star Destroyer flyover */}
        <StarDestroyer />

        {/* Right: text content — staggered children. On mobile it sits in a
            glassmorphic card floating in front of the village image. */}
        <div className="relative z-10 mx-4 flex flex-col items-start gap-6 rounded-3xl border border-[#ea5e28]/20 bg-black/40 p-6 shadow-[0_8px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl backdrop-saturate-150 md:mx-0 md:w-full md:max-w-[760px] md:gap-10 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:px-10 md:shadow-none md:backdrop-blur-none md:backdrop-saturate-100 lg:px-14">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <button
              onClick={() => window.open("https://forms.gle/5JEZYTucaWQgXsiV8", "_blank", "noopener,noreferrer")}
              className="group inline-flex items-center justify-between gap-3 rounded-full border border-[#ea5e28]/40 bg-[#ea5e28]/10 px-4 py-2 text-white transition-colors hover:border-[#ea5e28] hover:bg-[#ea5e28]/20 md:gap-4 md:px-7 md:py-4 cursor-pointer"
            >
              <span className="text-xs font-semibold tracking-wide md:text-base">
                We are hiring, Apply today
              </span>
              <ArrowUpRight className="h-3.5 w-3.5 flex-shrink-0 text-[#ea5e28] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 md:h-5 md:w-5" />
            </button>

          </motion.div>

          <motion.h1
            className="max-w-[760px] text-[clamp(40px,6.5vw,90px)] leading-[0.88] uppercase"
            style={headingFont}
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            Every{" "}
            <span
              className="text-[#ea5e28]"
              style={{ fontStyle: "italic" }}
            >
              Empire
            </span>
            <br />
            Starts as
            <br />a Village
          </motion.h1>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.75, ease: "easeOut" }}
          >
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <button
                onClick={() => navigate("/about")}
                className="group inline-flex items-center gap-2 rounded-full bg-[#ea5e28] hover:bg-[#ff6a30] transition-colors px-4 py-2 text-xs font-semibold text-black md:gap-3 md:px-7 md:py-3.5 md:text-sm cursor-pointer"
              >
                Who are we?
              </button>
              <button
                onClick={() => {
                  navigate("/villagehacks26");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="group inline-flex items-center gap-2 rounded-full border border-[#ea5e28]/60 bg-[#ea5e28]/10 hover:bg-[#ea5e28] hover:text-black transition-colors px-4 py-2 text-xs font-semibold text-[#ea5e28] md:gap-3 md:px-7 md:py-3.5 md:text-sm cursor-pointer shadow-lg shadow-[#ea5e28]/10"
              >
                <Zap className="h-3.5 w-3.5" />
                VillageHacks '26
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1 md:h-4 md:w-4" />
              </button>
              <button
                onClick={scrollToEvents}
                className="group inline-flex items-center gap-2 rounded-full border border-neutral-700 hover:border-[#ea5e28] hover:text-[#ea5e28] transition-colors px-4 py-2 text-xs text-white md:gap-3 md:px-7 md:py-3.5 md:text-sm cursor-pointer"
              >
                Upcoming Events
              </button>
            </div>

          </motion.div>
        </div>
      </section>

      {/* INDUSTRY PARTNERS CAROUSEL */}
      <PartnersCarousel />

      {/* UPCOMING EVENTS */}
      <section id="events" className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-14 pb-32 pt-16 md:pt-24">
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div>
            <h2
              className="text-[clamp(36px,5vw,72px)] uppercase leading-none"
              style={headingFont}
            >
              <span
                className="text-[#ea5e28]"
                style={{ fontStyle: "italic" }}
              >
                {eventsHeading.charAt(0)}
              </span>
              {eventsHeading.slice(1)}
            </h2>
            <p className="mt-4 text-neutral-400 max-w-xl">
              {eventsSubtitle}
            </p>
          </div>
          <button className="group inline-flex items-center gap-2 text-[#ea5e28] hover:text-[#ff6a30] transition-colors text-sm font-semibold self-start md:self-auto">
            View full calendar
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* Event Cards */}
        {events.length === 0 ? (
          <motion.div
            className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/40 p-10 md:p-16 text-center transition-all duration-500 hover:border-[#ea5e28]/35 hover:shadow-[0_0_50px_rgba(234,94,40,0.06)]"
            style={{
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Ambient orange glow behind the card */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-56 w-56 rounded-full bg-[#ea5e28]/5 blur-[100px]" />

            <div className="relative z-10 max-w-lg mx-auto flex flex-col items-center space-y-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-900 border border-neutral-800 text-[#ea5e28]">
                <Calendar className="h-6 w-6 animate-pulse" />
              </div>
              
              <div className="space-y-2">
                <h3
                  className="text-3xl md:text-4xl font-semibold text-white tracking-tight uppercase"
                  style={headingFont}
                >
                  Stay Tuned
                </h3>
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="space-y-6">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/40 p-8 md:p-12 transition-all duration-500 hover:border-[#ea5e28]/45 hover:shadow-[0_0_50px_rgba(234,94,40,0.08)]"
                style={{
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: 0.15 + index * 0.1, ease: "easeOut" }}
              >
                {/* Ambient orange glow behind the card */}
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#ea5e28]/5 blur-[80px] transition-all duration-500 group-hover:bg-[#ea5e28]/10" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 items-center">
                  {/* Left Column: Details */}
                  <div className="space-y-6">
                    {event.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2.5">
                        {event.tags.map((tag, ti) =>
                          tag.highlight ? (
                            <span
                              key={ti}
                              className="inline-flex items-center rounded-full bg-[#ea5e28]/10 border border-[#ea5e28]/25 px-3 py-1 text-xs font-semibold text-[#ea5e28] uppercase tracking-wider"
                            >
                              {tag.label}
                            </span>
                          ) : (
                            <span
                              key={ti}
                              className="inline-flex items-center rounded-full bg-neutral-800 px-3 py-1 text-xs font-medium text-neutral-300"
                            >
                              {tag.label}
                            </span>
                          )
                        )}
                      </div>
                    )}

                    <h3
                      className="text-3xl md:text-4xl font-semibold text-white tracking-tight uppercase"
                      style={headingFont}
                    >
                      {event.title}
                    </h3>

                    <p className="text-neutral-400 leading-relaxed max-w-2xl">
                      {event.description}
                    </p>

                    {/* Event Meta Info */}
                    <div className="flex flex-wrap gap-6 text-sm text-neutral-400 pt-2">
                      {event.date && (
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-[#ea5e28]" />
                          <span>{event.date}</span>
                        </div>
                      )}
                      {event.time && (
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-[#ea5e28]" />
                          <span>{event.time}</span>
                        </div>
                      )}
                      {event.location && (
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-[#ea5e28]" />
                          <span>{event.location}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Column: CTA Box */}
                  <div className="border-t lg:border-t-0 lg:border-l border-neutral-800 lg:pl-10 pt-6 lg:pt-0 flex flex-col justify-center items-stretch h-full">
                    <div className="text-center lg:text-left mb-6">
                      <div className="text-xs text-neutral-500 uppercase tracking-wider">Status</div>
                      <div className="text-lg font-semibold text-white mt-1">{event.statusLabel}</div>
                      {event.statusNote && (
                        <div className="text-xs text-[#ea5e28] mt-0.5 font-medium">{event.statusNote}</div>
                      )}
                    </div>
                    <button
                      onClick={() => {
                        if (event.ctaUrl) window.open(event.ctaUrl, "_blank", "noopener,noreferrer");
                      }}
                      className="group w-full flex items-center justify-center gap-2 rounded-xl bg-[#ea5e28] hover:bg-[#ff6a30] transition-colors py-4 text-sm font-semibold text-black"
                    >
                      {event.ctaLabel}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

