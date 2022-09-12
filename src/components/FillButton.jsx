import React from "react";

function FillButton({ color, btnText, type, widthClass = "w-100" }) {
  return (
    <button type={type} className={`btn btn-primary fillgreen ${widthClass}`}>
      {btnText}
    </button>
  );
}

export default FillButton;
