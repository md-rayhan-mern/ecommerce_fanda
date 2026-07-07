import {useState} from 'react'
import { motion } from 'framer-motion';
import {MapPin,Edit2,User,Phone } from "lucide-react"
import SelectBillShipingSidebar from '../SelectBillShipingSidebar';


const ShipingAndBilling = () => {
      const [isSidebarOpen, setIsSidebarOpen] = useState(false);
      const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };
  return (
    <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-sm p-5 border border-gray-100">
            <div className="flex justify-between items-center border-b border-gray-100 pb-3 mb-4">
              <h2 className="text-md font-semibold text-gray-700 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-500" /> Shipping & Billing
              </h2>
              <button onClick={() => setIsSidebarOpen(true)}  className="text-blue-500 hover:text-blue-600 text-sm font-medium flex items-center gap-1 transition-colors">
                <Edit2 className="w-3.5 h-3.5" /> EDIT
              </button>
              {/* Sidebar billing */}
              <SelectBillShipingSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}/>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <p className="font-medium text-gray-900 flex items-center gap-2">
                <User className="w-4 h-4 text-gray-400" /> Rayhan
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-400" /> 1939096777
              </p>
              <p className="pl-6 text-gray-500 leading-relaxed">
                Board bazar, Karimganj Noabad, Kishoreganj, Dhaka
              </p>
            </div>
          </motion.div>
  )
}

export default ShipingAndBilling