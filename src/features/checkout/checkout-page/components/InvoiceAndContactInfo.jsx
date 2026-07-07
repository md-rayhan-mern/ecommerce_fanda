import {useState} from 'react'
import {motion} from "framer-motion"
import { FileText} from "lucide-react"
import InvoiceContactInfoSidebar from "../InvoiceContactInfoSidebar"
const InvoiceAndContactInfo = () => {
    const [isContactOpen, setIsContactOpen] = useState(false);

      const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };
  
  return (
              <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 flex justify-between items-center">
            <div className="flex items-center gap-2 text-sm text-gray-700 font-medium">
              <FileText className="w-4 h-4 text-gray-400" /> Invoice and Contact Info
            </div>
            <button onClick={()=> setIsContactOpen(true)} className="text-blue-500 hover:text-blue-600 text-xs font-medium transition-colors">
              Edit
            </button>
            {/* Contact sidebar */}
            <InvoiceContactInfoSidebar isOpen={isContactOpen} onClose={() => setIsContactOpen(false)}/>
          </motion.div>
  )
}

export default InvoiceAndContactInfo