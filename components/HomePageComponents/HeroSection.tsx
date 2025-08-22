// import React from "react";
// import checkoutIcon from "../../../public/asset/Images/icons/checkout.png";
// import searchIcon from "../../../public/asset/Images/icons/search.png";
// import uploadIcon from "../../../public/asset/Images/icons/upload.png";
// import categoryIcon from "../../../public/asset/Images/icons/category.png";
// import supportIcon from "../../../public/asset/Images/icons/support.png";
// import starIcon from "../../../public/asset/Images/icons/star.png";
// import favoritesIcon from "../../../public/asset/Images/icons/favorites.png";
// import downloadIcon from "../../../public/asset/Images/icons/downlode.png";
// import communityIcon from "../../../public/asset/Images/icons/community.png";
// import priceTagIcon from "../../../public/asset/Images/icons/priceTag.png";
// import threeDIcon from "../../../public/asset/Images/icons/3d.png";

// const HeroSection: React.FC = () => {
//   return (
//     <div id="background" className="relative h-screen w-full flex justify-center items-center ">
//       <div className="absolute left-[10%]  h-[300px] w-[300px] bg-red-500/35 rounded-full blur-[150px] "></div>
//       <div className="absolute right-[50%]   h-[250px] w-[250px] top-1/2 bg-teal-300/30 rounded-full blur-[100px] "></div>
//     </div>
//   );
// };

// export default HeroSection;


// "use client";

// import React from "react";
// import Image from "next/image";

// // import icons
// import checkoutIcon from "../../public/asset/Images/icons/checkout.png";
// import searchIcon from "../../public/asset/Images/icons/search.png";
// import uploadIcon from "../../public/asset/Images/icons/upload.png";
// import categoryIcon from "../../public/asset/Images/icons/category.png";
// import supportIcon from "../../public/asset/Images/icons/support.png";
// import starIcon from "../../public/asset/Images/icons/star.png";
// import favoritesIcon from "../../public/asset/Images/icons/favorites.png";
// import downloadIcon from "../../public/asset/Images/icons/downlode.png";
// import communityIcon from "../../public/asset/Images/icons/community.png";
// import priceTagIcon from "../../public/asset/Images/icons/priceTag.png";
// import threeDIcon from "../../public/asset/Images/icons/3d.png";

// const icons = [
//   checkoutIcon,
//   searchIcon,
//   uploadIcon,
//   categoryIcon,
//   supportIcon,
//   starIcon,
//   favoritesIcon,
//   downloadIcon,
//   communityIcon,
//   priceTagIcon,
//   threeDIcon,
// ];

// const HeroSection: React.FC = () => {
//   return (
//     <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black text-white">
//       {/* Center Text */}
//       <div className="relative z-10 text-center max-w-2xl">
//         <h1 className="text-4xl md:text-6xl font-bold mb-4">
//           Discover, Buy, and Sell <br /> Digital Products
//         </h1>
//         <p className="text-neutral-400 mb-6">
//           Your one-stop digital platform for 3D models and digital creations. <br />
//           Join our community of creators and collectors today.
//         </p>
//         <button className="px-6 py-3 rounded-full bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 transition">
//           Explore all products
//         </button>
//       </div>

//       {/* Orbit Icons */}
//       <div className="absolute inset-0 flex items-center justify-center">
//         <div className="relative h-[500px] w-[500px]">
//           {icons.map((icon, i) => {
//             const angle = (i / icons.length) * (2 * Math.PI); // radian
//             const radius = 230; // distance from center
//             const x = Math.round(Math.cos(angle) * radius * 1000) / 1000;
//             const y = Math.round(Math.sin(angle) * radius * 1000) / 1000;

//             return (
//               <div
//                 key={i}
//                 className="absolute flex items-center justify-center rounded-full bg-neutral-900/70 backdrop-blur-md border border-neutral-800"
//                 style={{
//                   width: "60px",
//                   height: "60px",
//                   transform: `translate(${x}px, ${y}px)`,
//                 }}
//               >
//                 <Image src={icon} alt={`icon-${i}`} width={28} height={28} />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;


