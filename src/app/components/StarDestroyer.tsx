import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import destryImage from "../../imports/Destry.png";

/**
 * StarDestroyer — cruises the custom generated `Destry.png` in a perfectly
 * straight line across the top of the screen at a constant size.
 * Clicking on the ship 5 times triggers a premium Darth Vader quote toast.
 */
export function StarDestroyer() {
  const [clickCount, setClickCount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setClickCount((prev) => {
      const nextCount = prev + 1;
      if (nextCount >= 5) {
        setShowPopup(true);
        return 0; // Reset click count
      }
      return nextCount;
    });
  };

  // Automatically hide the popup after 4 seconds
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ zIndex: 20 }} // Keep above content layers so it's clickable
        aria-hidden="true"
      >
        {/* Ship wrapper — straight line animation at constant scale */}
        <motion.div
          className="absolute pointer-events-auto cursor-pointer select-none"
          onClick={handleClick}
          style={{
            top: "10%",
            right: 0,
            width: "clamp(100px, 7vw, 140px)",
            height: "auto",
          }}
          initial={{
            x: "15vw",
            opacity: 0,
          }}
          animate={{
            x: ["15vw", "-125vw"], // Pure linear constant speed
            opacity: [0, 1, 1, 0], // Smooth fade-in and fade-out
          }}
          transition={{
            duration: 90, // Constant majestic background cruiser speed
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 12,
          }}
          whileHover={{ filter: "brightness(1.25) drop-shadow(0 0 8px rgba(234,94,40,0.35))" }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src={destryImage}
            alt="Imperial Star Destroyer"
            className="w-full h-auto object-contain"
            style={{
              mixBlendMode: "screen", // Seamlessly blends absolute black backgrounds out
              filter: "brightness(1.1) contrast(1.05)",
            }}
          />
        </motion.div>
      </div>

      {/* Darth Vader quote popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed bottom-8 right-8 z-[100] rounded-lg border border-[#ea5e28]/35 px-4.5 py-2.5 text-white"
            style={{
              background: "rgba(10, 10, 12, 0.85)",
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.8), 0 0 15px rgba(234, 94, 40, 0.05)",
            }}
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <span className="text-xs font-semibold tracking-wide text-neutral-200">
              I find your lack of faith disturbing.
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
