import {
  ArrowRight,
  Linkedin,
  Instagram,
  Mail,
} from "lucide-react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";

const headingFont = {
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontWeight: 700,
  letterSpacing: "0.02em",
};

const officers = [
  {
    name: "Ananya Sharma",
    role: "President",
    initials: "AS",
    bio: "Visionary leader driving the org's mission forward with a passion for community-building and strategic growth.",
    gradient: "from-[#ea5e28]/20 to-amber-500/10",
  },
  {
    name: "Aarav Patel",
    role: "Vice President",
    initials: "AP",
    bio: "Operations-focused strategist ensuring every initiative runs seamlessly from concept to execution.",
    gradient: "from-[#ea5e28]/15 to-rose-500/10",
  },
  {
    name: "Diya Kapoor",
    role: "Creative Director",
    initials: "DK",
    bio: "The creative force behind our brand identity — from visual storytelling to design systems that inspire.",
    gradient: "from-purple-500/15 to-[#ea5e28]/10",
  },
  {
    name: "Rohan Mehta",
    role: "Events Lead",
    initials: "RM",
    bio: "Curates unforgettable experiences, turning ambitious ideas into flagship events that bring people together.",
    gradient: "from-blue-500/15 to-[#ea5e28]/10",
  },
  {
    name: "Priya Nair",
    role: "Marketing Head",
    initials: "PN",
    bio: "Data-driven marketer amplifying our reach through compelling campaigns and community engagement.",
    gradient: "from-emerald-500/15 to-[#ea5e28]/10",
  },
  {
    name: "Vikram Singh",
    role: "Tech Lead",
    initials: "VS",
    bio: "Full-stack builder architecting the digital backbone of everything we ship — from web to infra.",
    gradient: "from-cyan-500/15 to-[#ea5e28]/10",
  },
  {
    name: "Meera Joshi",
    role: "Treasurer",
    initials: "MJ",
    bio: "Financial steward keeping the books balanced and ensuring every rupee drives maximum impact.",
    gradient: "from-yellow-500/15 to-[#ea5e28]/10",
  },
  {
    name: "Arjun Reddy",
    role: "Secretary",
    initials: "AR",
    bio: "The organisational glue — managing communications, minutes, and keeping the team aligned and informed.",
    gradient: "from-pink-500/15 to-[#ea5e28]/10",
  },
];

export default function OfficersPage() {
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
            <span className="text-[#ea5e28]" style={{ fontStyle: "italic" }}>
              O
            </span>
            ur{" "}
            <span className="text-[#ea5e28]" style={{ fontStyle: "italic" }}>
              O
            </span>
            fficers
          </motion.h1>

          <motion.p
            className="mt-8 text-neutral-400 leading-relaxed max-w-2xl text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            The passionate individuals steering the ship — united by a shared
            vision to build something that matters.
          </motion.p>
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
                <span
                  className="text-6xl text-white/20 group-hover:text-white/35 transition-colors duration-500 select-none"
                  style={headingFont}
                >
                  {officer.initials}
                </span>
                {/* Ambient glow */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 h-16 w-32 rounded-full bg-[#ea5e28]/10 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-xs text-[#ea5e28] uppercase tracking-wider font-semibold mb-1">
                  {officer.role}
                </div>
                <h3
                  className="text-xl uppercase tracking-wide mb-3"
                  style={headingFont}
                >
                  {officer.name}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed mb-5">
                  {officer.bio}
                </p>

                {/* Social Icons */}
                <div className="flex items-center gap-3">
                  {[Linkedin, Instagram, Mail].map((Icon, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-neutral-800/60 text-neutral-500 hover:bg-[#ea5e28]/15 hover:text-[#ea5e28] transition-colors duration-300"
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
