import React, { useRef } from "react";
import check from "../../assets/check.svg";
import close from "../../assets/close.svg";
import moonex from "../../assets/moonex.svg";
import uniswap from "../../assets/uniswap.svg";
import Comparison from "../../assets/Comparison.svg";
import Ellipse from "../../assets/Ellipse.svg";
import { motion, useInView } from "framer-motion";

const Table = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }} // Start hidden and moved down
      animate={isInView ? { opacity: 1, x: 0 } : {}} // Animate when in view
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex items-center justify-center px-8 sm:px-12 "
    >
      <table className="table rounded-lg text-slate-400 text-lg font-extralight bg-slate-800 my-8">
        <thead>
          <tr className="top-row">
            <td className="p-5 border-b  border-slate-700"></td>
            <th>
              <img src={Comparison} />
            </th>
            <th>
              <img src={moonex} />
            </th>
            <th className="no-border-th">
              <img src={uniswap} />
            </th>
            <td className="p-5 border-b border-slate-700"></td>
          </tr>
        </thead>
        <tbody
          style={{
            backgroundImage: `url(${Ellipse})`,
            backgroundSize: "cover",
            backgroundPosition: "start",
            backgroundRepeat: "no-repeat",
            backdropFilter: "revert",
          }}
        >
          <tr>
            <td className="p-5 border-b  border-slate-700"></td>
            <th>1. Point no one</th>
            <th>
              <img src={check} />
            </th>
            <th className="no-border-th">
              <img src={close} />
            </th>
            <td className="p-5 border-b border-slate-700"></td>
          </tr>
          <tr>
            <td className="p-5 border-b  border-slate-700"></td>
            <th>2. Point no one</th>
            <th>
              <img src={check} />
            </th>
            <th className="no-border-th">
              <img src={close} />
            </th>
            <td className="p-5 border-b border-slate-700"></td>
          </tr>
          <tr>
            <td className="p-5 border-b  border-slate-700"></td>
            <th>3. Point no one</th>
            <th>
              <img src={check} />
            </th>
            <th className="no-border-th">
              <img src={close} />
            </th>
            <td className="p-5 border-b border-slate-700"></td>
          </tr>
          <tr>
            <td className="p-5 border-b  border-slate-700"></td>
            <th>4. Point no one</th>
            <th>
              <img src={check} />
            </th>
            <th className="no-border-th">
              <img src={close} />
            </th>
            <td className="p-5 border-b border-r-0 border-slate-700"></td>
          </tr>
          <tr>
            <td className="p-5 border-b  border-slate-700"></td>
            <th>5. Point no two this</th>
            <th>
              <img src={check} />
            </th>
            <th className="no-border-th">
              <img src={close} />
            </th>
            <td className="p-5 border-b border-slate-700"></td>
          </tr>
          <tr>
            <td className="p-5 border-b  border-slate-700"></td>
            <td></td>
            <td></td>
            <td></td>
            <td className="p-5"></td>
          </tr>
        </tbody>
      </table>
    </motion.div>
  );
};

export default Table;
