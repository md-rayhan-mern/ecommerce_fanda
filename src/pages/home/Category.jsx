import React from "react";

const CategorySection = () => {
  // ছবির ১৬টি ক্যাটাগরির ডেটা
  const categories = [
    { id: 1, name: "Power Sanders", image: "https://unsplash.com" },
    {
      id: 2,
      name: "Other Projector Accessories",
      image: "https://unsplash.com",
    },
    { id: 3, name: "Kitchen Fittings", image: "https://unsplash.com" },
    { id: 4, name: "Womens Fashion", image: "https://unsplash.com" },
    { id: 5, name: "Donate to Healthcare", image: "https://unsplash.com" },
    { id: 6, name: "Goat", image: "https://unsplash.com" },
    { id: 7, name: "Watches and Accessories", image: "https://unsplash.com" },
    {
      id: 8,
      name: "Watering Systems & Garden Hoses",
      image: "https://unsplash.com",
    },
    { id: 9, name: "Lamp Shades", image: "https://unsplash.com" },
    { id: 10, name: "Margarine & Spread", image: "https://unsplash.com" },
    { id: 11, name: "Bedding Sets", image: "https://unsplash.com" },
    { id: 12, name: "Pools", image: "https://unsplash.com" },
    { id: 13, name: "Bathroom Lighting", image: "https://unsplash.com" },
    { id: 14, name: "Eye Primers", image: "https://unsplash.com" },
    { id: 15, name: "Digital Downloads", image: "https://unsplash.com" },
    { id: 16, name: "Traditional Laptops", image: "https://unsplash.com" },
  ];

  return (
    <div className="w-full bg-[#f5f5f5] py-6 px-4">
      <div className="max-w-[1200px] mx-auto bg-white rounded-sm p-4 shadow-xs">
        {/* টাইটেল পার্ট */}
        <div className="mb-4">
          <span className="text-xl text-gray-800 font-normal tracking-wide block">
            Categories
          </span>
        </div>

        {/* গ্রিড লেআউট: ছবির মতো নিখুঁত বর্ডার গ্রিড ইফেক্ট (ডেক্সটপে ৮টি কলাম, ২ লাইন) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 border-t border-l border-gray-200">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white border-r border-b border-gray-200 p-3 flex flex-col items-center justify-between text-center cursor-pointer hover:bg-gray-50 h-[145px]"
            >
              {/* ক্যাটাগরি ইমেজ বক্স */}
              <div className="w-[80px] h-[80px] flex items-center justify-center overflow-hidden mb-2">
                <img
                  src={category.image}
                  alt={category.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* ক্যাটাগরি নেম */}
              <h3 className="text-gray-700 text-xs font-normal line-clamp-2 leading-4 px-1 flex-grow flex items-center justify-center">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CategorySection;