// "use client";

// import React from "react";
// import Image from "next/image";

// // icons import
// import checkoutIcon from "../../public/asset/Images/icons/checkout.png";
// import searchIcon from "../../public/asset/Images/icons/search.png";
// import uploadIcon from "../../public/asset/Images/icons/upload.png";
// import categoryIcon from "../../public/asset/Images/icons/category.png";
// import supportIcon from "../../public/asset/Images/icons/support.png";
// import starIcon from "../../public/asset/Images/icons/star.png";
// import favoritesIcon from "../../public/asset/Images/icons/favorites.png";
// import downloadIcon from "../../public/asset/Images/icons/downlode.png";
// import communityIcon from "../../public/asset/Images/icons/community.png";
// import priceTagIcon from "../../public/asset/Images/icons/priceTag.png";
// import threeDIcon from "../../public/asset/Images/icons/3d.png";

// const icons = [
//   { src: threeDIcon, className: "top-14 left-[15%]" },
//   { src: priceTagIcon, className: "top-[25%] left-[24%]" },
//   { src: communityIcon, className: "top-[36%] left-[13%]" },
//   { src: downloadIcon, className: "top-[52%] left-[26%]" },
//   { src: favoritesIcon, className: "bottom-[25%] left-[14%]" },
//   { src: starIcon, className: "bottom-[12%] left-[30%]" },
//   { src: supportIcon, className: "bottom-[12%] left-[45%]" },


//   { src: checkoutIcon, className: "top-[15%] right-[15%]" },
//   { src: searchIcon, className: "top-[35%] right-[22%]" },
//   { src: uploadIcon, className: "top-[50%] right-[10%]" },
//   { src: categoryIcon, className: "bottom-[22%] right-[24%]" },
// ];

// const HeroSection: React.FC = () => {
//   return (
//     <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black text-white">
//       {/* background blobs */}
//       <div className="absolute left-[10%]  h-[300px] w-[300px] bg-red-500/50 rounded-full blur-[150px] "></div>
//       <div className="absolute right-[50%] top-1/2  h-[300px] w-[300px] bg-cyan-300/30 rounded-full blur-[100px] "></div>

//       {/* center content */}
//       <div className="relative z-10 text-center ">
//         <h1 className="text-4xl md:text-6xl font-bold mb-4">
//           Discover, Buy, and Sell <br /> Digital Products
//         </h1>
//         <p className="text-neutral-400 mb-9">
//           Your one-stop digital platform for 3D models and digital creations. <br />
//           Join our community of creators and collectors today.
//         </p>
//         <button className="px-6 py-3 rounded-full bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 transition">
//           Explore all products
//         </button>
//       </div>

//       {/* scattered icons */}
//       {icons.map((icon, i) => (
//         <div
//           key={i}
//           className={`absolute flex items-center justify-center rounded-full bg-neutral-900/70 backdrop-blur-md border border-neutral-800 w-[60px] h-[60px] ${icon.className}`}
//         >
//           <Image src={icon.src} alt={`icon-${i}`} width={28} height={28} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default HeroSection;



// "use client";

// import React, { useRef } from "react";
// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";

// // icons import
// import checkoutIcon from "../../public/asset/Images/icons/checkout.png";
// import searchIcon from "../../public/asset/Images/icons/search.png";
// import uploadIcon from "../../public/asset/Images/icons/upload.png";
// import categoryIcon from "../../public/asset/Images/icons/category.png";
// import supportIcon from "../../public/asset/Images/icons/support.png";
// import starIcon from "../../public/asset/Images/icons/star.png";
// import favoritesIcon from "../../public/asset/Images/icons/favorites.png";
// import downloadIcon from "../../public/asset/Images/icons/downlode.png";
// import communityIcon from "../../public/asset/Images/icons/community.png";
// import priceTagIcon from "../../public/asset/Images/icons/priceTag.png";
// import threeDIcon from "../../public/asset/Images/icons/3d.png";

