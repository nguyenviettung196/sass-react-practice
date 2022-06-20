import React from "react";
import "./_RadioField.scss";

const RadioField = ({ text, forField }) => {
  return (
    <div className="form__radio-group">
      <input type="radio" className="form__radio-input" id={forField} name="size"/>
      <label htmlFor={forField} className="form__radio-label">
        <span className="form__radio-button"></span>
        {text}
      </label>
    </div>
  );
};

export default RadioField;
