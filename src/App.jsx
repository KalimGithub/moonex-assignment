import React from "react";
import "./index.css";
import Header from "./components/common/Header";
import HeroSection from "./components/common/main/HeroSection";
import heroBg from "./assets/hero-bg.svg";
import AboutUs from "./components/common/main/AboutUs";
import Features from "./components/common/main/Features";
import FAQS from "./components/common/main/FAQS";
import Footer from "./components/common/main/Footer";
function App() {
  return (
    <div
      style={{
        background: "rgba(7, 22, 36, 1)",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
        className="sm:p-4 md:p-[3rem]"
      >
        <Header />
        <HeroSection />
      </div>
      <AboutUs />
      <Features />
      <FAQS />
      <Footer />
    </div>
  );
}

export default App;
