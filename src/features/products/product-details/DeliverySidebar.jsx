import React from "react";
import {
  MapPin,
  Truck,
  Banknote,
  RotateCcw,
  ShieldAlert,
  MessageSquare,
  Info,
} from "lucide-react";

const DeliverySidebar = () => {
  return (
    <div className="max-w-[320px] bg-white border border-[#eff0f5] font-sans text-[#212121]">
      {/* ১. Delivery Options Section */}
      <div className="p-4 border-b border-[#eff0f5]">
        <div className="flex items-center justify-between text-[12px] text-[#757575] mb-3">
          <span>Delivery Options</span>
          <Info className="w-3.5 h-3.5 cursor-pointer text-[#9e9e9e]" />
        </div>

        {/* লোকেশন ট্র্যাক */}
        <div className="flex items-start gap-2.5 mb-4">
          <MapPin className="w-5 h-5 text-[#212121] shrink-0 mt-0.5" />
          <div className="flex justify-between items-start w-full gap-2">
            <span className="text-[13px] leading-[18px]">
              Dhaka, Kishoreganj, Karimganj Noabad
            </span>
            <button className="text-[13px] font-medium text-[#1a9cb7] hover:underline shrink-0">
              CHANGE
            </button>
          </div>
        </div>

        {/* স্ট্যান্ডার্ড ডেলিভারি */}
        <div className="flex items-start gap-2.5 mb-4">
          <Truck className="w-5 h-5 text-[#212121] shrink-0 mt-0.5" />
          <div className="flex justify-between items-start w-full">
            <div>
              <div className="text-[13px] font-normal">Standard Delivery</div>
              <div className="text-[11px] text-[#757575]">
                Guaranteed by 9-11 Jul
              </div>
            </div>
            <span className="text-[14px] text-[#212121] font-normal">
              ৳ 170
            </span>
          </div>
        </div>

        {/* ক্যাশ অন ডেলিভারি */}
        <div className="flex items-center gap-2.5">
          <Banknote className="w-5 h-5 text-[#212121] shrink-0" />
          <span className="text-[13px]">Cash on Delivery Available</span>
        </div>
      </div>

      {/* ২. Return & Warranty Section */}
      <div className="p-4 border-b border-[#eff0f5]">
        <div className="flex items-center justify-between text-[12px] text-[#757575] mb-3">
          <span>Return & Warranty</span>
          <Info className="w-3.5 h-3.5 cursor-pointer text-[#9e9e9e]" />
        </div>

        {/* রিটার্ন পলিসি */}
        <div className="flex items-center gap-2.5 mb-4">
          <RotateCcw className="w-5 h-5 text-[#212121] shrink-0" />
          <span className="text-[13px]">14 days easy return</span>
        </div>

        {/* ওয়ারেন্টি */}
        <div className="flex items-center gap-2.5">
          <ShieldAlert className="w-5 h-5 text-[#757575] shrink-0" />
          <span className="text-[13px] text-[#757575]">
            Warranty not available
          </span>
        </div>
      </div>

      {/* ৩. QR Code App Download Section */}
      <div className="p-4 border-b border-[#eff0f5] bg-[#fafafa] flex items-center gap-3 relative">
        {/* কিউআর কোড (ডামি ইমেজ হিসেবে বর্ডার দিয়ে তৈরি) */}
        <div className="flex flex-col items-center gap-1 shrink-0">
          <div className="w-[72px] h-[72px] bg-white border border-[#dadada] p-1 flex flex-col justify-between">
            {/* কিউআর কোডের ডামি বক্স প্যাটার্ন */}
            <div className="flex justify-between h-4">
              <div className="w-4 h-4 border-2 border-black" />
              <div className="w-4 h-4 border-2 border-black" />
            </div>
            <div className="w-full h-2 bg-black/20 my-1" />
            <div className="flex justify-between h-4">
              <div className="w-4 h-4 border-2 border-black" />
              <div className="w-2 h-2 bg-black self-end" />
            </div>
          </div>
          <span className="text-[9px] text-[#757575] whitespace-nowrap">
            Scan with mobile
          </span>
        </div>

        {/* ডাউনলোড অ্যাপ পপআপ কার্ড */}
        <div className="bg-white border border-[#e5e5e5] rounded-[4px] p-2 flex items-center gap-2 shadow-sm flex-1 relative">
          {/* লেফট ট্রায়াঙ্গেল অ্যারো (পপআপ এফেক্ট) */}
          <div className="absolute left-[-5px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-r-[5px] border-r-white border-b-[5px] border-b-transparent" />

          {/* ডামি লোগো আইকন */}
          <div className="w-7 h-7 bg-[#f57224] rounded-[6px] flex items-center justify-center text-white font-bold text-xs shrink-0">
            d
          </div>
          <p className="text-[10px] text-[#757575] leading-[13px]">
            Download app to enjoy exclusive discounts!
          </p>
        </div>
      </div>

      {/* ৪. Seller Info Section */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="text-[12px] text-[#757575] mb-0.5">Sold by</div>
            <div className="text-[14px] font-normal text-[#212121] uppercase tracking-wide">
              ABSAR & BROTHRES
            </div>
          </div>
          {/* চ্যাট নাও বাটন */}
          <button className="flex items-center gap-1 text-[13px] text-[#1a9cb7] font-medium hover:underline mt-4">
            <MessageSquare className="w-4 h-4 fill-[#1a9cb7]" />
            Chat Now
          </button>
        </div>

        {/* সেলার রেটিং টেবিল/গ্রিড */}
        <div className="grid grid-cols-3 border-t border-b border-[#eff0f5] py-3 mb-4">
          <div className="px-1 border-r border-[#eff0f5]">
            <div className="text-[11px] text-[#757575] leading-tight mb-2 h-6">
              Positive Seller Ratings
            </div>
            <div className="text-[22px] font-normal text-[#212121]">93%</div>
          </div>
          <div className="px-2 border-r border-[#eff0f5]">
            <div className="text-[11px] text-[#757575] leading-tight mb-2 h-6">
              Ship on Time
            </div>
            <div className="text-[22px] font-normal text-[#212121]">100%</div>
          </div>
          <div className="px-2">
            <div className="text-[11px] text-[#757575] leading-tight mb-2 h-6">
              Chat Response Rate
            </div>
            <div className="text-[11px] text-[#9e9e9e] mt-2 italic font-serif">
              Not enough d...
            </div>
          </div>
        </div>

        {/* গো টু স্টোর বাটন */}
        <button className="w-full text-center text-[13px] font-medium text-[#1a9cb7] uppercase tracking-wider py-1 hover:underline">
          GO TO STORE
        </button>
      </div>
    </div>
  );
};

export default DeliverySidebar;
