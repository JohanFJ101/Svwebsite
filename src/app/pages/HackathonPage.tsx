import {
  ArrowUpRight,
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Users,
  Trophy,
  Zap,
  ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";
import { motion } from "motion/react";

const headingFont = {
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontWeight: 700,
  letterSpacing: "0.02em",
};

const schedule = [
  { time: "9:00 AM", title: "Check-in & Breakfast", desc: "Registration, team formation, and networking over coffee." },
  { time: "10:00 AM", title: "Opening Ceremony", desc: "Welcome address, theme reveal, and judging criteria walkthrough." },
  { time: "10:30 AM", title: "Hacking Begins", desc: "Teams start building. Mentors available for guidance." },
  { time: "1:00 PM", title: "Lunch Break", desc: "Refuel and recharge — catered lunch provided for all participants." },
  { time: "3:00 PM", title: "Checkpoint 1", desc: "Quick progress demos. Mentors rotate across teams." },
  { time: "6:00 PM", title: "Dinner & Lightning Talks", desc: "Guest speakers share insights while teams take a break." },
  { time: "9:00 PM", title: "Final Submissions", desc: "Code freeze. All projects must be submitted by this time." },
  { time: "9:30 PM", title: "Demo & Judging", desc: "Teams present to judges. Audience voting opens." },
  { time: "10:30 PM", title: "Awards & Closing", desc: "Winners announced, prizes distributed, and closing remarks." },
];

const prizes = [
  { place: "1st", prize: "$2,000", color: "text-yellow-400" },
  { place: "2nd", prize: "$1,000", color: "text-neutral-300" },
  { place: "3rd", prize: "$500", color: "text-amber-600" },
];

export default function HackathonPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", team: "", experience: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* HERO */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 px-6 md:px-10 lg:px-14">
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

          <motion.div
            className="flex flex-wrap gap-3 mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ea5e28]/10 border border-[#ea5e28]/25 px-4 py-1.5 text-xs font-semibold text-[#ea5e28] uppercase tracking-wider">
              <Zap className="h-3.5 w-3.5" />
              12-Hour Hackathon
            </span>
            <span className="inline-flex items-center rounded-full bg-neutral-800 px-4 py-1.5 text-xs font-medium text-neutral-300">
              Open to All Students
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
            illage{" "}
            <span className="text-[#ea5e28]" style={{ fontStyle: "italic" }}>
              H
            </span>
            acks
          </motion.h1>

          <motion.p
            className="mt-8 text-neutral-400 leading-relaxed max-w-2xl text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
          >
            Our flagship hackathon bringing together the brightest student minds
            to build, innovate, and compete. 12 hours. One theme. Endless
            possibilities.
          </motion.p>

          {/* Event Meta */}
          <motion.div
            className="flex flex-wrap gap-6 text-sm text-neutral-400 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-[#ea5e28]" />
              <span>July 20, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#ea5e28]" />
              <span>9:00 AM — 10:30 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#ea5e28]" />
              <span>Innovation Hub, Main Campus</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-[#ea5e28]" />
              <span>150 Participants Max</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRIZES */}
      <section className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-14 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {prizes.map((p, i) => (
            <motion.div
              key={p.place}
              className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/40 p-8 text-center transition-all duration-500 hover:border-[#ea5e28]/40"
              style={{
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
            >
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#ea5e28]/5 blur-[50px] transition-all duration-500 group-hover:bg-[#ea5e28]/10" />
              <div className="relative z-10">
                <Trophy className={`h-8 w-8 mx-auto mb-4 ${p.color}`} />
                <div className="text-xs text-neutral-500 uppercase tracking-wider mb-2">
                  {p.place} Place
                </div>
                <div
                  className={`text-4xl ${p.color}`}
                  style={{ ...headingFont, fontStyle: "italic" }}
                >
                  {p.prize}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SCHEDULE & REGISTRATION */}
      <section className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-14 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16">

          {/* Schedule */}
          <div>
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
                  key={i}
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
                  {/* Timeline dot */}
                  <div className="absolute left-[102px] top-8 w-2 h-2 rounded-full bg-neutral-700 group-hover:bg-[#ea5e28] transition-colors" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Registration Form */}
          <div>
            <motion.h2
              className="text-[clamp(32px,4vw,56px)] uppercase leading-none mb-12"
              style={headingFont}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span className="text-[#ea5e28]" style={{ fontStyle: "italic" }}>
                R
              </span>
              egister
            </motion.h2>

            <motion.div
              className="sticky top-28 rounded-2xl border border-neutral-800 bg-neutral-950/40 p-8 md:p-10"
              style={{
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            >
              {submitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#ea5e28]/10 border border-[#ea5e28]/25 mb-6">
                    <Zap className="h-7 w-7 text-[#ea5e28]" />
                  </div>
                  <h3
                    className="text-2xl uppercase mb-3"
                    style={headingFont}
                  >
                    You're In!
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    We've received your registration. Check your email for
                    confirmation and next steps.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-neutral-800 bg-neutral-900/60 px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition-colors focus:border-[#ea5e28]/50 focus:ring-1 focus:ring-[#ea5e28]/20"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@university.edu"
                      className="w-full rounded-xl border border-neutral-800 bg-neutral-900/60 px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition-colors focus:border-[#ea5e28]/50 focus:ring-1 focus:ring-[#ea5e28]/20"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">
                      Team Name <span className="text-neutral-600">(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={formData.team}
                      onChange={(e) => setFormData({ ...formData, team: e.target.value })}
                      placeholder="Leave blank to join solo"
                      className="w-full rounded-xl border border-neutral-800 bg-neutral-900/60 px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition-colors focus:border-[#ea5e28]/50 focus:ring-1 focus:ring-[#ea5e28]/20"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">
                      Experience Level
                    </label>
                    <div className="relative">
                      <select
                        required
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="w-full appearance-none rounded-xl border border-neutral-800 bg-neutral-900/60 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#ea5e28]/50 focus:ring-1 focus:ring-[#ea5e28]/20"
                      >
                        <option value="" disabled>Select your level</option>
                        <option value="beginner">Beginner — First hackathon</option>
                        <option value="intermediate">Intermediate — A few under my belt</option>
                        <option value="advanced">Advanced — Seasoned hacker</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500 pointer-events-none" />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="group w-full flex items-center justify-center gap-2 rounded-xl bg-[#ea5e28] hover:bg-[#ff6a30] transition-colors py-4 text-sm font-semibold text-black mt-3"
                  >
                    Register Now
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </button>

                  <p className="text-xs text-neutral-600 text-center pt-1">
                    By registering you agree to our Code of Conduct.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
