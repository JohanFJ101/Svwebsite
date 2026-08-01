import {
  ArrowRight,
  Linkedin,
} from "lucide-react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import yuuviPhoto from "../../imports/gallery/Officer Photos/YUVI.jpg";
import johanPhoto from "../../imports/gallery/Officer Photos/johanj.jpeg";

const headingFont = {
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontWeight: 700,
  letterSpacing: "0.02em",
};

interface Officer {
  name: string;
  role: string;
  initials: string;
  photo?: string;
  linkedin: string;
  gradient: string;
}

const officers: Officer[] = [
  {
    name: "Yuvraaj Jain",
    role: "President",
    initials: "YJ",
    photo: yuuviPhoto,
    linkedin: "https://www.linkedin.com/in/yuuvraaj26e/",
    gradient: "from-[#ea5e28]/20 to-amber-500/10",
  },
  {
    name: "Johan Jagalur",
    role: "VP of Tech",
    initials: "JJ",
    photo: johanPhoto,
    linkedin: "https://www.linkedin.com/in/johan-jagalur-8907822b9/",
    gradient: "from-[#ea5e28]/15 to-rose-500/10",
  },
  {
    name: "Jeet Rupani",
    role: "VP of Outreach",
    initials: "JR",
    linkedin: "https://www.linkedin.com/in/jeet-rupani-a16b92315/",
    gradient: "from-purple-500/15 to-[#ea5e28]/10",
  },
  {
    name: "Erim Esenoglu",
    role: "Treasurer",
    initials: "EE",
    linkedin: "https://www.linkedin.com/in/eesenogl/",
    gradient: "from-blue-500/15 to-[#ea5e28]/10",
  },
];

export default function OfficersPage() {
  const navigate = useNavigate();

  return (
    <>
      {/* PAGE HERO */}
      <section className="relative pt-36 pb-8 md:pt-44 md:pb-10 px-6 md:px-10 lg:px-14">
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

          <motion.h1
            className="text-[clamp(48px,7vw,108px)] uppercase leading-[0.88]"
            style={headingFont}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="text-[#ea5e28]" style={{ fontStyle: "italic" }}>
              O
            </span>
            ur{" "}
            <span className="text-[#ea5e28]" style={{ fontStyle: "italic" }}>
              T
            </span>
            eam
          </motion.h1>
        </div>
      </section>

      {/* OFFICERS GRID */}
      <section className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-14 pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {officers.map((officer, i) => (
            <motion.div
              key={officer.name}
              className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/40 transition-all duration-500 hover:border-[#ea5e28]/40 hover:shadow-[0_0_50px_rgba(234,94,40,0.06)]"
              style={{
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
            >
              {/* Avatar area */}
              <div className={`relative w-full aspect-[4/3] bg-gradient-to-br ${officer.gradient} flex items-center justify-center overflow-hidden`}>
                {"photo" in officer && officer.photo ? (
                  <img
                    src={officer.photo}
                    alt={officer.name}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                ) : (
                  <span
                    className="text-6xl text-white/20 group-hover:text-white/35 transition-colors duration-500 select-none"
                    style={headingFont}
                  >
                    {officer.initials}
                  </span>
                )}
                {/* Ambient glow */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 h-16 w-32 rounded-full bg-[#ea5e28]/10 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-[#ea5e28] uppercase tracking-wider font-semibold mb-1">
                    {officer.role}
                  </div>
                  <h3
                    className="text-xl uppercase tracking-wide mb-4"
                    style={headingFont}
                  >
                    {officer.name}
                  </h3>
                </div>

                {/* Single LinkedIn Icon Button */}
                <div className="flex items-center">
                  <a
                    href={officer.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${officer.name}'s LinkedIn Profile`}
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-900 border border-neutral-800 px-3.5 py-2 text-xs font-semibold text-neutral-300 hover:border-[#ea5e28]/40 hover:bg-[#ea5e28]/15 hover:text-[#ea5e28] transition-colors duration-300"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
