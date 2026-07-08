import React, { useState } from "react";
import { motion } from "framer-motion";
import LoginReg from "../../../components/cart/isLogout/LoginRegForm"
import CartList from "../../../components/cart/isLogin/Cart";


const Cart = () => {
    const [user, setUser] = useState(true)
  // Animation variants for smooth fade-in
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="min-h-screen w-full max-w-[1500px] bg-gray-50 py-6 px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="">
          {/* Conditional cart login & logout page section */}
            {
                user ? <CartList/> : <LoginReg/>
            }
          {/* Packaje section */}
        </div>
      </motion.div>
    </div>
  );
};
export default Cart;
