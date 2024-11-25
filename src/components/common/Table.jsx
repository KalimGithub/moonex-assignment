import React from "react";
import check from "../../assets/check.svg";
import close from "../../assets/close.svg";
import moonex from "../../assets/moonex.svg";
import uniswap from "../../assets/uniswap.svg";
import Comparison from "../../assets/Comparison.svg";
import ellipse from "../../assets/ellipse.svg";

const Table = () => {
  return (
    <div className="flex items-center justify-center">
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
            backgroundImage: `url(${ellipse})`,
            backgroundSize: "cover",
            backgroundPosition: "start",
            backgroundRepeat: "no-repeat",
            backdropFilter: "revert",
            opacity: "30%",
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
    </div>
  );
};

export default Table;
