"use client";

import React, { useState } from "react";
import Image from "next/image";
import logImg from "../../public/asset/Logo.svg";
import { Search, Upload, User } from "lucide-react";
import { FaDiscord } from "react-icons/fa";

interface NavLink {
  label: string;
  href: string;
}

interface RightButton {
  label: string;
  icon: React.ReactNode;
  className: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "#" },
  { label: "Discover", href: "#" },
  { label: "Features", href: "#" },
  { label: "Pricing", href: "#" },
];

const rightButtons: RightButton[] = [
  {
    label: "Discord",
    icon: <FaDiscord size={30} />,
    className:
      "flex items-center gap-2 bg-gradient-to-l from-gray-900 to-[#032861] px-4 py-2 rounded-xl font-medium hover:opacity-90 transition",
  },
  {
    label: "Upload",
    icon: <Upload size={25} />,
    className:
      "shiny-btn flex items-center gap-2 bg-gradient-to-l from-gray-900 to-[#032861] px-4 py-2 rounded-xl font-medium hover:opacity-90 transition",
  },
];

const Navbar: React.FC = () => {
  const [mobileSearchOpen, setMobileSearchOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-200/70 bg-white dark:border-transparent dark:bg-neutral-900 transition-colors duration-300 ease-in-out md:px-10 px-3 lg:px-14">
      <div className="max-w-full mx-auto flex h-16 justify-between items-center sm:h-20 ">
        {/* Split into two main sections */}
        <div className="flex items-center gap-10 flex-1">
          {/* ===== Left (Logo + BETA) ===== */}
          {!mobileSearchOpen && (
            <div className="flex items-center gap-0.5">
              <Image src={logImg} alt="3dimli logo" width={120} height={40} className="h-9 w-auto" />
              {/* BETA with separators */}
              <div className="ml-2 flex flex-col justify-center text-[10px] leading-none text-neutral-500 dark:text-neutral-400 border-l border-neutral-300 dark:border-l-neutral-700 pl-2 h-full">
                <span>BETA</span>
                <span>1.0.1</span>
              </div>
            </div>
          )}

          {/* ===== Desktop Nav Links ===== */}
          <div className="hidden lg:flex items-center gap-2 border-l border-neutral-300 dark:border-neutral-700 pl-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-opacity-80 nc-menu-lv1 group relative inline-flex h-10 items-center px-3 py-1.5 text-sm font-medium text-neutral-800 hover:text-opacity-100 focus:outline-none focus-visible:ring-0 sm:h-12 dark:text-neutral-300"
              >
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-5 flex-shrink-0">
          {/* ===== Desktop Search Bar ===== */}
          <div className="hidden lg:flex items-center bg-neutral-100 dark:bg-[#111111d9] border border-neutral-300 dark:border-neutral-700 rounded-2xl w-[30rem] px-2 py-2 relative">
            <input
              type="search"
              title="search"
              placeholder="Search..."
              className="peer/search pl-3 bg-transparent pr-1 border-none ring-0 w-full placeholder:text-neutral-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:text-neutral-50 dark:focus:ring-slate-400 dark:focus:border-slate-400 z-20 rounded-full"
            />
            <span className="h-6 w-[1px] bg-neutral-300 dark:bg-neutral-700 mx-2"></span>
            <Search size={26} className="text-gray-400 mr-2" />
          </div>

          {/* ===== Desktop Right Buttons ===== */}
          <div className="hidden lg:flex items-center gap-3">
            {rightButtons.map((btn) => (
              <button key={btn.label} className={`${btn.className} relative group overflow-hidden`}>
                {/* Hover overlay */}
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 ease-in-out"></span>

                {/* Button content */}
                <span className="relative flex items-center gap-4">
                  {btn.icon}
                  {btn.label}
                </span>
              </button>
            ))}

            {/* User Icon Button */}
            <button className="relative group p-2 border border-neutral-700 rounded-full transition overflow-hidden">
              {/* Hover overlay */}
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 ease-in-out"></span>

              {/* Icon above overlay */}
              <span className="relative">
                <User size={30} />
              </span>
            </button>
          </div>

          {/* ===== Mobile Search Toggle ===== */}
          <div className="lg:hidden flex-1 flex justify-end">
            {!mobileSearchOpen ? (
              <button className="p-2 rounded-md hover:bg-neutral-800" onClick={() => setMobileSearchOpen(true)}>
                <Search size={22} />
              </button>
            ) : (
              <div className="flex items-center bg-neutral-100 dark:bg-[#111] border border-neutral-300 dark:border-neutral-700 rounded-full w-full px-2 py-2 relative">
                <input
                  type="search"
                  title="search"
                  placeholder="Search..."
                  className="peer/search pl-3 bg-transparent pr-1 border-none ring-0 w-full placeholder:text-neutral-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:text-neutral-50 dark:focus:ring-slate-400 dark:focus:border-slate-400 z-20 rounded-full"
                />
                <button className="ml-2 text-gray-400" onClick={() => setMobileSearchOpen(false)}>
                  ✕
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
