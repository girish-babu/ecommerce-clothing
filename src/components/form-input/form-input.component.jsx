import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ label, handleChange, ...otherFormInputProps }) => (
  <div className="parent-for-form-input">
    <input
      className="form-input"
      onChange={handleChange}
      {...otherFormInputProps}
    />
    {label ? (
      <label
        className={`${
          otherFormInputProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
