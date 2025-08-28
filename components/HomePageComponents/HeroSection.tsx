"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import PlatformSection from "./PlatformSection";
import Icon from "./Icon"; 
import ShinyButton from "../ShinyButton";

// Import all the icons
import checkoutIcon from "../../public/asset/Images/icons/checkout.png";
import searchIcon from "../../public/asset/Images/icons/search.png";
import uploadIcon from "../../public/asset/Images/icons/upload.png";
import categoryIcon from "../../public/asset/Images/icons/category.png";
import supportIcon from "../../public/asset/Images/icons/support.png";
import starIcon from "../../public/asset/Images/icons/star.png";
import favoritesIcon from "../../public/asset/Images/icons/favorites.png";
import downloadIcon from "../../public/asset/Images/icons/downlode.png";
import communityIcon from "../../public/asset/Images/icons/community.png";
import priceTagIcon from "../../public/asset/Images/icons/priceTag.png";
import threeDIcon from "../../public/asset/Images/icons/3d.png";
import collectibles from "../../public/asset/Images/icons/collectibles.png";

import carImage from "../../public/asset/Images/car.png"; 
import uploadHoverImage from "../../public/asset/Images/car.png"; 
import downloadHoverImage from "../../public/asset/Images/car.png"; 

const icons = [
  { 
    src: threeDIcon, className: "top-[15%] left-[9%]", x: 0.8, y: 1.1, range: [0, 0.1],
    hoverData: { title: "3D Models", description: "Browse thousands of high-quality 3D models for your projects. Filter by category, style, format, and more.", image: carImage }
  },
  { 
    src: checkoutIcon, className: "top-[18%] right-[10%]", x: -0.8, y: 1.1, range: [0, 0.1],
    hoverData: { title: "Secure Checkout", description: "Fast and secure payments for your 3D model purchases." }
  },
  { 
    src: priceTagIcon, className: "top-[30%] left-[20%]", x: 0.6, y: 0.8, range: [0.02, 0.12],
    hoverData: { title: "Flexible Pricing", description: "Flexible pricing options for creators and businesses." }
  },
  { 
    src: communityIcon, className: "top-[44%] left-[8%]", x: 0.8, y: 0.6, range: [0.04, 0.14],
    hoverData: { title: "Creator Community", description: "Join thousands of 3D artists and designers." }
  },
  { 
    src: searchIcon, className: "top-[39%] right-[17%]", x: -0.6, y: 0.7, range: [0.04, 0.14],
    hoverData: { title: "Advanced Search", description: "Find exactly what you need with our powerful search tools." }
  },
  { 
    src: uploadIcon, className: "top-[55%] right-[7%]", x: -0.9, y: 0.4, range: [0.06, 0.16],
    hoverData: { title: "Upload Your Work", description: "Share your creations with our community. Upload your 3D models and reach thousands of potential buyers.", image: uploadHoverImage }
  },
  { 
    src: downloadIcon, className: "top-[59%] left-[20%]", x: 0.5, y: 0.4, range: [0.06, 0.16],
    hoverData: { title: "Instant Downloads", description: "Access your purchased models anywhere, anytime.", image: downloadHoverImage }
  },
  { 
    src: favoritesIcon, className: "bottom-[10%] left-[12%]", x: 0.8, y: -0.1, range: [0.08, 0.18],
    hoverData: { title: "Favorites", description: "Save models you love for quick access later." }
  },
  { 
    src: categoryIcon, className: "bottom-[15%] right-[20%]", x: -0.5, y: -0.2, range: [0.08, 0.18],
    hoverData: { title: "Categories", description: "Explore our organized collection by categories." }
  },
  { 
    src: starIcon, className: "-bottom-[2%] left-[25%]", x: 0.4, y: -0.4, range: [0.1, 0.2],
    hoverData: { title: "Ratings & Reviews", description: "Discover our handpicked selection of premium 3D models and assets from top creators." }
  },
  { 
    src: supportIcon, className: "-bottom-[1%] left-[45%]", x: 0.1, y: -0.5, range: [0.1, 0.2],
    hoverData: { title: "24/7 Support", description: "Get help when you need it from our friendly support team." }
  },
  { 
    src: collectibles, className: "-bottom-[10%] right-[35%]", x: -0.3, y: -0.7, range: [0.1, 0.2],
    hoverData: { title: "Digital Collectibles", description: "Curated sets of models for specific projects and needs." }
  },
];

