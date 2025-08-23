// "use client";

// import React from "react";
// import { motion, Variants } from "framer-motion"; 
// import { ArrowRight } from "lucide-react";

// const PlatformSection: React.FC = () => {

//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//       },
//     },
//   };

//   const itemVariants: Variants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };
  
//   const videoVariants: Variants = {
//     hidden: { opacity: 0, x: 50 },
//     visible: {
//         opacity: 1,
//         x: 0,
//         transition: {
//             duration: 0.8,
//             ease: [0.25, 1, 0.5, 1],
//         },
//     },
//   };

//   return (
//     <div className="relative h-screen w-full bg-transparent text-white flex flex-col justify-center items-center p-8 md:p-16">
      
//       <motion.div 
//         className="relative z-10 w-full max-w-6xl"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
//           <div className="flex flex-col text-center md:text-left">
//             <motion.p variants={itemVariants} className="text-sm font-semibold text-neutral-400 mb-2">MEET 3DIMLI</motion.p>
//             <motion.h2 variants={itemVariants} className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
//               Your All-in-one Digital Commerce Platform
//             </motion.h2>
//             <motion.p variants={itemVariants} className="text-neutral-300 mb-8">
//               <span className="font-semibold">Sell 3D Models, E-books, and digital products</span> effortlessly. Manage your store, deliver products seamlessly, and reach a global audience.
//             </motion.p>
//             {/* --- BUTTON UPDATED HERE --- */}
//             <motion.button 
//               variants={itemVariants} 
//               className="relative inline-flex items-center justify-center rounded-full font-medium transition-colors whitespace-nowrap overflow-hidden border border-neutral-700 text-neutral-300 hover:bg-neutral-800 w-[150px] sm:w-[13rem] py-1.5 px-5 text-sm sm:text-base shiny-btn self-center md:self-start"
//             >
//               Start Selling Now
//             </motion.button>
//           </div>

//           <motion.div 
//             variants={videoVariants}
//             className="relative h-64 md:h-80 w-full rounded-l-full overflow-hidden"
//           >
//             <video
//               src="/asset/Videos/Video.webm"
//               autoPlay
//               loop
//               muted
//               playsInline
//               className="w-full h-full object-cover"
//             />
//           </motion.div>
//         </div>

//         <div className="flex flex-col md:flex-row justify-between items-center mt-16 md:mt-24 text-center">
//           <motion.div variants={itemVariants} className="md:w-1/3 p-4">
//             <h3 className="text-xl font-bold">Global</h3>
//             <p className="text-[#ee8156]">For creators worldwide.</p>
//           </motion.div>
          
//           <motion.div variants={itemVariants} className="hidden md:block h-12 w-px bg-neutral-700"></motion.div>
          
//           <motion.div variants={itemVariants} className="md:w-1/3 p-4">
//             <h3 className="text-xl font-bold">Earnings</h3>
//             <p className="text-[#ee8156]">Keep 100% of what you earn.</p>
//           </motion.div>

//           <motion.div variants={itemVariants} className="hidden md:block h-12 w-px bg-neutral-700"></motion.div>

//           <motion.div variants={itemVariants} className="md:w-1-3 p-4">
//             <h3 className="text-xl font-bold">Support</h3>
//             <p className="text-[#ee8156]">We've got your back.</p>
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default PlatformSection;

// "use client";

// import React from "react";
// import { motion, Variants } from "framer-motion"; 
// import ShinyButton from "../ShinyButton";

// const PlatformSection: React.FC = () => {

//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         // --- YEH FINAL FIX HAI ---
//         // Animation shuru hone mein halka sa delay add kiya hai
//         // Isse jab section screen par aayega, uske baad animation shuru hoga
//         delay: 0.3, 
//         staggerChildren: 0.15,
//       },
//     },
//   };

//   const itemVariants: Variants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };
  
//   const videoVariants: Variants = {
//     hidden: { opacity: 0, x: 50 },
//     visible: {
//         opacity: 1,
//         x: 0,
//         transition: {
//             duration: 0.8,
//             ease: [0.25, 1, 0.5, 1],
//         },
//     },
//   };

//   return (
//     <div className="relative md:h-screen h-auto w-full bg-transparent text-white flex flex-col justify-center items-center p-2 sm:p-8 md:p-16 mt-10">
      
