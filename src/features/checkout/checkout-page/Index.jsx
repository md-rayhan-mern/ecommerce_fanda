import React, { useState } from "react";
import { motion } from "framer-motion";
import Package from "./Package";
import ShipingAndBilling from "./components/ShipingAndBilling";
import Promotion from "./components/Promotion";
import InvoiceAndContactInfo from "./components/InvoiceAndContactInfo";
import OrderSummery from "./components/OrderSummery";

const CheckoutPage = () => {
  // Animation variants for smooth fade-in
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
  };


  const selectProducts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D", // ডামি ইমেজ লিংক, আপনার ইমেজ বসিয়ে নিবেন
      name: "skin'O Strawberry Scented Shower Gel -...",
      price: "২৫০",
      oldPrice: "২৬০",
      discount: "1",
      rating: 1.5,
      review: 120,
      variants: {
        brand: "nokia",
        color: "red",
        size: "xl",
      },
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      name: "Casio Black Resin All-Season Digital Sports...",
      price: "২৩৫",
      oldPrice: "৫২৫",
      discount: "৫৫",
      rating: 2.5,
      review: 160,
      variants: {
        brand: "samsung",
        color: "red",
        size: "xl",
      },
    },
  ];
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
          <ShipingAndBilling />
          {/* Packaje section */}
          <Package selectProducts={selectProducts} />
        </div>
        {/* Right Side: Order Summary & Promotions (Takes 1 column) */}
        <div className="space-y-6">
          {/* Promotion / Voucher Section */}
          <Promotion />
          {/* Invoice Info Info Section */}
          <InvoiceAndContactInfo />

          {/* Order Summary Pricing Card */}
          <OrderSummery />
        </div>
      </motion.div>
    </div>
  );
};
export default CheckoutPage;