// const icons = [
//   { src: threeDIcon, className: "top-14 left-[15%]" },
//   { src: priceTagIcon, className: "top-[25%] left-[24%]" },
//   { src: communityIcon, className: "top-[36%] left-[13%]" },
//   { src: downloadIcon, className: "top-[52%] left-[26%]" },
//   { src: favoritesIcon, className: "bottom-[25%] left-[14%]" },
//   { src: starIcon, className: "bottom-[12%] left-[30%]" },
//   { src: supportIcon, className: "bottom-[12%] left-[45%]" },
//   { src: checkoutIcon, className: "top-[15%] right-[15%]" },
//   { src: searchIcon, className: "top-[35%] right-[22%]" },
//   { src: uploadIcon, className: "top-[50%] right-[10%]" },
//   { src: categoryIcon, className: "bottom-[22%] right-[24%]" },
// ];

// // Yeh naya component hai jo baad mein fade in hoga
// const NewComponent = () => {
//   return (
//     <div className="flex flex-col items-center justify-center text-center h-full">
//         <h2 className="text-4xl md:text-5xl font-bold mb-4">Next Section Title</h2>
//         <p className="text-neutral-400 max-w-2xl">
//             This is the new component that appears after the hero section animations are complete. You can replace this with any content you want.
//         </p>
//     </div>
//   )
// }


// const HeroSection: React.FC = () => {
//   // Scroll animation ke liye ek reference container banaya
//   const targetRef = useRef<HTMLDivElement>(null);
  
//   // Container ke scroll progress ko track kiya
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//     offset: ["start start", "end end"], // Animation poore container ke scroll tak chalega
//   });

//   // Scroll progress (0 se 1) ko alag-alag animation values mein badla

//   // 1. Icons ka animation: Scroll ke shuru (0) se 30% tak icons upar jaakar fade out honge
//   const iconOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
//   const iconY = useTransform(scrollYProgress, [0, 0.3], ["0%", "-150%"]);

//   // 2. Center content ka animation: Icons ke fade out hone ke baad (20% scroll se) yeh content fade out hona shuru hoga
//   const contentOpacity = useTransform(scrollYProgress, [0.2, 0.5], [1, 0]);
//   const contentY = useTransform(scrollYProgress, [0.2, 0.5], ["0%", "-50%"]);

//   // 3. Naye component ka animation: Puraana content jab lagbhag gayab ho jayega (50% scroll se), tab naya component fade in hoga
//   const newComponentOpacity = useTransform(scrollYProgress, [0.5, 0.8], [0, 1]);
//   const newComponentY = useTransform(scrollYProgress, [0.5, 0.8], ["50%", "0%"]);

//   return (
//     // Main container ko height di taaki scroll kar sakein
//     <div ref={targetRef} className="relative h-[250vh] w-full bg-black">
//       {/* Hero Section ko sticky banaya taaki woh scroll ke saath screen par rahe */}
//       <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden text-white">
//         {/* background blobs */}
//         <div className="absolute left-[10%] h-[300px] w-[300px] bg-red-500/50 rounded-full blur-[150px]"></div>
//         <div className="absolute right-[50%] top-1/2 h-[300px] w-[300px] bg-cyan-300/30 rounded-full blur-[100px]"></div>

//         {/* center content (ab motion component hai) */}
//         <motion.div 
//           style={{ opacity: contentOpacity, y: contentY }}
//           className="relative z-10 text-center"
//         >
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">
//             Discover, Buy, and Sell <br /> Digital Products
//           </h1>
//           <p className="text-neutral-400 mb-9">
//             Your one-stop digital platform for 3D models and digital creations. <br />
//             Join our community of creators and collectors today.
//           </p>
//           <button className="relative z-20 px-6 py-3 rounded-full bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 transition">
//             Explore all products
//           </button>
//         </motion.div>

