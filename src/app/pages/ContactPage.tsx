import { useState } from "react";
import { ArrowRight, Mail, Instagram, Copy, Check, Send } from "lucide-react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";

const headingFont = {
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontWeight: 700,
  letterSpacing: "0.02em",
};

export default function ContactPage() {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const email = "startupvillage.asu@gmail.com";
  const instagramUrl = "https://www.instagram.com/startupvillage.asu/";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 px-6 md:px-10 lg:px-14 min-h-screen flex flex-col justify-between">
        <div className="mx-auto max-w-5xl w-full">
          {/* Back button */}
          <motion.button
            onClick={() => navigate("/")}
            className="group inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm mb-10 cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </motion.button>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="mb-16"
          >
            <h1
              className="text-[clamp(48px,7vw,96px)] uppercase leading-[0.88] mb-6"
              style={headingFont}
            >
              <span className="text-[#ea5e28]" style={{ fontStyle: "italic" }}>
                G
              </span>
              et In{" "}
              <span className="text-[#ea5e28]" style={{ fontStyle: "italic" }}>
                T
              </span>
              ouch
            </h1>
            <p className="text-neutral-400 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
              Have questions, feedback, or want to collaborate with Startup Village? Reach out directly via email or Instagram.
            </p>
          </motion.div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Email Card */}
            <motion.div
              className="group relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950/50 p-8 md:p-10 backdrop-blur-md hover:border-[#ea5e28]/50 transition-all duration-300 flex flex-col justify-between"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            >
              {/* Background ambient glow */}
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#ea5e28]/10 blur-[70px] pointer-events-none group-hover:bg-[#ea5e28]/20 transition-all duration-500" />

              <div>
                <div className="h-14 w-14 rounded-2xl bg-[#ea5e28]/10 border border-[#ea5e28]/25 flex items-center justify-center text-[#ea5e28] mb-6">
                  <Mail className="h-7 w-7" />
                </div>
                <h3 className="text-2xl uppercase font-bold text-white mb-2" style={headingFont}>
                  Send Us an Email
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  Drop us a message in our inbox for inquiries, partnerships, or general questions.
                </p>
                <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 font-mono text-xs sm:text-sm text-neutral-200 break-all mb-6">
                  {email}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`mailto:${email}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#ea5e28] hover:bg-[#ff6a30] transition-colors py-3.5 px-5 text-sm font-semibold text-black cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  <span>Mail Us</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-700 bg-neutral-900/50 hover:bg-neutral-800 transition-colors py-3.5 px-5 text-sm font-medium text-white cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 text-neutral-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>

            {/* Instagram Card */}
            <motion.div
              className="group relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950/50 p-8 md:p-10 backdrop-blur-md hover:border-[#ea5e28]/50 transition-all duration-300 flex flex-col justify-between"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
            >
              {/* Background ambient glow */}
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-rose-500/10 blur-[70px] pointer-events-none group-hover:bg-[#ea5e28]/20 transition-all duration-500" />

              <div>
                <div className="h-14 w-14 rounded-2xl bg-[#ea5e28]/10 border border-[#ea5e28]/25 flex items-center justify-center text-[#ea5e28] mb-6">
                  <Instagram className="h-7 w-7" />
                </div>
                <h3 className="text-2xl uppercase font-bold text-white mb-2" style={headingFont}>
                  DM Us on Instagram
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  Follow us for live updates, event photos, announcements, and drop us a direct message anytime.
                </p>
                <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 font-mono text-xs sm:text-sm text-[#ea5e28] mb-6">
                  @startupvillage.asu
                </div>
              </div>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-[#ea5e28]/50 hover:bg-[#ea5e28]/15 hover:text-[#ea5e28] transition-colors py-3.5 px-5 text-sm font-semibold text-white cursor-pointer"
              >
                <Instagram className="h-4 w-4 text-[#ea5e28]" />
                <span>Visit Instagram Profile</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
