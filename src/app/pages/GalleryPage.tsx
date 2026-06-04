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

const galleryItems: GalleryItem[] = [];

export default function GalleryPage() {
  const navigate = useNavigate();

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

          {/* Gallery Grid */}
          {galleryItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-center justify-center text-center p-12 md:p-20 rounded-2xl border border-neutral-900 bg-neutral-950/20 backdrop-blur-md min-h-[350px] relative overflow-hidden"
            >
              {/* Subtle ambient glow inside empty state card */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-48 w-48 rounded-full bg-[#ea5e28]/5 blur-[80px]" />
              
              <div className="relative z-10 flex flex-col items-center max-w-sm space-y-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-neutral-900/80 border border-neutral-800 text-neutral-500">
                  <Camera className="h-6 w-6 animate-pulse" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl text-neutral-300 font-semibold uppercase tracking-wider" style={headingFont}>
                    Gallery is Empty
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    No moments captured yet. Photos from our upcoming builds, workshops, and socials will be posted here.
                  </p>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {galleryItems.map((item, idx) => (
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
          )}
        </div>
      </div>
    </>
  );
}
