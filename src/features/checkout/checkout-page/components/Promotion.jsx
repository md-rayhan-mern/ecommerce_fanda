import {useState} from 'react'
import { motion } from 'framer-motion'
import {Tag} from "lucide-react"

const Promotion = () => {
      const [promoCode, setPromoCode] = useState('');

        const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };
  return (
       <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-sm p-5 border border-gray-100">
            <h2 className="text-md font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <Tag className="w-4 h-4 text-orange-500" /> Promotion
            </h2>
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="Enter Store/Daraz Code" 
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold text-xs px-5 rounded tracking-wider transition-colors uppercase">
                Apply
              </button>
            </div>
          </motion.div>
  )
}

export default Promotion