//       <motion.div 
//         className="relative z-10 w-full max-w-6xl"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
//           <div className="flex flex-col text-center md:text-left md:pt-0 pt-16 ">
//             <motion.p variants={itemVariants} className="text-sm font-semibold text-neutral-400 mb-2">MEET 3DIMLI</motion.p>
//             <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 leading-tight">
//               Your All-in-one Digital Commerce Platform
//             </motion.h2>
//             <motion.p variants={itemVariants} className="text-neutral-300 md:mb-8 mb-4">
//               <span className="font-bold">Sell 3D Models, E-books, and digital products</span> effortlessly. Manage your store, deliver products seamlessly, and reach a global audience.
//             </motion.p>
//             <div className="self-center md:self-start">
//                 <ShinyButton 
//                     title="Start Selling Now" 
//                     motionProps={{ variants: itemVariants }} 
//                 />
//             </div>
//           </div>

//           <motion.div 
//             variants={videoVariants}
//             className="relative w-full rounded-l-full overflow-hidden h-64 sm:h-auto"
//           >
//             <video
//               src="/asset/Videos/Video.webm"
//               autoPlay
//               loop
//               muted
//               playsInline
//               className="w-full h-full object-cover"
//             />
//           </motion.div>
//         </div>

//         <div className="flex flex-row justify-between items-center mt-9 md:mt-24 text-center md:gap-8 ">
//           <motion.div variants={itemVariants} className="md:w-1/3 md:p-4 p-2">
//             <h3 className="text-xl font-bold">Global</h3>
//             <p className="text-orange-400 text-sm md:text-base">For creators worldwide.</p>
//           </motion.div>
          
//           <motion.div variants={itemVariants} className=" h-12 w-px bg-neutral-700"></motion.div>
          
//           <motion.div variants={itemVariants} className="md:w-1/3 p-4">
//             <h3 className="text-xl font-bold">Earnings</h3>
//             <p className="text-orange-400 text-sm md:text-base">Keep 100% of what you earn.</p>
//           </motion.div>

//           <motion.div variants={itemVariants} className=" h-12 w-px bg-neutral-700"></motion.div>

//           <motion.div variants={itemVariants} className="md:w-1/3 p-4">
//             <h3 className="text-xl font-bold">Support</h3>
//             <p className="text-orange-400 text-sm md:text-base">We&apos;ve got your back.</p>
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default PlatformSection;



"use client";

import React from "react";
import { motion, MotionValue } from "framer-motion"; 
import ShinyButton from "../ShinyButton";

// Component ke props ko update kiya hai taaki woh animation values le sake
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
    <div className="relative md:h-screen h-auto w-full bg-transparent text-white flex flex-col justify-center items-center p-2 sm:p-8 md:p-16 mt-10">
      
      <div className="relative z-10 w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div 
            style={{ opacity: textOpacity, y: textY }}
            className="flex flex-col text-center md:text-left md:pt-0 pt-16"
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

          <motion.div 
            style={{ opacity: videoOpacity, x: videoX }}
            className="relative w-full rounded-l-full overflow-hidden h-64 sm:h-auto"
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

        <div className="flex flex-row justify-between items-center mt-9 md:mt-24 text-center md:gap-8 ">
          <motion.div style={{ opacity: globalOpacity }} className="md:w-1/3 md:p-4 p-2">
            <h3 className="text-xl font-bold">Global</h3>
            <p className="text-orange-400 text-sm md:text-base">For creators worldwide.</p>
          </motion.div>
          
          <motion.div style={{ opacity: globalOpacity }} className=" h-12 w-px bg-neutral-700"></motion.div>
          
          <motion.div style={{ opacity: earningsOpacity }} className="md:w-1/3 p-4">
            <h3 className="text-xl font-bold">Earnings</h3>
            <p className="text-orange-400 text-sm md:text-base">Keep 100% of what you earn.</p>
          </motion.div>

          <motion.div style={{ opacity: earningsOpacity }} className=" h-12 w-px bg-neutral-700"></motion.div>

          <motion.div style={{ opacity: supportOpacity }} className="md:w-1/3 p-4">
            <h3 className="text-xl font-bold">Support</h3>
            <p className="text-orange-400 text-sm md:text-base">We&apos;ve got your back.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PlatformSection;