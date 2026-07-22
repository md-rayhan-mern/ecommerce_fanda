import React from "react";
import Breadcrumb from "./Breadcrumb";
import ProductGallery from "./ProductGallery";
import ProductMainInfo from "./ProductMainInfo";
import DeliverySidebar from "./DeliverySidebar";
import ProductReviews from "./ProductReviews";
import ProductQA from "./ProductQA";
import RelatedProducts from "./RelatedProducts";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

export default function ProductDetailsPage() {
  // ডামি ডেটা (প্রোডাকশন লেভেলে এটি Redux State বা API Response থেকে আসবে)
  const productImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTagCvUpd_cytRycylEvv_n8erw0lcfUO0i_sHBTYA0h9cR-qUqvjCMdq1P&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStNl_yiU82rYG8VpnK0dCm9GQ451xnO8aYrXlti8Jb2308oKFdDN3bmoqd&s=10",
  ];
  const {id} = useParams();
  const {allProducts, isLoading, error} = useSelector((state) => state.allProducts);
  const singleProduct = allProducts.find((product) => String(product.id) === String(id))
  console.log(singleProduct);
 
  
  
  return (
    <div className="min-h-screen bg-[#f4f4f4] py-4 selection:bg-[#f57224]/20">
      <div className="max-w-[1500px] mx-auto px-3 sm:px-4">
        {/* =========================================================================
           ১. একদম উপরের অংশ: BREADCRUMB (CATEGORY PATH) SECTION
           ========================================================================= */}
        <div className="mb-4">
          {/* <Breadcrumb /> */}
          <Breadcrumb bre={singleProduct.breadcrumbs} />
        </div>

        {/* =========================================================================
           ২. মাঝখানের মূল অংশ: ৩-কলাম রেস্পন্সিভ গ্রিড লেআউট 
              (মোবাইলে ১ কলাম, বড় স্ক্রিনে ১২ কলামের গ্রিড)
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start bg-white p-4 rounded-xl shadow-sm">
          {/* ⬅️ বামের কলাম (ডেস্কটপে ১২ ভাগের ৪ ভাগ জায়গা নিবে) */}
          <div className="lg:col-span-4 w-full">
            {/* <ProductGallery images={productImages} /> */}
            <div className="aspect-square bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 text-sm text-gray-400">
              {/* ProductGallery */}
              <ProductGallery img={singleProduct.image} gallery={singleProduct.galleryImage} />
            </div>
          </div>

          {/* 🔄 মাঝখানের কলাম (ডেস্কটপে ১২ ভাগের ৫ ভাগ জায়গা নিবে) */}
          <div className="lg:col-span-5 w-full flex flex-col gap-4 lg:px-2">
            {/* প্রোডাক্ট মেইন ইনফো (টাইটেল, রেটিং, প্রাইস) */}
            {/* <ProductMainInfo /> */}
            <div className="border-b border-gray-100 pb-3">
              <div className="bg-purple-50 p-4 rounded-lg text-sm text-purple-700 font-medium">
                [মাঝের মডিউল পার্ট ২: বেগুনি রঙের ফ্ল্যাশ সেল কাউন্টডাউন টাইমার
                ব্যানার এখানে বসবে] Flash sell
              </div>
              <ProductMainInfo product={singleProduct} />
            </div>
          </div>

          {/* ➡️ ডানের কলাম: ডেলিভারি সাইডবার (ডেস্কটপে ১২ ভাগের ৩ ভাগ জায়গা নিবে) */}
          <div className="lg:col-span-3 w-full">
            {/* <DeliverySidebar /> */}
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-sm text-gray-500">
              <DeliverySidebar />
            </div>
          </div>
        </div>

        {/* =========================================================================
           ৩. নিচের অংশ: প্রোডাক্টের বিস্তারিত বিবরণ, রিভিউ এবং কিউ-অ্যান্ড-এ
           ========================================================================= */}
        <div className="w-full flex flex-col gap-4 mt-4">
          {/* প্রোডাক্ট স্পেসিফিকেশন ও ডেসক্রিপশন */}
          {/* <ProductDescription /> */}
          <div>
            {/* পূর্বের তৈরি করা ProductDescription মডিউল এখানে কল হবে */}
            Specification
          </div>

          {/* রেটিংস ও রিভিউ সেকশন */}
          {/* <ProductReviews /> */}
          <div>
            {/* পূর্বের তৈরি করা ProductReviews মডিউল এখানে কল হবে */}
            <ProductReviews/>
          </div>

          {/* প্রশ্ন ও উত্তর (Q&A) সেকশন */}
          {/* <ProductQA /> */}
          <div>
            {/* পূর্বের তৈরি করা ProductQA মডিউল এখানে কল হবে */}
            <ProductQA/>
          </div>

          {/* ইউ মে অলসো লাইক (রিলিজড প্রোডাক্টস রিকমেন্ডেশন) */}
          {/* <RelatedProducts /> */}
          <div>
            {/* পূর্বের তৈরি করা RelatedProducts মডিউল এখানে কল হবে */}
            <RelatedProducts/>
          </div>
        </div>
      </div>
    </div>
  );
}
