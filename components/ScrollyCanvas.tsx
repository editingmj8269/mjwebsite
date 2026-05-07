"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 89; // 0 to 88

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const lastDrawnIndex = useRef<number>(-1);

  useEffect(() => {
    // Preload all images
    let loadedCount = 0;
    
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const frameNum = i.toString().padStart(2, "0");
      // Use absolute path for reliability
      img.src = `/sequence/frame_${frameNum}_delay-0.066s.png`;
      
      img.onload = () => {
        imagesRef.current[i] = img;
        loadedCount++;
        
        if (i === 0 || !imagesLoaded) {
          drawFrame(Math.round(frameIndex.get()));
        }

        if (loadedCount === FRAME_COUNT) {
          setImagesLoaded(true);
          console.log("All sequence images loaded successfully");
        }
      };

      img.onerror = () => {
        console.error(`Failed to load image: /sequence/frame_${frameNum}_delay-0.066s.png`);
      };
    }
  }, []);

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const imgArray = imagesRef.current;
    let img = imgArray[index];
    
    if (!img) {
      // Find closest loaded frame
      for (let i = index; i >= 0; i--) {
        if (imgArray[i]) { img = imgArray[i]; break; }
      }
      if (!img) {
        for (let i = index; i < FRAME_COUNT; i++) {
          if (imgArray[i]) { img = imgArray[i]; break; }
        }
      }
    }

    if (!img) return;
    if (lastDrawnIndex.current === index && canvas.width === window.innerWidth) return;

    renderImage(img, canvas, ctx);
    lastDrawnIndex.current = index;
  };

  const renderImage = (img: HTMLImageElement, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }

    const imgRatio = img.width / img.height;
    const canvasRatio = canvas.width / canvas.height;
    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgRatio;
      offsetX = 0;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      drawHeight = canvas.height;
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useEffect(() => {
    // Update canvas whenever scroll changes
    // This effect now only runs once on mount
    const unsubscribe = frameIndex.on("change", (latestValue) => {
      drawFrame(Math.round(latestValue));
    });
    return () => unsubscribe();
  }, [frameIndex]); // No more images dependency!

  useEffect(() => {
    const handleResize = () => {
      drawFrame(Math.round(frameIndex.get()));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [frameIndex]);

  return (
    <div ref={containerRef} className="relative h-[140vh] w-full bg-[#0a0a0a]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        <Overlay scrollYProgress={scrollYProgress} />
        {/* Smooth fade-to-black overlay at the bottom */}
        <motion.div
          style={{ opacity: fadeOut }}
          className="absolute inset-0 bg-[#0a0a0a] pointer-events-none z-20"
        />
      </div>
    </div>
  );
}
