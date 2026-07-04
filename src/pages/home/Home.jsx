import { motion } from "framer-motion";
import MainCarousel from "../../components/mainCarousel/MainCarousel";
import CategorySection from "../sections/Category";
import FlashSell from "../sections/FlashSell";
import ProductList from "../../features/products/ProductList"

const Home = () => {
  //Categorys
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
  //Products
    const products = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D", // ডামি ইমেজ লিংক, আপনার ইমেজ বসিয়ে নিবেন
      name: "skin'O Strawberry Scented Shower Gel -...",
      price: "২৫০",
      oldPrice: "২৬০",
      discount: "0",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      name: "Casio Black Resin All-Season Digital Sports...",
      price: "২৩৫",
      oldPrice: "৫২৫",
      discount: "৫৫",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1571380401583-72ca84994796?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxwcm9kdWN0fGVufDB8fDB8fHww",
      name: "TEL Premium Shoe Rack Red 4 Step Red 861587",
      price: "৪৭৬",
      oldPrice: "৬১০",
      discount: "২২",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1530630458144-014709e10016?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxwcm9kdWN0fGVufDB8fDB8fHww",
      name: "Royal Cafe Classic Coffee 200g | Premium...",
      price: "৬৪০",
      oldPrice: "৭০০",
      discount: "৩",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1505740106531-4243f3831c78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxwcm9kdWN0fGVufDB8fDB8fHww",
      name: "Realme C100i 4/64GB Smartphone - 7000mAh...",
      price: "১৫,৮৪৫",
      oldPrice: "১৬,৯৯৯",
      discount: "৭",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1555487505-8603a1a69755?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxwcm9kdWN0fGVufDB8fDB8fHww",
      name: "Top-Tier Option - Cute humidifier egg lighting...",
      price: "১৮৭",
      oldPrice: "৬००",
      discount: "৬৯",
    },
  ];
  // পুরো পেজ ও চিল্ড্রেন এলিমেন্টগুলোর জন্য অ্যানিমেশন ভেরিয়েন্ট
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, // একটি অ্যানিমেশন শেষ হওয়ার কতক্ষণ পর পরেরটি শুরু হবে
      },
    },
  };

  // ক্যারোসেল/ব্যানারের জন্য অ্যানিমেশন
  const carouselVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 15 },
    },
  };

  // ফ্ল্যাশ সেল সেকশনের জন্য স্ক্রোল-ট্রিগার্ড অ্যানিমেশন
  const sectionVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 14,
        mass: 1.2,
      },
    },
  };

  return (
    // মূল কন্টেইনারে অ্যানিমেশন স্টার্ট করা হলো
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full min-h-screen bg-neutral-900 pb-12" // ব্যাকগ্রাউন্ড ডার্ক থিম হলে আরও গর্জিয়াস লাগে
    >
      {/* ক্যারোসেল সেকশন অ্যানিমেশন */}
      <motion.div variants={carouselVariants} className="w-full">
        <MainCarousel />
      </motion.div>

      {/* ফ্ল্যাশ সেল সেকশন (স্ক্রোলের সাথে চমৎকারভাবে অ্যানিমেট হবে) */}
      <div className="w-full max-w-[1500px] mx-auto ">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* ফ্ল্যাশ সেল টাইটেল (এটির ওপরেও একটি হালকা মাউস হোভার ইফেক্ট দেওয়া হয়েছে) */}
          <div className="my-1 mx-5 inline-block">
            <motion.span
             animate={{ scale: 1.05, color: "#f57224" }}
              transition={{ type: "spring", stiffness: 300, repeat: Infinity, repeatType: "reverse" }}
              className="text-2xl text-white font-bold tracking-wider cursor-default block"
            >
              Flash Sale 🙋🙋
            </motion.span>
          </div>

          {/* আপনার ফ্ল্যাশ সেল প্রোডাক্ট সেকশন */}
          <FlashSell products={products}  />
        </motion.div>
      </div>
      {/* Category section) */}
      <div className="w-full max-w-[1500px] mx-auto ">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible" // স্ক্রিনে যখনই স্ক্রোল করে আসবে তখনই অ্যানিমেশন হবে
          viewport={{ once: true, margin: "-100px" }} // বারবার অ্যানিমেশন না হয়ে শুধু প্রথমবার দেখাবে
        >
          {/* ফ্ল্যাশ সেল টাইটেল (এটির ওপরেও একটি হালকা মাউস হোভার ইফেক্ট দেওয়া হয়েছে) */}
          <div className="my-1 mx-5 inline-block">
            <motion.span
              animate={{ scale: 1.05, color: "#f57224" }}
              transition={{ type: "spring", stiffness: 300, repeat: Infinity, repeatType: "reverse" }}
              className="text-2xl text-white font-bold tracking-wider cursor-default block"
            >
              Departments 🫰🫰
            </motion.span>
          </div>

          {/* Category product section */}
          <CategorySection categories={categories} />
        </motion.div>
      </div>
      {/* JustFor you section) */}
      <div className="w-full max-w-[1500px] mx-auto ">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible" // স্ক্রিনে যখনই স্ক্রোল করে আসবে তখনই অ্যানিমেশন হবে
          viewport={{ once: true, margin: "-100px" }} // বারবার অ্যানিমেশন না হয়ে শুধু প্রথমবার দেখাবে
        >
          {/* ফ্ল্যাশ সেল টাইটেল (এটির ওপরেও একটি হালকা মাউস হোভার ইফেক্ট দেওয়া হয়েছে) */}
          <div className="my-1 mx-5 inline-block">
            <motion.span
               animate={{ scale: 1.05, color: "#f57224" }}
              transition={{ type: "spring", stiffness: 300, repeat: Infinity, repeatType: "reverse" }}
              className="text-2xl text-white font-bold tracking-wider cursor-default block"
            >
              For You 🔥🔥
            </motion.span>
          </div>

          {/* Category product section */}
          <ProductList />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