//         {/* scattered icons (ab motion component hain) */}
//         {icons.map((icon, i) => (
//           <motion.div
//             key={i}
//             style={{ opacity: iconOpacity, y: iconY }}
//             className={`absolute flex items-center justify-center rounded-full bg-neutral-900/70 backdrop-blur-md border border-neutral-800 w-[60px] h-[60px] ${icon.className}`}
//           >
//             <Image src={icon.src} alt={`icon-${i}`} width={28} height={28} />
//           </motion.div>
//         ))}

//         {/* Naya component jo fade in hoga */}
//         <motion.div
//           style={{ opacity: newComponentOpacity, y: newComponentY }}
//           className="absolute inset-0 z-20"
//         >
//           <NewComponent />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;


// "use client";

// import React, { useRef } from "react";
// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";

// // icons import
// import checkoutIcon from "../../public/asset/Images/icons/checkout.png";
// import searchIcon from "../../public/asset/Images/icons/search.png";
// import uploadIcon from "../../public/asset/Images/icons/upload.png";
// import categoryIcon from "../../public/asset/Images/icons/category.png";
// import supportIcon from "../../public/asset/Images/icons/support.png";
// import starIcon from "../../public/asset/Images/icons/star.png";
// import favoritesIcon from "../../public/asset/Images/icons/favorites.png";
// import downloadIcon from "../../public/asset/Images/icons/downlode.png";
// import communityIcon from "../../public/asset/Images/icons/community.png";
// import priceTagIcon from "../../public/asset/Images/icons/priceTag.png";
// import threeDIcon from "../../public/asset/Images/icons/3d.png";

// const icons = [
//   // Har icon ke 'y' value ko adjust kiya hai taaki destination point thoda niche shift ho jaye
//   { src: threeDIcon, className: "top-14 left-[15%]", x: 0.8, y: 1.1, range: [0, 0.2] },
//   { src: checkoutIcon, className: "top-[15%] right-[15%]", x: -0.8, y: 1.1, range: [0, 0.2] },
//   { src: priceTagIcon, className: "top-[25%] left-[24%]", x: 0.6, y: 0.8, range: [0.05, 0.25] },
//   { src: communityIcon, className: "top-[36%] left-[13%]", x: 0.8, y: 0.6, range: [0.1, 0.3] },
//   { src: searchIcon, className: "top-[35%] right-[22%]", x: -0.6, y: 0.7, range: [0.1, 0.3] },
//   { src: uploadIcon, className: "top-[50%] right-[10%]", x: -0.9, y: 0.4, range: [0.15, 0.35] },
//   { src: downloadIcon, className: "top-[52%] left-[26%]", x: 0.5, y: 0.4, range: [0.15, 0.35] },
//   { src: favoritesIcon, className: "bottom-[25%] left-[14%]", x: 0.8, y: -0.1, range: [0.2, 0.4] },
//   { src: categoryIcon, className: "bottom-[22%] right-[24%]", x: -0.5, y: -0.2, range: [0.2, 0.4] },
//   { src: starIcon, className: "bottom-[12%] left-[30%]", x: 0.4, y: -0.4, range: [0.25, 0.45] },
//   { src: supportIcon, className: "bottom-[12%] left-[45%]", x: 0.1, y: -0.5, range: [0.25, 0.45] },
// ];

// const NewComponent = () => {
//   return (
//     <div className="flex flex-col items-center justify-center text-center h-full">
//       <h2 className="text-4xl md:text-5xl font-bold mb-4">Next Section Title</h2>
//       <p className="text-neutral-400 max-w-2xl">
//         This is the new component that appears after the hero section animations are complete.
//       </p>
//     </div>
//   );
// };

// const HeroSection: React.FC = () => {
//   const targetRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//     offset: ["start start", "end end"],
//   });

//   const headingOpacity = useTransform(scrollYProgress, [0.35, 0.5], [1, 0]);
//   const headingY = useTransform(scrollYProgress, [0.35, 0.5], ["0%", "-50%"]);

