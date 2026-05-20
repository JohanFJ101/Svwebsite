import {
  ArrowUpRight,
  ArrowRight,
  Calendar,
  MapPin,
  Clock,
} from "lucide-react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import heroVillage from "../../imports/Finalized.png";

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

  const scrollToEvents = () => {
    document.getElementById("events")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* HERO */}
      <section className="relative grid min-h-[92vh] w-full grid-cols-1 items-center gap-4 overflow-hidden pb-32 pt-28 md:min-h-screen md:grid-cols-[50vw_minmax(0,1fr)] md:gap-0 md:pb-40 md:pt-24">
        {/* Hero image — fades in with a slow scale */}
        <motion.div
          className="relative -ml-[2vw] h-[80vw] min-h-[440px] w-[115vw] top-10 md:top-20 overflow-visible md:ml-0 md:h-[90vh] md:min-h-[700px] md:w-[55vw] lg:w-[57vw]"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <img
            src={heroVillage}
            alt="Village illustration"
            className="h-full w-full origin-left scale-[1.25] object-contain object-left md:scale-[1.48]"
            style={{
              mixBlendMode: "screen",
              filter:
                "brightness(0.9) contrast(1.1) saturate(1.1)",
            }}
          />
        </motion.div>

        {/* Right: text content — staggered children */}
        <div className="relative z-10 mx-auto flex w-full max-w-[760px] flex-col items-start gap-8 px-6 md:mx-0 md:gap-10 md:px-10 lg:px-14">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <button className="group inline-flex items-center justify-between gap-4 rounded-full border border-[#ea5e28]/40 bg-[#ea5e28]/10 px-6 py-3.5 text-white transition-colors hover:border-[#ea5e28] hover:bg-[#ea5e28]/20 md:px-7 md:py-4">
              <span className="text-base font-semibold tracking-wide">
                We are hiring, Apply today
              </span>
              <ArrowUpRight className="h-5 w-5 text-[#ea5e28] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 flex-shrink-0" />
            </button>
          </motion.div>

          <motion.h1
            className="max-w-[760px] text-[clamp(50px,8vw,118px)] leading-[0.88] uppercase"
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
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/about")}
                className="group inline-flex items-center gap-3 rounded-full bg-[#ea5e28] hover:bg-[#ff6a30] transition-colors px-7 py-3.5 text-sm text-black font-semibold"
              >
                Who are we?
              </button>
              <button
                onClick={scrollToEvents}
                className="group inline-flex items-center gap-3 rounded-full border border-neutral-700 hover:border-[#ea5e28] hover:text-[#ea5e28] transition-colors px-7 py-3.5 text-sm text-white"
              >
                Upcoming Events
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

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
                U
              </span>
              pcoming Events
            </h2>
            <p className="mt-4 text-neutral-400 max-w-xl">
              Connect, collaborate, and build with our community at our signature gatherings and workshops.
            </p>
          </div>
          <button className="group inline-flex items-center gap-2 text-[#ea5e28] hover:text-[#ff6a30] transition-colors text-sm font-semibold self-start md:self-auto">
            View full calendar
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* Event Card */}
        <motion.div
          className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/40 p-8 md:p-12 transition-all duration-500 hover:border-[#ea5e28]/45 hover:shadow-[0_0_50px_rgba(234,94,40,0.08)]"
          style={{
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          {/* Ambient orange glow behind the card */}
          <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#ea5e28]/5 blur-[80px] transition-all duration-500 group-hover:bg-[#ea5e28]/10" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 items-center">
            {/* Left Column: Details */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2.5">
                <span className="inline-flex items-center rounded-full bg-[#ea5e28]/10 border border-[#ea5e28]/25 px-3 py-1 text-xs font-semibold text-[#ea5e28] uppercase tracking-wider">
                  Flagship Event
                </span>
                <span className="inline-flex items-center rounded-full bg-neutral-800 px-3 py-1 text-xs font-medium text-neutral-300">
                  Networking &amp; Panels
                </span>
              </div>

              <h3
                className="text-3xl md:text-4xl font-semibold text-white tracking-tight uppercase"
                style={headingFont}
              >
                The Village Summit 2026
              </h3>

              <p className="text-neutral-400 leading-relaxed max-w-2xl">
                Our premier annual summit designed to bring together visionary student creators, builders, and builders-at-heart. Join us for a curated evening featuring interactive panels with young founders, creative showcases, and unparalleled networking opportunities.
              </p>

              {/* Event Meta Info */}
              <div className="flex flex-wrap gap-6 text-sm text-neutral-400 pt-2">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-[#ea5e28]" />
                  <span>June 15, 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#ea5e28]" />
                  <span>6:00 PM — 9:30 PM EST</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#ea5e28]" />
                  <span>Innovation Hub, Main Pavilion</span>
                </div>
              </div>
            </div>

            {/* Right Column: CTA Box */}
            <div className="border-t lg:border-t-0 lg:border-l border-neutral-800 lg:pl-10 pt-6 lg:pt-0 flex flex-col justify-center items-stretch h-full">
              <div className="text-center lg:text-left mb-6">
                <div className="text-xs text-neutral-500 uppercase tracking-wider">Status</div>
                <div className="text-lg font-semibold text-white mt-1">Registrations Open</div>
                <div className="text-xs text-[#ea5e28] mt-0.5 font-medium">Limited Seats Remaining</div>
              </div>
              <button className="group w-full flex items-center justify-center gap-2 rounded-xl bg-[#ea5e28] hover:bg-[#ff6a30] transition-colors py-4 text-sm font-semibold text-black">
                Secure Your Spot
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
