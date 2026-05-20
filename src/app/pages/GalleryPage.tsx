import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Camera, Calendar, MapPin, Tag, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

const headingFont = {
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontWeight: 700,
  letterSpacing: "0.02em",
};

interface GalleryItem {
  id: number;
  title: string;
  category: "hackathons" | "workshops" | "socials";
  date: string;
  location: string;
  description: string;
  gradient: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "VillageHacks 2025",
    category: "hackathons",
    date: "July 2025",
    location: "Innovation Hub",
    description: "Brightest student minds building projects in a high-energy 12-hour sprint.",
    gradient: "from-[#ea5e28]/20 via-[#ea5e28]/5 to-black",
  },
  {
    id: 2,
    title: "Intro to Modern Web Dev",
    category: "workshops",
    date: "October 2025",
    location: "Engineering Hall Room 302",
    description: "Hands-on coding workshop covering React, Vite, and modern styling concepts.",
    gradient: "from-amber-600/20 via-amber-600/5 to-black",
  },
  {
    id: 3,
    title: "Spring Networking Mixer",
    category: "socials",
    date: "April 2025",
    location: "Campus Courtyard",
    description: "Connecting students, local developers, and startups over dinner and drinks.",
    gradient: "from-neutral-700/30 via-neutral-800/10 to-black",
  },
  {
    id: 4,
    title: "Founder's Fireside Chat",
    category: "workshops",
    date: "November 2025",
    location: "Startup Incubation Center",
    description: "Local startup founders sharing lessons on raising seed capital and scaling.",
    gradient: "from-[#ea5e28]/20 via-[#ea5e28]/5 to-black",
  },
  {
    id: 5,
    title: "Game Night & Pizza",
    category: "socials",
    date: "December 2025",
    location: "Student Union Lounge",
    description: "Taking a break before finals with multiplayer console games and free pizza.",
    gradient: "from-amber-600/20 via-amber-600/5 to-black",
  },
  {
    id: 6,
    title: "AI & Neural Networks Panel",
    category: "workshops",
    date: "September 2025",
    location: "Science Auditorium",
    description: "Exploring the real-world applications and future implications of generative AI.",
    gradient: "from-neutral-700/30 via-neutral-800/10 to-black",
  },
  {
    id: 7,
    title: "Hack the Winter 2024",
    category: "hackathons",
    date: "December 2024",
    location: "Innovation Hub",
    description: "The winter edition of our flagship sprint focusing on social impact products.",
    gradient: "from-[#ea5e28]/20 via-[#ea5e28]/5 to-black",
  },
  {
    id: 8,
    title: "Startup Demo Day",
    category: "hackathons",
    date: "February 2025",
    location: "Venture Hall",
    description: "Student teams pitching their Minimum Viable Products to local angel investors.",
    gradient: "from-amber-600/20 via-amber-600/5 to-black",
  },
];

const categories = [
  { id: "all", label: "All Events" },
  { id: "hackathons", label: "Hackathons" },
  { id: "workshops", label: "Workshops" },
  { id: "socials", label: "Socials" },
];

export default function GalleryPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredItems = activeTab === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <>
      <div className="relative pt-36 pb-20 md:pt-44 md:pb-28 px-6 md:px-10 lg:px-14 min-h-screen">
        <div className="mx-auto max-w-7xl">
          {/* Back Button */}
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

          {/* Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <motion.div
                className="flex items-center gap-2 mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Camera className="h-5 w-5 text-[#ea5e28]" />
                <span className="text-xs uppercase tracking-widest text-[#ea5e28] font-bold">
                  Moments & Milestones
                </span>
              </motion.div>
              <motion.h1
                className="text-[clamp(44px,6vw,96px)] uppercase leading-[0.9]"
                style={headingFont}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              >
                <span className="text-[#ea5e28]" style={{ fontStyle: "italic" }}>
                  O
                </span>
                ur{" "}
                <span className="text-[#ea5e28]" style={{ fontStyle: "italic" }}>
                  G
                </span>
                allery
              </motion.h1>
            </div>
            <motion.p
              className="text-neutral-400 max-w-md text-sm md:text-base leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Take a visual journey through our builds, workshops, late-night hackathons, and community socials that make up the Village spirit.
            </motion.p>
          </div>

          {/* Category Tabs */}
          <motion.div 
            className="flex flex-wrap gap-2.5 mb-12 border-b border-neutral-900 pb-6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === cat.id
                    ? "text-black z-10"
                    : "text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700 bg-neutral-950/20"
                }`}
              >
                {activeTab === cat.id && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-[#ea5e28] rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl border border-neutral-900 bg-neutral-950/40 p-6 flex flex-col justify-between min-h-[320px] transition-all duration-500 hover:border-[#ea5e28]/30"
                  style={{
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                  }}
                >
                  {/* Decorative Glow Ambient Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-40 transition-opacity duration-500 group-hover:opacity-75`} />
                  
                  {/* Dynamic Corner Accents */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[#ea5e28]/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content Top */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-neutral-900/80 text-[#ea5e28] border border-neutral-800">
                        <Tag className="h-3 w-3" />
                        {item.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-neutral-500">
                        <Calendar className="h-3.5 w-3.5" />
                        {item.date}
                      </span>
                    </div>

                    <h3 
                      className="text-2xl uppercase text-white mb-3 tracking-wide group-hover:text-[#ea5e28] transition-colors duration-300"
                      style={headingFont}
                    >
                      {item.title}
                    </h3>
                    
                    <p className="text-sm text-neutral-400 leading-relaxed font-light line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Content Bottom */}
                  <div className="relative z-10 pt-6 border-t border-neutral-900/60 mt-6 flex items-center justify-between text-xs text-neutral-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-[#ea5e28]" />
                      {item.location}
                    </span>
                    <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-[#ea5e28] font-semibold flex items-center gap-1">
                      View Album
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </>
  );
}
