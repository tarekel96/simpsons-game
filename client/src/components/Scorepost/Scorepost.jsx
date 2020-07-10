import React from "react";
import styles from "./scorepost.module.scss";

const Scorepost = ({
  bootstrap = "alert alert-info",
  className,
  id,
  name = "name",
  score = 0,
}) => {
  return (
    <div
      className={`${bootstrap} ${className} ${styles["scorepost"]}`}
      role="alert"
      key={id}
    >
      <span>Name: {name} </span>
      <span>Score: {score} </span>
      <span>ID#: {id}</span>
    </div>
  );
};

export default Scorepost;
