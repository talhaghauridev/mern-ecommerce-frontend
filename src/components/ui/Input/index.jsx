import React from "react";
import { useState } from "react";
import { useToggle } from "../../../hooks/hook";

const Input = ({
  name,
  type,

  label,
  leftIcon: LIcon,
  rightIcon: RIcon,
  error,
  ...props
}) => {
  const { handleToggle, toggle } = useToggle(false);
  return (
    <>
      <div className={`${name}_input`}>
        {label && <label>{label}</label>}
        <div>
          {LIcon && (
            <span>
              <LIcon />
            </span>
          )}
          <input
            type={type === "password" ? (toggle ? "text" : "password") : type}
            name={name}
            id={name}
            {...props}
          />
          {RIcon && (
            <span>
              <RIcon />
            </span>
          )}
          {type === "password" && (
            <button onClick={handleToggle}>{toggle ? " Show" : "Hide"}</button>
          )}
        </div>
        {error && <span>{error}</span>}
      </div>
    </>
  );
};

export default Input;
