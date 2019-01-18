import React from "react";
import "./InputStyle.scss";

export const renderField = ({
  input,
  label,
  placeholder,
  type,
  id,
  meta: { touched, error, warning }
}) => (
  <label
    className={
      touched && error
        ? input.value !== ""
          ? "block-input error_border value"
          : "error_border block-input"
        : input.value !== ""
        ? "block-input value"
        : "block-input"
    }
  >
    <input
      {...input}
      placeholder={placeholder}
      id={id}
      type={type}
      autoComplete="new-password"
    />
    {label ? <span className="title">{label}</span> : null}
    {touched && error ? <span className="error">{error}</span> : null}
  </label>
);