const mobileIcons = [
    { 
      src: threeDIcon, className: "top-[25%] left-[5%]", x: 0.5, y: 1.1, range: [0, 0.1],
      hoverData: { title: "3D Models", description: "Browse thousands of high-quality 3D models." }
    },
    { 
      src: checkoutIcon, className: "top-[28%] right-[5%]", x: -0.5, y: 1.1, range: [0, 0.1],
      hoverData: { title: "Secure Checkout", description: "Complete your purchase securely." }
    },
    { 
      src: priceTagIcon, className: "bottom-[30%] left-[8%]", x: 0.6, y: -0.1, range: [0.02, 0.12],
      hoverData: { title: "Flexible Pricing", description: "Find assets that fit your budget." }
    },
    { 
      src: communityIcon, className: "bottom-[25%] right-[40%]", x: -0.1, y: -0.1, range: [0.04, 0.14],
      hoverData: { title: "Creator Community", description: "Join our vibrant community." }
    },
    { 
      src: searchIcon, className: "top-[60%] right-[5%]", x: -0.6, y:0.1, range: [0.04, 0.14],
      hoverData: { title: "Advanced Search", description: "Find the perfect asset quickly." }
    },
]

const HeroSection: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const headingOpacity = useTransform(scrollYProgress, [0.2, 0.3], [1, 0]);
  const headingY = useTransform(scrollYProgress, [0, 0.2, 0.3], ["0%", "0%", "-50%"]);
  const subheadingOpacity = useTransform(scrollYProgress, [0.22, 0.32], [1, 0]);
  const subheadingY = useTransform(scrollYProgress, [0, 0.22, 0.32], ["0%", "0%", "-50%"]);
  const buttonOpacity = useTransform(scrollYProgress, [0.24, 0.34], [1, 0]);
  const buttonY = useTransform(scrollYProgress, [0, 0.24, 0.34], ["0%", "0%", "-50%"]);
  const newComponentOpacity = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);
  const newComponentY = useTransform(scrollYProgress, [0.35, 0.45], ["50px", "0px"]);
  
  // This will make the PlatformSection container non-interactive when it's invisible.
  const newComponentPointerEvents = useTransform(newComponentOpacity, (value) => (value > 0.1 ? 'auto' : 'none'));

  const textOpacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.4, 0.5], ["20px", "0px"]);
  const videoOpacity = useTransform(scrollYProgress, [0.45, 0.55], [0, 1]);
  const videoX = useTransform(scrollYProgress, [0.45, 0.55], ["50px", "0px"]);
  const globalOpacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const earningsOpacity = useTransform(scrollYProgress, [0.55, 0.65], [0, 1]);
  const supportOpacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);

  return (
    <div ref={targetRef} className="relative h-[350vh] w-full container mx-auto">
      <div className="fixed top-0 left-0 h-screen w-full -z-10">
        <div className="absolute md:top-[35%] top-[30%] md:left-[10%] left-[10%] h-[270px] w-[270px] bg-red-500/40 rounded-full blur-[150px]"></div>
        <div className="absolute md:top-2/3  top-[60%]  md:right-[50%] right-0  h-[260px] w-[260px] bg-teal-300/30 rounded-full blur-[100px]"></div>
      </div>
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden text-white">
        
       
        {/* The central content . */}
        <div className="relative z-10 text-center flex flex-col items-center px-4">
          <motion.h1 
            style={{ opacity: headingOpacity, y: headingY }}
            className="text-3xl sm:text-5xl md:text-5xl font-semibold h-[150px] sm:h-[192px] flex justify-center items-center"
          >
            <TypeAnimation
              sequence={[
                'Discover, Buy, and Sell\nDigital Products', 8000,
                'Sell for Free\nPay Only When You Earn', 8000,
                'Instant Payouts,\nFull Control, No Limits', 8000,
                'Buy Once, Download\nAnytime, Keep Forever', 8000,
              ]}
              wrapper="span" speed={50} repeat={Infinity} cursor={true}
              style={{ whiteSpace: 'pre-line', display: 'inline-block' }}
            />
          </motion.h1>
          <motion.p 
            style={{ opacity: subheadingOpacity, y: subheadingY }}
            className="text-neutral-400 mb-9 max-w-lg text-xs md:text-sm font-semibold"
          >
           Your one-stop digital platform for 3D models and digital creations.
           Join our community of creators and collectors today.
          </motion.p>
          <ShinyButton 
            title="Explore all products" 
            motionProps={{ style: { opacity: buttonOpacity, y: buttonY } }} 
          />
        </div>

        <div className="hidden md:block">
            {icons.map((icon, i) => (
              <Icon key={`desktop-${i}`} scrollYProgress={scrollYProgress} iconData={icon} />
            ))}
        </div>
        <div className="block md:hidden">
            {mobileIcons.map((icon, i) => (
              <Icon key={`mobile-${i}`} scrollYProgress={scrollYProgress} iconData={icon} size="small" />
            ))}
        </div>

        <motion.div
          style={{ 
            opacity: newComponentOpacity, 
            y: newComponentY,
            pointerEvents: newComponentPointerEvents //  prevents the invisible section from blocking clicks.
          }}
          className="absolute inset-0 z-30"
        >
          <PlatformSection 
            textOpacity={textOpacity}
            textY={textY}
            videoOpacity={videoOpacity}
            videoX={videoX}
            globalOpacity={globalOpacity}
            earningsOpacity={earningsOpacity}
            supportOpacity={supportOpacity}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;