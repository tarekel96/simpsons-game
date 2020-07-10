// import packages
import React, { useState } from "react";
// import style module
import styles from "./Button.module.scss";
//import "./button.module.scss"

const VARIANTS = ["primary", "secondary", "text"];

/**
 * A React button component that dynamically changes themes, sizes, and adds arrow icons depending on the props passed to it.
 * Variants: ["primary", "secondary", "text"] and their respected dark versions.
 * @name Button
 * @param {Object} children - the content for the button, add text like would normally do for an html button.
 * @param {string} className - className props in case want to add custom styling
 * @param {funtion} onClick - default onClick property of a button
 * @param {string} variant  - the version of a button. Prepend the version.
 * @param {string} size - the size for a button: "big" or "small".
 * @param {boolean} dark - switches to dark mode version of variant
 * @return - returns a button component with various prop options to change it's styling.
 */
export const Button = ({
  children = "button",
  className = "",
  onClick,
  onSubmit,
  variant = "primary",
  size = "small",
  dark = false,
}) => {
  // ensures that class name is always lowercase like the class defined in scss
  variant = variant.toLowerCase();
  size = size.toLowerCase();
  // state changes with an onclick event
  const [clicked, setClick] = useState(false);
  // checks if the variant provided is valid
  if (VARIANTS.includes(variant)) {
    // order matters here - the if statement with "&&"" MUST be first in order for JS to recognize text variants with icons and the dark props
    if (dark) {
      variant = "d" + variant;
    }
    if (clicked) {
      variant = variant + "clicked";
    }
  }

  return (
    <button
      className={`
       ${styles["btn"]} ${styles[variant]} ${styles[size]} ${className}
  `}
      onClick={() => {
        setClick(true);
        if (onClick) {
          onClick();
        }
      }}
      onSubmit={() => {
        if (onSubmit) {
          onSubmit();
        }
      }}
      size={size}
    >
      <div>
        <span className={`${styles["btncontent"]}`}>{children}</span>
      </div>
    </button>
  );
};
