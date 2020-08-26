import React from "react";
import styles from "./footer.module.scss";
const Footer = ({ className = "" }) => {
  return (
    <>
      <footer className={`${styles["footer"]} ${className}`}>
        <h4>Designed by Tarek El-Hajjaoui</h4>
      </footer>
    </>
  );
};

export default Footer;
