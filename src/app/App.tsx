import {
  ArrowUpRight,
  ArrowRight,
  Code2,
  Megaphone,
  ShoppingBag,
  Palette,
} from "lucide-react";
import { BackgroundContours } from "./components/BackgroundContours";
import { Logo } from "./components/Logo";
import heroVillage from "../imports/Finalized.png";

const headingFont = {
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontWeight: 700,
  letterSpacing: "0.02em",
};
const bodyFont = { fontFamily: "'Inter', sans-serif" };

const navLinks = ["Home", "Projects", "Services", "About"];

const stats = [
  { value: "100+", label: "projects" },
  { value: "32", label: "partners" },
  { value: "3", label: "offices" },
];

const services = [
  {
    icon: Code2,
    title: "WEB DEVELOPMENT",
    desc: "Our expert team crafts bespoke websites tailored to your brand, combining stunning design with seamless functionality to elevate your online presence.",
  },
  {
    icon: Megaphone,
    title: "DIGITAL MARKETING STRATEGIES",
    desc: "Harness the power of targeted digital campaigns designed to maximize your reach and amplify your presence — data-driven approaches delivering measurable results every time.",
  },
  {
    icon: Palette,
    title: "CREATIVE DESIGN SERVICE",
    desc: "From eye-catching visuals to intuitive interfaces, our creatives craft designs that captivate your audience and bring your brand identity to life.",
  },
  {
    icon: ShoppingBag,
    title: "E-COMMERCE",
    desc: "Elevate your online retail experience with our comprehensive e-commerce solutions, from user-friendly storefronts to secure payment gateways — we deliver tailored solutions to drive your digital success.",
  },
];

export default function App() {
  return (
    <div
      className="min-h-screen w-full bg-black text-white overflow-x-hidden"
      style={bodyFont}
    >
      <div className="relative">
        <BackgroundContours />

        {/* NAV — glassmorphism, fixed */}
        <div
          className="fixed top-0 left-0 right-0 z-50 w-full px-6 md:px-10 lg:px-14 py-4"
          style={{
            background: "rgba(0,0,0,0.35)",
            backdropFilter: "blur(18px) saturate(160%)",
            WebkitBackdropFilter: "blur(18px) saturate(160%)",
            borderBottom: "1px solid rgba(234,94,40,0.12)",
          }}
        >
          <nav className="flex items-center mx-auto max-w-7xl w-full">
            <Logo className="h-7 w-auto" />
            <ul className="hidden md:flex items-center gap-10 text-sm text-neutral-300 flex-1 justify-center">
              {["Events", "Gallery", "Officers", "About"].map((l) => (
                <li key={l} className="hover:text-[#ea5e28] transition-colors cursor-pointer">
                  {l}
                </li>
              ))}
            </ul>
            <button className="group flex items-center gap-2 rounded-full bg-[#ea5e28] hover:bg-[#ff6a30] transition-colors px-5 py-2.5 text-sm text-black ml-auto">
              Contact us
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </nav>
        </div>

        {/* HERO — full-width split, image touches left edge */}
        <section className="relative w-full flex flex-col md:flex-row min-h-screen">
          {/* Left: image bleeding to viewport edge, starts from top */}
          <div className="relative w-full md:w-[52%] h-[55vw] md:h-auto flex-shrink-0 overflow-hidden flex items-start -mt-16">
            <img
              src={heroVillage}
              alt="Village illustration"
              className="w-full h-full object-cover object-left-top mx-[3px] my-[-8px]"
              style={{
                mixBlendMode: "screen",
                filter:
                  "brightness(0.9) contrast(1.1) saturate(1.1)",
              }}
            />
          </div>

          {/* Right: text content */}
          <div className="relative flex flex-col justify-start w-full md:w-[65%] md:-ml-[15%] px-8 md:pl-12 lg:pl-16 md:pr-14 lg:pr-20 pt-48 pb-8 z-10 gap-10">
            <div className="ml-16 px-[178px]">
              <button className="group inline-flex items-center justify-between gap-4 rounded-full border border-[#ea5e28]/40 hover:border-[#ea5e28] bg-[#ea5e28]/10 hover:bg-[#ea5e28]/20 transition-colors px-8 py-4 text-white w-full">
                <span className="text-base font-semibold tracking-wide">
                  We are hiring, Apply today
                </span>
                <ArrowUpRight className="h-5 w-5 text-[#ea5e28] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 flex-shrink-0" />
              </button>
            </div>

            <h1
              className="text-[clamp(42px,7vw,120px)] leading-[0.9] uppercase mx-[77px]"
              style={headingFont}
            >
              Every{" "}
              <span
                className="text-[#ea5e28]"
                style={{ fontStyle: "italic" }}
              >
                Empire
              </span>
              <br />
              Starts as
              <br />a Village
            </h1>

            <div className="ml-16 px-[178px]">
              <div className="flex flex-wrap gap-4">
                <button className="group inline-flex items-center gap-3 rounded-full bg-[#ea5e28] hover:bg-[#ff6a30] transition-colors px-7 py-3.5 text-sm text-black font-semibold">
                  Who are we?
                </button>
                <button className="group inline-flex items-center gap-3 rounded-full border border-neutral-700 hover:border-[#ea5e28] hover:text-[#ea5e28] transition-colors px-7 py-3.5 text-sm text-white">
                  Upcoming Events
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-14 pb-32">
          <div className="max-w-3xl">
            <h2
              className="text-[clamp(36px,5vw,72px)] uppercase leading-none"
              style={headingFont}
            >
              <span
                className="text-[#ea5e28]"
                style={{ fontStyle: "italic" }}
              >
                W
              </span>
              ho are we?
            </h2>
            <p className="mt-8 text-neutral-400 leading-relaxed">
              We are a student-run organisation built on
              ambition, creativity, and a belief that every
              great empire begins somewhere small. Founded by a
              group of driven individuals who wanted to bridge
              the gap between academic learning and real-world
              impact, we bring together students from all
              disciplines to collaborate, build, and grow
              together. From grassroots initiatives to
              large-scale events, we create opportunities for
              our members to develop leadership skills, expand
              their networks, and leave a lasting mark on their
              community. Whether you are here to lead, create,
              or simply find your people — you have found the
              right place.
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-14 pb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-neutral-900 pt-8 text-sm text-neutral-500">
            <Logo className="h-6 w-auto opacity-80" />
            <div className="flex items-center gap-8">
              <a
                className="hover:text-[#ea5e28] transition-colors"
                href="#"
              >
                Instagram
              </a>
              <a
                className="hover:text-[#ea5e28] transition-colors"
                href="#"
              >
                Twitter
              </a>
              <a
                className="hover:text-[#ea5e28] transition-colors"
                href="#"
              >
                LinkedIn
              </a>
            </div>
            <div>© 2026 — All rights reserved</div>
          </div>
        </footer>
      </div>
    </div>
  );
}