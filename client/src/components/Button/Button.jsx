// import packages
import React, { useState } from "react";
//import components
import Icon from "../Icon/index";
// import style module
import styles from "./Button.module.scss";

const VARIANTS = [
  "primary",
  "outlined",
  "text",
  "textaqua",
  "textorange",
  "textblue",
  "textyellow",
  "textlink",
  "primarydisabled",
  "outlineddisabled",
  "textdisabled",
];

/**
 * A React button component that dynamically changes themes, sizes, and adds arrow icons depending on the props passed to it.
 * Variants: ["primary", "outlined", "text"] and their respected dark versions.
 * @name Button
 * @param {Object} children - the content for the button, add text like would normally do for an html button.
 * @param {string} className - className props in case want to add custom styling
 * @param {string} variant  - the version of a button. Prepend the version.
 * @param {string} size - the size for a button: "big" or "small".
 * @param {boolean} dark - switches to dark mode version of variant
 * @param {boolean} leftIcon - includes an icon to the left of the content. Icons are used only with the "text" variant of button.
 * @param {boolean} rightIcon - includes an icon to the right of the content. Icons are used only with the "text" variant of button.
 * @param {string} icon - the name/type of icon to be supplied; default is play
 * @param {string} iconColor - the color of the icon
 * @param {string} iconWidth - the width of the icon
 * @param {string} iconHeight - the height of the icon
 * @param {integer} cols - the column width of the button
 * @param {boolean} disabled - enabled/disables the button
 * @return - returns a button component with various prop options to change it's styling.
 */
export const Button = ({
  children = "button",
  className = "",
  variant = "primary",
  size = "small",
  dark = false,
  leftIcon = false,
  rightIcon = false,
  icon = "play",
  iconColor = "blue",
  iconWidth = "20",
  iconHeight = "20",
  cols = 2,
  disabled = false,
  onClick,
  disabledClick = false,
}) => {
  // ensures that class name is always lowercase like the class defined in scss
  variant = variant.toLowerCase();
  size = size.toLowerCase();
  let buttonTextColor = variant + "BtnTextColor";
  if (disabled === true) {
    buttonTextColor += "Disabled";
  }
  // state changes with an onclick event
  const [clicked, setClick] = useState(false);
  // checks if the variant provided is valid
  if (VARIANTS.includes(variant)) {
    // order matters here - the if statement with "&&"" MUST be first in order for JS to recognize text variants with icons and the dark props
    if ((dark && leftIcon) || (dark && rightIcon)) {
      variant = "d" + variant + "icon";
    } else if (dark) {
      variant = "d" + variant;
    } else if (leftIcon || rightIcon) {
      variant = variant + "icon";
    }
    if (clicked) {
      variant = variant + "clicked";
    }
  }

  if (cols === 4) {
    className += styles["fullWidthButton"];
  }

  return (
    <button
      className={`
       ${styles["btn"]} ${styles[variant]} ${styles[size]} ${className}
  `}
      onClick={() => {
        if (onClick) {
          onClick();
        }
        if (disabledClick) {
          return;
        }
        setClick((state) => !state);
      }}
      size={size}
      disabled={disabled}
    >
      <div>
        <span className={`${styles["btncontent"]}`}>
          {leftIcon ? (
            <Icon
              name={icon}
              className={`${styles["iconleft"]}`}
              color={iconColor}
              height={iconHeight}
              width={iconWidth}
            />
          ) : (
            ""
          )}
        </span>
        <div className={styles[buttonTextColor]}>{children}</div>
        <span className={`${styles["btncontent"]}`}>
          {rightIcon ? (
            <Icon
              name={icon}
              className={`${styles["iconright"]}`}
              color={iconColor}
              height={iconHeight}
              width={iconWidth}
            />
          ) : (
            ""
          )}
        </span>
      </div>
    </button>
  );
};
