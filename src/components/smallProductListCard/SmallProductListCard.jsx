import React from "react";

const SmallProductListCard = ({
  name,
  price,
  discount,
  oldPrice,
  varint,
  rating,
  img,
  review,
  qty,
  indx,
}) => {
  console.log(qty);
  console.log(`image : ${img}`);
  console.log(`rating : ${rating}`);
  console.log(`discount : ${discount}`);
  console.log(`oldPrice : ${oldPrice}`);
  console.log(`varint : ${varint.brand}`);

  return (
    <div className="flex flex-col sm:flex-row items-start gap-4 bg-gray-50/50 p-3 rounded-lg border border-gray-100">
      <div className="w-20 h-20 bg-gray-100 rounded border border-gray-200 flex-shrink-0 overflow-hidden flex items-center justify-center relative">
        <img src={img} alt="Product" className="object-cover w-full h-full" />
        <span className="absolute top-1 left-1 bg-purple-600 text-white text-[9px] font-bold px-1 rounded">
          {rating}
        </span>
      </div>

      <div className="flex-1 space-y-1">
        <h3 className="text-sm text-gray-800 font-normal leading-snug hover:text-orange-500 cursor-pointer transition-colors line-clamp-2">
          {name}
        </h3>
        <p className="text-xs text-gray-400">
          {`brand: ${varint.brand}`}, {`Color: ${varint.color}`} Family:(4 Pcs)
          Black +Logo
        </p>

        <div className="flex items-baseline gap-2 mt-1">
          <span className="text-md font-bold text-orange-500">
            {`৳ ${price}`}
          </span>
          <span className="text-xs text-gray-400 line-through">{`৳ ${oldPrice}`}</span>
          <span className="text-xs text-green-600 font-medium">
            {`-${discount}%`}
          </span>
        </div>
      </div>

      <div className="text-sm text-gray-500 font-medium self-end sm:self-start mt-2 sm:mt-0">
        Qty: {`${indx + 1} of ${qty}`}
      </div>
    </div>
  );
};

export default SmallProductListCard;
