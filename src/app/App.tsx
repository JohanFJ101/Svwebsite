import { ArrowUpRight, ArrowRight, Code2, Megaphone, ShoppingBag, Palette } from "lucide-react";
import { BackgroundContours } from "./components/BackgroundContours";
import { Logo } from "./components/Logo";
import heroVillage from "../imports/Finalized.png";

const headingFont = { fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, letterSpacing: "0.02em" };
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
    <div className="min-h-screen w-full bg-black text-white overflow-x-hidden" style={bodyFont}>
      <div className="relative">
        <BackgroundContours />

        {/* NAV — glassmorphism, fixed */}
        <div className="fixed top-0 left-0 right-0 z-50 w-full px-6 md:px-10 lg:px-14 py-4"
          style={{
            background: "rgba(0,0,0,0.35)",
            backdropFilter: "blur(18px) saturate(160%)",
            WebkitBackdropFilter: "blur(18px) saturate(160%)",
            borderBottom: "1px solid rgba(234,94,40,0.12)",
          }}
        >
          <nav className="flex items-center justify-between mx-auto max-w-7xl">
            <Logo className="h-7 w-auto" />
            <ul className="hidden md:flex items-center gap-10 text-sm text-neutral-300">
              {["Events", "Gallery", "Officers", "About"].map((l) => (
                <li key={l} className="hover:text-[#ea5e28] transition-colors cursor-pointer">
                  {l}
                </li>
              ))}
            </ul>
            <button className="group flex items-center gap-2 rounded-full bg-[#ea5e28] hover:bg-[#ff6a30] transition-colors px-5 py-2.5 text-sm text-black">
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
              className="w-full h-full object-cover object-left-top mx-[3px] my-[-3px]"
              style={{
                mixBlendMode: "screen",
                filter: "brightness(0.9) contrast(1.1) saturate(1.1)",
              }}
            />
          </div>

          {/* Right: text content */}
          <div className="relative flex flex-col justify-start w-full md:w-[65%] md:-ml-[15%] px-8 md:pl-12 lg:pl-16 md:pr-14 lg:pr-20 pt-48 pb-8 z-10">
            <h1
              className="text-[clamp(42px,7vw,120px)] leading-[0.9] uppercase px-[0px] py-[88px] mx-[77px] my-[0px]"
              style={headingFont}
            >
              Every <span className="text-[#ea5e28]" style={{ fontStyle: "italic" }}>Empire</span>
              <br />
              Starts as
              <br />
              a Village
            </h1>

            

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="group inline-flex items-center gap-3 rounded-full bg-[#ea5e28] hover:bg-[#ff6a30] transition-colors py-3.5 text-sm text-black font-semibold px-[32px] py-[5px] mx-[139px] my-[-23px]">Who are we?</button>
              
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-14 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-[clamp(36px,5vw,72px)] uppercase leading-none" style={headingFont}>
                <span className="text-[#ea5e28]" style={{ fontStyle: "italic" }}>A</span>bout
              </h2>
              <p className="mt-8 max-w-md text-neutral-400 leading-relaxed">
                We are a forward-thinking web development company dedicated to transforming your
                digital vision into reality. With a focus on creativity and innovation, we
                specialise in creating bespoke websites that captivate audiences and drive results.
                Whether you're a startup or an established business, we're here to elevate your
                online presence and help you succeed in the digital world.
              </p>
              <button className="mt-8 inline-flex items-center gap-2 text-sm text-[#ea5e28] hover:text-white transition-colors">
                More
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 md:mt-8">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <div
                    className="text-[clamp(32px,4.5vw,56px)] leading-none text-[#ea5e28]"
                    style={headingFont}
                  >
                    {s.value}
                  </div>
                  <div className="mt-3 text-xs uppercase tracking-widest text-neutral-500">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-14 pb-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-[clamp(36px,5vw,72px)] uppercase leading-none" style={headingFont}>
                <span className="text-[#ea5e28]" style={{ fontStyle: "italic" }}>O</span>ur Services
              </h2>
              <p className="mt-6 text-neutral-400 max-w-lg leading-relaxed">
                Explore our array of services, from web development to e-commerce solutions,
                designed to elevate your online presence and drive success in the digital landscape.
              </p>
            </div>
            <button className="group inline-flex items-center gap-2 self-start rounded-full bg-white text-black hover:bg-[#ea5e28] hover:text-black transition-colors px-5 py-2.5 text-sm">
              Contact us
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group relative rounded-2xl border border-neutral-800 bg-neutral-950/60 backdrop-blur-sm p-8 hover:border-[#ea5e28]/60 transition-colors"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-full border border-neutral-700 group-hover:border-[#ea5e28] group-hover:text-[#ea5e28] transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-8 uppercase tracking-wide text-white" style={headingFont}>
                  {title}
                </h3>
                <p className="mt-3 text-sm text-neutral-400 leading-relaxed">{desc}</p>
                <ArrowUpRight className="absolute top-8 right-8 h-5 w-5 text-neutral-600 group-hover:text-[#ea5e28] transition-colors" />
              </div>
            ))}
          </div>
        </section>

        {/* SPECIAL OFFER */}
        <section className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-14 pb-32">
          <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-950 via-black to-neutral-950 px-8 py-16 md:py-24 text-center">
            <div className="pointer-events-none absolute inset-0 opacity-60">
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-[#ea5e28]/30 blur-3xl" />
            </div>
            <h2
              className="relative text-[clamp(36px,7vw,96px)] uppercase leading-[0.9]"
              style={headingFont}
            >
              Special Offer
              <br />
              For <span className="text-[#ea5e28]" style={{ fontStyle: "italic" }}>New</span> Clients
            </h2>
            <p className="relative mt-8 mx-auto max-w-xl text-neutral-400 leading-relaxed">
              We're excited to offer a special discount on our comprehensive e-commerce website
              packages. Elevate your online store with our expert solutions tailored to your needs,
              and let's embark on a journey to digital success together.
            </p>
            <button className="relative mt-10 group inline-flex items-center gap-2 rounded-full bg-[#ea5e28] hover:bg-[#ff6a30] transition-colors px-6 py-3 text-sm text-black">
              Get started
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-14 pb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-neutral-900 pt-8 text-sm text-neutral-500">
            <Logo className="h-6 w-auto opacity-80" />
            <div className="flex items-center gap-8">
              <a className="hover:text-[#ea5e28] transition-colors" href="#">Instagram</a>
              <a className="hover:text-[#ea5e28] transition-colors" href="#">Twitter</a>
              <a className="hover:text-[#ea5e28] transition-colors" href="#">LinkedIn</a>
            </div>
            <div>© 2026 — All rights reserved</div>
          </div>
        </footer>
      </div>
    </div>
  );
}
