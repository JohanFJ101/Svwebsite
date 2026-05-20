import {
  ArrowUpRight,
  ArrowRight,
  Users,
  Target,
  Lightbulb,
  Rocket,
} from "lucide-react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";

const headingFont = {
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontWeight: 700,
  letterSpacing: "0.02em",
};

const values = [
  {
    icon: Lightbulb,
    title: "INNOVATION",
    desc: "We push boundaries and challenge conventions, fostering an environment where bold ideas thrive and creative solutions emerge.",
  },
  {
    icon: Users,
    title: "COMMUNITY",
    desc: "We believe in the power of togetherness. Every member brings a unique perspective that strengthens our collective vision.",
  },
  {
    icon: Target,
    title: "IMPACT",
    desc: "We measure success not just in achievements but in the lasting difference we make in our community and beyond.",
  },
  {
    icon: Rocket,
    title: "GROWTH",
    desc: "We are committed to continuous learning and development, empowering every member to reach their fullest potential.",
  },
];

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2
              className="text-[clamp(32px,4vw,56px)] uppercase leading-none mb-8"
              style={headingFont}
            >
              <span className="text-[#ea5e28]" style={{ fontStyle: "italic" }}>
                O
              </span>
              ur Story
            </h2>
            <div className="space-y-6 text-neutral-400 leading-relaxed">
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
                What started as a small collective of passionate students has
                grown into a thriving community of creators, innovators, and
                change-makers. Today, we stand as a testament to what can be
                achieved when ambition meets collaboration.
              </p>
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-10 md:p-12 mt-4"
            style={{
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h3
              className="text-2xl uppercase mb-10"
              style={headingFont}
            >
              By the Numbers
            </h3>
            <div className="grid grid-cols-2 gap-8">
              {[
                { value: "100+", label: "Projects Completed" },
                { value: "500+", label: "Active Members" },
                { value: "32", label: "Industry Partners" },
                { value: "3", label: "Campus Chapters" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                >
                  <div
                    className="text-[clamp(36px,4vw,56px)] text-[#ea5e28] leading-none"
                    style={{ ...headingFont, fontStyle: "italic" }}
                  >
                    {s.value}
                  </div>
                  <div className="text-sm text-neutral-500 uppercase tracking-wider">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-14 pb-28">
        <motion.h2
          className="text-[clamp(32px,4vw,56px)] uppercase leading-none mb-12"
          style={headingFont}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="text-[#ea5e28]" style={{ fontStyle: "italic" }}>
            O
          </span>
          ur Values
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/40 p-8 transition-all duration-500 hover:border-[#ea5e28]/40 hover:shadow-[0_0_40px_rgba(234,94,40,0.06)]"
              style={{
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
            >
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#ea5e28]/5 blur-[50px] transition-all duration-500 group-hover:bg-[#ea5e28]/12" />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#ea5e28]/10 border border-[#ea5e28]/20 mb-6">
                  <v.icon className="h-5 w-5 text-[#ea5e28]" />
                </div>
                <h3
                  className="text-lg uppercase mb-3 tracking-wide"
                  style={headingFont}
                >
                  {v.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            </motion.div>
          ))}
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
