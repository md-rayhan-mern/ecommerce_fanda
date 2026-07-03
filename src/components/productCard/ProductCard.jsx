import React from "react";
import { motion } from "framer-motion";
// ১. লুসিড রিয়্যাক্ট আইকনগুলো ইম্পোর্ট করা হলো
import { Heart, ShoppingBag, ArrowRight } from "lucide-react";

const product = {
  id: 1,
  title: "Gold Plated Bangles 2 pics set (bala) - Golden",
  image: "https://ibb.co", // আপনার ইমেজ সোর্স লিংক
  price: 229,
  oldPrice: 655,
  discount: 65,
};

const ProductCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -6 }} // হোভার করলে কার্ডটি স্মুথলি ৬ পিক্সেল উপরে উঠবে
      className="w-full max-w-[280px] bg-white shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden cursor-pointer relative group transition-shadow duration-300"
    >
      {/* 🏷️ ডিসকাউন্ট ব্যাজ */}
      <span className="absolute top-3 left-3 z-10 bg-red-500 text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow-sm">
        -{product.discount}%
      </span>

      {/* 🤍 লুসিড হার্ট (উইশলিস্ট) বাটন */}
      <button className="absolute top-3 right-3 z-10 p-2 bg-white/90 hover:bg-white text-gray-500 hover:text-red-500 rounded-full transition-all duration-200 shadow-sm border border-gray-50 active:scale-90">
        <Heart className="w-4 h-4 transition-colors" />
      </button>

      {/* 🖼️ ইমেজ সেকশন */}
      <div className="w-full aspect-square bg-gray-50/50 overflow-hidden relative flex items-center justify-center">
        <motion.img
          src={product.image}
          alt={product.title}
          whileHover={{ scale: 1.04 }} // মাউস নিলে ছবির সাইজ প্রিমিয়াম লুক নিয়ে বড় হবে
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-4/5 h-4/5 object-contain mix-blend-multiply"
        />

        {/* 🛍️ ডেক্সটপ ভিউর জন্য অ্যাড টু কার্ট বাটন (হোভার করলে নিচ থেকে স্লাইড হয়ে উঠবে) */}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
          <motion.button
            whileTap={{ scale: 0.96 }}
            className="w-full py-2.5 bg-gray-900 hover:bg-amber-500 text-white hover:text-black font-semibold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md transition-all duration-300"
          >
            <ShoppingBag className="w-4 h-4" /> Add to Cart
          </motion.button>
        </div>
      </div>

      {/* 📝 প্রোডাক্ট ডাটা সেকশন */}
      <div className="p-4 space-y-3">
        {/* প্রোডাক্ট টাইটেল (২ লাইনের বেশি হলে টেক্সট হাইড হয়ে ডট ডট আসবে) */}
        <h3 className="text-sm font-medium text-gray-700 line-clamp-2 min-h-[40px] leading-snug group-hover:text-amber-600 transition-colors">
          {product.title}
        </h3>

        {/* প্রাইস সেকশন */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-orange-600">
              ৳{product.price}
            </span>
            <span className="text-xs text-gray-400 line-through">
              ৳{product.oldPrice}
            </span>
          </div>

          {/* গ্লোবাল সাইটের মতো ছোট একটি অ্যারো আইকন যা কার্ডে হোভার করলে ডানে মুভ করবে */}
          <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden md:block" />
        </div>

        {/* 📱 মোবাইল ভিউর জন্য সরাসরি দৃশ্যমান বাটন */}
        <div className="block md:hidden pt-1">
          <button className="w-full py-2 bg-gray-900 active:bg-amber-500 text-white active:text-black text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-colors">
            <ShoppingBag className="w-3.5 h-3.5" /> Add
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
