"use client";

import React from "react";
import { motion, MotionProps } from "framer-motion";

//  props for button .
type ShinyButtonProps = {
  title: string; 
  motionProps?: MotionProps; 
};

const ShinyButton: React.FC<ShinyButtonProps> = ({ title, motionProps }) => {
  return (
    <motion.button
      {...motionProps} // Spreading the animation props from the parent onto the button.
      className="relative z-20 inline-flex items-center justify-center rounded-full font-medium transition-colors whitespace-nowrap overflow-hidden border border-neutral-700 text-neutral-300 hover:bg-neutral-800 w-[160px] sm:w-[13rem] py-3 px-5 text-sm sm:text-base shiny-btn"
    >
      {/* We're wrapping the text in a span with a higher index       */}
      <span className="relative z-10">{title}</span>
    </motion.button>
  );
};

export default ShinyButton;