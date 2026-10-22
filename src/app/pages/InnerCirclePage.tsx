import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import innerCircleLogo from "../../imports/innercircle/Logo.png";

const headingFont = {
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontWeight: 700,
  letterSpacing: "0.02em",
};

const industries = [
  "Finance",
  "Healthcare",
  "Biotech",
  "AI",
  "Cybersecurity & Enterprise SaaS",
  "Aerospace",
  "Defense & Industrial Hardware",
  "Energy",
];

const prompts = [
  {
    title: "What’s changing?",
    description: "Which technologies, shifts, or forces are reshaping the industry?",
  },
  {
    title: "What’s missing?",
    description: "Where are the gaps, inefficiencies, or unsolved problems?",
  },
  {
    title: "What’s next?",
    description: "Which ideas, trends, or opportunities could define the next decade?",
  },
  {
    title: "What could you build?",
    description: "Turn the conversation into a startup, side project, research path, or career edge.",
  },
];

const reasons = [
  {
    title: "Sharper view",
    description: "Understand where major industries are headed next.",
  },
  {
    title: "Real opportunities",
    description: "Spot gaps, trends, and problems worth building around.",
  },
  {
    title: "Better connections",
    description: "Meet ambitious peers, founders, and researchers in one room.",
  },
  {
    title: "Next step energy",
    description: "Leave with ideas for a startup, project, research path, or career edge.",
  },
];

const agenda = [
  "Check-in & networking",
  "Opening remarks",
  "Closed circles",
  "Key takeaways",
  "Wrap-up & continue the conversation",
];

export default function InnerCirclePage() {
  return (
    <div className="relative pt-36 pb-24 md:pt-44 md:pb-32 px-6 md:px-10 lg:px-14 min-h-screen">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-white motion-safe:transition-colors text-sm mb-8 rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ea5e28]"
        >
          <ArrowRight aria-hidden="true" className="h-4 w-4 rotate-180" />
          Back to Home
        </Link>

        <header>
          <h1 className="sr-only">The Inner Circle</h1>
          <div className="relative flex flex-col items-center justify-center my-6">
            <div aria-hidden="true" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-48 w-48 sm:h-64 sm:w-64 rounded-full bg-[#ea5e28]/15 blur-[90px] pointer-events-none" />
            <img
              src={innerCircleLogo}
              alt="The Inner Circle logo"
              className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md object-contain drop-shadow-[0_10px_30px_rgba(234,94,40,0.25)]"
            />
          </div>

          <div className="text-center mt-4 mb-6">
            <p className="text-lg sm:text-xl font-medium tracking-wide text-neutral-300 italic">
              Where tomorrow’s market gaps get spotted.
            </p>
            <div aria-hidden="true" className="w-24 sm:w-40 h-0.5 bg-gradient-to-r from-transparent via-[#ea5e28] to-transparent mx-auto mt-4" />
            <p className="inline-block mt-6 rounded-full border border-[#ea5e28]/35 bg-[#ea5e28]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#ea5e28]">
              Upcoming event
            </p>
          </div>

          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl text-white mb-3" style={headingFont}>
              What is it?
            </h2>
            <p className="text-xs sm:text-sm uppercase tracking-widest text-[#ea5e28] leading-relaxed mb-4">
              Industry focused roundtable · Closed circles · Moderated discussions
            </p>
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
              The Inner Circle brings students, founders, researchers, and industry leaders together in closed circles to explore where major industries are heading — and what opportunities others might be missing.
            </p>
          </div>
        </header>

        <section aria-labelledby="industries-heading" className="mb-14">
          <div className="text-center mb-6">
            <h2 id="industries-heading" className="text-3xl sm:text-4xl text-white mb-2" style={headingFont}>
              <span className="italic text-[#ea5e28]">C</span>hoose your table
            </h2>
            <p className="text-xs sm:text-sm uppercase tracking-widest text-[#ea5e28] mb-3">
              8 industries · 8 conversations
            </p>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Pick the space you care about most and join a focused roundtable on where it’s headed next.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((industry) => (
              <li key={industry} className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6 backdrop-blur-md flex items-center justify-center text-center text-sm sm:text-base font-medium text-white">
                {industry}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="prompts-heading" className="mb-14">
          <div className="text-center mb-6">
            <h2 id="prompts-heading" className="text-3xl sm:text-4xl text-white mb-2" style={headingFont}>
              <span className="italic text-[#ea5e28]">W</span>hat’s on the table?
            </h2>
            <p className="text-xs sm:text-sm uppercase tracking-widest text-[#ea5e28]">
              The conversation starters
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prompts.map((prompt) => (
              <div key={prompt.title} className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6 sm:p-8 backdrop-blur-md">
                <h3 className="text-xl sm:text-2xl text-white mb-2" style={headingFont}>
                  {prompt.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{prompt.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-lg sm:text-xl text-neutral-300 italic mt-6">
            Big ideas start with the right questions.
          </p>
        </section>

        <section aria-labelledby="reasons-heading" className="mb-14">
          <div className="text-center mb-6">
            <p className="text-xs sm:text-sm uppercase tracking-widest text-[#ea5e28] mb-2">Take your seat</p>
            <h2 id="reasons-heading" className="text-3xl sm:text-4xl text-white" style={headingFont}>
              <span className="italic text-[#ea5e28]">W</span>hy you should be in the room
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason) => (
              <div key={reason.title} className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6 sm:p-8 backdrop-blur-md">
                <h3 className="text-xl sm:text-2xl text-white mb-2" style={headingFont}>{reason.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section aria-labelledby="details-heading" className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6 sm:p-8 backdrop-blur-md">
            <h2 id="details-heading" className="text-2xl sm:text-3xl text-white mb-6" style={headingFont}>
              <span className="italic text-[#ea5e28]">E</span>vent details
            </h2>
            <dl className="space-y-4 text-sm">
              {[
                { label: "Date", value: "Wednesday, October 28" },
                { label: "Time", value: "3:00 PM – 6:00 PM" },
                { label: "Venue", value: "GLCC B 208 Ballroom" },
                { label: "Location", value: "GLV, Tempe" },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-wrap justify-between gap-x-4 gap-y-1">
                  <dt className="text-neutral-400">{label}</dt>
                  <dd className="text-neutral-200">{value}</dd>
                </div>
              ))}
              <div className="flex flex-wrap justify-between gap-x-4 gap-y-1 border-t border-neutral-800 pt-4">
                <dt className="text-neutral-400">Registration details</dt>
                <dd className="text-neutral-200">Coming soon</dd>
              </div>
            </dl>
            <Link to="/contact" className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#ea5e28] hover:text-[#ff6a30] motion-safe:transition-colors rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ea5e28]">
              Contact us
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </section>

          <section aria-labelledby="agenda-heading" className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6 sm:p-8 backdrop-blur-md">
            <h2 id="agenda-heading" className="text-2xl sm:text-3xl text-white mb-6" style={headingFont}>
              <span className="italic text-[#ea5e28]">A</span>genda
            </h2>
            <ol className="list-decimal pl-5 space-y-4 text-sm text-neutral-300 marker:text-[#ea5e28]">
              {agenda.map((item) => <li key={item} className="pl-2 leading-relaxed">{item}</li>)}
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}
