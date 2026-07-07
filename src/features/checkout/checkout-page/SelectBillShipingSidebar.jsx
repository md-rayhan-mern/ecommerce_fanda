import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const  ShippingSidebar = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden font-sans">
          
          {/* ১. ব্যাকড্রপ বা কালো আবছা পর্দা (ক্লিক করলে সাইডবার বন্ধ হবে) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black cursor-pointer"
          />

          {/* ২. মেইন সাইডবার প্যানেল (ডান থেকে বামে স্মুথলি আসবে) */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            // easeOut এর কারণে স্লাইডিং মোশনটি দেখতে অনেক প্রিমিয়াম ও স্মুথ লাগবে
            transition={{ type: 'tween', duration: 0.35, ease: 'easeOut' }}
            className="absolute inset-y-0 right-0 max-w-md w-full bg-white shadow-2xl flex flex-col p-6 h-full justify-between"
          >
            
            {/* উপরের অংশ: হেডার এবং আপনার দেওয়া ইমেজের অ্যাড্রেস কার্ড */}
            <div className="overflow-y-auto pr-1 flex-1">
              
              {/* হেডার সেকশন */}
              <div className="flex justify-between items-baseline mb-5">
                <h2 className="text-[20px] font-normal text-[#212121]">
                  Shipping Address
                </h2>
                <button className="text-[#1ab2be] hover:underline text-sm font-medium">
                  Add new address
                </button>
              </div>

              {/* অ্যাড্রেস কার্ড বক্স */}
              <div className="border border-[#e5e5e5] rounded-[4px] p-5 bg-white relative">
                <div className="flex items-start gap-3">
                  
                  {/* বৃত্তাকার চেকমার্ক আইকন */}
                  <div className="mt-0.5 flex-shrink-0">
                    <div className="w-[18px] h-[18px] rounded-full bg-[#1aa1be] flex items-center justify-center text-white text-[11px] font-bold">
                      ✓
                    </div>
                  </div>
                  
                  {/* নাম, ফোন ও ঠিকানার বিস্তারিত বিবরণ */}
                  <div className="text-[14px] text-[#212121] space-y-1">
                    <div className="font-normal flex items-center gap-4">
                      <span className="text-[15px]">Rayhan</span>
                      <span className="text-[15px]">1939096777</span>
                    </div>
                    
                    <div className="pt-1 text-[#666666]">
                      <p className="font-normal">Board bazar</p>
                      <p className="text-[12px] text-[#9e9e9e] mt-0.5">
                        Region: Dhaka - Kishoreganj - Karimganj Noabad
                      </p>
                    </div>

                    {/* ডিফল্ট বিলিং অ্যাড্রেস ব্যাজ */}
                    <div className="pt-2">
                      <span className="text-[11px] text-[#1aa1be] border border-[#1aa1be] rounded-[3px] px-2 py-0.5 bg-white font-normal inline-block">
                        Default Billing Address
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* নিচের অংশ: ক্যান্সেল এবং সেভ বাটন জোড়া */}
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
 export default ShippingSidebar;