import { useState, useEffect } from "react";
import {
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Users,
  Zap,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { useContent } from "../content/ContentContext";

const headingFont = {
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontWeight: 700,
  letterSpacing: "0.02em",
};

export default function HackathonPage() {
  const navigate = useNavigate();
  const { content } = useContent();
  const { hackathon } = content;
  const { schedule, meta, badges } = hackathon;
  const [showArchiveAlert, setShowArchiveAlert] = useState(false);

  useEffect(() => {
    if (showArchiveAlert) {
      const timer = setTimeout(() => {
        setShowArchiveAlert(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showArchiveAlert]);

  return (
    <>
      {/* HERO */}
      <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 px-6 md:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <motion.button
            onClick={() => navigate("/")}
            className="group inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </motion.button>

          <motion.div
            className="flex flex-wrap gap-3 mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            {badges.map((badge, i) =>
              badge.highlight ? (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#ea5e28]/10 border border-[#ea5e28]/25 px-4 py-1.5 text-xs font-semibold text-[#ea5e28] uppercase tracking-wider"
                >
                  <Zap className="h-3.5 w-3.5" />
                  {badge.label}
                </span>
              ) : (
                <span
                  key={i}
                  className="inline-flex items-center rounded-full bg-neutral-800 px-4 py-1.5 text-xs font-medium text-neutral-300"
                >
                  {badge.label}
                </span>
              )
            )}
          </motion.div>

          <motion.h1
            className="text-[clamp(48px,7vw,108px)] uppercase leading-[0.88]"
            style={headingFont}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="text-[#ea5e28]" style={{ fontStyle: "italic" }}>
              {hackathon.titlePart1.charAt(0)}
            </span>
            {hackathon.titlePart1.slice(1)}{" "}
            <span className="text-[#ea5e28]" style={{ fontStyle: "italic" }}>
              {hackathon.titlePart2.charAt(0)}
            </span>
            {hackathon.titlePart2.slice(1)}
          </motion.h1>

          <motion.p
            className="mt-8 text-neutral-400 leading-relaxed max-w-2xl text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
          >
            {hackathon.description}
          </motion.p>

          {/* Event Meta */}
          {schedule.length > 0 && (
            <motion.div
              className="flex flex-wrap gap-6 text-sm text-neutral-400 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-[#ea5e28]" />
                <span>{meta.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#ea5e28]" />
                <span>{meta.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#ea5e28]" />
                <span>{meta.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-[#ea5e28]" />
                <span>{meta.participants}</span>
              </div>
            </motion.div>
          )}

          {/* Dedicated VillageHacks '26 Card Banner */}
          <motion.div
            className="mt-12 rounded-3xl border border-[#ea5e28]/40 bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 p-8 md:p-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#ea5e28]/30 bg-[#ea5e28]/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#ea5e28] mb-3">
                  <Sparkles className="h-3.5 w-3.5" />
                  Past Flagship Event
                </div>
                <h3 className="text-2xl md:text-3xl font-bold uppercase text-white" style={headingFont}>
                  VillageHacks '26
                </h3>
                <p className="text-neutral-400 text-sm mt-2 max-w-xl">
                  334+ builders attended. 24 hours at ASU Murdock Hall. $20K+ in prizes, paid roles, and direct VC pitch sessions.
                </p>
              </div>

              <button
                onClick={() => {
                  navigate("/villagehacks26");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ea5e28] hover:bg-[#ff6a30] transition-colors px-6 py-3 text-sm text-black font-semibold shrink-0 cursor-pointer"
              >
                <span>View VillageHacks '26 Page</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SCHEDULE IF PRESENT IN CMS */}
      {schedule.length > 0 && (
        <section className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-14 pb-32 pt-4">
          <div className="max-w-3xl">
            <motion.h2
              className="text-[clamp(32px,4vw,56px)] uppercase leading-none mb-12"
              style={headingFont}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span className="text-[#ea5e28]" style={{ fontStyle: "italic" }}>
                S
              </span>
              chedule
            </motion.h2>

            <div className="space-y-0">
              {schedule.map((item, i) => (
                <motion.div
                  key={item.id}
                  className="group relative grid grid-cols-[90px_1fr] gap-6 py-6 border-b border-neutral-800/60 last:border-b-0 hover:bg-neutral-950/30 transition-colors -mx-4 px-4 rounded-xl"
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
                >
                  <div
                    className="text-sm text-[#ea5e28] font-semibold pt-0.5 whitespace-nowrap"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.time}
                  </div>
                  <div>
                    <h4
                      className="text-lg uppercase tracking-wide mb-1"
                      style={headingFont}
                    >
                      {item.title}
                    </h4>
                    <p className="text-sm text-neutral-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="absolute left-[102px] top-8 w-2 h-2 rounded-full bg-neutral-700 group-hover:bg-[#ea5e28] transition-colors" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Archive Alert Popup */}
      <AnimatePresence>
        {showArchiveAlert && (
          <motion.div
            className="fixed bottom-8 right-8 z-[100] rounded-xl border border-[#ea5e28]/35 px-5 py-3.5 text-white flex items-center gap-3"
            style={{
              background: "rgba(10, 10, 12, 0.85)",
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.8), 0 0 15px rgba(234, 94, 40, 0.05)",
            }}
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <Zap className="h-4 w-4 text-[#ea5e28] animate-bounce" />
            <span className="text-sm font-semibold tracking-wide text-neutral-200">
              Previous hackathons archive is coming soon!
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
