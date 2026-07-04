import ProductCard from "../../components/productCard/ProductCard"

const FlashSell = () => {
  // আপনার ছবি অনুযায়ী ঠিক ৬টি প্রোডাক্টের ডেটা অ্যারে
  const products = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D", // ডামি ইমেজ লিংক, আপনার ইমেজ বসিয়ে নিবেন
      name: "skin'O Strawberry Scented Shower Gel -...",
      price: "২৫০",
      oldPrice: "২৬০",
      discount: "0",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      name: "Casio Black Resin All-Season Digital Sports...",
      price: "২৩৫",
      oldPrice: "৫২৫",
      discount: "৫৫%",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1571380401583-72ca84994796?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxwcm9kdWN0fGVufDB8fDB8fHww",
      name: "TEL Premium Shoe Rack Red 4 Step Red 861587",
      price: "৪৭৬",
      oldPrice: "৬১০",
      discount: "২২%",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1530630458144-014709e10016?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxwcm9kdWN0fGVufDB8fDB8fHww",
      name: "Royal Cafe Classic Coffee 200g | Premium...",
      price: "৬৪০",
      oldPrice: "৭০০",
      discount: "৩%",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1505740106531-4243f3831c78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxwcm9kdWN0fGVufDB8fDB8fHww",
      name: "Realme C100i 4/64GB Smartphone - 7000mAh...",
      price: "১৫,৮৪৫",
      oldPrice: "১৬,৯৯৯",
      discount: "৭%",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1555487505-8603a1a69755?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxwcm9kdWN0fGVufDB8fDB8fHww",
      name: "Top-Tier Option - Cute humidifier egg lighting...",
      price: "১৮৭",
      oldPrice: "৬००",
      discount: "৬৯%",
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
            <ProductCard product={product}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashSell;
