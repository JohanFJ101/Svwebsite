import { ArrowUpRight, Zap, Calendar, Image, Users, Info, Menu, X, Radio } from "lucide-react";
import { useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router";
import { BackgroundContours } from "./components/BackgroundContours";
import { Logo } from "./components/Logo";
import { LoginModal } from "./components/LoginModal";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import HackathonPage from "./pages/HackathonPage";
import OfficersPage from "./pages/OfficersPage";
import GalleryPage from "./pages/GalleryPage";
import PodcastPage from "./pages/PodcastPage";
import VillageHacks25Page from "./pages/VillageHacks25Page";
import ContactPage from "./pages/ContactPage";
import AdminPage from "./pages/AdminPage";


const bodyFont = { fontFamily: "'Inter', sans-serif" };

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loginOpen, setLoginOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToEvents = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("events")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById("events")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (label: string) => {
    if (label === "Events") {
      scrollToEvents();
    } else if (label === "About") {
      navigate("/about");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (label === "Officers" || label === "Our Team") {
      navigate("/officers");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (label === "Gallery") {
      navigate("/gallery");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (label === "Podcast") {
      navigate("/podcast");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      className="min-h-screen w-full bg-black text-white overflow-x-hidden"
      style={bodyFont}
    >
      <div className="relative">
        <BackgroundContours />

        {/* NAV — glassmorphism, fixed */}
        <div
          className="fixed top-0 left-0 right-0 z-50 w-full px-4 py-4 md:px-10 lg:px-14"
          style={{
            background: "rgba(0,0,0,0.35)",
            backdropFilter: "blur(18px) saturate(160%)",
            WebkitBackdropFilter: "blur(18px) saturate(160%)",
            borderBottom: "1px solid rgba(234,94,40,0.12)",
          }}
        >
          <nav className="flex items-center w-full mx-auto">
            <div
              onClick={() => { navigate("/"); window.scrollTo({ top: 0, behavior: "smooth" }); setMobileMenuOpen(false); }}
              className="cursor-pointer shrink-0"
            >
              <Logo className="h-6 w-auto max-w-[100px] object-contain sm:h-7 sm:max-w-none" />
            </div>
            <ul className="hidden md:flex items-center gap-8 text-sm text-neutral-300 flex-1 justify-center">
              {[
                { label: "Events", icon: Calendar },
                { label: "Gallery", icon: Image },
                { label: "Podcast", icon: Radio },
                { label: "Our Team", icon: Users },
                { label: "About", icon: Info },
              ].map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className="group flex items-center gap-1.5 hover:text-[#ea5e28] transition-colors cursor-pointer"
                  onClick={() => handleNavClick(label)}
                >
                  <Icon className="h-4 w-4 text-neutral-500 group-hover:text-[#ea5e28] transition-colors" />
                  {label}
                </li>
              ))}
            </ul>

            {/* Desktop action buttons */}
            <div className="hidden md:flex items-center gap-3 ml-auto">
              <button
                onClick={() => { navigate("/hackathon"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="group flex items-center gap-2 rounded-full border-2 border-[#ea5e28] bg-[#ea5e28]/10 hover:bg-[#ea5e28] transition-colors px-5 py-2.5 text-sm text-[#ea5e28] hover:text-black font-semibold"
              >
                <Zap className="h-4 w-4" />
                VillageHacks
              </button>
              <button
                onClick={() => { navigate("/contact"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="group flex items-center gap-2 rounded-full bg-[#ea5e28] hover:bg-[#ff6a30] transition-colors px-5 py-2.5 text-sm text-black cursor-pointer font-semibold"
              >
                Contact us
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </div>

            <div className="md:hidden ml-auto flex min-w-0 items-center gap-1.5">
              <button
                onClick={() => { navigate("/hackathon"); window.scrollTo({ top: 0, behavior: "smooth" }); setMobileMenuOpen(false); }}
                className="inline-flex h-9 shrink-0 items-center justify-center rounded-full border-2 border-[#ea5e28] bg-[#ea5e28]/10 px-2.5 text-[11px] font-semibold text-[#ea5e28] transition-colors hover:bg-[#ea5e28]/20 sm:h-10 sm:px-4 sm:text-xs"
              >
                VillageHacks
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen((v) => !v)}
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#ea5e28]/30 bg-[#ea5e28]/10 text-[#ea5e28] transition-colors hover:bg-[#ea5e28]/20 sm:h-10 sm:w-10"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </nav>

          {/* Mobile menu panel */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 border-t border-[#ea5e28]/12 pt-4 flex flex-col gap-1">
              {[
                { label: "Events", icon: Calendar },
                { label: "Gallery", icon: Image },
                { label: "Podcast", icon: Radio },
                { label: "Our Team", icon: Users },
                { label: "About", icon: Info },
              ].map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  onClick={() => { handleNavClick(label); setMobileMenuOpen(false); }}
                  className="group flex items-center gap-3 rounded-xl px-3 py-3 text-base text-neutral-200 hover:bg-[#ea5e28]/10 hover:text-[#ea5e28] transition-colors text-left"
                >
                  <Icon className="h-5 w-5 text-neutral-500 group-hover:text-[#ea5e28] transition-colors" />
                  {label}
                </button>
              ))}

              <div className="flex flex-col gap-3 mt-3">
                <button
                  onClick={() => { navigate("/contact"); window.scrollTo({ top: 0, behavior: "smooth" }); setMobileMenuOpen(false); }}
                  className="flex items-center justify-center gap-2 rounded-full bg-[#ea5e28] transition-colors px-5 py-3 text-sm text-black font-semibold cursor-pointer"
                >
                  Contact us
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/hackathon" element={<HackathonPage />} />
          <Route path="/villagehacks25" element={<VillageHacks25Page />} />
          <Route path="/villagehacks26" element={<VillageHacks25Page />} />
          <Route path="/officers" element={<OfficersPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/podcast" element={<PodcastPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<AdminPage />} />

        </Routes>

        {/* FOOTER */}
        <footer className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-14 pb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-neutral-900 pt-8 text-sm text-neutral-500">
            <div
              onClick={() => { navigate("/"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="cursor-pointer"
            >
              <Logo className="h-6 w-auto opacity-80" />
            </div>
            <div className="flex items-center gap-8">
              <a
                className="hover:text-[#ea5e28] transition-colors"
                href="https://www.instagram.com/startupvillage.asu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                className="hover:text-[#ea5e28] transition-colors"
                href="https://x.com/StartupVillageW"
                target="_blank"
                rel="noopener noreferrer"
              >
                X
              </a>
              <a
                className="hover:text-[#ea5e28] transition-colors"
                href="https://www.linkedin.com/company/startup-village-asu/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
            <div>
              {/* The "©" on the Officers page is a hidden entry point to the admin login. */}
              <span
                onClick={() => {
                  if (location.pathname === "/officers") setLoginOpen(true);
                }}
                className={location.pathname === "/officers" ? "cursor-default select-none" : undefined}
                title={location.pathname === "/officers" ? "" : undefined}
              >
                ©
              </span>{" "}
              2026 — All rights reserved
            </div>
          </div>
        </footer>
      </div>

      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </div>
  );
}