//   const subheadingOpacity = useTransform(scrollYProgress, [0.4, 0.55], [1, 0]);
//   const subheadingY = useTransform(scrollYProgress, [0.4, 0.55], ["0%", "-50%"]);

//   const buttonOpacity = useTransform(scrollYProgress, [0.45, 0.6], [1, 0]);
//   const buttonY = useTransform(scrollYProgress, [0.45, 0.6], ["0%", "-50%"]);

//   const newComponentOpacity = useTransform(scrollYProgress, [0.65, 0.8], [0, 1]);
//   const newComponentY = useTransform(scrollYProgress, [0.65, 0.8], ["50%", "0%"]);

//   return (
//     <div ref={targetRef} className="relative h-[350vh] w-full bg-black">
//       <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden text-white">
//         {/* background blobs */}
//         <div className="absolute left-[10%] h-[300px] w-[300px] bg-red-500/50 rounded-full blur-[150px] z-0"></div>
//         <div className="absolute right-[50%] top-1/2 h-[300px] w-[300px] bg-cyan-300/30 rounded-full blur-[100px] z-0"></div>

//         {/* center content */}
//         <div className="relative z-20 text-center flex flex-col items-center">
//           <motion.h1 
//             style={{ opacity: headingOpacity, y: headingY }}
//             className="text-4xl md:text-6xl font-bold mb-4 h-[160px] md:h-[192px]"
//           >
//             <TypeAnimation
//               sequence={[
//                 'Discover, Buy, and Sell\nDigital Products',
//                 2000,
//                 'Explore a Universe of\nCreative Assets',
//                 2000,
//                 'Unleash Your Imagination\nwith 3D Models',
//                 2000,
//                 'Join a Community of\nDigital Creators',
//                 2000,
//               ]}
//               wrapper="span"
//               speed={50}
//               repeat={Infinity}
//               cursor={true}
//               style={{ whiteSpace: 'pre-line', display: 'inline-block' }}
//             />
//           </motion.h1>
//           <motion.p 
//             style={{ opacity: subheadingOpacity, y: subheadingY }}
//             className="text-neutral-400 mb-9"
//           >
//             Your one-stop digital platform for 3D models and digital creations. <br />
//             Join our community of creators and collectors today.
//           </motion.p>
//           <motion.button 
//             style={{ opacity: buttonOpacity, y: buttonY }}
//             className="relative z-20 px-6 py-3 rounded-full bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 transition"
//           >
//             Explore all products
//           </motion.button>
//         </div>

//         {/* scattered icons */}
//         {icons.map((icon, i) => {
//             const opacity = useTransform(scrollYProgress, icon.range, [1, 0]);
//             const scale = useTransform(scrollYProgress, icon.range, [1, 0.2]);
//             const x = useTransform(scrollYProgress, icon.range, ["0vw", `${icon.x * 40}vw`]);
//             const y = useTransform(scrollYProgress, icon.range, ["0vh", `${icon.y * 40}vh`]);

//             return (
//                 <motion.div
//                     key={i}
//                     style={{ opacity, scale, x, y }}
//                     className={`absolute z-10 flex items-center justify-center rounded-full backdrop-blur-lg bg-white/10 shadow-[0px_2px_10px_rgba(0,0,0,0.1)] p-3.5 border border-white/10 w-[60px] h-[60px] ${icon.className}`}
//                 >
//                     <Image src={icon.src} alt={`icon-${i}`} width={28} height={28} />
//                 </motion.div>
//             );
//         })}

//         {/* Naya component jo fade in hoga */}
//         <motion.div
//           style={{ opacity: newComponentOpacity, y: newComponentY }}
//           className="absolute inset-0 z-30"
//         >
//           <NewComponent />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;




// "use client";

// import React, { useRef } from "react";
// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
// import PlatformSection from "./PlatformSection"; // Naya component import kiya

