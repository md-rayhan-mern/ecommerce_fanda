import React from 'react'
import {motion} from "framer-motion"
import {Info} from "lucide-react"

const OrderSummery = () => {
      const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };
  return (
              <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-sm p-5 border border-gray-100 space-y-4">
            <h2 className="text-md font-semibold text-gray-800 border-b border-gray-100 pb-2">Order Summary</h2>
            
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Items Total (1 Items)</span>
                <span className="font-medium text-gray-900">৳ 42</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span className="font-medium text-gray-900">৳ 170</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-1">
                  Platform Fee <Info className="w-3.5 h-3.5 text-gray-400 cursor-pointer" />
                </span>
                <span className="font-medium text-gray-900">৳ 5</span>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-3">
              <div className="flex justify-between items-baseline">
                <span className="text-sm font-semibold text-gray-800">Total:</span>
                <div className="text-right">
                  <span className="text-xl font-bold text-orange-500">৳ 217</span>
                  <p className="text-[10px] text-gray-400 mt-0.5">VAT included, where applicable</p>
                </div>
              </div>
            </div>

            {/* Proceed Button */}
            <motion.button 
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded text-sm tracking-wide shadow-md shadow-orange-500/20 transition-colors uppercase mt-2"
            >
              Proceed to Pay
            </motion.button>
          </motion.div>
  )
}

export default OrderSummery