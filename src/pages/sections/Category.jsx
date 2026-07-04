import CategoryCard from "../../components/categoryCard/CategoryCard"

const CategorySection = ({categories}) => {


  return (
    <div className="w-full bg-[#f5f5f5] py-6 px-4">
      <div className="max-w-[1200px] mx-auto bg-white rounded-sm p-4 shadow-xs">
        {/* টাইটেল পার্ট */}
        <div className="mb-4">
          <span className="text-xl text-gray-800 font-normal tracking-wide block">
            Categories
          </span>
        </div>

        {/* গ্রিড লেআউট: ছবির মতো নিখুঁত বর্ডার গ্রিড ইফেক্ট (ডেক্সটপে ৮টি কলাম, ২ লাইন) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 border-t border-l border-gray-200">
          {categories.map((category) => <CategoryCard category={category}/>)}
        </div>
      </div>
    </div>
  );
};
export default CategorySection;