// // icons import
// import checkoutIcon from "../../public/asset/Images/icons/checkout.png";
// import searchIcon from "../../public/asset/Images/icons/search.png";
// import uploadIcon from "../../public/asset/Images/icons/upload.png";
// import categoryIcon from "../../public/asset/Images/icons/category.png";
// import supportIcon from "../../public/asset/Images/icons/support.png";
// import starIcon from "../../public/asset/Images/icons/star.png";
// import favoritesIcon from "../../public/asset/Images/icons/favorites.png";
// import downloadIcon from "../../public/asset/Images/icons/downlode.png";
// import communityIcon from "../../public/asset/Images/icons/community.png";
// import priceTagIcon from "../../public/asset/Images/icons/priceTag.png";
// import threeDIcon from "../../public/asset/Images/icons/3d.png";

// const icons = [
//   { src: threeDIcon, className: "top-14 left-[15%]", x: 0.8, y: 1.1, range: [0, 0.2] },
//   { src: checkoutIcon, className: "top-[15%] right-[15%]", x: -0.8, y: 1.1, range: [0, 0.2] },
//   { src: priceTagIcon, className: "top-[25%] left-[24%]", x: 0.6, y: 0.8, range: [0.05, 0.25] },
//   { src: communityIcon, className: "top-[36%] left-[13%]", x: 0.8, y: 0.6, range: [0.1, 0.3] },
//   { src: searchIcon, className: "top-[35%] right-[22%]", x: -0.6, y: 0.7, range: [0.1, 0.3] },
//   { src: uploadIcon, className: "top-[50%] right-[10%]", x: -0.9, y: 0.4, range: [0.15, 0.35] },
//   { src: downloadIcon, className: "top-[52%] left-[26%]", x: 0.5, y: 0.4, range: [0.15, 0.35] },
//   { src: favoritesIcon, className: "bottom-[25%] left-[14%]", x: 0.8, y: -0.1, range: [0.2, 0.4] },
//   { src: categoryIcon, className: "bottom-[22%] right-[24%]", x: -0.5, y: -0.2, range: [0.2, 0.4] },
//   { src: starIcon, className: "bottom-[12%] left-[30%]", x: 0.4, y: -0.4, range: [0.25, 0.45] },
//   { src: supportIcon, className: "bottom-[12%] left-[45%]", x: 0.1, y: -0.5, range: [0.25, 0.45] },
// ];

// const HeroSection: React.FC = () => {
//   const targetRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//     offset: ["start start", "end end"],
//   });

//   const headingOpacity = useTransform(scrollYProgress, [0.35, 0.5], [1, 0]);
//   const headingY = useTransform(scrollYProgress, [0.35, 0.5], ["0%", "-50%"]);

//   const subheadingOpacity = useTransform(scrollYProgress, [0.4, 0.55], [1, 0]);
//   const subheadingY = useTransform(scrollYProgress, [0.4, 0.55], ["0%", "-50%"]);

//   const buttonOpacity = useTransform(scrollYProgress, [0.45, 0.6], [1, 0]);
//   const buttonY = useTransform(scrollYProgress, [0.45, 0.6], ["0%", "-50%"]);

//   const newComponentOpacity = useTransform(scrollYProgress, [0.65, 0.8], [0, 1]);
//   const newComponentY = useTransform(scrollYProgress, [0.65, 0.8], ["50%", "0%"]);

//   return (
//     <div ref={targetRef} className="relative h-[350vh] w-full bg-black">
//       <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden text-white">
//         {/* background blobs */}
//         <div className="absolute left-[10%] h-[300px] w-[300px] bg-red-500/50 rounded-full blur-[150px] z-0"></div>
//         <div className="absolute right-[50%] top-1/2 h-[300px] w-[300px] bg-cyan-300/30 rounded-full blur-[100px] z-0"></div>

