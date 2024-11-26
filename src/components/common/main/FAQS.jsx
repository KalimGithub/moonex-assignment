import React, { useRef } from "react";
import AccordianFAQ from "../AccordianFAQ";
import { motion, useInView } from "framer-motion";

const FAQS = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }} // Start hidden and moved down
      animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate when in view
      transition={{ duration: 1, ease: "easeOut" }}
      className="faqs flex justify-center items-center flex-col mx-6"
    >
      <p className="faq-heading text-6xl golden-text font-semibold my-12">
        FAQS
      </p>
      <AccordianFAQ />
    </motion.div>
  );
};

export default FAQS;
