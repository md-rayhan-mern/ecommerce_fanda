import React, { useState } from "react";
import {Link} from "react-router"
const ProductPurchaseModule = () => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="max-w-xl p-4 bg-white font-sans text-gray-800">
      {/* প্রোডাক্ট টাইটেল */}
      <h1 className="text-xl md:text-2xl font-normal text-gray-900 leading-tight mb-2">
        Portable Mini Table Fan Strong Wind Left to Right Oscillating Angle 45
        Degrees - AC/DC
      </h1>

      {/* রেটিং ও শেয়ার সেকশন */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
        <div className="flex items-center text-sm">
          <div className="flex text-orange-400 mr-2">{"★".repeat(5)}</div>
          <span className="text-blue-500 hover:underline cursor-pointer mr-3">
            Ratings 393
          </span>
          <span className="text-gray-300 mr-3">|</span>
          <span className="text-blue-500 hover:underline cursor-pointer">
            181 Answered Questions
          </span>
        </div>
        <div className="flex items-center gap-3 text-gray-400 text-lg">
          <button className="hover:text-gray-600">
            <svg
              xmlns="http://w3.org"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
              />
            </svg>
          </button>
          <button className="hover:text-red-500">
            <svg
              xmlns="http://w3.org"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* ব্র্যান্ডের নাম */}
      <div className="text-xs text-gray-500 mb-4">
        <span>Brand: </span>
        <span className="text-blue-500 hover:underline cursor-pointer">
          No Brand
        </span>
        <span className="mx-2">|</span>
        <span className="text-blue-500 hover:underline cursor-pointer">
          More Cooling & Heating from No Brand
        </span>
      </div>

      {/* প্রাইস বা মূল্য সেকশন */}
      <div className="bg-gray-50/50 p-3 rounded-sm mb-5">
        <div className="flex items-baseline gap-2">
          <span className="text-orange-500 text-3xl font-normal">৳ 999</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
          <span className="line-through">৳ 1,690</span>
          <span className="text-gray-800 font-medium">-41%</span>
        </div>
      </div>

      {/* কালার ভ্যারিয়েন্ট সেকশন */}
      <div className="flex flex-col gap-2 mb-5">
        <div className="text-sm text-gray-500">
          Color Family:{" "}
          <span className="text-gray-800 font-medium">Multicolor</span>
        </div>
        <div className="relative w-24 h-9 border-2 border-orange-500 bg-white flex items-center justify-center text-xs text-gray-800 cursor-pointer">
          Multicolor
          {/* ডানদিকের নিচের কোণার ট্রায়াঙ্গেল ইন্ডিকেটর */}
          <div className="absolute bottom-0 right-0 w-0 h-0 border-t-[8px] border-t-transparent border-r-[8px] border-r-orange-500" />
        </div>
      </div>

      {/* কোয়ান্টিটি বা পরিমাণ সেকশন */}
      <div className="flex items-center gap-6 mb-6">
        <div className="text-sm text-gray-500">Quantity</div>
        <div className="flex items-center">
          <button
            onClick={handleDecrease}
            className={`w-9 h-9 border border-gray-200 flex items-center justify-center text-xl bg-gray-50 active:bg-gray-100 transition-colors ${quantity <= 1 ? "cursor-not-allowed opacity-50" : ""}`}
            disabled={quantity <= 1}
          >
            −
          </button>
          <div className="w-12 h-9 border-t border-b border-gray-200 flex items-center justify-center text-sm font-medium">
            {quantity}
          </div>
          <button
            onClick={handleIncrease}
            className="w-9 h-9 border border-gray-200 flex items-center justify-center text-xl bg-gray-50 active:bg-gray-100 transition-colors"
          >
            +
          </button>
        </div>
      </div>

      {/* অ্যাকশন বাটনসমূহ */}
      <div className="grid grid-cols-2 gap-3">
        <Link to={"/checkout"}  className="w-full h-11 bg-[#26abd4] hover:bg-[#1f93b8] text-white font-medium rounded-sm shadow-sm transition-colors text-base flex items-center justify-center">
          Buy Now
        </Link>
        <button className="w-full h-11 bg-[#f57224] hover:bg-[#df631b] text-white font-medium rounded-sm shadow-sm transition-colors text-base">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductPurchaseModule;
