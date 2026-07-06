import React, { useState } from 'react';
import { Star, MessageSquare, HelpCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import RatingReviews from "../../../components/products-details/isLogin/RatingReviews"
// মক ডাটা (টেস্ট করার জন্য কিছু ডামি রিভিউ দেওয়া হলো)
const MOCK_REVIEWS = [
  { id: 1, user: "Abir Hasan", rating: 5, date: "2 July 2026", comment: "Excellent product! Highly recommended." },
  { id: 2, user: "Sultana Razia", rating: 4, date: "28 June 2026", comment: "Good quality, but shipping took some time." },
  { id: 3, user: "Kamal Hossain", rating: 5, date: "15 June 2026", comment: "Value for money. Works perfectly." },
  { id: 4, user: "Nusrat Jahan", rating: 3, date: "10 June 2026", comment: "Average performance, expected more." },
];

 const ProductReviews = () => {
  // রিভিউ স্টেট (ডাটা না থাকলে খালি অ্যারে `[]` করে টেস্ট করতে পারেন)
  const [reviews, setReviews] = useState(MOCK_REVIEWS);
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 2; // প্রতি পেজে কয়টি রিভিউ দেখাবে

  // পেজিনেশন হিসাব-নিকাশ
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  // রেটিং বারের ডামি ডাটা (৫ স্টার থেকে ১ স্টার)
  const ratingDistribution = [
    { stars: 5, count: 0, percentage: 0 },
    { stars: 4, count: 0, percentage: 0 },
    { stars: 3, count: 0, percentage: 0 },
    { stars: 2, count: 0, percentage: 0 },
    { stars: 1, count: 0, percentage: 0 },
  ];

  return (
    <div className="w-full mx-auto p-4 md:p-6 bg-white border border-gray-100 rounded-lg shadow-sm font-sans text-gray-800">
      
      {/* ১. হেডার ও রেটিং সামারি সেকশন */}
      <h2 className="text-lg font-semibold border-b border-gray-100 pb-3 mb-4">
        Ratings & Reviews of Ryze SIM
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center border-b border-gray-100 pb-6">
        {/* বড় রেটিং সংখ্যা */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-baseline gap-1">
            <span className="text-5xl font-bold">0</span>
            <span className="text-xl text-gray-400">/5</span>
          </div>
          <div className="flex gap-0.5 my-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-gray-200 fill-gray-200" />
            ))}
          </div>
          <p className="text-xs text-gray-400">0 Ratings</p>
        </div>

        {/* প্রোগ্রেস বার / রেটিং ডিস্ট্রিবিউশন */}
        <div className="md:col-span-2 space-y-2 w-full">
          {ratingDistribution.map((item) => (
            <div key={item.stars} className="flex items-center gap-3 text-sm">
              <div className="flex gap-0.5 w-20 justify-end">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-3.5 h-3.5 ${i < item.stars ? 'text-amber-400 fill-amber-400' : 'text-gray-200 fill-gray-200'}`} 
                  />
                ))}
              </div>
              <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-amber-400" style={{ width: `${item.percentage}%` }}></div>
              </div>
              <span className="w-4 text-xs text-gray-400 text-right">{item.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ২. রিভিউ কমেন্ট সেকশন (পেজিংসহ) */}
      <div className="py-6 border-b border-gray-100">
        {reviews.length === 0 ? (
          // রিভিউ না থাকলে এই এম্পটি স্টেট দেখাবে (স্ক্রিনশটের মতো)
          <RatingReviews/>
        ) : (
          // রিভিউ থাকলে এই লিস্ট দেখাবে
          <div className="space-y-4">
            {currentReviews.map((review) => (
              <div key={review.id} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-sm">{review.user}</span>
                  <span className="text-xs text-gray-400">{review.date}</span>
                </div>
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3.5 h-3.5 ${i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`} 
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600">{review.comment}</p>
              </div>
            ))}

            {/* পেজিনেটর বাটনসমূহ */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 pt-4">
                <button 
                  onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-1.5 rounded border border-gray-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-sm text-gray-500">
                  Page {currentPage} of {totalPages}
                </span>
                <button 
                  onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-1.5 rounded border border-gray-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductReviews;