import React, { useState, useEffect } from "react";

import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Sticky = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dropdownCategories = [
    "Power Sanders",
    "Projector Accessories",
    "Kitchen Fittings",
    "Womens Fashion",
    "Donate to Healthcare",
    "Goat",
    "Watches & Accessories",
    "Garden Hoses",
    "Lamp Shades",
    "Margarine & Spread",
    "Bedding Sets",
    "Pools",
    "Bathroom Lighting",
    "Eye Primers",
    "Digital Downloads",
    "Traditional Laptops",
  ];
  // মেগা ড্রপডাউনের জন্য মোশন অ্যানিমেশন কনফিগারেশন
  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: 15,
      scale: 0.97,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 18,
        // ড্রপডাউন খোলার পর ভেতরের আইটেমগুলো একে একে আসার জন্য স্ট্যাগার ইফেক্ট
        staggerChildren: 0.02,
      },
    },
    exit: {
      opacity: 0,
      y: 10,
      scale: 0.98,
      transition: { duration: 0.15 },
    },
  };

  // প্রতিটি সিঙ্গেল ক্যাটাগরি টেক্সটের হালকা এন্ট্রান্স অ্যানিমেশন
  const itemVariants = {
    hidden: { opacity: 0, x: -5 },
    visible: { opacity: 1, x: 0 },
  };
  useEffect(() => {
    const handleScroll = () => {
      // ইউজার যদি ৮০ পিক্সেলের বেশি স্ক্রল করে, তবে ক্যাটাগরি হেডারটি স্টিকি হবে
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // মেমোরি লিক বন্ধ করতে ক্লিনআপ ফাংশন
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="w-full relative z-50">
      {/* ২. ক্যাটাগরি হেডার (যা স্ক্রল করলে ওপরে আটকে থাকবে) */}
      <div
        // আপনার স্টিকি হেডারের মেইন ডিভটি এডিট করে এটি লিখুন:
        className={`w-full bg-white border-b border-gray-200 z-40 ${isSticky ? "fixed top-0 left-0 right-0 shadow-md translate-y-0 opacity-100 block" : "absolute  hidden -top-20 opacity-0"}`}
      >
        <div className=" md:w-full max-w-[1500px] mx-auto md:h-12 h-8  flex items-center md:gap-6 gap-1 px-1 sm:p-2 md:p-4 text-[9px] sm:text-[11px] md:text-[13px] font-medium text-gray-700 relative">
          {/* ==================== All Categories (Framer Motion Hover Area) ==================== */}
          <div
            className="relative h-full flex items-center "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* মেনু বাটন + মোশন এরো আইকন */}
            <span className="text-orange-500 font-semibold cursor-pointer flex items-center gap-1 h-full select-none">
              All Categories
              <motion.div
                animate={{ rotate: isHovered ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <ChevronDown size={14} />
              </motion.div>
            </span>

            {/* AnimatePresence এর ফলে মাউস সরিয়ে নিলে ক্লোজিং অ্যানিমেশন পারফেক্ট কাজ করবে */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full left-0 mt-0 bg-white border border-gray-200 shadow-xl rounded-b-md md:p-4 p-2 z-50 w-[calc(100vw-150px)] sm:w-[500px] md:w-[700px] lg:w-[900px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"
                >
                  {dropdownCategories.map((cat, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ x: 4, scale: 1.01 }}
                      className="p-1 text-gray-600 hover:text-orange-500 hover:bg-orange-50/50 rounded-sm cursor-pointer transition-colors duration-150 whitespace-normal"
                    >
                      {cat}
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* ====================================================================== */}
          {/* আপনার ছবি অনুযায়ী কয়েকটি ক্যাটাগরি নাম */}

          <span className="cursor-pointer hover:text-orange-500">
            Power Sanders
          </span>
          <span className="cursor-pointer hover:text-orange-500">
            Kitchen Fittings
          </span>
          <span className="cursor-pointer hover:text-orange-500">
            Womens Fashion
          </span>
          <span className="cursor-pointer hover:text-orange-500">
            Watches and Accessories
          </span>
          <span className="cursor-pointer hover:text-orange-500">
            Traditional Laptops
          </span>
          <span className="cursor-pointer hover:text-orange-500">
            Bedding Sets
          </span>
        </div>
      </div>
    </header>
  );
};
export default Sticky;
