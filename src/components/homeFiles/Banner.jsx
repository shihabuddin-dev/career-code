import React from "react";
import { motion } from "motion/react";
import banner1 from "../../assets/banner/1.jpg";
import banner2 from "../../assets/banner/2.jpg";
import Button from "../ui/Button";

const Banner = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center gap-8 px-6 py-12  overflow-hidden">
      {/* Animated background shapes */}
      <motion.div
        className="absolute -top-10 -left-10 w-60 h-60 bg-purple-200 rounded-full opacity-30 z-0"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-16 -right-16 w-72 h-72 bg-pink-200 rounded-full opacity-20 z-0"
        animate={{ scale: [1, 1.15, 1], rotate: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      {/* Text Section */}
      <div className="flex-1 z-10 space-y-6">
        <motion.h1
          className="text-3xl md:text-6xl font-bold leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          The{" "}
          <motion.span
            animate={{
              color: ["#ff5733", "#77ff33", "#3361ff", "#e933ff"],
              transition: { duration: 2, repeat: Infinity },
            }}
            className="drop-shadow-lg"
          >
            Easiest Way
          </motion.span>{" "}
          to Get Your New Job
        </motion.h1>
        <motion.p
          className="text-base md:text-lg max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Discover thousands of opportunities and land your dream job with our
          seamless platform. Start your journey today!
        </motion.p>
        <Button> Get Started</Button>
      </div>
      {/* Images Section */}
      <div className="flex-1 z-10 flex flex-col items-center space-y-4">
        <motion.img
          src={banner1}
          alt="Job search illustration 1"
          className="w-64 rounded-xl shadow-xl border-4 border-white"
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          animate={{
            opacity: 1,
            x: 0,
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{
            duration: 1,
            delay: 0.3,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 2,
          }}
        />
        <motion.img
          src={banner2}
          alt="Job search illustration 2"
          className="w-64 rounded-xl shadow-xl border-4 border-white"
          initial={{ opacity: 0, x: -60, scale: 0.9 }}
          animate={{
            opacity: 1,
            x: 0,
            scale: [1.05, 0.95, 1.05],
          }}
          transition={{
            duration: 1,
            delay: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 2,
          }}
        />
      </div>
    </div>
  );
};

export default Banner;
