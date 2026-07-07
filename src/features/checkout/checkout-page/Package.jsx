import React from 'react'
import { motion } from 'framer-motion'


const Package = () => {
    const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
     };
  return (
    
       
          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-sm p-5 border border-gray-100">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-100 pb-3 mb-4 gap-2">
              <h2 className="text-md font-semibold text-gray-800">Package 1 of 1</h2>
              <p className="text-xs text-gray-500 sm:text-right">
                Shipped by <span className="font-medium text-gray-700">All In One Shopping_Mall</span>
              </p>
            </div>

            {/* Delivery Option Card */}
            <div className="mb-5 max-w-xs">
              <p className="text-xs font-medium text-gray-500 mb-2">Delivery or Pickup</p>
              <div className="border-2 border-cyan-500 bg-cyan-50/30 rounded-lg p-3 relative cursor-pointer">
                <div className="absolute top-3 left-3 w-4 h-4 rounded-full bg-cyan-500 flex items-center justify-center text-white text-[10px] font-bold">
                  ✓
                </div>
                <div className="pl-6">
                  <span className="text-sm font-bold text-gray-900">৳ 170</span>
                  <p className="text-xs font-semibold text-gray-700 mt-0.5">Standard Delivery</p>
                  <p className="text-[11px] text-gray-500 mt-2 bg-white inline-block px-1.5 py-0.5 rounded border border-gray-100">
                    Guaranteed by 10-12 Jul
                  </p>
                </div>
              </div>
            </div>

            {/* Product Item */}
            <div className="flex flex-col sm:flex-row items-start gap-4 bg-gray-50/50 p-3 rounded-lg border border-gray-100">
              <div className="w-20 h-20 bg-gray-100 rounded border border-gray-200 flex-shrink-0 overflow-hidden flex items-center justify-center relative">
                <img 
                  src="https://unsplash.com" 
                  alt="Product" 
                  className="object-cover w-full h-full"
                />
                <span className="absolute top-1 left-1 bg-purple-600 text-white text-[9px] font-bold px-1 rounded">7.7</span>
              </div>
              
              <div className="flex-1 space-y-1">
                <h3 className="text-sm text-gray-800 font-normal leading-snug hover:text-orange-500 cursor-pointer transition-colors line-clamp-2">
                  (4/6/8/10/20/30/40/50/60/80/100 pice) Mobile Finger Sleeve/Press Trigger Game Controller Sweatproof
                </h3>
                <p className="text-xs text-gray-400">No Brand, Color Family:(4 Pcs) Black +Logo</p>
                
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-md font-bold text-orange-500">৳ 42</span>
                  <span className="text-xs text-gray-400 line-through">৳ 99</span>
                  <span className="text-xs text-green-600 font-medium">-58%</span>
                </div>
              </div>

              <div className="text-sm text-gray-500 font-medium self-end sm:self-start mt-2 sm:mt-0">
                Qty: 1
              </div>
            </div>

          </motion.div>
  )
}

export default Package