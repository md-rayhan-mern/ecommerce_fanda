import { motion } from "framer-motion";
import ProductCard from "../../../components/productCard/ProductCard";

const RelatedProducts = () => {
  const products = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D", // ডামি ইমেজ লিংক, আপনার ইমেজ বসিয়ে নিবেন
      name: "skin'O Strawberry Scented Shower Gel -...",
      price: "২৫০",
      oldPrice: "২৬০",
      discount: "1",
      rating: 1.5,
      review: 120,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      name: "Casio Black Resin All-Season Digital Sports...",
      price: "২৩৫",
      oldPrice: "৫২৫",
      discount: "৫৫",
      rating: 2.5,
      review: 160,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1571380401583-72ca84994796?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxwcm9kdWN0fGVufDB8fDB8fHww",
      name: "TEL Premium Shoe Rack Red 4 Step Red 861587",
      price: "৪৭৬",
      oldPrice: "৬১০",
      discount: "২২",
      rating: 3.5,
      review: 190,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1530630458144-014709e10016?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxwcm9kdWN0fGVufDB8fDB8fHww",
      name: "Royal Cafe Classic Coffee 200g | Premium...",
      price: "৬৪০",
      oldPrice: "৭০০",
      discount: "৩",
      rating: 5,
      review: 380,
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1505740106531-4243f3831c78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxwcm9kdWN0fGVufDB8fDB8fHww",
      name: "Realme C100i 4/64GB Smartphone - 7000mAh...",
      price: "১৫,৮৪৫",
      oldPrice: "১৬,৯৯৯",
      discount: "৭",
      rating: 4,
      review: 940,
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1555487505-8603a1a69755?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxwcm9kdWN0fGVufDB8fDB8fHww",
      name: "Top-Tier Option - Cute humidifier egg lighting...",
      price: "১৮৭",
      oldPrice: "৬००",
      discount: "৬৯",
      rating: 3.5,
      review: 170,
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, // একটি অ্যানিমেশন শেষ হওয়ার কতক্ষণ পর পরেরটি শুরু হবে
      },
    },
  };
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full bg-white pb-12"
    >
      <div className="w-full max-w-[1500px] mx-auto ">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Related product section */}
          <div className="my-2 mx-5 inline-block">You may also like 🙋🙋</div>
          {/* you may also like products*/}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                showRating={true}
                smDiscount={true}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RelatedProducts;
