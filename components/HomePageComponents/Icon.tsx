"use client";

import React from "react";
import Image, { StaticImageData } from "next/image"; // StaticImageData import kiya
import { motion, useTransform, MotionValue } from "framer-motion";

// Icon component ke liye props ka type define kiya
type IconProps = {
  scrollYProgress: MotionValue<number>;
  iconData: {
    src: StaticImageData; // 'any' ki jagah ab 'StaticImageData' use kiya
    className: string;
    x: number;
    y: number;
    range: number[];
  };
};

const Icon: React.FC<IconProps> = ({ scrollYProgress, iconData }) => {
  const opacity = useTransform(scrollYProgress, iconData.range, [1, 0]);
  const scale = useTransform(scrollYProgress, iconData.range, [1, 0.2]);
  const x = useTransform(scrollYProgress, iconData.range, ["0vw", `${iconData.x * 40}vw`]);
  const y = useTransform(scrollYProgress, iconData.range, ["0vh", `${iconData.y * 40}vh`]);

  return (
    <motion.div
      style={{ opacity, scale, x, y }}
      className={`absolute z-10 flex items-center justify-center rounded-full backdrop-blur-lg bg-white/10 shadow-[0px_2px_10px_rgba(0,0,0,0.1)] p-3.5 border border-white/10 w-[60px] h-[60px] ${iconData.className}`}
    >
      <Image src={iconData.src} alt="icon" width={28} height={28} />
    </motion.div>
  );
};

export default Icon;