//         {/* center content */}
//         <div className="relative z-20 text-center flex flex-col items-center">
//           <motion.h1 
//             style={{ opacity: headingOpacity, y: headingY }}
//             className="text-4xl md:text-6xl font-bold mb-4 h-[160px] md:h-[192px]"
//           >
//             <TypeAnimation
//               sequence={[
//                 'Discover, Buy, and Sell\nDigital Products',
//                 2000,
//                 'Explore a Universe of\nCreative Assets',
//                 2000,
//                 'Unleash Your Imagination\nwith 3D Models',
//                 2000,
//                 'Join a Community of\nDigital Creators',
//                 2000,
//               ]}
//               wrapper="span"
//               speed={50}
//               repeat={Infinity}
//               cursor={true}
//               style={{ whiteSpace: 'pre-line', display: 'inline-block' }}
//             />
//           </motion.h1>
//           <motion.p 
//             style={{ opacity: subheadingOpacity, y: subheadingY }}
//             className="text-neutral-400 mb-9"
//           >
//             Your one-stop digital platform for 3D models and digital creations. <br />
//             Join our community of creators and collectors today.
//           </motion.p>
//           <motion.button 
//             style={{ opacity: buttonOpacity, y: buttonY }}
//             className="relative z-20 px-6 py-3 rounded-full bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 transition"
//           >
//             Explore all products
//           </motion.button>
//         </div>

//         {/* scattered icons */}
//         {icons.map((icon, i) => {
//             const opacity = useTransform(scrollYProgress, icon.range, [1, 0]);
//             const scale = useTransform(scrollYProgress, icon.range, [1, 0.2]);
//             const x = useTransform(scrollYProgress, icon.range, ["0vw", `${icon.x * 40}vw`]);
//             const y = useTransform(scrollYProgress, icon.range, ["0vh", `${icon.y * 40}vh`]);

//             return (
//                 <motion.div
//                     key={i}
//                     style={{ opacity, scale, x, y }}
//                     className={`absolute z-10 flex items-center justify-center rounded-full backdrop-blur-lg bg-white/10 shadow-[0px_2px_10px_rgba(0,0,0,0.1)] p-3.5 border border-white/10 w-[60px] h-[60px] ${icon.className}`}
//                 >
//                     <Image src={icon.src} alt={`icon-${i}`} width={28} height={28} />
//                 </motion.div>
//             );
//         })}

//         {/* Naya component jo fade in hoga */}
//         <motion.div
//           style={{ opacity: newComponentOpacity, y: newComponentY }}
//           className="absolute inset-0 z-30"
//         >
//           {/* Purane NewComponent ki jagah ab PlatformSection aa gaya */}
//           <PlatformSection />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;



"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import PlatformSection from "./PlatformSection";

// icons import
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

const icons = [
  { src: threeDIcon, className: "top-14 left-[15%]", x: 0.8, y: 1.1, range: [0, 0.2] },
  { src: checkoutIcon, className: "top-[15%] right-[15%]", x: -0.8, y: 1.1, range: [0, 0.2] },
  { src: priceTagIcon, className: "top-[25%] left-[24%]", x: 0.6, y: 0.8, range: [0.05, 0.25] },
  { src: communityIcon, className: "top-[36%] left-[13%]", x: 0.8, y: 0.6, range: [0.1, 0.3] },
  { src: searchIcon, className: "top-[35%] right-[22%]", x: -0.6, y: 0.7, range: [0.1, 0.3] },
  { src: uploadIcon, className: "top-[50%] right-[10%]", x: -0.9, y: 0.4, range: [0.15, 0.35] },
  { src: downloadIcon, className: "top-[52%] left-[26%]", x: 0.5, y: 0.4, range: [0.15, 0.35] },
  { src: favoritesIcon, className: "bottom-[25%] left-[14%]", x: 0.8, y: -0.1, range: [0.2, 0.4] },
  { src: categoryIcon, className: "bottom-[22%] right-[24%]", x: -0.5, y: -0.2, range: [0.2, 0.4] },
  { src: starIcon, className: "bottom-[12%] left-[30%]", x: 0.4, y: -0.4, range: [0.25, 0.45] },
  { src: supportIcon, className: "bottom-[12%] left-[45%]", x: 0.1, y: -0.5, range: [0.25, 0.45] },
];

