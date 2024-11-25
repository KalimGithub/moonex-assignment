import React from "react";
import FeaturesCard from "../FeaturesCard";
import Dollar from "../../../assets/Dollar.svg";
import Phone_Off from "../../../assets/Phone_Off.svg";
import Shield_Check from "../../../assets/Shield_Check.svg";
import Options_3 from "../../../assets/Options_3.svg";
const Features = () => {
  return (
    <div>
      <h1 className="features-heading text-white text-6xl mt-8 text-center">
        Our <span className="golden-text">Features</span>
      </h1>
      <div className="grid grid-cols-4 grid-rows-5 gap-4 w-[80%] my-16 items-center justify-center m-auto">
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
    </div>
  );
};

export default Features;
