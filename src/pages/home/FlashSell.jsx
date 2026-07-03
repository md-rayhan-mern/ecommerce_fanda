import React from "react";

const FlashSell = () => {
  // আপনার ছবি অনুযায়ী ঠিক ৬টি প্রোডাক্টের ডেটা অ্যারে
  const products = [
    {
      id: 1,
      image: "https://unsplash.com", // ডামি ইমেজ লিংক, আপনার ইমেজ বসিয়ে নিবেন
      name: "skin'O Strawberry Scented Shower Gel -...",
      currentPrice: "২৫০",
      oldPrice: "২৬০",
      discount: "",
    },
    {
      id: 2,
      image: "https://unsplash.com",
      name: "Casio Black Resin All-Season Digital Sports...",
      currentPrice: "২৩৫",
      oldPrice: "৫২৫",
      discount: "-৫৫%",
    },
    {
      id: 3,
      image: "https://unsplash.com",
      name: "TEL Premium Shoe Rack Red 4 Step Red 861587",
      currentPrice: "৪৭৬",
      oldPrice: "৬১০",
      discount: "-২২%",
    },
    {
      id: 4,
      image: "https://unsplash.com",
      name: "Royal Cafe Classic Coffee 200g | Premium...",
      currentPrice: "৬৪০",
      oldPrice: "৭০০",
      discount: "-৩%",
    },
    {
      id: 5,
      image: "https://unsplash.com",
      name: "Realme C100i 4/64GB Smartphone - 7000mAh...",
      currentPrice: "১৫,৮৪৫",
      oldPrice: "১৬,৯৯৯",
      discount: "-৭%",
    },
    {
      id: 6,
      image: "https://unsplash.com",
      name: "Top-Tier Option - Cute humidifier egg lighting...",
      currentPrice: "১৮৭",
      oldPrice: "৬००",
      discount: "-৬৯%",
    },
  ];

  return (
    <div className="w-full bg-[#f5f5f5] py-6 px-4">
      <div className="max-w-[1200px] mx-auto bg-white rounded-sm shadow-sm p-4">
        {/* সেকশনের হেডার পার্ট */}
        <div className="flex justify-between items-center border-b border-gray-100 pb-3 mb-4">
          <h2 className="text-[#f57224] text-lg font-medium">On Sale Now</h2>
          <button className="border border-[#f57224] text-[#f57224] text-xs font-semibold px-4 py-2 hover:bg-[#f57224]/5 transition-colors uppercase tracking-wider rounded-xs">
            Shop All Products
          </button>
        </div>

        {/* ৬ কলামের প্রোডাক্ট গ্রিড (ছবির মতো হুবহু এক লাইনে ৬টা দেখাবে ল্যাপটপে) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white hover:shadow-md transition-shadow duration-200 cursor-pointer flex flex-col h-full border border-gray-50 group"
            >
              {/* প্রোডাক্ট ইমেজ এরিয়া */}
              <div className="w-full aspect-square bg-[#f4f4f4] overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* প্রোডাক্ট ইনফরমেশন */}
              <div className="p-2 flex flex-col flex-grow">
                {/* নাম (সর্বোচ্চ ২ লাইনে থাকবে, বেশি হলে ডট ডট দেখাবে) */}
                <h3 className="text-gray-800 text-sm font-normal line-clamp-2 h-10 leading-5 mb-2">
                  {product.name}
                </h3>

                {/* বর্তমান মূল্য */}
                <div className="text-[#f57224] text-base font-medium flex items-center">
                  <span className="text-xs mr-0.5">৳</span>
                  {product.currentPrice}
                </div>

                {/* পূর্বের মূল্য এবং ডিসকাউন্ট পার্সেন্টেজ */}
                <div className="flex items-center gap-1.5 mt-0.5 text-xs text-gray-400">
                  <span className="line-through">৳{product.oldPrice}</span>
                  {product.discount && (
                    <span className="text-gray-700">{product.discount}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashSell;
