import React from "react";
import Button from "../Button";
import { motion } from "framer-motion";
const HeroSection = () => {
  return (
    <div className="hero flex justify-between items-center gap-8 px-6 md:px-10 mt-12 ">
      <motion.div
        initial={{ x: "-100vw" }} // Start off the screen
        animate={{ x: 0 }} // Slide to original position
        transition={{ type: "spring", stiffness: 50 }} // Smooth transition
        className="flex flex-col items-start justify-start gap-2 px-6 md:px-14 py-20 w-full md:w-[70%]"
      >
        <h1 className="hero-heading text-6xl leading-tight md:text-wrap pt-5 text-white font-bold">
          Trusted Multi-Chain <span className="golden-text">DEX </span>Platform
        </h1>
        <p className="hero-paragraph text-gray-400">
          Trade, earn, and own crypto on the all-in-one multi-chain DEX
        </p>
        <div className="flex flex-start gap-6 py-2 flex-col sm:flex-row">
          <Button text={"Connect Wallet"} />
          <Button text={"Trade Crypto"} outlined={true} />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
