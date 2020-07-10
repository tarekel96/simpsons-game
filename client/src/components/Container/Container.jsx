import React from "react";

/**
 * @param {string} bootstrap bootstrap classes
 * @param {array} children array of Card components
 * @return a container component
 */
const Container = ({
  bootstrap = "",
  customStyles,
  bgSize = "",
  bgRepeat = "",
  bgPosition = "",
  // bgImage,
  children,
}) => {
  return (
    <main
      className={bootstrap + customStyles}
      style={{
        backgroundSize: bgSize,
        backgroundPosition: bgPosition,
        backgroundRepeat: bgRepeat,
        // backgroundImage: `url(${bgImage})`,
      }}
    >
      {children}
    </main>
  );
};

export default Container;
