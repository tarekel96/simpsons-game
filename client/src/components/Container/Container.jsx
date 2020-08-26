import React from "react";
import Footer from "../Footer";
/**
 * @param {string} bootstrap bootstrap classes
 * @param {array} children array of Card components
 * @return a container component
 */
const Container = ({ bootstrap = "", className = "", children }) => {
  return (
    <main className={`${bootstrap} ${className}`}>
      {children}
      <Footer />
    </main>
  );
};

export default Container;
