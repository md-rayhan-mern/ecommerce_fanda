import React from "react";

const Breadcrumb = ({bre}) => {
  console.log(bre);
  
  return (
    <>
      <div className="text-xs text-gray-500 py-1">
        TV, Audio / Video &gt; Audio &gt; Headphones &gt; Over-the-Ear
        Headphones
      </div>
    </>
  );
};

export default Breadcrumb;
