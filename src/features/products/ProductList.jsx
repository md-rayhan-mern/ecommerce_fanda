import { useState, useEffect } from "react";
import ProductCard from "../../components/productCard/ProductCard";
import {fetchProducts} from "../../features/products/allProductSlice";
import {useSelector, useDispatch} from "react-redux";
import { Link } from "react-router";
const ProductList = () => {
  // শুরুতে কয়টি প্রোডাক্ট দেখাবে তার কাউন্ট (যেমন: ৮টি)
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);

  
 // const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
    const { allProducts, isLoading, error, errorMessage } = useSelector(
    (state) => state?.allProducts
  );


   const currentPage = allProducts?.items?.meta?.page;
  const totalPages = allProducts?.items?.meta?.totalPages;
  // console.log(currentPage);
  // console.log(totalPages);
  const products = allProducts?.items?.data || [{
    _id: "6a62a71cf762992e65264849",
    name: "Casio Black Resin All-Season Digital Sports...",
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
              
          price:       300,
          oldPrice :   206,

          discount:      24,

          rating:       1.5,
          review:        120,
          breadcrumbs: ["electronics","mobile","smartphone","skin'O Strawberry"],
          galleryImage: ["https://static.vecteezy.com/system/resources/thumbnails/047/003/863/small_2x/blue-t-shirt-hanging-on-wooden-hanger-against-pink-background-photo.jpeg","https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww","https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww"],
          brand: ["Samsung", "samsung is best for product", "/samsung"],
          stock: {
            quantity: 897,
          },
          offer: {
            discountPercent: 56,
            startDate: "2026-07-30T18:00:00.000+00:00",
            endDate: "2026-08-05T18:00:00.000+00:00"
          }
  }];

    const dispatch = useDispatch();
  useEffect(() => {
    // থংকে সবসময় অবজেক্ট আকারে ডাটা পাঠাতে হবে { page, limit }
    dispatch(fetchProducts({ page, limit }));
  }, [dispatch, page]);

  if(isLoading) return <div>Loading...</div>
  
  return (
    <div className="w-full bg-[#f5f5f5] py-4 px-4">
      <div className="max-w-[1500px] mx-auto bg-white rounded-sm p-2 shadow-xs">
        {/* টাইটেল পার্ট */}
        <div className="mb-2">
          <span className="text-xl text-gray-800 font-normal tracking-wide block">
            Product List..
          </span>
        </div>

        {/* গ্রিড লেআউট: ছবির মতো নিখুঁত বর্ডার গ্রিড ইফেক্ট (ডেক্সটপে ৮টি কলাম, ২ লাইন) */}

        <div className="grid grid-cols-2  md:grid-cols-4 lg:grid-cols-6 border-t border-l border-gray-200">
          
          { products?.map((product) => (
            <Link to={`/details/${product?._id}`} key={product?._id}>
              <ProductCard
                product={product}
                discount={false}
                showRating={true}
                smDiscount={true}
                oldPrice={false}
              />
            </Link>
          ))} 
        </div>

        {/* visibleProducts এর মান যদি আপনার মোট প্রোডাক্টের চেয়ে কম হয়, তবেই বাটনটি স্ক্রিনে আসবে */}
        {currentPage < totalPages ? (
          <div className="flex justify-center mt-8 w-full">
            <button
              // ক্লিকে আগের মানের সাথে আরও ৪ যোগ হয়ে স্টেট আপডেট হবে
              onClick={() => setPage((prev) => prev = prev + 1)}
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm px-6 py-2.5 rounded-sm transition-colors duration-150 uppercase tracking-wider"
            >
              Load More
            </button>
          </div>
        ) : (
          <div className="flex justify-center mt-8 w-full">
            <button
              // ক্লিকে আগের মানের সাথে আরও ৪ যোগ হয়ে স্টেট আপডেট হবে
              onClick={() => setPage(1)}
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm px-6 py-2.5 rounded-sm transition-colors duration-150 uppercase tracking-wider"
            >
              Load Back
            </button>
          </div>
        )}
         
      </div>
    </div>
  );
};

export default ProductList;
