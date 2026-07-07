import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Package from './Package';
import ShipingAndBilling from './components/ShipingAndBilling';
import Promotion from './components/Promotion';
import InvoiceAndContactInfo from './components/InvoiceAndContactInfo';
import OrderSummery from './components/OrderSummery';

const CheckoutPage =() =>  {

    

  // Animation variants for smooth fade-in
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    
    <div className="min-h-screen bg-gray-50 py-6 px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
      <motion.div 
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left Side: Shipping & Package Details (Takes 2 columns on desktop) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Shipping & Billing Section */}
          <ShipingAndBilling/>
        {/* Packaje section */}
        <Package/>
        </div>
        {/* Right Side: Order Summary & Promotions (Takes 1 column) */}
        <div className="space-y-6">     
          {/* Promotion / Voucher Section */}
        <Promotion/>
          {/* Invoice Info Info Section */}
        <InvoiceAndContactInfo/>

          {/* Order Summary Pricing Card */}
        <OrderSummery/>
        </div>
      </motion.div>
     
    </div>
  );
}
export default CheckoutPage;