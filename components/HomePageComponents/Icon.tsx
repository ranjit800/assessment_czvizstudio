"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useTransform, MotionValue, AnimatePresence } from "framer-motion";

// Type for the tooltip data on hover. Image is optional.
type HoverData = {
  title: string;
  description: string;
  image?: StaticImageData;
};

// Props for the Icon component.
type IconProps = {
  scrollYProgress: MotionValue<number>;
  iconData: {
    src: StaticImageData;
    className: string;
    x: number;
    y: number;
    range: number[];
    hoverData?: HoverData;
  };
  size?: "small" | "default";
};

const Icon: React.FC<IconProps> = ({ scrollYProgress, iconData, size = "default" }) => {
  // State to manage hover for showing the tooltip.
  const [isHovered, setIsHovered] = useState(false);

  // Map scroll progress to animations.
  const opacity = useTransform(scrollYProgress, iconData.range, [1, 0]);
  const scale = useTransform(scrollYProgress, iconData.range, [1, 0.2]);
  const x = useTransform(scrollYProgress, iconData.range, ["0vw", `${iconData.x * 40}vw`]);
  const y = useTransform(scrollYProgress, iconData.range, ["0vh", `${iconData.y * 40}vh`]);

  // Handle different icon sizes for responsive design.
  const sizeClasses = size === 'small' ? 'w-[45px] h-[45px] p-2.5' : 'w-[60px] h-[60px] p-3.5';
  const imageSize = size === 'small' ? 22 : 28;

  // Position tooltip left or right to avoid going off-screen.
  const tooltipPosition = iconData.x > 0 ? "left-full ml-4" : "right-full mr-4";

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ opacity, scale, x, y }}
      // Bump z-index on hover so the tooltip appears above other icons.
      className={`absolute ${isHovered ? 'z-30' : 'z-20'} flex items-center justify-center rounded-full backdrop-blur-lg 
                 ${isHovered ? 'bg-white' : 'bg-white/10'} 
                 transition-colors duration-300
                 shadow-[0px_2px_10px_rgba(0,0,0,0.1)] border border-white/10 ${sizeClasses} ${iconData.className}`}
    >
      <Image src={iconData.src} alt="icon" width={imageSize} height={imageSize} />
      
      {/* AnimatePresence handles the smooth fade in/out of the tooltip. */}
      <AnimatePresence>
        {isHovered && iconData.hoverData && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`absolute top-1/2 -translate-y-1/2 ${tooltipPosition} w-64 p-4 rounded-2xl bg-neutral-900 border border-neutral-600 border-dashed shadow-xl`}
          >
            <div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 rounded-full bg-neutral-800 p-2 border border-neutral-700">
                  <Image src={iconData.src} alt={iconData.hoverData.title} width={20} height={20} />
                </div>
                <h3 className="font-bold text-white">{iconData.hoverData.title}</h3>
              </div>
              <p className="text-sm text-neutral-400 mt-2">{iconData.hoverData.description}</p>
            </div>
            
            {/* Only show the image container if an image is provided in the data. */}
            {iconData.hoverData.image && (
              <div className="mt-4 w-full h-32 rounded-xl overflow-hidden p-2 bg-neutral-800 border border-neutral-700">
                <Image src={iconData.hoverData.image} alt={iconData.hoverData.title} className="w-full h-full object-cover rounded-lg" />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Icon;