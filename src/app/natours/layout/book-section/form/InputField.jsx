import React from "react";
import FormGroup from "./FormGroup";
import "./_InputField.scss";

const InputField = ({ type, placeholder }) => {
  return (
    <FormGroup>
      <input
        className="form__input"
        type={type}
        placeholder={placeholder}
        id={placeholder}
        required
      />
      <label htmlFor={placeholder} className="form__label">
        {placeholder}
      </label>
    </FormGroup>
  );
};

export default InputField;
