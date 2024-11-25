import React from "react";

const Button = ({ text, outlined }) => {
  return (
    <button className={`${outlined ? `outlined-golden-btn` : `golden-btn`}`}>
      {text}
    </button>
  );
};

export default Button;
