import React, { useRef } from "react";
import FeaturesCard from "../FeaturesCard";
import Dollar from "../../../assets/Dollar.svg";
import Phone_Off from "../../../assets/Phone_Off.svg";
import Shield_Check from "../../../assets/Shield_Check.svg";
import Options_3 from "../../../assets/Options_3.svg";
import { motion, useInView } from "framer-motion";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }} // Start hidden and moved down
      animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate when in view
      transition={{ duration: 1, ease: "easeOut" }}
      className="features"
    >
      <h1 className="features-heading text-white text-6xl mt-8 text-center">
        Our <span className="golden-text">Features</span>
      </h1>
      <div className="grid auto-cols-auto md:grid-cols-2 lg:grid-cols-4 gap-4 w-[80%] my-16 items-center justify-center m-auto">
        <FeaturesCard
          logo={Dollar}
          title={"Cheapest TXs"}
          description={
            "Excahnge popular digital crrencies at the cheapest possible transaction price"
          }
        />
        <FeaturesCard
          logo={Shield_Check}
          title={"CerTIK"}
          description={
            "We are Audited by Certik. Certik is the eading security-focused ranking platform"
          }
        />
        <FeaturesCard
          logo={Phone_Off}
          title={"No Contract Sells"}
          description={"no Contract sells to fund the marketing wallets"}
        />
        <FeaturesCard
          logo={Options_3}
          title={"CrossDex Support"}
          description={
            "Exchange popular digital currencies at the cheapest posssible transaction price"
          }
        />
      </div>
    </motion.div>
  );
};

export default Features;
