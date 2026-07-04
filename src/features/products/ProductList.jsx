import { useState, useEffect } from "react";
import ProductCard from "../../components/productCard/ProductCard";
const ProductList = ({ products }) => {
  // শুরুতে কয়টি প্রোডাক্ট দেখাবে তার কাউন্ট (যেমন: ৮টি)
  const [visibleProducts, setVisibleProducts] = useState(2);
  //   const [products, setProducts] = useState([]);
  //   const [page, setPage] = useState(1);
  //   const [loading, setLoading] = useState(false);
  //   const [hasMore, setHasMore] = useState(true);
  // ডাটাবেজ থেকে ডাটা নিয়ে আসার মূল ফাংশন
  // const fetchProducts = async (currentPage) => {
  //   if (loading) return;
  //   setLoading(true);

  //   try {
  //     // এপিআই-তে বর্তমান পেইজ এবং লিমিট (৪টি করে) পাঠানো হচ্ছে
  //     const res = await fetch(`/api/products?page=${currentPage}&limit=4`);
  //     const data = await res.json();

  //     if (data.products.length === 0) {
  //       setHasMore(false); // যদি ডাটাবেজ থেকে আর কোনো প্রোডাক্ট না আসে
  //     } else {
  //       // ম্যাজিক লাইন: আগের প্রোডাক্টগুলোর সাথে নতুন আসা প্রোডাক্ট জোড়া (Spread) দেওয়া হচ্ছে
  //       setProducts((prev) => [...prev, ...data.products]);
  //     }
  //   } catch (error) {
  //     console.error("ডাটা লোড করতে সমস্যা হয়েছে:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  // প্রথমবার পেজ লোড হলে ১ম পেইজের ডাটা আসবে
  // useEffect(() => {
  //   fetchProducts(1);
  // }, []);

  // // লোড মোর বাটনে ক্লিক করলে এই ফাংশনটি কল হবে
  // const handleLoadMore = () => {
  //   const nextPage = page + 1;
  //   setPage(nextPage);      // পেইজ নাম্বার ১ বাড়বে (যেমন: ১ থেকে ২ হবে)
  //   fetchProducts(nextPage); // নতুন পেইজের ডাটাবেজ কল হবে
  // };
  return (
    <div className="w-full bg-[#f5f5f5] py-4 px-4">
      <div className="max-w-[1500px] mx-auto bg-white rounded-sm p-4 shadow-xs">
        {/* টাইটেল পার্ট */}
        <div className="mb-4">
          <span className="text-xl text-gray-800 font-normal tracking-wide block">
            Product List..
          </span>
        </div>

        {/* গ্রিড লেআউট: ছবির মতো নিখুঁত বর্ডার গ্রিড ইফেক্ট (ডেক্সটপে ৮টি কলাম, ২ লাইন) */}
        <div className="grid grid-cols-2  md:grid-cols-4 lg:grid-cols-6 border-t border-l border-gray-200">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              discount={false}
              showRating={true}
              smDiscount={true}
              oldPrice={false}
            />
          ))}
        </div>
        {/* visibleProducts এর মান যদি আপনার মোট প্রোডাক্টের চেয়ে কম হয়, তবেই বাটনটি স্ক্রিনে আসবে */}
        {visibleProducts < products.length && (
          <div className="flex justify-center mt-8 w-full">
            <button
              // ক্লিকে আগের মানের সাথে আরও ৪ যোগ হয়ে স্টেট আপডেট হবে
              onClick={() => setVisibleProducts((prev) => prev + 2)}
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm px-6 py-2.5 rounded-sm transition-colors duration-150 uppercase tracking-wider"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
