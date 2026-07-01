import { useState } from "react";
import {
  MapPin,
  Search,
  ChevronDown,
  ShoppingCart,
  Menu,
  X,
  User,
} from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0); // কার্ট কাউন্ট স্টেট

  return (
    <nav className="bg-[#131921] text-white sticky top-0 z-50 font-sans">
      {/* --- ১. ডেস্কটপ ও ট্যাবলেট মেইন বার --- */}
      <div className="max-w-[1500px] mx-auto flex items-center justify-between p-2 gap-4">
        {/* বাম পাশের অংশ: লোগো এবং লোকেশন */}
        <div className="flex items-center gap-4">
          {/* মোবাইল মেনু বাটন */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1 hover:border border-white rounded"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 " />
            ) : (
              <Menu className="w-6 " />
            )}
          </button>

          {/* ব্র্যান্ড লোগো টেক্সট (অ্যামাজন স্টাইল) */}
          <div className="flex flex-col cursor-pointer border border-transparent hover:border-white p-1 rounded">
            <span className="text-xl font-black tracking-tight leading-none">
              amazon
            </span>
            <span className="text-xs text-[#febd69] font-bold self-end mt-[-2px]">
              .bd
            </span>
          </div>

          {/* ডেলিভারি লোকেশন (ডেস্কটপ অনলি) */}
          <div className="hidden lg:flex items-center gap-1 border border-transparent hover:border-white p-1 rounded cursor-pointer">
            <MapPin className="w-5 h-5 mt-3 text-gray-300" />
            <div className="flex flex-col">
              <span className="text-[11px] text-gray-400 leading-none">
                Deliver to
              </span>
              <span className="text-sm font-bold leading-tight">
                Bangladesh
              </span>
            </div>
          </div>
        </div>

        {/* মাঝখানের অংশ: অ্যাডভান্সড সার্চ বার (মোবাইলে হাইড থাকবে, ডেস্কটপে বড় হবে) */}
        <div className="hidden md:flex flex-1 items-center h-10 rounded-md overflow-hidden bg-white focus-within:ring-2 focus-within:ring-[#f3a847]">
          {/* অল ক্যাটাগরি ড্রপডাউন */}
          <div className="flex items-center gap-1 bg-[#f3f3f3] text-gray-700 h-full px-3 text-xs cursor-pointer hover:bg-gray-300 border-r border-gray-300 transition">
            All <ChevronDown className="w-3 h-3 text-gray-500" />
          </div>
          {/* ইনপুট ফিল্ড */}
          <input
            type="text"
            placeholder="Search Amazon"
            className="w-full h-full px-3 text-black text-sm outline-none"
          />
          {/* সার্চ বাটন আইকন */}
          <button className="bg-[#febd69] hover:bg-[#f3a847] h-full px-6 flex items-center justify-center cursor-pointer transition text-black">
            <Search className="w-5 h-5 font-bold" />
          </button>
        </div>

        {/* ডান পাশের অংশ: ল্যাঙ্গুয়েজ, অ্যাকাউন্ট, অর্ডার এবং কার্ট */}
        <div className="flex items-center gap-2 md:gap-4 text-xs font-bold">
          {/* ল্যাঙ্গুয়েজ সিলেক্টর (ডেস্কটপ অনলি) */}
          <div className="hidden md:flex items-center gap-1 border border-transparent hover:border-white p-2 rounded cursor-pointer h-full">
            <span className="text-base">🇺🇸</span>
            <span className="uppercase text-sm tracking-wide">EN</span>
            <ChevronDown className="w-3 h-3 text-gray-400 mt-1" />
          </div>

          {/* অ্যাকাউন্ট এবং লিস্ট */}
          <div className="flex flex-col border border-transparent hover:border-white p-2 rounded cursor-pointer">
            <span className="text-[11px] font-normal text-gray-300 leading-none">
              Hello, sign in
            </span>
            <span className="text-sm font-bold flex items-center gap-1 leading-tight">
              Account & Lists{" "}
              <ChevronDown className="w-3 h-3 text-gray-400 mt-0.5" />
            </span>
          </div>

          {/* রিটার্ন এবং অর্ডার (ট্যাবলেট ও ডেস্কটপ) */}
          <div className="hidden sm:flex flex-col border border-transparent hover:border-white p-2 rounded cursor-pointer">
            <span className="text-[11px] font-normal text-gray-300 leading-none">
              Returns
            </span>
            <span className="text-sm font-bold leading-tight">& Orders</span>
          </div>

          {/* শপিং কার্ট আইকন (কাউন্ট সহ) */}
          <div className="flex items-end gap-1 border border-transparent hover:border-white p-2 rounded cursor-pointer relative h-11">
            <div className="relative">
              <span className="absolute top-[-8px] left-[10px] text-sm font-bold text-[#f3a847] bg-[#131921] px-1 rounded-full">
                {cartCount}
              </span>
              <ShoppingCart className="w-7 h-7" />
            </div>
            <span className="text-sm font-bold hidden sm:inline-block mb-0.5">
              Cart
            </span>
          </div>
        </div>
      </div>

      {/* --- ২. মোবাইল রেসপন্সিভ সার্চ বার (শুধু মোবাইলের জন্য নিচে দেখাবে) --- */}
      <div className="md:hidden px-3 pb-3">
        <div className="flex items-center h-10 rounded-md overflow-hidden bg-white">
          <input
            type="text"
            placeholder="Search Amazon"
            className="w-full h-full px-3 text-black text-sm outline-none"
          />
          <button className="bg-[#febd69] h-full px-5 flex items-center justify-center text-black">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* --- ৩. ড্রপডাউন মোবাইল সাইডবার মেনু (মোবাইলে ক্লিক করলে ওপেন হবে) --- */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#232f3e] border-t border-gray-700 py-3 px-4 transition-all duration-300">
          <div className="flex flex-col gap-4 text-sm font-medium">
            <div className="flex items-center gap-2 text-gray-300 pb-2 border-b border-gray-700">
              <MapPin className="w-4 h-4" /> Deliver to Bangladesh
            </div>
            <a href="#" className="hover:text-[#febd69]">
              আজকের অফার (Today's Deals)
            </a>
            <a href="#" className="hover:text-[#febd69]">
              কাস্টমার সার্ভিস
            </a>
            <a href="#" className="hover:text-[#febd69]">
              রেজিস্ট্রি
            </a>
            <a href="#" className="hover:text-[#febd69]">
              গিফট কার্ড
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
