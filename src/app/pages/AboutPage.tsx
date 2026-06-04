import {
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";

const headingFont = {
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontWeight: 700,
  letterSpacing: "0.02em",
};

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <>
      {/* PAGE HERO */}
      <section className="relative pt-36 pb-12 md:pt-44 md:pb-16 px-6 md:px-10 lg:px-14">
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

          <motion.h1
            className="text-[clamp(48px,7vw,108px)] uppercase leading-[0.88]"
            style={headingFont}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span
              className="text-[#ea5e28]"
              style={{ fontStyle: "italic" }}
            >
              W
            </span>
            ho are{" "}
            <span
              className="text-[#ea5e28]"
              style={{ fontStyle: "italic" }}
            >
              W
            </span>
            e?
          </motion.h1>

          <motion.p
            className="mt-8 text-neutral-400 leading-relaxed max-w-2xl text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            We are a student-run organisation built on ambition, creativity, and
            a belief that every great empire begins somewhere small.
          </motion.p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-14 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Highlight */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2
              className="text-[clamp(32px,4vw,56px)] uppercase leading-none"
              style={headingFont}
            >
              <span className="text-[#ea5e28]" style={{ fontStyle: "italic" }}>
                O
              </span>
              ur Story
            </h2>
            <div className="border-l-2 border-[#ea5e28] pl-6 py-2">
              <p className="text-xl text-white font-medium italic leading-relaxed font-serif">
                "What started as a small collective of passionate students has
                grown into a thriving community of creators, innovators, and
                change-makers."
              </p>
            </div>
          </motion.div>

          {/* Right Column: Detailed Narrative */}
          <motion.div
            className="lg:col-span-7 space-y-6 text-neutral-400 leading-relaxed text-base md:text-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          >
            <p>
              Founded by a group of driven individuals who wanted to bridge the
              gap between academic learning and real-world impact, we bring
              together students from all disciplines to collaborate, build, and
              grow together.
            </p>
            <p>
              From grassroots initiatives to large-scale events, we create
              opportunities for our members to develop leadership skills, expand
              their networks, and leave a lasting mark on their community.
              Whether you are here to lead, create, or simply find your
              people — you have found the right place.
            </p>
            <p>
              Today, we stand as a testament to what can be achieved when ambition
              meets collaboration, continually expanding our horizons to build the
              future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* JOIN US CTA */}
      <motion.section
        className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-14 pb-32"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div
          className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/40 p-12 md:p-16 text-center"
          style={{
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-[#ea5e28]/8 blur-[100px]" />
          <div className="relative z-10">
            <h2
              className="text-[clamp(32px,5vw,64px)] uppercase leading-[0.9] mb-6"
              style={headingFont}
            >
              Ready to join the{" "}
              <span className="text-[#ea5e28]" style={{ fontStyle: "italic" }}>
                Village
              </span>
              ?
            </h2>
            <p className="text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed">
              Whether you are a designer, developer, marketer, or simply someone
              with a fire to build something meaningful — there is a place for you
              here.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="group inline-flex items-center gap-2 rounded-full bg-[#ea5e28] hover:bg-[#ff6a30] transition-colors px-8 py-4 text-sm text-black font-semibold">
                Apply Now
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
              <button
                onClick={() => navigate("/")}
                className="group inline-flex items-center gap-2 rounded-full border border-neutral-700 hover:border-[#ea5e28] hover:text-[#ea5e28] transition-colors px-8 py-4 text-sm text-white"
              >
                Back to Home
                <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