const HeroSection: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const headingOpacity = useTransform(scrollYProgress, [0.35, 0.5], [1, 0]);
  const headingY = useTransform(scrollYProgress, [0.35, 0.5], ["0%", "-50%"]);

  const subheadingOpacity = useTransform(scrollYProgress, [0.4, 0.55], [1, 0]);
  const subheadingY = useTransform(scrollYProgress, [0.4, 0.55], ["0%", "-50%"]);

  const buttonOpacity = useTransform(scrollYProgress, [0.45, 0.6], [1, 0]);
  const buttonY = useTransform(scrollYProgress, [0.45, 0.6], ["0%", "-50%"]);

  const newComponentOpacity = useTransform(scrollYProgress, [0.65, 0.8], [0, 1]);
  const newComponentY = useTransform(scrollYProgress, [0.65, 0.8], ["50%", "0%"]);

  return (
    <div ref={targetRef} className="relative h-[350vh] w-full bg-black">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden text-white">
        {/* background blobs */}
        <div className="absolute left-[10%] h-[300px] w-[300px] bg-red-500/50 rounded-full blur-[150px] z-0"></div>
        <div className="absolute right-[50%] top-1/2 h-[300px] w-[300px] bg-cyan-300/30 rounded-full blur-[100px] z-0"></div>

        {/* center content */}
        <div className="relative z-20 text-center flex flex-col items-center">
          <motion.h1 
            style={{ opacity: headingOpacity, y: headingY }}
            className="text-4xl md:text-6xl font-bold mb-4 h-[160px] md:h-[192px]"
          >
            <TypeAnimation
              sequence={[
                'Discover, Buy, and Sell\nDigital Products',
                2000,
                'Explore a Universe of\nCreative Assets',
                2000,
                'Unleash Your Imagination\nwith 3D Models',
                2000,
                'Join a Community of\nDigital Creators',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
              style={{ whiteSpace: 'pre-line', display: 'inline-block' }}
            />
          </motion.h1>
          <motion.p 
            style={{ opacity: subheadingOpacity, y: subheadingY }}
            className="text-neutral-400 mb-9"
          >
            Your one-stop digital platform for 3D models and digital creations. <br />
            Join our community of creators and collectors today.
          </motion.p>
          {/* --- BUTTON UPDATED HERE --- */}
          <motion.button 
            style={{ opacity: buttonOpacity, y: buttonY }}
            className="relative z-20 inline-flex items-center justify-center rounded-full font-medium transition-colors whitespace-nowrap overflow-hidden border border-neutral-700 text-neutral-300 hover:bg-neutral-800 w-[156px] sm:w-[15rem] py-[0.514rem] px-[0.9375rem] sm:py-3.5 sm:px-6 shiny-btn"
          >
            Explore all products
          </motion.button>
        </div>

        {/* scattered icons */}
        {icons.map((icon, i) => {
            const opacity = useTransform(scrollYProgress, icon.range, [1, 0]);
            const scale = useTransform(scrollYProgress, icon.range, [1, 0.2]);
            const x = useTransform(scrollYProgress, icon.range, ["0vw", `${icon.x * 40}vw`]);
            const y = useTransform(scrollYProgress, icon.range, ["0vh", `${icon.y * 40}vh`]);

            return (
                <motion.div
                    key={i}
                    style={{ opacity, scale, x, y }}
                    className={`absolute z-10 flex items-center justify-center rounded-full backdrop-blur-lg bg-white/10 shadow-[0px_2px_10px_rgba(0,0,0,0.1)] p-3.5 border border-white/10 w-[60px] h-[60px] ${icon.className}`}
                >
                    <Image src={icon.src} alt={`icon-${i}`} width={28} height={28} />
                </motion.div>
            );
        })}

        {/* Naya component jo fade in hoga */}
        <motion.div
          style={{ opacity: newComponentOpacity, y: newComponentY }}
          className="absolute inset-0 z-30"
        >
          <PlatformSection />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;