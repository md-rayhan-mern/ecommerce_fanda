import CategoryCard from "../../components/categoryCard/CategoryCard"

const CategorySection = () => {
  const categories = [
    { id: 1, name: "Power Sanders", image: "https://images.unsplash.com/photo-1564466809058-bf4114d55352?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {
      id: 2,
      name: "Other Projector Accessories",
      image: "https://plus.unsplash.com/premium_photo-1719289799337-9cb436447965?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    { id: 3, name: "Kitchen Fittings", image: "https://plus.unsplash.com/premium_photo-1670537994863-5ad53a3214e0?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 4, name: "Womens Fashion", image: "https://plus.unsplash.com/premium_photo-1675896084254-dcb626387e1e?q=80&w=935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 5, name: "Donate to Healthcare", image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 6, name: "Goat", image: "https://plus.unsplash.com/premium_photo-1677541205130-51e60e937318?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 7, name: "Watches and Accessories", image: "https://images.unsplash.com/photo-1549049950-48d5887197a0?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    {
      id: 8,
      name: "Watering Systems & Garden Hoses",
      image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=1122&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    { id: 9, name: "Lamp Shades", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 10, name: "Margarine & Spread", image: "https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 11, name: "Bedding Sets", image: "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 12, name: "Pools", image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 13, name: "Bathroom Lighting", image: "https://media.istockphoto.com/id/1222813817/photo/elegant-wrist-watch-closeup-on-dark.webp?a=1&b=1&s=612x612&w=0&k=20&c=GWpoTrNApZ7bWd8QrMWbXNw4qdunk8AHPthPKkjpptc=" },
    { id: 14, name: "Eye Primers", image: "https://plus.unsplash.com/premium_photo-1677526496597-aa0f49053ce2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 15, name: "Digital Downloads", image: "https://plus.unsplash.com/premium_photo-1723708939980-55adb9dd0fc9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D" },
    { id: 16, name: "Traditional Laptops", image: "https://plus.unsplash.com/premium_photo-1663089525424-ca57c1a28a08?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];

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
