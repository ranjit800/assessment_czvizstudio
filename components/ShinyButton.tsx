"use client";

import React from "react";
import { motion, MotionProps } from "framer-motion";

// Button ke props ka type define kiya
type ShinyButtonProps = {
  title: string;
  motionProps?: MotionProps; // Animation props pass karne ke liye
};

const ShinyButton: React.FC<ShinyButtonProps> = ({ title, motionProps }) => {
  return (
    <motion.button
      {...motionProps} // Parent se aaye hue animation props yahan apply ho jayenge
      className="relative z-20 inline-flex items-center justify-center rounded-full font-medium transition-colors whitespace-nowrap overflow-hidden border border-neutral-700 text-neutral-300 hover:bg-neutral-800 w-[150px] sm:w-[13rem] py-1.5 px-5 text-sm sm:text-base shiny-btn"
    >
      {/* Text ko span mein daala taaki hover effect kaam kare */}
      <span className="relative z-10">{title}</span>
    </motion.button>
  );
};

export default ShinyButton;