import React from "react";
import "./Button.module.scss";

export const Button = ({ bootstrap, customStyles, onClick, children }) => {
  return (
    <button className={bootstrap + " " + customStyles} onClick={onClick}>
      {children}
    </button>
  );
};
