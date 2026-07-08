
import { motion } from 'framer-motion'
import {Tag} from "lucide-react"
import  PromoCodeInput  from '../../../../components/promoCodeInput/PromoCodeInput'

const Promotion = () => {

        const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };
  return (
       <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-sm p-5 border border-gray-100">
            <h2 className="text-md font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <Tag className="w-4 h-4 text-orange-500" /> Promotion
            </h2>
            {/* Promocode input  */}
            <PromoCodeInput/>
          </motion.div>
  )
}

export default Promotion