"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { Play, X, Loader2 } from "lucide-react";

/* ─── VIDEO DATA ─── */
type VideoItem = {
  id: string;
  title: string;
  fileId: string;
  thumbnailId?: string;
  category: "cinematic" | "reels";
};

const cinematicVideos: VideoItem[] = [
  { id: "c1", title: "Cinematic Edit 1", fileId: "17kw3tnHJ0B8s25tblO2CYHPWsEX_B38u", thumbnailId: "1_eN_Cs_jVh9UWAwyTqmSS7Zc46JM-1le", category: "cinematic" },
  { id: "c2", title: "Cinematic Edit 2", fileId: "1oIvczMFpyrChzMHctqMvwa1kk8tn7uRD", category: "cinematic" },
  { id: "c4", title: "Cinematic Edit 3", fileId: "1LV6mbd-Z97AXE4LK5IIGiL6kKLLTZ7s6", thumbnailId: "1yxxWTyH7Wr1iNsQXh45s5qWJ0Uz4wfB4", category: "cinematic" },
  { id: "c5", title: "Cinematic Edit 4", fileId: "1aC3TchGho4-x3zINMejbvKTzRmvdhhvn", thumbnailId: "1LmS4K0StO5lwvD7qVMX2Gan4VrJ9K7wd", category: "cinematic" },
  { id: "c6", title: "Cinematic Edit 5", fileId: "1-5A1yWnpm-PwDEOBU38-4aAWUvSByKv6", category: "cinematic" },
  { id: "c7", title: "Cinematic Edit 6", fileId: "1OqmQdEbEA9rhKUANfMjuXOQ-B62Q9Xcr", thumbnailId: "1nwOxAeGJleYvD39CM1mqPu-w2k3Wg567", category: "cinematic" },
];

const reelsVideos: VideoItem[] = [
  { id: "r1", title: "Reel 1", fileId: "1iAbehMxfr5EoOg2cZOjRs2K2KfwyKwf5", category: "reels" },
  { id: "r2", title: "Reel 2", fileId: "1BwmtUBPqsEjRfRp52h9bFzXzHMlpwI58", category: "reels" },
  { id: "r3", title: "Reel 3", fileId: "1yRfUDmZVdMxcVjCsYLS7raN5W0CZVJPY", category: "reels" },
  { id: "r4", title: "Reel 4", fileId: "1zMTbbAUcksKXaTgmqIFwhorfkR82FP1A", category: "reels" },
  { id: "r5", title: "Reel 5", fileId: "1y9UP0RpCP-qD_Qa00XKYIWZsRgIrh61W", category: "reels" },
  { id: "r6", title: "Reel 6", fileId: "15RKsoMS3aUosO89RGg2XUyYzohpS4sUh", category: "reels" },
  { id: "r7", title: "Reel 7", fileId: "1VU4dep8YXD2tg_KCD6bZR5SvJM-QZDB6", category: "reels" },
  { id: "r8", title: "Reel 8", fileId: "1gWw1D_uWeehWp7yDRMTGcTnW6HuPWoAl", category: "reels" },
  { id: "r9", title: "Reel 9", fileId: "1QYmA6DgNZIPG3gPrWBJliqI9AodDU9f4", category: "reels" },
  { id: "r10", title: "Reel 10", fileId: "1K53126709s6c6WOnAZ4RngTcbSqgnZar", category: "reels" },
];

