import React from "react";
import SmallProductListCard from "../../../components/smallProductListCard/smallProductListCard";
import { motion } from "framer-motion";

const Package = ({ selectProducts }) => {
  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <motion.div
      variants={itemVariants}
      className="bg-white rounded-lg shadow-sm p-5 border border-gray-100"
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-100 pb-3 mb-4 gap-2">
        <h2 className="text-md font-semibold text-gray-800">Package 1 of 1</h2>
        <p className="text-xs text-gray-500 sm:text-right">
          Shipped by{" "}
          <span className="font-medium text-gray-700">
            All In One Shopping_Mall
          </span>
        </p>
      </div>

      {/* Delivery Option Card */}
      <div className="mb-5 max-w-xs">
        <p className="text-xs font-medium text-gray-500 mb-2">
          Delivery or Pickup
        </p>
        <div className="border-2 border-cyan-500 bg-cyan-50/30 rounded-lg p-3 relative cursor-pointer">
          <div className="absolute top-3 left-3 w-4 h-4 rounded-full bg-cyan-500 flex items-center justify-center text-white text-[10px] font-bold">
            ✓
          </div>
          <div className="pl-6">
            <span className="text-sm font-bold text-gray-900">৳ 170</span>
            <p className="text-xs font-semibold text-gray-700 mt-0.5">
              Standard Delivery
            </p>
            <p className="text-[11px] text-gray-500 mt-2 bg-white inline-block px-1.5 py-0.5 rounded border border-gray-100">
              Guaranteed by 10-12 Jul
            </p>
          </div>
        </div>
      </div>

      {/* Product Item */}
      {selectProducts.map((itm, indx, arr) => (
        <SmallProductListCard
          key={itm.id}
          name={itm.name}
          price={itm.price}
          discount={itm.discount}
          oldPrice={itm.oldPrice}
          review={itm.review}
          varint={itm.variants}
          img={itm.image}
          rating={itm.rating}
          qty={arr.length}
          indx={indx}
        />
      ))}

      {/* <SmallProductListCard selectProducts={selectProducts} /> */}
    </motion.div>
  );
};

export default Package;
