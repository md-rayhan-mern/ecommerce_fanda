import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactInfoSidebar = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('paponk25@gmail.com');

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden font-sans">
          
          {/* ১. ব্যাকড্রপ বা আবছা পর্দা (ক্লিক করলে সাইডবার বন্ধ হবে) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black cursor-pointer"
          />

          {/* ২. মেইন সাইডবার প্যানেল (ডান থেকে বামে স্লাইড হবে) */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: 'easeOut' }}
            className="absolute inset-y-0 right-0 max-w-md w-full bg-white shadow-2xl flex flex-col p-6 h-full justify-between"
          >
            
            {/* উপরের কন্টেন্ট সেকশন */}
            <div className="overflow-y-auto pr-1 flex-1 space-y-6">
              
              {/* হেডার টাইটেল */}
              <h2 className="text-[20px] font-normal text-[#212121]">
                Invoice and Contact Info
              </h2>

              {/* ইমেইল ইনপুট সেকশন */}
              <div className="space-y-1.5">
                <label className="block text-[14px] text-[#212121]">
                  <span className="text-[#f5222d] mr-1">*</span>Email
                </label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-[#e5e5e5] rounded-[3px] px-3 py-2.5 text-[14px] text-[#212121] outline-none focus:border-[#1aa1be] transition-colors"
                />
                <p className="text-[12px] text-[#9e9e9e] font-normal">
                  Enter your email to get delivery status updates
                </p>
              </div>

              {/* বিলিং অ্যাড্রেস সেকশন */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-baseline">
                  <label className="block text-[14px] text-[#212121]">
                    <span className="text-[#f5222d] mr-1">*</span>Billing Address
                  </label>
                  <button className="text-[#1aa1be] hover:underline text-sm font-medium">
                    EDIT
                  </button>
                </div>

                {/* অ্যাড্রেস ডিসপ্লে বক্স */}
                <div className="border border-[#e5e5e5] rounded-[3px] p-4 bg-white text-[14px] text-[#212121] space-y-1">
                  <div className="font-normal space-x-2">
                    <span>Rayhan</span>
                    <span>1939096777</span>
                  </div>
                  <p className="text-[#666666] leading-relaxed">
                    Board bazar, Karimganj Noabad, Kishoreganj, Dhaka
                  </p>
                </div>
                
                <p className="text-[12px] text-[#9e9e9e] font-normal">
                  Please edit your billing address
                </p>
              </div>

            </div>

            {/* নিচের বাটন জোড়া */}
            <div className="grid grid-cols-2 gap-4 border-t pt-4 bg-white mt-6">
              <button 
                onClick={onClose}
                className="w-full bg-[#f0f1f5] hover:bg-[#e4e5ea] text-[#757575] font-normal py-3 rounded-[3px] text-[14px] tracking-wider uppercase transition-colors text-center"
              >
                Cancel
              </button>
              <button 
                onClick={onClose}
                className="w-full bg-[#1aa1be] hover:bg-[#158fa9] text-white font-normal py-3 rounded-[3px] text-[14px] tracking-wider uppercase transition-colors text-center"
              >
                Save
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
export default ContactInfoSidebar;