/* ─── THUMBNAIL COMPONENT ─── */
const ThumbnailImage = ({ video }: { video: VideoItem }) => {
  const tId = video.thumbnailId || video.fileId;
  const [imgSrc, setImgSrc] = useState(`https://lh3.googleusercontent.com/d/${tId}=s1000`);
  const [errorCount, setErrorCount] = useState(0);

  const handleError = () => {
    if (errorCount === 0) {
      setImgSrc(`https://drive.google.com/thumbnail?id=${tId}&sz=w1000`);
      setErrorCount(1);
    }
  };

  return (
    <div className="absolute inset-0 bg-[#111] overflow-hidden">
      <img
        src={imgSrc}
        alt={video.title}
        onError={handleError}
        referrerPolicy="no-referrer"
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      {/* Dark overlay for better icon visibility and premium look */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
    </div>
  );
};

/* ─── VIDEO CARD COMPONENT ─── */
const VideoCard = ({
  video,
  aspectClass,
  onClick
}: {
  video: VideoItem;
  aspectClass: string;
  onClick: () => void
}) => {
  // Random animation delay to make the "random" glow effect
  const [randomDelay] = useState(() => Math.random() * 5);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onClick={onClick}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-white/5 transition-all duration-500 bg-surface/50 ${aspectClass}`}
    >
      {/* Random Pulse Glow - Active when NOT hovering */}
      <div
        className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-0 transition-opacity duration-500"
        style={{
          animation: `pulseGlow 4s ease-in-out infinite`,
          animationDelay: `${randomDelay}s`,
          boxShadow: '0 0 25px rgba(232, 168, 73, 0.3)',
          border: '1px solid rgba(232, 168, 73, 0.3)',
        }}
      />

      {/* Hover State Glow - Brightens up and stabilizes */}
      <div className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 border border-accent/50 shadow-[0_0_40px_rgba(232,168,73,0.25)] transition-all duration-500" />

      <ThumbnailImage video={video} />

      {/* Play Icon Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:scale-110 transition-all duration-500 shadow-2xl">
          <Play className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:text-black ml-1 transition-colors duration-300" fill="currentColor" />
        </div>
      </div>

      {/* Glassmorphism gradient at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <style jsx>{`
        @keyframes pulseGlow {
          0%, 100% { opacity: 0; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.01); }
        }
      `}</style>
    </motion.div>
  );
};

/* ─── MODAL PLAYER COMPONENT ─── */
const VideoModal = ({ video, onClose }: { video: VideoItem; onClose: () => void }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // 1. Close on Escape Key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  }, [onClose]);

  // 2. Handle Body Scroll Lock & Keyboard Listener
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden"; // Lock scroll

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";  // Unlock scroll
    };
  }, [handleKeyDown]);

  const modalContent = (
    <motion.div
      initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
      animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
      exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/95 p-4 pointer-events-auto"
      onClick={onClose}
    >
      {/* Premium Close Button */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevents click from bubbling up to overlay
          onClose();
        }}
        className="absolute top-6 right-6 md:top-10 md:right-10 z-[1000000] p-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all duration-300 hover:rotate-90 group cursor-pointer shadow-2xl backdrop-blur-md"
        aria-label="Close video"
      >
        <X className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform" />
      </button>

      {/* Video Container */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: -20 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className={`relative w-full flex items-center justify-center rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black ${video.category === "reels" ? "max-w-[45vh] aspect-[9/16]" : "max-w-6xl aspect-video"
          }`}
        onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking the video
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center text-accent">
            <Loader2 className="w-10 h-10 animate-spin" />
          </div>
        )}

        <iframe
          src={`https://drive.google.com/file/d/${video.fileId}/preview`}
          className={`w-full h-full border-0 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          allow="autoplay; fullscreen"
          onLoad={() => setIsLoading(false)}
          title={video.title}
        />
      </motion.div>
    </motion.div>
  );

  if (!mounted) return null;

  return createPortal(modalContent, document.body);
};

/* ─── MAIN PORTFOLIO COMPONENT ─── */
export default function Portfolio() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);


  return (
    <section id="portfolio" className="relative w-full py-32 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16 md:mb-24 px-4">
        <p className="section-label">Portfolio</p>
        <h2 className="section-title">
          Selected <span className="text-gradient-gold">Works</span>
        </h2>
        <p className="section-subtitle mt-6 max-w-2xl mx-auto">
          A curated collection of my best cinematic edits and social media content, built to engage and inspire.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-32">

        {/* Cinematic Section */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Cinematic Edits
              <span className="text-accent text-xs md:text-sm ml-4 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 align-middle">16:9</span>
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cinematicVideos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                aspectClass="aspect-video w-full"
                onClick={() => setSelectedVideo(video)}
              />
            ))}
          </div>
        </div>

        {/* Reels Section */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Short-form Reels
              <span className="text-accent text-xs md:text-sm ml-4 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 align-middle">9:16</span>
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {reelsVideos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                aspectClass="aspect-[9/16] w-full"
                onClick={() => setSelectedVideo(video)}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Modal */}
      <AnimatePresence mode="wait">
        {selectedVideo && (
          <VideoModal
            video={selectedVideo}
            onClose={() => setSelectedVideo(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
