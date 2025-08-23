"use client";

import React from "react";
import { motion, MotionValue } from "framer-motion"; 
import ShinyButton from "../ShinyButton";

//  it doesn't have its own animation logic.
// It just receives all the animation values (like opacity and position) as props from the HeroSection.
// This keeps things clean and centralizes the animation control in one place.
type PlatformSectionProps = {
  textOpacity: MotionValue<number>;
  textY: MotionValue<string>;
  videoOpacity: MotionValue<number>;
  videoX: MotionValue<string>;
  globalOpacity: MotionValue<number>;
  earningsOpacity: MotionValue<number>;
  supportOpacity: MotionValue<number>;
};

const PlatformSection: React.FC<PlatformSectionProps> = ({
  textOpacity,
  textY,
  videoOpacity,
  videoX,
  globalOpacity,
  earningsOpacity,
  supportOpacity,
}) => {
  return (
    // The main container. It's designed to be scrollable on mobile if the content overflows.
    <div className="relative w-full min-h-screen bg-transparent text-white flex flex-col justify-center items-center p-4 sm:p-8 md:p-16">
      
      <div className="relative z-10 w-full max-w-6xl mt-20 mb-20 md:mt-0 md:mb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {/* The entire left column (text content) animates in together. */}
          <motion.div 
            style={{ opacity: textOpacity, y: textY }}
            className="flex flex-col text-center md:text-left"
          >
            <p className="text-sm font-semibold text-neutral-400 mb-2">MEET 3DIMLI</p>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">
              Your All-in-one Digital Commerce Platform
            </h2>
            <p className="text-neutral-300 md:mb-8 mb-4">
              <span className="font-bold">Sell 3D Models, E-books, and digital products</span> effortlessly. Manage your store, deliver products seamlessly, and reach a global audience.
            </p>
            <div className="self-center md:self-start">
                <ShinyButton 
                    title="Start Selling Now" 
                />
            </div>
          </motion.div>

          {/* video has its own separate animation. */}
          <motion.div 
            style={{ opacity: videoOpacity, x: videoX }}
            className="relative w-full rounded-l-full overflow-hidden h-64 sm:h-80"
          >
            <video
              src="/asset/Videos/Video.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

       

        <div className="flex flex-row justify-around items-start mt-16 md:mt-24 w-full">
          <motion.div style={{ opacity: globalOpacity }} className="text-center p-2">
            <h3 className="text-xs md:text-5xl mb-1 font-bold">Global</h3>
            <p className="text-orange-400 text-sm">For creators worldwide.</p>
          </motion.div>
          
         
          <motion.div style={{ opacity: globalOpacity }} className=" md:h-16 h-20 w-px bg-neutral-700"></motion.div>
          
          <motion.div style={{ opacity: earningsOpacity }} className="text-center p-2">
            <h3 className="text-xs md:text-5xl mb-1 font-bold">Earnings</h3>
            <p className="text-orange-400 text-sm">Keep 100% of what you earn.</p>
          </motion.div>

          <motion.div style={{ opacity: earningsOpacity }} className=" md:h-16 h-20 w-px bg-neutral-700"></motion.div>

          <motion.div style={{ opacity: supportOpacity }} className="text-center p-2">
            <h3 className="text-xs md:text-5xl mb-1 font-bold">Support</h3>
            <p className="text-orange-400 text-sm">We&apos;ve got your back.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PlatformSection;