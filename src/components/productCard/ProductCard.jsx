import { Star, StarHalf } from "lucide-react";
import { motion } from "framer-motion";
import { Heart, ShoppingBag, ArrowRight } from "lucide-react";

const ProductCard = ({
  product,
  showRating,
  discount,
  smDiscount,
  oldPrice,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -6 }}
      className="w-full bg-white shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden cursor-pointer relative group transition-shadow duration-300"
    >
      {/* 🏷️ Discount ribon */}
      {discount && product.discount !== "" && product.discount !== "0" && (
        <span
          className={`absolute top-3 left-3 z-10 bg-red-500 text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow-sm`}
        >
          -{product.discount}%
        </span>
      )}

      {/* 🤍 Wish list button */}
      <button className="absolute top-3 right-3 z-10 p-2 bg-white/90 hover:bg-white text-gray-500 hover:text-red-500 rounded-full transition-all duration-200 shadow-sm border border-gray-50 active:scale-90">
        <Heart className="w-4 h-4 transition-colors" />
      </button>

      {/* 🖼️ image part*/}
      <div className="w-full aspect-square bg-gray-50/50 overflow-hidden relative flex items-center justify-center">
        <motion.img
          src={product.image}
          alt={product.name}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-full h-full object-contain mix-blend-multiply"
        />

        {/* 🛍️ For Dasktop cart button slide up */}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
          <motion.button
            whileTap={{ scale: 0.96 }}
            className="w-full py-2.5 bg-gray-900 hover:bg-amber-500 text-white hover:text-black font-semibold text-xs rounded-xl flex items-center justify-center gap-1 shadow-md transition-all duration-300"
          >
            <ShoppingBag className="w-4 h-4" /> Add to Cart
          </motion.button>
        </div>
      </div>

      {/* 📝 Product datails part */}
      <div className="p-2 space-y-2">
        {/* Product Title , 2 or more line show ... */}
        <h3 className="text-sm font-medium text-gray-700 line-clamp-2 min-h-[35px] leading-snug group-hover:text-amber-600 transition-colors">
          {product.name}
        </h3>

        {/* Product price part */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span className="text-xl text-orange-600">৳{product.price}</span>
            {oldPrice &&
              product.oldPrice !== "" &&
              product.oldPrice !== "0" && (
                <span className="text-xs text-gray-400 line-through">
                  ৳{product.oldPrice}
                </span>
              )}
            {smDiscount &&
              product.discount !== "" &&
              product.discount !== "0" && (
                <span className="text-xs text-gray-600 ">
                  -{product.discount}%
                </span>
              )}
          </div>

          {/* card arrow icon show hover */}
          <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden md:block" />
        </div>

        {/* 📱 for mobile view cart button*/}
        <div className="block md:hidden pt-1">
          <button className="w-full py-2 bg-gray-900 active:bg-amber-500 text-white active:text-black text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-colors">
            <ShoppingBag className="w-3.5 h-3.5" /> Add
          </button>
        </div>
        {/* ================= Dynamic Rating part ================= */}
        {showRating && product.rating !== undefined && (
          <div className="flex items-center gap-0.5 mt-1">
            {/* runing 5 star loop length */}
            {[...Array(5)].map((_, index) => {
              const starValue = index + 1;

              // full, halfStar Dynamic condition
              if (product.rating >= starValue) {
                return (
                  <Star
                    key={index}
                    size={14}
                    className="text-amber-400 fill-amber-400"
                  />
                );
              } else if (product.rating >= starValue - 0.5) {
                return (
                  <StarHalf
                    key={index}
                    size={14}
                    className="text-amber-400 fill-amber-400"
                  />
                );
              } else {
                return <Star key={index} size={14} className="text-gray-300" />;
              }
            })}
            {/*Ratings icon*/}
            <span className="text-gray-400 text-[10px] ml-1">
              ({product.review || 0})
            </span>
          </div>
        )}
        {/* ======================================================= */}
      </div>
    </motion.div>
  );
};

export default ProductCard;
