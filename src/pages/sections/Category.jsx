import CategoryCard from "../../components/categoryCard/CategoryCard";

const CategorySection = ({ categories }) => {
  return (
    <div className="w-full bg-[#f5f5f5] py-6 px-4">
      <div className="max-w-[1500px] mx-auto bg-white rounded-sm p-2 shadow-xs">
        {/* Section header */}
        <div className="mb-1">
          <span className="text-xl text-gray-800 font-normal tracking-wide block">
            Categories
          </span>
        </div>

        {/*Category Grid & border  */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 border-t border-l border-gray-200">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CategorySection;
