import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, LogOut, ShoppingBag, LogIn, UserPlus, ChevronDown, Menu } from 'lucide-react';
import {Link} from "react-router";

const ProfileDropdown = () => {
  // ইউজার লগইন আছে কিনা তা ট্র্যাক করার স্টেট (টেস্ট করার জন্য true/false পরিবর্তন করুন)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // ড্রপডাউনের বাইরে ক্লিক করলে ড্রপডাউন বন্ধ করার জন্য ইফেক্ট
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // ফ্রেমার মোশন অ্যানিমেশন ভেরিয়েন্ট
  const dropdownVariants = {
    hidden: { opacity: 0, y: -15, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      scale: 0.95,
      transition: { duration: 0.15, ease: "easeIn" }
    }
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* প্রোফাইল ট্রিগার বাটন */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full border border-gray-200 hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-500 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 transition-all shadow-sm active:scale-95"
      >
        {/* রেসপন্সিভনেস: মোবাইলে মেনু আইকন দেখাবে, বড় স্ক্রিনে সুন্দর বর্ডার দেখাবে */}
        <Menu className="w-4 h-4 md:hidden" />
        
        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-semibold">
          {isLoggedIn ? 'U' : <User className="w-4 h-4" />}
        </div>
        
        <span className="hidden md:inline text-sm font-medium">
          {isLoggedIn ? 'আমার অ্যাকাউন্ট' : 'অ্যাকাউন্ট'}
        </span>
        
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="hidden md:block"
        >
          <ChevronDown className="w-4 h-4 opacity-70" />
        </motion.div>
      </button>

      {/* ড্রপডাউন মেনু (অ্যানিমেশন সহ) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute right-0 mt-2 w-56 rounded-2xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none z-50 overflow-hidden"
          >
            <div className="p-1.5 space-y-1">
              {isLoggedIn ? (
                // লগইন করা থাকলে এই অপশনগুলো দেখাবে
                <>
                  <div className="px-3 py-2 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                    ইউজার প্যানেল
                  </div>
                  
                  <button className="flex w-full items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <User className="w-4 h-4 text-gray-500" />
                    প্রোফাইল
                  </button>
                  
                  <button className="flex w-full items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <ShoppingBag className="w-4 h-4 text-gray-500" />
                    অর্ডারসমূহ
                  </button>
                  
                  <div className="my-1 border-t border-gray-100 dark:border-gray-800" />
                  
                  <button 
                    onClick={() => { setIsLoggedIn(false); setIsOpen(false); }}
                    className="flex w-full items-center gap-3 px-3 py-2.5 text-sm font-medium text-red-600 dark:text-red-400 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    লগআউট
                  </button>
                </>
              ) : (
                // লগইন করা না থাকলে এই অপশনগুলো দেখাবে
                <>
                  <div className="px-3 py-2 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                    স্বাগতম
                  </div>
                  
                  <Link
                    to={"/login"} 
                    onClick={() => { setIsLoggedIn(true); setIsOpen(false); }}
                    className="flex w-full items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <LogIn className="w-4 h-4 text-blue-500" />
                    লগইন
                  </Link>
                  
                  <Link to={"/reg"} className="flex w-full items-center gap-3 px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <UserPlus className="w-4 h-4 text-green-500" />
                    সাইনআপ
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ProfileDropdown;