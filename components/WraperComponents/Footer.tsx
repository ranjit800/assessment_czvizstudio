import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-neutral-300 border-t border-neutral-800">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12 py-8 lg:py-10">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-8">
          {/* Left section: Product Hunt + Social */}
          <div className="flex flex-col gap-4 w-full lg:w-auto">
            <a
              href="https://www.producthunt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="self-start"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=12345&theme=light"
                alt="Product Hunt"
                className="h-10 sm:h-12"
              />
            </a>

            {/* Social icons */}
            <div className="flex gap-4 text-lg sm:text-xl">
              <FaXTwitter className="cursor-pointer hover:text-white transition-colors" />
              <FaFacebookF className="cursor-pointer hover:text-white transition-colors" />
              <FaInstagram className="cursor-pointer hover:text-white transition-colors" />
              <FaYoutube className="cursor-pointer hover:text-white transition-colors" />
              <FaLinkedinIn className="cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col sm:flex-row w-full lg:w-auto items-stretch sm:items-center gap-3 sm:gap-2">
            <input
              type="email"
              placeholder="Subscribe to our newsletter"
              className="flex-1 rounded-full bg-neutral-900 px-4 py-3 sm:py-2 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-3 sm:px-5 sm:py-2 rounded-full bg-blue-900 text-white font-medium hover:bg-blue-800 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-8 lg:mt-10 text-sm">
          <div>
            <h4 className="font-semibold text-white mb-3 text-base">3DIMLI</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors block py-1">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3 text-base">Discover</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors block py-1">
                  3D Models
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors block py-1">
                  Ebooks
                </a>
              </li>
              <li>
                <span className="text-neutral-500 block py-1">More Coming Soon...</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3 text-base">Policies</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors block py-1">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors block py-1">
                  Acceptable Use Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors block py-1">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors block py-1">
                  Terms Of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors block py-1">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3 text-base">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors block py-1">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors block py-1">
                  Help Center
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-neutral-800 mt-8 lg:mt-10 pt-6 text-xs text-neutral-500 text-center">
          © 2024 – 2025 3DIMLI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
