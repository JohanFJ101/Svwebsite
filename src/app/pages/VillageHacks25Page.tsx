import { ArrowRight, MapPin, Users, Zap, ShieldCheck, Briefcase, Building2, Sparkles, Trophy } from "lucide-react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";

const headingFont = {
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontWeight: 700,
  letterSpacing: "0.02em",
};

const sponsorsList = [
  "LvlUp Ventures",
  "Clean AI Labs",
  "TEZTIN",
  "GameStock",
  "Silicon Oasis",
  "Grangou",
  "Uchenova",
  "AutoDB",
  "GitHired",
  "MatCap",
  "Hult Prize",
  "Notary Everyday",
  "CS4Good",
  "CareCaller",
  "LeanMCP",
  "FOMO Club",
  "Lovable",
  "Eleven Labs",
  "Tavily",
  "Student Entrepreneurship Organization @ ASU",
  "Billionaire Blueprint Club @ ASU",
];

export default function VillageHacks25Page() {
  const navigate = useNavigate();

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative pt-36 pb-16 md:pt-44 md:pb-20 px-6 md:px-10 lg:px-14">
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
            className="flex flex-wrap gap-3 mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ea5e28]/10 border border-[#ea5e28]/25 px-4 py-1.5 text-xs font-semibold text-[#ea5e28] uppercase tracking-wider">
              <Zap className="h-3.5 w-3.5" />
              VillageHacks '25
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900 border border-neutral-800 px-4 py-1.5 text-xs font-medium text-neutral-300">
              <MapPin className="h-3.5 w-3.5 text-[#ea5e28]" />
              ASU Murdock Hall, MUR 201
            </span>
          </motion.div>

          <motion.h1
            className="text-[clamp(48px,7vw,108px)] uppercase leading-[0.88]"
            style={headingFont}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="text-[#ea5e28]" style={{ fontStyle: "italic" }}>
              V
            </span>
            illage
            <span className="text-[#ea5e28]" style={{ fontStyle: "italic" }}>
              H
            </span>
            acks '25
          </motion.h1>

          <motion.p
            className="mt-6 text-neutral-300 text-lg md:text-2xl font-light leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            24 hours. Real problems. Real founders watching.
          </motion.p>

          <motion.p
            className="mt-3 text-neutral-400 text-base md:text-lg leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          >
            VillageHacks returns to ASU with 600+ builders and one rule: <strong className="text-white">ship something that works</strong>.
          </motion.p>
        </div>
      </section>

      {/* MAIN HIGHLIGHT: 334 ATTENDEES (HERO STAT BANNER) */}
      <section className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-14 pb-16">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-[#ea5e28]/40 bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 p-8 sm:p-12 md:p-16 text-center shadow-2xl shadow-[#ea5e28]/10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ea5e28]/10 blur-[100px] pointer-events-none rounded-full" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ea5e28]/30 bg-[#ea5e28]/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#ea5e28] mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              Main Highlight
            </div>
            
            <div className="text-[clamp(64px,10vw,120px)] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-[#ea5e28] font-mono leading-none tracking-tight">
              334
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold uppercase text-white tracking-wide mt-2" style={headingFont}>
              People Attended
            </h2>
            
            <p className="mt-4 text-neutral-400 text-base max-w-xl mx-auto leading-relaxed">
              Builders, designers, and operators gathered at ASU Murdock Hall to execute under pressure and deliver real working products.
            </p>
          </div>
        </motion.div>
      </section>

      {/* WHAT MAKES THIS DIFFERENT & WHAT WAS ON THE LINE */}
      <section className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-14 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* What Makes This Different */}
          <motion.div
            className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/40 p-8 sm:p-10 backdrop-blur-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#ea5e28] mb-3">
              <ShieldCheck className="h-4 w-4" />
              No Fluff
            </div>
            <h3 className="text-2xl sm:text-3xl uppercase text-white mb-4" style={headingFont}>
              What Makes This Different
            </h3>
            <p className="text-neutral-300 leading-relaxed text-sm sm:text-base mb-6">
              This isn’t a “build a demo and collect a t-shirt” hackathon. Teams solve real startup-backed problems and present directly to founders, operators, and investors.
            </p>
            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 text-neutral-300 text-sm leading-relaxed font-medium">
              The best builders walk away with direct interviews, mentorship, and funding conversations.
            </div>
          </motion.div>

          {/* What WAS On The Line */}
          <motion.div
            className="relative overflow-hidden rounded-2xl border border-[#ea5e28]/30 bg-neutral-950/60 p-8 sm:p-10 backdrop-blur-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#ea5e28] mb-3">
              <Briefcase className="h-4 w-4" />
              Powered by GameStock
            </div>
            <h3 className="text-2xl sm:text-3xl uppercase text-white mb-4" style={headingFont}>
              What Was On The Line
            </h3>
            <ul className="space-y-3 text-sm sm:text-base text-neutral-300 mb-6">
              <li className="flex items-start gap-2.5">
                <span className="h-2 w-2 rounded-full bg-[#ea5e28] mt-2 shrink-0" />
                <span><strong className="text-white">$20,000+</strong> in cash and credits.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-2 w-2 rounded-full bg-[#ea5e28] mt-2 shrink-0" />
                <span>Direct internship interviews paying <strong className="text-white">over $30/hr</strong>.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-2 w-2 rounded-full bg-[#ea5e28] mt-2 shrink-0" />
                <span>VC pitch sessions with checks up to <strong className="text-white">$500K</strong> for standout teams.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-2 w-2 rounded-full bg-[#ea5e28] mt-2 shrink-0" />
                <span>Paid roles. And for the most ambitious builders, a path to up to <strong className="text-white">$1M in funding</strong>.</span>
              </li>
            </ul>

            <div className="p-4 rounded-xl bg-[#ea5e28]/10 border border-[#ea5e28]/30 text-[#ea5e28] text-sm font-semibold italic">
              "This isn’t 'win a gift card.' This is walk in a hacker, walk out with a job, funding, or both."
            </div>
          </motion.div>
        </div>

        {/* VENUE & WHO SHOULD COME */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-950/40">
            <div className="flex items-center gap-3 text-[#ea5e28] text-xs font-semibold uppercase tracking-wider mb-3">
              <MapPin className="h-4 w-4" />
              Event Location
            </div>
            <h4 className="text-2xl font-bold text-white uppercase mb-2" style={headingFont}>
              ASU Murdock Hall, MUR 201
            </h4>
            <p className="text-sm text-neutral-400">
              Arizona State University Campus
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-950/40">
            <div className="flex items-center gap-3 text-[#ea5e28] text-xs font-semibold uppercase tracking-wider mb-3">
              <Users className="h-4 w-4" />
              Who Should Come
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed mb-4">
              Builders, designers, and operators who want to prove they can execute under pressure. All skill levels welcome. Come solo or with a team.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest bg-neutral-900 border border-neutral-800 px-4 py-2 rounded-lg">
              <Zap className="h-3.5 w-3.5 text-[#ea5e28]" />
              Build. Execute. Get noticed.
            </div>
          </div>
        </div>

        {/* SPONSORS & PARTNERS GRID */}
        <div className="rounded-3xl border border-neutral-800/80 bg-neutral-950/40 p-8 sm:p-12 backdrop-blur-md">
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#ea5e28] mb-2">
              <Building2 className="h-4 w-4" />
              Sponsors & Ecosystem
            </div>
            <h3 className="text-2xl sm:text-3xl uppercase text-white" style={headingFont}>
              Powered By
            </h3>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {sponsorsList.map((sponsor, idx) => (
              <span
                key={idx}
                className="inline-flex items-center rounded-xl bg-neutral-900/80 border border-neutral-800 px-4 py-2 text-xs font-medium text-neutral-300 hover:border-[#ea5e28]/40 hover:text-white transition-colors"
              >
                {sponsor}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
