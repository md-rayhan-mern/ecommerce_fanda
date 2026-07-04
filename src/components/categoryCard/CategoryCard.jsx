import React from "react";

const CategoryCard = ({ category }) => {
  return (
    <div
      key={category.id}
      className="bg-white border-r border-b border-gray-200 p-3 flex flex-col items-center justify-between text-center cursor-pointer hover:bg-gray-50 h-[145px]"
    >
      {/* Category image box */}
      <div className="w-[100px] h-[100px] flex items-center justify-center overflow-hidden mb-2">
        <img
          src={category.image}
          alt={category.name}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Category name */}
      <h3 className="text-gray-700 text-xs font-normal line-clamp-2 leading-4 px-1 flex-grow flex items-center justify-center">
        {category.name}
      </h3>
    </div>
  );
};

export default CategoryCard;
