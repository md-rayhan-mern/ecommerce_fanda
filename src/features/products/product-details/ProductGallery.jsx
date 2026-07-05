import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, EffectFade } from "swiper/modules";

// Swiper এর প্রয়োজনীয় CSS ফাইলগুলো ইম্পোর্ট করতে হবে
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";

export default function ProductGallery({ images = [] }) {
  // মেইন স্লাইডার এবং থাম্বনেইল স্লাইডারকে একসাথে সিঙ্ক করার জন্য স্টেট
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  if (!images.length) {
    return <div className="aspect-square bg-gray-100 animate-pulse rounded-2xl w-full" />;
  }

  return (
    <div className="flex flex-col gap-4 w-full select-none">
      {/* 1. Main Image Slider */}
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 group">
        <Swiper
          style={{
            "--swiper-navigation-color": "#f57224", // দারাজের সিগনেচার অরেঞ্জ কালার নেভিগেশন অ্যারো
            "--swiper-navigation-size": "22px",
          }}
          spaceBetween={10}
          effect={"fade"} // স্মুথ ট্রানজিশনের জন্য ফেড ইফেক্ট
          navigation={true} // ডানে বামে অ্যারো বাটন অন করা হলো
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[FreeMode, Navigation, Thumbs, EffectFade]}
          className="h-full w-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center bg-white">
              <img
                src={img}
                alt={`Product View ${index + 1}`}
                className="h-full w-full object-cover object-center"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 2. Thumbnails Slider (নিচের ছোট ছোট ইমেজ লিস্ট) */}
      <div className="w-full">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={12}
          slidesPerView={4} // একবারে ৪টি থাম্বনেইল দেখাবে, বেশি হলে স্ক্রোল করা যাবে
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="thumbs-swiper"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="cursor-pointer">
              {/* অ্যাক্টিভ থাম্বনেইলের বর্ডার টেইলউইন্ডের কাস্টম ক্লাস দিয়ে হ্যান্ডেল হবে */}
              <div className="aspect-square w-full overflow-hidden rounded-xl border border-gray-200 bg-white p-1 hover:border-gray-400 transition-colors swiper-slide-thumb-active:border-[#f57224] swiper-slide-thumb-active:ring-2 swiper-slide-thumb-active:ring-[#f57224]/10">
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* অ্যাক্টিভ থাম্বনেইল স্টাইলিং ফিক্স করার জন্য গ্লোবাল CSS ওভাররাইড (টেইলউইন্ডের সাথে সিঙ্ক করার জন্য) */}
      <style jsx global>{`
        .thumbs-swiper .swiper-slide-thumb-active border {
          border-color: #f57224 !important;
        }
      `}</style>
    </div>
  );
}
