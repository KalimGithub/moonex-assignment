import React from "react";

const FeaturesCard = ({ logo, title, description }) => {
  return (
    <div className="text-white px-5 py-6 flex flex-col gap-4 rounded-2xl min-h-[200px] items-start border-slate-500 border bg-slate-900">
      <div className="hover:bg-slate-700 hover:ring-amber-500 rounded-full p-2 cursor-pointer">
        <img className="w-8" src={logo} alt="logo" />
      </div>

      <h1 className="font-semibold">{title}</h1>
      <p className="text-sm text-slate-400">{description}</p>
    </div>
  );
};

export default FeaturesCard;
