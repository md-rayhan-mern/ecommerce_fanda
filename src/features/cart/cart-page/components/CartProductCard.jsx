import React from 'react'
import {Store,Heart,Trash2,Minus,Plus} from "lucide-react"

const CartProductCard = ({item}) => {
  return (
             <div  className="bg-white rounded-sm shadow-sm border border-gray-100 p-3 sm:p-4 space-y-3">
                {/* শপের নাম */}
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-800 font-medium border-b border-gray-50 pb-2">
                  <input type="checkbox" className="w-4 h-4 accent-[#f57224] rounded border-gray-300" />
                  <span className="flex items-center gap-1.5 cursor-pointer hover:text-[#f57224]">
                    <Store size={16} className="text-gray-400" />
                    {item.shopName}
                  </span>
                  <span className="text-gray-400 text-xs font-normal">&gt;</span>
                </div>

                {/* প্রোডাক্টের বিস্তারিত */}
                <div className="flex flex-col sm:flex-row gap-3 sm:items-start justify-between">
                  <div className="flex gap-3 flex-1">
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <input type="checkbox" className="w-4 h-4 accent-[#f57224] rounded border-gray-300" />
                      <img src={item.image} alt={item.title} className="w-16 h-16 sm:w-20 sm:h-20 object-cover border border-gray-200 rounded-sm" />
                    </div>
                    
                    <div className="space-y-1">
                      {/* টাইটেল এবং ৭.৭ ব্যাজ */}
                      <p className="text-xs sm:text-sm text-gray-800 font-normal leading-tight line-clamp-2">
                        <span className="bg-purple-700 text-white text-[10px] font-bold px-1 py-0.5 rounded-sm mr-1.5">7.7</span>
                        {item.title}
                      </p>
                      <p className="text-[11px] sm:text-xs text-gray-400 leading-normal">{item.specs}</p>
                      {item.promo && <p className="text-[11px] text-purple-600 font-medium">{item.promo}</p>}
                      {item.stockWarning && <p className="text-[11px] text-orange-600">{item.stockWarning}</p>}
                    </div>
                  </div>

                  {/* প্রাইস এবং কোয়ান্টিটি কন্ট্রোলার */}
                  <div className="flex sm:flex-col justify-between items-center sm:items-end gap-2 pt-2 sm:pt-0 border-t border-dashed border-gray-100 sm:border-0">
                    <div className="text-left sm:text-right">
                      <p className="text-sm sm:text-base text-[#f57224] font-medium">৳ {item.price}</p>
                      <p className="text-xs text-gray-400 line-through">৳ {item.oldPrice}</p>
                      <div className="flex gap-3 mt-1.5 text-gray-400">
                        <button className="hover:text-red-500"><Heart size={16} /></button>
                        <button className="hover:text-red-500"><Trash2 size={16} /></button>
                      </div>
                    </div>

                    {/* প্লাস মাইনাস বাটন */}
                    <div className="flex items-center border border-gray-200 rounded-sm bg-gray-50">
                      <button className="p-1.5 px-2.5 text-gray-500 hover:bg-gray-200 transition-colors"><Minus size={12} /></button>
                      <span className="px-3 text-xs sm:text-sm font-medium text-gray-800 bg-white py-0.5">{item.quantity}</span>
                      <button className="p-1.5 px-2.5 text-gray-500 hover:bg-gray-200 transition-colors"><Plus size={12} /></button>
                    </div>
                  </div>
                </div>
              </div>
             
  )
}

export default CartProductCard