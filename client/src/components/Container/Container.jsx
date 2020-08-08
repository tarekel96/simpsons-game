import React from "react";

/**
 * @param {string} bootstrap bootstrap classes
 * @param {array} children array of Card components
 * @return a container component
 */
const Container = ({ bootstrap = "", className = "", children }) => {
  return <main className={`${bootstrap} ${className}`}>{children}</main>;
};

export default Container;
