import { motion } from "framer-motion";
import MainCarousel from "../../components/mainCarousel/MainCarousel";
import CategorySection from "./Category";
import FlashSell from "./FlashSell";

const Home = () => {
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
  const flashSaleVariants = {
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
          variants={flashSaleVariants}
          initial="hidden"
          whileInView="visible" // স্ক্রিনে যখনই স্ক্রোল করে আসবে তখনই অ্যানিমেশন হবে
          viewport={{ once: true, margin: "-100px" }} // বারবার অ্যানিমেশন না হয়ে শুধু প্রথমবার দেখাবে
        >
          {/* ফ্ল্যাশ সেল টাইটেল (এটির ওপরেও একটি হালকা মাউস হোভার ইফেক্ট দেওয়া হয়েছে) */}
          <div className="my-1 mx-5 inline-block">
            <motion.span
              whileHover={{ scale: 1.05, color: "#f57224" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-2xl text-white font-bold tracking-wider cursor-default block"
            >
              Flash Sale
            </motion.span>
          </div>

          {/* আপনার ফ্ল্যাশ সেল প্রোডাক্ট সেকশন */}
          <FlashSell />
        </motion.div>
      </div>
      {/* Category section) */}
      <div className="w-full max-w-[1500px] mx-auto ">
        <motion.div
          variants={flashSaleVariants}
          initial="hidden"
          whileInView="visible" // স্ক্রিনে যখনই স্ক্রোল করে আসবে তখনই অ্যানিমেশন হবে
          viewport={{ once: true, margin: "-100px" }} // বারবার অ্যানিমেশন না হয়ে শুধু প্রথমবার দেখাবে
        >
          {/* ফ্ল্যাশ সেল টাইটেল (এটির ওপরেও একটি হালকা মাউস হোভার ইফেক্ট দেওয়া হয়েছে) */}
          <div className="my-1 mx-5 inline-block">
            <motion.span
              whileHover={{ scale: 1.05, color: "#f57224" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-2xl text-white font-bold tracking-wider cursor-default block"
            >
              Departments
            </motion.span>
          </div>

          {/* Category product section */}
          <CategorySection />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
