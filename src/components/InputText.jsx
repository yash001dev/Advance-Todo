import React from "react";
import { useController } from "react-hook-form";

function InputText(props) {
  const { field } = useController(props);
  const { type, placeholder, label, name, required } = props;

  return (
    <div className="form-group">
      {label && <label htmlFor="input-field">{label}</label>}
      <input
        {...field}
        type={type}
        name={name}
        className="form-control mb-4"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

export default InputText;
