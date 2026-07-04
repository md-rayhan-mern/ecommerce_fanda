import ProductCard from "../../components/productCard/ProductCard"

const FlashSell = ({products}) => {

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
