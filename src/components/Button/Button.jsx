import React from "react";
import "./Button.module.scss";

export const Button = ({ bootstrap, customStyle, onClick, children }) => {
  return (
    <button className={bootstrap + " " + customStyle} onClick={onClick}>
      {children}
    </button>
  );
};
