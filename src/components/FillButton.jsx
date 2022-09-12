import React from "react";

function FillButton({ color, btnText, type }) {
  return (
    <button type={type} className="btn btn-primary w-100 fillgreen">
      {btnText}
    </button>
  );
}

export default FillButton;
