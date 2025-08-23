"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useTransform, MotionValue } from "framer-motion";

type IconProps = {
  scrollYProgress: MotionValue<number>;
  iconData: {
    src: StaticImageData;
    className: string;
    x: number;
    y: number;
    range: number[];
  };
  size?: "small" | "default";
};

const Icon: React.FC<IconProps> = ({ scrollYProgress, iconData, size = "default" }) => {
  const opacity = useTransform(scrollYProgress, iconData.range, [1, 0]);
  const scale = useTransform(scrollYProgress, iconData.range, [1, 0.2]);
  const x = useTransform(scrollYProgress, iconData.range, ["0vw", `${iconData.x * 40}vw`]);
  const y = useTransform(scrollYProgress, iconData.range, ["0vh", `${iconData.y * 40}vh`]);

  const sizeClasses = size === 'small' ? 'w-[40px] h-[40px] p-2.5' : 'w-[65px] h-[65px] p-3.5';
  const imageSize = size === 'small' ? 22 : 28;

  return (
    <motion.div
      style={{ opacity, scale, x, y }}
      className={`absolute z-10 flex items-center justify-center rounded-full backdrop-blur-lg
        bg-white/70 dark:bg-white/10
        shadow-[0px_2px_10px_rgba(0,0,0,0.1)]
        border border-white/40 dark:border-white/10
        bg-gradient-to-r from-white/70 to-indigo-50 dark:from-white/10 dark:to-transparent
        ${sizeClasses} ${iconData.className}`}
    >
      <Image src={iconData.src} alt="icon" width={imageSize} height={imageSize} />
    </motion.div>
  );
};

export default Icon;