import React from 'react';

const ManageAccount = () => {
  // ডামি অর্ডার ডেটা
  const orders = [
    {
      id: "687213651344833",
      date: "07/07/2026",
      image: "https://unsplash.com", // ডামি প্রোডাক্ট ইমেজ
      price: "৳ 217"
    },
    {
      id: "674269413144833",
      date: "27/05/2025",
      image: "https://unsplash.com",
      price: "৳ 729"
    },
    {
      id: "671748106644833",
      date: "20/02/2025",
      image: "https://unsplash.com",
      price: "৳ 239"
    }
  ];

  return (
    <div className="min-h-screen bg-[#eff0f5] p-3 sm:p-6 md:p-8 font-sans antialiased">
      <div className="max-w-[1180px] mx-auto flex flex-col md:flex-row gap-6">
        
        {/* 1. বাম পাশের সাইডবার (মোবাইলে উপরে ফুল-উইডথ হবে) */}
        <aside className="w-full md:w-[240px] flex-shrink-0 space-y-4 text-xs sm:text-sm">
          <div>
            <p className="text-gray-500 text-xs">Hello, Papon</p>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-[#1a73e8] font-medium">Manage My Account</h3>
            <ul className="pl-3 space-y-1.5 text-gray-600">
              <li className="text-[#1a73e8] cursor-pointer">My Profile</li>
              <li className="hover:text-[#1a73e8] cursor-pointer">Address Book</li>
              <li className="hover:text-[#1a73e8] cursor-pointer">My Payment Options</li>
              <li className="hover:text-[#1a73e8] cursor-pointer">Daraz Wallet</li>
            </ul>
          </div>

          <div className="space-y-1">
            <h3 className="text-gray-800 font-medium">My Orders</h3>
            <ul className="pl-3 space-y-1.5 text-gray-600">
              <li className="hover:text-[#1a73e8] cursor-pointer">My Returns</li>
              <li className="hover:text-[#1a73e8] cursor-pointer">My Cancellations</li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-800 font-medium hover:text-[#1a73e8] cursor-pointer">My Reviews</h3>
          </div>

          <div>
            <h3 className="text-gray-800 font-medium hover:text-[#1a73e8] cursor-pointer">My Wishlist & Followed Stores</h3>
          </div>

          <div>
            <h3 className="text-gray-800 font-medium hover:text-[#1a73e8] cursor-pointer">Sell On Daraz</h3>
          </div>
        </aside>

        {/* 2. মূল কনটেন্ট এরিয়া */}
        <main className="flex-1 space-y-6">
          <h1 className="text-lg sm:text-xl md:text-2xl text-gray-800 font-normal">Manage My Account</h1>

          {/* প্রোফাইল ও অ্যাড্রেস কার্ড সেকশন */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            
            {/* পার্সোনাল প্রোফাইল */}
            <div className="bg-white p-4 sm:p-5 shadow-sm rounded-sm text-xs sm:text-sm">
              <div className="flex justify-between items-center border-b border-gray-100 pb-2 mb-3">
                <h2 className="text-gray-700 font-medium">Personal Profile</h2>
                <button className="text-[#1a73e8] text-xs uppercase hover:underline">Edit</button>
              </div>
              <div className="space-y-1 text-gray-600">
                <p className="text-gray-900 font-medium">Papon</p>
                <p>pa******@gmail.com</p>
                <label className="flex items-center gap-2 mt-4 cursor-pointer text-gray-500 text-xs">
                  <input type="checkbox" className="rounded-sm border-gray-300 accent-[#f57224]" />
                  Receive marketing emails
                </label>
              </div>
            </div>

            {/* শিপিং অ্যাড্রেস */}
            <div className="bg-white p-4 sm:p-5 shadow-sm rounded-sm text-xs sm:text-sm lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-2 mb-3">
                  <h2 className="text-gray-700 font-medium">Address Book</h2>
                  <button className="text-[#1a73e8] text-xs uppercase hover:underline">Edit</button>
                </div>
                <div className="space-y-1 text-gray-600">
                  <p className="text-gray-400 text-[10px] uppercase tracking-wider font-semibold">Default Shipping Address</p>
                  <p className="text-gray-900 font-medium mt-1">Rayhan</p>
                  <p>Board bazar</p>
                  <p>Dhaka - Kishoreganj - Karimganj Noabad</p>
                  <p className="text-gray-500 font-medium mt-1">(+880) 1939096777</p>
                </div>
              </div>

              {/* বিলিং অ্যাড্রেস */}
              <div className="border-t sm:border-t-0 sm:border-l border-gray-100 pt-4 sm:pt-0 sm:pl-4">
                <div className="hidden sm:block pb-2 mb-3 h-[25px]"></div>
                <div className="space-y-1 text-gray-600">
                  <p className="text-gray-400 text-[10px] uppercase tracking-wider font-semibold">Default Billing Address</p>
                  <p className="text-gray-900 font-medium mt-1">Rayhan</p>
                  <p>Board bazar</p>
                  <p>Dhaka - Kishoreganj - Karimganj Noabad</p>
                  <p className="text-gray-500 font-medium mt-1">(+880) 1939096777</p>
                </div>
              </div>
            </div>

          </div>

          {/* Recent Orders সেকশন */}
          <div className="bg-white shadow-sm rounded-sm overflow-hidden">
            <div className="p-4 sm:p-5 border-b border-gray-100">
              <h2 className="text-sm sm:text-base text-gray-700 font-medium">Recent Orders</h2>
            </div>

            {/* টেবিল এরিয়া (মোবাইলে স্ক্রোলেবল করার জন্য overflow-x-auto ব্যবহার করা হয়েছে) */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[600px]">
                <thead>
                  <tr className="bg-gray-50 text-gray-400 font-normal border-b border-gray-100">
                    <th className="p-4 font-normal">Order #</th>
                    <th className="p-4 font-normal">Placed On</th>
                    <th className="p-4 font-normal">Items</th>
                    <th className="p-4 font-normal">Total</th>
                    <th className="p-4 font-normal text-right"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  {orders.map((order, index) => (
                    <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 font-medium text-gray-800">{order.id}</td>
                      <td className="p-4 text-gray-500">{order.date}</td>
                      <td className="p-4">
                        <img 
                          src={order.image} 
                          alt="Product" 
                          className="w-8 h-8 object-cover rounded-sm border border-gray-200"
                        />
                      </td>
                      <td className="p-4 font-medium text-gray-900">{order.price}</td>
                      <td className="p-4 text-right">
                        <button className="text-[#1a73e8] font-medium hover:underline uppercase text-xs tracking-wider">
                          Manage
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>

      </div>
    </div>
  );
};

export default ManageAccount;
