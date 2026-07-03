import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// Swiper এর প্রয়োজনীয় CSS ইম্পোর্ট করুন
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// ক্যারুজেলের জন্য ডামি ডাটা (গ্লোবাল স্ট্যান্ডার্ড ব্যানার)
const sliderData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Global Fashion, Local Delivery",
    subtitle: "Up to 50% Off on International Brands",
    cta: "Shop Global",
    link: "/shop",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Next-Gen Electronics Marketplace",
    subtitle: "Free Worldwide Shipping on Orders Over $150",
    cta: "Discover Tech",
    link: "/shop?category=electronics",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Previous Electronics Marketplace",
    subtitle: "Free Worldwide Shipping on Orders Over $150",
    cta: "Discover Tech",
    link: "/shop?category=electronics",
  },
];

export default function MainCarousel() {
  return (
    <div className="w-full h-[400px] md:h-[600px] overflow-hidden bg-gray-100">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect={"fade"}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        className="mySwiper h-full"
        delay={3000}
        speed={800}
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            {/* ব্যাকগ্রাউন্ড ইমেজ */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />

            {/* ডার্ক ওভারলে টেক্সট স্পষ্ট করার জন্য */}
            <div className="absolute inset-0 bg-black/40 flex items-center pl-8 md:pl-20">
              <div className="text-white max-w-xl space-y-4">
                <span className="text-xs md:text-sm tracking-widest uppercase font-semibold text-amber-400 bg-black/30 px-3 py-1 rounded">
                  World-Wide Express
                </span>
                <h1 className="text-3xl md:text-6xl font-bold leading-tight">
                  {slide.title}
                </h1>
                <p className="text-sm md:text-lg text-gray-200">
                  {slide.subtitle}
                </p>
                <button className="mt-4 px-6 py-3 bg-white text-black font-semibold text-sm rounded shadow-lg hover:bg-amber-400 hover:text-black transition duration-300 transform hover:scale-105">
                  {slide.cta}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
