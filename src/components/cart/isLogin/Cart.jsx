import React, { useState } from 'react';
import {motion} from "framer-motion"
import { Trash2 } from 'lucide-react';
import CartProductCard from '../../../features/cart/cart-page/components/CartProductCard';
import PromoCodeInput from '../../promoCodeInput/PromoCodeInput';

const Cart = () => {

  // ডামি প্রোডাক্ট লিস্ট ডেটা (এখানে অনেকগুলো প্রোডাক্ট দেওয়া হয়েছে স্ক্রোলিং টেস্ট করার জন্য)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      shopName: "AA Imported Hub",
      title: "100 Pcs/set Baby Girl Rubber Bands Kids Elastic Hair Bands for Children Mixed Colors Mini",
      specs: "No Brand, Color Family:Multicolor, size:Int: One size",
      promo: "Ends at Jul 8 23:59:59",
      stockWarning: "Only 5 item(s) in stock",
      price: 96,
      oldPrice: 249,
      quantity: 1,
      image: "https://unsplash.com" 
    },
    {
      id: 2,
      shopName: "Perfect Telecom",
      title: "33W Fast Type-C Charger for Xiaomi, Vivo, Realme, Oppo, Samsung, Redmi, OnePlus, Inifinix",
      specs: "No Brand, Color Family:White, Brand Compatibility:Xiaomi",
      promo: "",
      stockWarning: "",
      price: 349,
      oldPrice: 1400,
      quantity: 1,
      image: "https://unsplash.com"
    },
    // স্ক্রোল ইফেক্ট দেখার জন্য অতিরিক্ত ডামি প্রোডাক্ট
    {
      id: 3,
      shopName: "Gadget Zone",
      title: "Wireless Bluetooth Earbuds Pro with Noise Cancellation and Deep Bass",
      specs: "Color Family: Black, Warranty: 6 Months",
      promo: "Flash Sale",
      stockWarning: "Only 2 items left",
      price: 1250,
      oldPrice: 2500,
      quantity: 1,
      image: "https://unsplash.com"
    }
  ]);

        const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };
  return (
    <>
      {/* স্ক্রলবার হাইড করার জন্য কাস্টম সিএসএস ইনজেকশন */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <motion.div  variants={itemVariants} className="min-h-screen bg-[#eff0f5] p-2 sm:p-4 md:p-6 font-sans antialiased">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-4 items-start">
          
          {/* ================= বাম পাশের সেকশন (প্রোডাক্ট লিস্ট) ================= */}
          {/* h-[calc(100vh-100px)] দিয়ে উচ্চতা ফিক্সড করা হয়েছে যেন এর ভেতরে স্ক্রোল হয় */}
          <div className="w-full lg:flex-1 h-auto lg:h-[calc(100vh-60px)] lg:overflow-y-auto no-scrollbar space-y-3">
            
            {/* সিলেক্ট অল হেডার */}
            <div className="bg-white p-3 rounded-sm flex justify-between items-center text-xs sm:text-sm text-gray-700 shadow-sm border border-gray-100">
              <label className="flex items-center gap-2.5 font-medium cursor-pointer uppercase text-gray-500 tracking-wide">
                <input type="checkbox" className="w-4 h-4 accent-[#f57224] rounded border-gray-300" />
                Select All (2 ITEM(S))
              </label>
              <button className="flex items-center gap-1 text-gray-500 hover:text-red-500 uppercase tracking-wide font-medium text-xs sm:text-sm">
                <Trash2 size={16} /> Delete
              </button>
            </div>

            {/* প্রোডাক্ট কার্ড লুপ */}
            {cartItems.map((item) => <CartProductCard key={item.id} item={item}/>)}
          </div>

          {/* ================= ডান পাশের সেকশন (Order Summary) ================= */}
          <div className="w-full lg:w-[320px] bg-white p-4 rounded-sm shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-sm sm:text-base text-gray-800 font-medium">Order Summary</h2>
            
            <div className="space-y-2 text-xs sm:text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal (0 items)</span>
                <span className="text-gray-800 font-medium">৳ 0</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Fee</span>
                <span className="text-gray-800 font-medium">৳ 0</span>
              </div>
            </div>

            {/* Promo Code section  */}
          <PromoCodeInput/>

            {/* টোটাল অ্যামাউন্ট */}
            <div className="flex justify-between items-center border-t border-gray-100 pt-3">
              <span className="text-xs sm:text-sm text-gray-700">Total</span>
              <span className="text-sm sm:text-base text-[#f57224] font-medium">৳ 0</span>
            </div>

            {/* চেকআউট বাটন */}
            <button className="w-full bg-[#f57224] hover:bg-[#e0621b] text-white text-xs sm:text-sm font-medium py-2.5 rounded-sm uppercase tracking-wide transition-colors shadow-sm">
              Proceed to Checkout (0)
            </button>
          </div>

        </div>
      </motion.div>
    </>
  );
};

export default Cart;
