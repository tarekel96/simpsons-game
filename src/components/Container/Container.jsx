import React from "react";

/**
 * @param {string} bootstrap bootstrap classes
 * @param {array} children array of Card components
 * @return a container component
 */
const Container = ({ bootstrap, children }) => {
  return <main className={bootstrap}>{children}</main>;
};

export default Container;
