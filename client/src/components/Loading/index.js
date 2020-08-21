import React from "react";
import styles from "./loading.module.scss";
const Loading = () => {
  return (
    <div className={`${styles["loadingContainer"]}`}>
      <h1>Loading</h1>
      <img src={require("../../styles/gif/loading.gif")} alt="Loading..." />
    </div>
  );
};

export default Loading;
