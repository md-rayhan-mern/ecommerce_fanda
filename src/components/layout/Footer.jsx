import { Globe, DollarSign, ChevronUp, ChevronDown } from 'lucide-react';

const Footer = () => {
  // "Back to top" ফাংশন যা পেজকে উপরে নিয়ে যাবে
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#232f3e] text-white font-sans mt-auto">
      {/* --- ১. ব্যাক টু টপ বাটন --- */}
      <button 
        onClick={scrollToTop}
        className="w-full bg-[#37475a] hover:bg-[#485769] text-center py-4 text-xs font-semibold tracking-wide transition cursor-pointer flex items-center justify-center gap-1"
      >
        <ChevronUp className="w-4 h-4" /> Back to top
      </button>

      {/* --- ২. মেইন কন্টেন্ট সেকশন (৪ টি কলাম) --- */}
      <div className="max-w-[1000px] mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-xs">
        
        {/* কলাম ১: Get to Know Us */}
        <div>
          <h3 className="font-bold text-sm mb-3">Get to Know Us</h3>
          <ul className="flex flex-col gap-2.5 text-gray-300">
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">About Amazon</a></li>
            <li><a href="#" className="hover:underline">Investor Relations</a></li>
            <li><a href="#" className="hover:underline">Amazon Devices</a></li>
            <li><a href="#" className="hover:underline">Amazon Science</a></li>
          </ul>
        </div>

        {/* কলাম ২: Make Money with Us */}
        <div>
          <h3 className="font-bold text-sm mb-3">Make Money with Us</h3>
          <ul className="flex flex-col gap-2.5 text-gray-300">
            <li><a href="#" className="hover:underline">Sell products on Amazon</a></li>
            <li><a href="#" className="hover:underline">Sell on Amazon Business</a></li>
            <li><a href="#" className="hover:underline">Sell apps on Amazon</a></li>
            <li><a href="#" className="hover:underline">Become an Affiliate</a></li>
            <li><a href="#" className="hover:underline">Advertise Your Products</a></li>
            <li><a href="#" className="hover:underline">Self-Publish with Us</a></li>
            <li><a href="#" className="hover:underline">Host an Amazon Hub</a></li>
            <li><a href="#" className="hover:underline">› See More Make Money with Us</a></li>
          </ul>
        </div>

        {/* কলাম ৩: Amazon Payment Products */}
        <div>
          <h3 className="font-bold text-sm mb-3">Amazon Payment Products</h3>
          <ul className="flex flex-col gap-2.5 text-gray-300">
            <li><a href="#" className="hover:underline">Amazon Business Card</a></li>
            <li><a href="#" className="hover:underline">Shop with Points</a></li>
            <li><a href="#" className="hover:underline">Reload Your Balance</a></li>
            <li><a href="#" className="hover:underline">Amazon Currency Converter</a></li>
          </ul>
        </div>

        {/* কলাম ৪: Let Us Help You */}
        <div>
          <h3 className="font-bold text-sm mb-3">Let Us Help You</h3>
          <ul className="flex flex-col gap-2.5 text-gray-300">
            <li><a href="#" className="hover:underline">Amazon and COVID-19</a></li>
            <li><a href="#" className="hover:underline">Your Account</a></li>
            <li><a href="#" className="hover:underline">Your Orders</a></li>
            <li><a href="#" className="hover:underline">Shipping Rates & Policies</a></li>
            <li><a href="#" className="hover:underline">Returns & Replacements</a></li>
            <li><a href="#" className="hover:underline">Manage Your Content and Devices</a></li>
            <li><a href="#" className="hover:underline">Help</a></li>
          </ul>
        </div>

      </div>

      {/* --- ৩. বটম বার (লোগো এবং ল্যাঙ্গুয়েজ/কারেন্সি সেটিংস) --- */}
      <div className="border-t border-[#3a4553] py-9 bg-[#131921]">
        <div className="max-w-[1000px] mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16">
          
          {/* লোগো */}
          <div className="flex flex-col cursor-pointer p-1">
            <span className="text-xl font-black tracking-tight leading-none">amazon</span>
            <span className="text-xs text-[#febd69] font-bold self-end mt-[-2px]">.bd</span>
          </div>

          {/* সেটিংস বাটন গ্রুপ */}
          <div className="flex flex-wrap justify-center gap-2.5 text-xs text-gray-300">
            {/* ল্যাঙ্গুয়েজ */}
            <button className="flex items-center gap-2 border border-gray-500 hover:border-white px-3 py-1.5 rounded cursor-pointer transition">
              <Globe className="w-3.5 h-3.5 text-gray-400" />
              <span>English</span>
              <div className="flex flex-col text-[8px] leading-none text-gray-500 ml-1">
                <span>▲</span><span>▼</span>
              </div>
            </button>

            {/* কারেন্সি */}
            <button className="flex items-center gap-1 border border-gray-500 hover:border-white px-3 py-1.5 rounded cursor-pointer transition">
              <span className="text-gray-400 font-medium">$</span>
              <span>USD - U.S. Dollar</span>
            </button>

            {/* কান্ট্রি */}
            <button className="flex items-center gap-2 border border-gray-500 hover:border-white px-3 py-1.5 rounded cursor-pointer transition">
              <span>🇺🇸</span>
              <span>United States</span>
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
