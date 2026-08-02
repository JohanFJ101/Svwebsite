import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import stfuLogo from "../../imports/gallery/Podcast/STFULOGO.png";

const headingFont = {
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontWeight: 700,
  letterSpacing: "0.02em",
};

export default function PodcastPage() {
  const navigate = useNavigate();
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleWaitlistClick = (type: "Speakers" | "Viewers") => {
    const url = type === "Speakers"
      ? "https://forms.gle/KWwUgHMEYqDdc4c68"
      : "https://forms.gle/L7E5oTHkFiptkaV77";
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* PAGE CONTAINER */}
      <div className="relative pt-36 pb-24 md:pt-44 md:pb-32 px-6 md:px-10 lg:px-14 min-h-screen">
        <div className="mx-auto max-w-6xl">
          {/* Back button */}
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

          {/* 1. BIG CENTERED PODCAST LOGO */}
          <motion.div
            className="relative flex flex-col items-center justify-center my-6"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Ambient orange glow behind logo */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-48 w-48 sm:h-64 sm:w-64 rounded-full bg-[#ea5e28]/15 blur-[90px] pointer-events-none" />

            <img
              src={stfuLogo}
              alt="STFU Podcast Logo"
              className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md object-contain drop-shadow-[0_10px_30px_rgba(234,94,40,0.25)]"
            />
          </motion.div>

          {/* 2. TAGLINE & LINE BELOW LOGO */}
          <motion.div
            className="text-center mt-4 mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <p className="text-lg sm:text-xl font-medium tracking-wide text-neutral-300 italic">
              Startups, Thinkers, Founders — Unfiltered
            </p>
            {/* Line below tagline */}
            <div className="w-24 sm:w-40 h-0.5 bg-gradient-to-r from-transparent via-[#ea5e28] to-transparent mx-auto mt-4" />
          </motion.div>

          {/* 3. 1 OR 2 LINE INTRO SENTENCE BELOW THE LINE */}
          <motion.p
            className="text-center max-w-2xl mx-auto text-neutral-300 text-base sm:text-lg leading-relaxed mb-14"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
          >
            On <strong className="text-[#ea5e28]">STFU</strong> by <strong className="text-white">Startup Village</strong>, founders drop the corporate soundbites for candid, conversational deep-dives into the real work, decisions, and lessons behind building a company.
          </motion.p>


          {/* 4. SIDE BY SIDE WAITLIST CTA BUTTONS: SPEAKERS (LEFT) & VIEWERS (RIGHT) */}

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Speakers Waitlist (Left Side) */}
            <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6 sm:p-8 flex flex-col justify-between backdrop-blur-md group hover:border-[#ea5e28]/50 transition-all duration-300">
              <div className="mb-6">
                <h3
                  className="text-xl sm:text-2xl uppercase text-white mb-2"
                  style={headingFont}
                >
                  Join as a Speaker
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  Are you a founder, innovator, or thinker with a story to share? Be a guest on our next episode.
                </p>
              </div>
              <button
                onClick={() => handleWaitlistClick("Speakers")}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#ea5e28] hover:bg-[#ff6a30] transition-colors py-3.5 px-6 text-sm font-semibold text-black cursor-pointer shadow-lg shadow-[#ea5e28]/10"
              >
                <span>Click here to join the waitlist</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Viewers Waitlist (Right Side) */}
            <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6 sm:p-8 flex flex-col justify-between backdrop-blur-md group hover:border-[#ea5e28]/50 transition-all duration-300">
              <div className="mb-6">
                <h3
                  className="text-xl sm:text-2xl uppercase text-white mb-2"
                  style={headingFont}
                >
                  Join as a Viewer
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  Want front-row seats and early access to episodes, behind-the-scenes clips, and Q&A sessions?
                </p>
              </div>
              <button
                onClick={() => handleWaitlistClick("Viewers")}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-700 bg-neutral-900/60 hover:bg-neutral-800 hover:border-neutral-500 transition-colors py-3.5 px-6 text-sm font-semibold text-white cursor-pointer"
              >
                <span>Click here to join the waitlist</span>
                <ArrowRight className="h-4 w-4 text-[#ea5e28]" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* TOAST NOTIFICATION FOR WAITLIST PLACEHOLDER */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            className="fixed bottom-8 right-8 z-[100] rounded-xl border border-[#ea5e28]/35 px-5 py-3.5 text-white flex items-center gap-3"
            style={{
              background: "rgba(10, 10, 12, 0.9)",
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.8), 0 0 15px rgba(234, 94, 40, 0.1)",
            }}
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <Sparkles className="h-4 w-4 text-[#ea5e28] animate-bounce" />
            <span className="text-sm font-semibold tracking-wide text-neutral-200">
              {toastMessage}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
