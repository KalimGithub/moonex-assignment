import React from "react";
import Button from "../Button";
import heroBg from "../../../assets/hero-bg.svg";

const HeroSection = () => {
  return (
    <div className="hero flex justify-between items-center gap-8 px-10 mt-12">
      <div className="flex flex-col items-start justify-start gap-2 px-14 py-20 w-[70%]">
        <h1 className="hero-heading text-6xl leading-tight text-wrap pt-5 text-white font-bold">
          Trusted Multi-Chain <span className="golden-text">DEX </span>Platform
        </h1>
        <p className="hero-paragraph text-gray-400">
          Trade, earn, and own crypto on the all-in-one multi-chain DEX
        </p>
        <div className="flex flex-start gap-6 py-2">
          <Button text={"Connect Wallet"} />
          <Button text={"Trade Crypto"} outlined={true} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
