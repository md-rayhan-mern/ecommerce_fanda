import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, EffectFade } from "swiper/modules";

// ⚠️ Swiper.js এর জন্য এই CSS ফাইলগুলো অবশ্যই ইম্পোর্ট করতে হবে
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";

// টেস্টিংয়ের জন্য ৪টি চমৎকার হেডফোনের ডামি ইমেজ অ্যারে
// const DUMMY_IMAGES = [
//   "https://static.vecteezy.com/system/resources/thumbnails/047/003/863/small_2x/blue-t-shirt-hanging-on-wooden-hanger-against-pink-background-photo.jpeg", // মেইন হেডফোন
//   "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww", // সেকেন্ড ভিউ
//   "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww", // থার্ড ভিউ
//   "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww"  // ফোর্থ ভিউ
// ];

export default function ProductGallery({img, gallery}) {
  // মেইন স্লাইডার এবং নিচের থাম্বনেইল স্লাইডারকে কানেক্ট করার জন্য এই স্টেটটি ব্যবহার করা হয়
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [mainSwiper, setMainSwiper] = useState(null); 
   const [zoomStyle, setZoomStyle] = useState({ display: "none", transformOrigin: "0% 0%" });

const DUMMY_IMAGES = [img, gallery[0],gallery[1],gallery[2]]

    // 🖱️ ২. মাউস মুভমেন্ট অনুযায়ী জুম পজিশন ক্যালকুলেট করার ফাংশন
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    
    setZoomStyle({
      display: "block",
      transformOrigin: `${x}% ${y}%`,
      scale: "2" // 👈 ২ গুণ জুম করার জন্য। জুম আরও বাড়াতে চাইলে এটিকে ২.৫ বা ৩ করতে পারেন
    });
  };

    // ↩️ ৩. মাউস সরিয়ে নিলে জুম বন্ধ করার ফাংশন
  const handleMouseLeave = () => {
    setZoomStyle({ display: "none", transformOrigin: "0% 0%", scale: "1" });
  };

  // 🔘 ৪. ছোট ইমেজে ক্লিক করলে বড় ইমেজ পরিবর্তন করার ইনস্ট্যান্ট ফাংশন
  const handleThumbnailClick = (index) => {
    if (mainSwiper && !mainSwiper.destroyed) {
      mainSwiper.slideTo(index); // 🚀 এটি বড় স্লাইডারকে সরাসরি কমান্ড পাঠায়
    }
  };

  return (
    <div className="w-full max-w-[450px] mx-auto flex flex-col gap-4 select-none">
      
      {/* =========================================================================
         ১. মেইন ইমেজ স্লাইডার (উপরে বড় করে যে ইমেজটি দেখা যায়)
         ========================================================================= */}
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 group">
        <Swiper
       
          spaceBetween={10}
          onSwiper={setMainSwiper}
          effect={"fade"} // ইমেজ পরিবর্তনের সময় অ্যাপল স্টাইল "ফেড" ইফেক্ট হবে
          
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[FreeMode, Thumbs, EffectFade]}
          className="h-full w-full cursor-zoom-in "
        >
          {DUMMY_IMAGES.map((imgUrl, index) => (
            <SwiperSlide 
            key={index}
            className="flex items-center justify-center bg-white"
              onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
            >
              <img
                src={imgUrl}
                alt={`Product Main View ${index + 1}`}
                style={zoomStyle.display === "block" ? { transform: `scale(${zoomStyle.scale})`, transformOrigin: zoomStyle.transformOrigin } : {}}
                className="h-full w-full object-cover transition-transform duration-100 ease-out"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* =========================================================================
         ২. থাম্বনেইল স্লাইডার (নিচে ছোট ছোট ইমেজের রো বা লাইন)
         ========================================================================= */}
      <div className="w-full">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={12}
          slidesPerView={4} // এক লাইনে ৪টি ছোট ছবি দেখাবে
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="thumbs-swiper"
        >
          {DUMMY_IMAGES.map((imgUrl, index) => (
            <SwiperSlide
             key={index}
             className="cursor-pointer"   
             onClick={() => handleThumbnailClick(index)}>
              {/* কাস্টম টেইলউইন্ড ক্লাস যা Swiper এর একটিভ স্লাইডকে ডিটেক্ট করে বর্ডার অরেঞ্জ করে দেবে */}
              <div className="aspect-square w-full overflow-hidden rounded-xl border border-gray-200 bg-white p-1 hover:border-gray-400 transition-all duration-200 [.swiper-slide-thumb-active_&]:border-[#f57224] [.swiper-slide-thumb-active_&]:ring-2 [.swiper-slide-thumb-active_&]:ring-[#f57224]/10">
                <img
                  src={imgUrl}
                  alt={`Product Thumbnail ${index + 1}`}
                  className="h-full w-full object-cover rounded-lg"
                 
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  );
}
