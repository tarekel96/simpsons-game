import React from "react"
import styles from "./icons.module.scss"

const COLORS = [
  "aqua",
  "blue",
  "red",
  "fijiblue",
  "fingrey",
  "nemoorange",
  "nudebeach",
  "oceanblue",
  "pearlwhite",
  "seafoamwhite",
  "seaglassaqua",
  "sealgrey",
  "sharkgrey",
  "starfishorange",
  "stingraygrey",
  "swordfishgrey",
  "tangyellow",
  "tidepoolblue",
  "undertowblue",
  "whalegrey",
]

// notifies programmer that an incorrect color props value was passed
const checkColorProps = color => {
  if (!COLORS.includes(color)) {
    return console.log(new Error(color + " color is not a valid color choice"))
  }
}

export const LeftArrow = ({
  className = "",
  color,
  width,
  height,
  backgroundColor,
}) => {
  color = color.toLowerCase()
  checkColorProps(color)
  return (
    <svg
      className={`${className} ${styles[color]}`}
      style={{ backgroundColor }}
      width={width}
      height={height}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.31075 23.5138C4.31236 23.5121 4.31398 23.5105 4.31561 23.5088L14.8598 12.6966C15.2454 12.3012 15.8706 12.3012 16.2562 12.6966C16.6418 13.092 16.6418 13.733 16.2562 14.1284L7.38536 23.2247H42.9732C43.5255 23.2247 43.9732 23.6724 43.9732 24.2247C43.9732 24.777 43.5255 25.2247 42.9732 25.2247H7.38536L16.2562 34.321C16.6418 34.7164 16.6418 35.3575 16.2562 35.7529C15.8706 36.1483 15.2454 36.1483 14.8598 35.7529L4.31561 24.9406C4.31398 24.939 4.31236 24.9373 4.31075 24.9356C4.12754 24.7544 4.01404 24.5028 4.01404 24.2247C4.01404 23.9466 4.12754 23.6951 4.31075 23.5138Z"
      />
    </svg>
  )
}

export const RightArrow = ({
  className = "",
  color,
  width,
  height,
  backgroundColor,
}) => {
  color = color.toLowerCase()
  checkColorProps(color)
  return (
    <svg
      className={`${className} ${styles[color]}`}
      style={{ backgroundColor }}
      width={width}
      height={height}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43.6764 23.5138C43.6748 23.5121 43.6732 23.5105 43.6716 23.5088L33.1274 12.6966C32.7418 12.3012 32.1166 12.3012 31.731 12.6966C31.3454 13.092 31.3454 13.733 31.731 14.1284L40.6018 23.2247H5.01397C4.46168 23.2247 4.01397 23.6724 4.01397 24.2247C4.01397 24.777 4.46168 25.2247 5.01397 25.2247H40.6018L31.731 34.321C31.3454 34.7164 31.3454 35.3575 31.731 35.7529C32.1166 36.1483 32.7418 36.1483 33.1274 35.7529L43.6716 24.9406C43.6732 24.939 43.6748 24.9373 43.6764 24.9356C43.8596 24.7544 43.9731 24.5028 43.9731 24.2247C43.9731 23.9466 43.8596 23.6951 43.6764 23.5138Z"
      />
    </svg>
  )
}
export const ThreeDots = ({
  className = "",
  color = null,
  height = "48",
  width = "48",
  backgroundColor = null,
}) => {
  if (color !== null) {
    checkColorProps(color.toLowerCase())
  }
  return (
    <svg
      className={`${className} ${
        color === null ? "" : (className += " " + styles[color])
      }`}
      style={{
        backgroundColor: backgroundColor !== null ? backgroundColor : null,
      }}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 515.555 515.555"
    >
      <path d="m496.679 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0" />
      <path d="m303.347 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0" />
      <path d="m110.014 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0" />
    </svg>
  )
}
export const Dot = ({
  className = "",
  color = null,
  height = "48",
  width = "48",
  backgroundColor = null,
}) => {
  if (color !== null) {
    checkColorProps(color.toLowerCase())
  }
  return (
    <svg
      className={`${className} ${
        color === null ? "" : (className += " " + styles[color])
      }`}
      style={{
        backgroundColor: backgroundColor !== null ? backgroundColor : null,
      }}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 515.555 515.555"
    >
      <path d="m303.347 212.208c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138 65.971-25.167 91.138 0" />
    </svg>
  )
}
export const Add = ({
  className = "",
  color,
  height,
  width,
  backgroundColor,
}) => {
  color = color.toLowerCase()
  checkColorProps(color)
  return (
    <svg
      className={`${className} ${styles[color]}`}
      style={{ backgroundColor }}
      width={width}
      height={height}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 24C4 22.8954 4.89543 22 6 22H42C43.1046 22 44 22.8954 44 24C44 25.1046 43.1046 26 42 26H6C4.89543 26 4 25.1046 4 24Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 44C22.8954 44 22 43.1046 22 42L22 6C22 4.89543 22.8954 4 24 4C25.1046 4 26 4.89543 26 6L26 42C26 43.1046 25.1046 44 24 44Z"
      />
    </svg>
  )
}

export const Attachment = ({
  className = "",
  color,
  height,
  width,
  backgroundColor,
}) => {
  color = color.toLowerCase()
  checkColorProps(color)
  return (
    <svg
      className={`${className} ${styles[color]}`}
      style={{ backgroundColor }}
      width={width}
      height={height}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.4468 6C24.501 5.99863 22.1493 7.7426 22.2 12.0983L22.2002 12.11L22.2001 31.0518C22.2001 32.53 22.541 33.532 22.9558 34.1331C23.366 34.7276 23.8277 34.9175 24.1844 34.9175C24.5411 34.9175 25.0028 34.7276 25.413 34.1331C25.8278 33.532 26.1687 32.53 26.1687 31.0518V14.1562C26.1687 14.1561 26.1687 14.1557 27.1687 14.1557C28.1687 14.1557 28.1687 14.1557 28.1687 14.1558V31.0518C28.1687 32.8174 27.7635 34.2482 27.0592 35.269C26.3503 36.2964 25.3198 36.9175 24.1844 36.9175C23.049 36.9175 22.0185 36.2964 21.3096 35.269C20.6053 34.2482 20.2001 32.8174 20.2001 31.0518V12.1157C20.1427 6.98757 23.0788 3.99762 26.4482 4C29.8101 4.00238 32.7778 6.98668 32.7778 12.11V34.6677C32.7778 40.6466 28.6374 43.9246 24.4064 43.9987C22.3105 44.0354 20.1954 43.2837 18.6032 41.6973C17.0027 40.1026 16 37.735 16 34.6677V14.1557C16 13.6034 16.4477 13.1557 17 13.1557C17.5523 13.1557 18 13.6034 18 14.1557V34.6677C18 37.2839 18.8445 39.1144 20.0149 40.2805C21.1935 41.455 22.7728 42.027 24.3714 41.999C27.5293 41.9437 30.7778 39.538 30.7778 34.6677V12.11C30.7778 7.76082 28.4014 6.00138 26.4468 6ZM27.1687 13.1557C27.721 13.1557 28.1687 13.6035 28.1687 14.1558L27.1687 14.1557L26.1687 14.1562C26.1687 13.6039 26.6164 13.1557 27.1687 13.1557Z"
      />
    </svg>
  )
}

export const Back = ({
  className = "",
  color,
  width,
  height,
  backgroundColor,
}) => {
  color = color.toLowerCase()
  checkColorProps(color)
  return (
    <svg
      className={`${className} ${styles[color]}`}
      style={{ backgroundColor }}
      width={width}
      height={height}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.7057 8.2915C31.3144 7.90175 30.6813 7.90299 30.2915 8.29429L15.2915 23.3535C14.9028 23.7437 14.9028 24.3747 15.2915 24.7649L30.1736 39.7057C30.5634 40.097 31.1965 40.0983 31.5878 39.7085C31.9791 39.3187 31.9804 38.6856 31.5906 38.2943L17.4114 24.0592L31.7085 9.70571C32.0983 9.31442 32.097 8.68126 31.7057 8.2915Z"
      />
    </svg>
  )
}

export const Cancel = ({
  className = "",
  color,
  width,
  height,
  backgroundColor,
}) => {
  color = color.toLowerCase()
  checkColorProps(color)
  return (
    <svg
      className={`${className} ${styles[color]}`}
      style={{ backgroundColor }}
      width={width}
      height={height}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.79289 9.79289C10.1834 9.40237 10.8166 9.40237 11.2071 9.79289L38.2071 36.7929C38.5976 37.1834 38.5976 37.8166 38.2071 38.2071C37.8166 38.5976 37.1834 38.5976 36.7929 38.2071L9.79289 11.2071C9.40237 10.8166 9.40237 10.1834 9.79289 9.79289Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.2071 9.79289C37.8166 9.40237 37.1834 9.40237 36.7929 9.79289L9.79289 36.7929C9.40237 37.1834 9.40237 37.8166 9.79289 38.2071C10.1834 38.5976 10.8166 38.5976 11.2071 38.2071L38.2071 11.2071C38.5976 10.8166 38.5976 10.1834 38.2071 9.79289Z"
      />
    </svg>
  )
}

export const CheckMark = ({
  className = "",
  color,
  width,
  height,
  backgroundColor,
}) => {
  color = color.toLowerCase()
  checkColorProps(color)
  return (
    <svg
      className={`${className} ${styles[color]}`}
      style={{ backgroundColor }}
      width={width}
      height={height}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43.8014 12.313C44.1808 12.7556 44.1296 13.422 43.6869 13.8013L19.6919 34.3685C17.7998 35.9903 14.9946 35.9436 13.1576 34.2596L4.28674 26.128C3.857 25.7341 3.82797 25.0664 4.22189 24.6366C4.61582 24.2069 5.28353 24.1779 5.71327 24.5718L14.5841 32.7034C15.6338 33.6657 17.2368 33.6924 18.318 32.7656L42.3131 12.1985C42.7557 11.8191 43.422 11.8703 43.8014 12.313Z"
        fill="#002D72"
      />
    </svg>
  )
}

export const Download = ({
  className = "",
  color,
  width,
  height,
  backgroundColor,
}) => {
  color = color.toLowerCase()
  checkColorProps(color)
  return (
    <svg
      className={`${className} ${styles[color]}`}
      style={{ backgroundColor }}
      width={width}
      height={height}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.9759 35.3978L34.6717 25.702C35.0622 25.3115 35.7032 25.3035 36.1034 25.6841C36.5036 26.0647 36.5114 26.6898 36.1209 27.0803L24.7685 38.4327C24.5524 38.6488 24.2596 38.7478 23.9733 38.7286C23.6868 38.7479 23.3938 38.649 23.1775 38.4327L11.8252 27.0803C11.4346 26.6898 11.4425 26.0647 11.8427 25.6841C12.2429 25.3035 12.8839 25.3115 13.2744 25.7021L22.9759 35.4036L23.0079 5.18278C23.0085 4.6305 23.4567 4.18326 24.009 4.18384C24.5613 4.18442 25.0085 4.63262 25.0079 5.1849L24.9759 35.3978Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 43C11 42.4477 11.4477 42 12 42H36C36.5523 42 37 42.4477 37 43C37 43.5523 36.5523 44 36 44H12C11.4477 44 11 43.5523 11 43Z"
      />
    </svg>
  )
}

export const Dropdown = ({
  className = "",
  color,
  width,
  height,
  backgroundColor,
}) => {
  color = color.toLowerCase()
  checkColorProps(color)
  return (
    <svg
      className={`${className} ${styles[color]}`}
      style={{ backgroundColor }}
      width={width}
      height={height}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.89685 14.9497C7.48071 14.362 8.43045 14.3588 9.01816 14.9427L24.0494 29.8751L38.9783 14.9462C39.5641 14.3604 40.5139 14.3604 41.0997 14.9462C41.6854 15.532 41.6854 16.4817 41.0997 17.0675L25.8183 32.3488C24.8443 33.3228 23.2659 33.3254 22.2887 32.3546L6.90385 17.071C6.31614 16.4871 6.313 15.5374 6.89685 14.9497Z"
      />
    </svg>
  )
}

export const Forward = ({
  className = "",
  color,
  width,
  height,
  backgroundColor,
}) => {
  color = color.toLowerCase()
  checkColorProps(color)
  return (
    <svg
      className={`${className} ${styles[color]}`}
      style={{ backgroundColor }}
      width={width}
      height={height}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.2943 8.2915C15.6856 7.90175 16.3187 7.90299 16.7085 8.29429L31.7085 23.3535C32.0972 23.7437 32.0972 24.3747 31.7085 24.7649L16.8264 39.7057C16.4366 40.097 15.8035 40.0983 15.4122 39.7085C15.0209 39.3187 15.0196 38.6856 15.4094 38.2943L29.5886 24.0592L15.2915 9.70571C14.9017 9.31442 14.903 8.68126 15.2943 8.2915Z"
      />
    </svg>
  )
}

export const Info = ({
  className = "",
  color,
  width,
  height,
  backgroundColor,
}) => {
  color = color.toLowerCase()
  checkColorProps(color)
  return (
    <svg
      className={`${className} ${styles[color]}`}
      style={{ backgroundColor }}
      width={width}
      height={height}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23 22C23 21.4477 23.4477 21 24 21C24.5523 21 25 21.4477 25 22V33C25 33.5523 24.5523 34 24 34C23.4477 34 23 33.5523 23 33V22Z" />
      <path d="M23 14C23 13.4477 23.4477 13 24 13C24.5523 13 25 13.4477 25 14V16C25 16.5523 24.5523 17 24 17C23.4477 17 23 16.5523 23 16V14Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42ZM24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
      />
    </svg>
  )
}

export const Invalid = ({
  className = "",
  color,
  width,
  height,
  backgroundColor,
}) => {
  color = color.toLowerCase()
  checkColorProps(color)
  return (
    <svg
      className={`${className} ${styles[color]}`}
      style={{ backgroundColor }}
      width={width}
      height={height}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.6665 5.19247C7.6665 4.99421 7.81574 4.8335 7.99984 4.8335C8.18393 4.8335 8.33317 4.99421 8.33317 5.19247V9.14119C8.33317 9.33944 8.18393 9.50016 7.99984 9.50016C7.81574 9.50016 7.6665 9.33944 7.6665 9.14119V5.19247Z" />
      <path d="M7.6665 10.8333C7.6665 10.6492 7.81574 10.5 7.99984 10.5C8.18393 10.5 8.33317 10.6492 8.33317 10.8333V11.5C8.33317 11.6841 8.18393 11.8333 7.99984 11.8333C7.81574 11.8333 7.6665 11.6841 7.6665 11.5V10.8333Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00016 14.5002C11.3139 14.5002 14.0002 11.8139 14.0002 8.50016C14.0002 5.18645 11.3139 2.50016 8.00016 2.50016C4.68645 2.50016 2.00016 5.18645 2.00016 8.50016C2.00016 11.8139 4.68645 14.5002 8.00016 14.5002ZM8.00016 15.1668C11.6821 15.1668 14.6668 12.1821 14.6668 8.50016C14.6668 4.81826 11.6821 1.8335 8.00016 1.8335C4.31826 1.8335 1.3335 4.81826 1.3335 8.50016C1.3335 12.1821 4.31826 15.1668 8.00016 15.1668Z"
      />
    </svg>
  )
}

export const Menu = ({
  className = "",
  color,
  width,
  height,
  backgroundColor,
}) => {
  color = color.toLowerCase()
  checkColorProps(color)
  return (
    <svg
      className={`${className} ${styles[color]}`}
      style={{ backgroundColor }}
      width={width}
      height={height}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42.0001 10.9569C42.0001 10.2373 41.4168 9.65387 40.6971 9.65387H7.30329C6.58364 9.65387 6.00026 10.2373 6.00026 10.9569C6.00026 11.6765 6.58364 12.2599 7.30329 12.2599H40.6971C41.4168 12.2599 42.0001 11.6765 42.0001 10.9569ZM42.0001 23.7989C42.0001 23.0793 41.4168 22.4959 40.6971 22.4959H7.30329C6.58364 22.4959 6.00026 23.0793 6.00026 23.7989C6.00026 24.5186 6.58364 25.102 7.30329 25.102H40.6971C41.4168 25.102 42.0001 24.5186 42.0001 23.7989ZM40.6971 35.3377C41.4168 35.3377 42.0001 35.9211 42.0001 36.6407C42.0001 37.3604 41.4168 37.9438 40.6971 37.9438H7.30329C6.58364 37.9438 6.00026 37.3604 6.00026 36.6407C6.00026 35.9211 6.58364 35.3377 7.30329 35.3377H40.6971Z"
      />
    </svg>
  )
}

export const Play = ({
  className = "",
  color,
  width,
  height,
  backgroundColor,
}) => {
  color = color.toLowerCase()
  checkColorProps(color)
  return (
    <svg
      className={`${className} ${styles[color]}`}
      style={{ backgroundColor }}
      width={width}
      height={height}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.94 40.9399C33.3288 40.9399 40.94 33.3288 40.94 23.9399C40.94 14.5511 33.3288 6.93994 23.94 6.93994C14.5512 6.93994 6.94 14.5511 6.94 23.9399C6.94 33.3288 14.5512 40.9399 23.94 40.9399ZM23.94 43.9399C34.9857 43.9399 43.94 34.9856 43.94 23.9399C43.94 12.8942 34.9857 3.93994 23.94 3.93994C12.8943 3.93994 3.94 12.8942 3.94 23.9399C3.94 34.9856 12.8943 43.9399 23.94 43.9399Z"
      />
      <path d="M31.6067 24.027C32.2733 24.4119 32.2733 25.3742 31.6067 25.7591L20.8567 31.9656C20.19 32.3505 19.3567 31.8694 19.3567 31.0996L19.3567 18.6865C19.3567 17.9167 20.19 17.4356 20.8567 17.8205L31.6067 24.027Z" />
    </svg>
  )
}

export const Search = ({
  className = "",
  color,
  width,
  height,
  backgroundColor,
}) => {
  color = color.toLowerCase()
  checkColorProps(color)
  return (
    <svg
      className={`${className} ${styles[color]}`}
      style={{ backgroundColor }}
      width={width}
      height={height}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5 31C25.8513 31 31 25.8513 31 19.5C31 13.1487 25.8513 8 19.5 8C13.1487 8 8 13.1487 8 19.5C8 25.8513 13.1487 31 19.5 31ZM19.5 33C26.9558 33 33 26.9558 33 19.5C33 12.0442 26.9558 6 19.5 6C12.0442 6 6 12.0442 6 19.5C6 26.9558 12.0442 33 19.5 33Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.2322 41.6465L28.2929 29.7072C27.9023 29.3166 27.9023 28.6835 28.2929 28.293C28.6834 27.9024 29.3166 27.9024 29.7071 28.2929L41.6465 40.2323C42.037 40.6228 42.037 41.256 41.6465 41.6465C41.2559 42.037 40.6228 42.037 40.2322 41.6465Z"
      />
    </svg>
  )
}

export const Setting = ({
  className = "",
  color,
  width,
  height,
  backgroundColor,
}) => {
  color = color.toLowerCase()
  checkColorProps(color)
  return (
    <svg
      className={`${className} ${styles[color]}`}
      style={{ backgroundColor }}
      width={width}
      height={height}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.6034 10.6927V8C28.6034 6.89543 27.708 6 26.6034 6H21.2701C20.1655 6 19.2701 6.89543 19.2701 8V10.7752L18.1187 11.3147C17.5091 11.6003 16.9232 11.9287 16.3649 12.2962L15.3341 12.9747L13.1817 11.732C12.2251 11.1797 11.002 11.5075 10.4497 12.4641L7.78301 17.0829C7.23073 18.0395 7.55848 19.2626 8.51506 19.8149L7.51506 21.547C5.60189 20.4424 4.94639 17.996 6.05096 16.0829L8.71763 11.4641C9.8222 9.5509 12.2686 8.89539 14.1817 9.99996L15.2653 10.6256C15.9032 10.2057 16.5729 9.83027 17.2701 9.50362V8C17.2701 5.79086 19.0609 4 21.2701 4H26.6034C28.8125 4 30.6034 5.79086 30.6034 8V9.39895C31.4686 9.78781 32.2929 10.2513 33.0682 10.7812L34.1327 10.1666C36.0459 9.06207 38.4923 9.71757 39.5968 11.6307L42.2635 16.2495C43.3681 18.1627 42.7126 20.6091 40.7994 21.7136L39.951 22.2035C40.0169 22.7932 40.0508 23.3926 40.0508 24C40.0508 24.5687 40.0211 25.1305 39.9632 25.6839L40.7994 26.1667C42.7126 27.2713 43.3681 29.7177 42.2635 31.6308L39.5968 36.2496C38.4923 38.1628 36.0459 38.8183 34.1327 37.7137L33.1626 37.1536C32.3599 37.7108 31.5038 38.1963 30.6034 38.601V40C30.6034 42.2091 28.8125 44 26.6034 44H21.2701C19.0609 44 17.2701 42.2091 17.2701 40V38.4963C16.4695 38.1212 15.7052 37.6818 14.9837 37.1846L14.0674 37.7136C12.1542 38.8182 9.70783 38.1627 8.60326 36.2495L5.93659 31.6307C4.83202 29.7176 5.48752 27.2712 7.40069 26.1666L8.14401 25.7375C8.08238 25.1668 8.05076 24.5871 8.05076 24C8.05076 23.2994 8.09578 22.6094 8.18309 21.9327L7.51506 21.547L8.51506 19.8149L10.3371 20.8669L10.1666 22.1885C10.0903 22.7807 10.0508 23.3852 10.0508 24C10.0508 24.5152 10.0785 25.0232 10.1325 25.5227L10.2723 26.8181L8.40069 27.8987C7.44411 28.451 7.11636 29.6742 7.66864 30.6307L10.3353 35.2495C10.8876 36.2061 12.1108 36.5339 13.0674 35.9816L15.0779 34.8208L16.1184 35.5377C16.75 35.9729 17.4187 36.3573 18.1187 36.6853L19.2701 37.2248V40C19.2701 41.1046 20.1655 42 21.2701 42H26.6034C27.708 42 28.6034 41.1046 28.6034 40V37.3072L29.7835 36.7768C30.5707 36.423 31.3197 35.9982 32.0223 35.5106L33.0643 34.7874L35.1327 35.9817C36.0893 36.534 37.3125 36.2062 37.8648 35.2496L40.5315 30.6308C41.0837 29.6742 40.756 28.4511 39.7994 27.8988L37.839 26.7669L37.974 25.4759C38.0247 24.9915 38.0508 24.4991 38.0508 24C38.0508 23.467 38.0211 22.9417 37.9634 22.4255L37.8181 21.1255L39.7994 19.9816C40.756 19.4293 41.0837 18.2061 40.5315 17.2495L37.8648 12.6307C37.3125 11.6742 36.0893 11.3464 35.1327 11.8987L32.9785 13.1424L31.9397 12.4324C31.261 11.9686 30.5399 11.5631 29.7835 11.2232L28.6034 10.6927Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.9368 29.5C26.9744 29.5 29.4368 27.0376 29.4368 24C29.4368 20.9624 26.9744 18.5 23.9368 18.5C20.8992 18.5 18.4368 20.9624 18.4368 24C18.4368 27.0376 20.8992 29.5 23.9368 29.5ZM23.9368 31.5C28.0789 31.5 31.4368 28.1421 31.4368 24C31.4368 19.8579 28.0789 16.5 23.9368 16.5C19.7947 16.5 16.4368 19.8579 16.4368 24C16.4368 28.1421 19.7947 31.5 23.9368 31.5Z"
      />
    </svg>
  )
}

export const Share = ({
  className = "",
  color,
  width,
  height,
  backgroundColor,
}) => {
  color = color.toLowerCase()
  checkColorProps(color)
  return (
    <svg
      className={`${className} ${styles[color]}`}
      style={{ backgroundColor }}
      width={width}
      height={height}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.053 21.0268C14.0264 21.0278 13.9997 21.0284 13.9731 21.0284C12.3266 21.0284 11 22.355 11 24.0015C11 25.648 12.3266 26.9746 13.9731 26.9746C15.6196 26.9746 16.9462 25.648 16.9462 24.0015C16.9462 22.3086 15.4871 20.9694 14.053 21.0268ZM13.9731 19.0284C11.222 19.0284 9 21.2504 9 24.0015C9 26.7525 11.222 28.9746 13.9731 28.9746C16.7242 28.9746 18.9462 26.7525 18.9462 24.0015C18.9462 21.2504 16.6184 18.9226 13.9731 19.0284Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.8654 42C35.5074 42 36.8385 40.6689 36.8385 39.0269C36.8385 37.3849 35.5074 36.0538 33.8654 36.0538C32.2234 36.0538 30.8923 37.3849 30.8923 39.0269C30.8923 40.6689 32.2234 42 33.8654 42ZM38.8385 39.0269C38.8385 41.7735 36.612 44 33.8654 44C31.1188 44 28.8923 41.7735 28.8923 39.0269C28.8923 36.2804 31.1188 34.0538 33.8654 34.0538C36.612 34.0538 38.8385 36.2804 38.8385 39.0269Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.0482 6.00199C34.0226 6.00298 33.9969 6.00347 33.9713 6.00347C32.3248 6.00347 30.9982 7.33006 30.9982 8.97656C30.9982 10.6231 32.3248 11.9497 33.9713 11.9497C35.6178 11.9497 36.9444 10.6231 36.9444 8.97656C36.9444 7.25692 35.5648 5.94366 34.0482 6.00199ZM33.9713 4.00347C31.2202 4.00347 28.9982 6.22549 28.9982 8.97656C28.9982 11.7276 31.2202 13.9497 33.9713 13.9497C36.7224 13.9497 38.9444 11.7276 38.9444 8.97656C38.9444 6.22549 36.7224 3.89766 33.9713 4.00347Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.0865 26.3664C17.4167 25.9237 18.0432 25.8324 18.486 26.1625L30.5484 35.1564C30.9911 35.4865 31.0824 36.1131 30.7523 36.5558C30.4222 36.9986 29.7956 37.0899 29.3529 36.7597L17.2905 27.7659C16.8477 27.4357 16.7564 26.8092 17.0865 26.3664Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.7523 11.3414C31.0824 11.7842 30.9911 12.4107 30.5484 12.7408L18.486 21.7347C18.0432 22.0649 17.4167 21.9735 17.0865 21.5308C16.7564 21.088 16.8477 20.4615 17.2905 20.1314L29.3529 11.1375C29.7956 10.8073 30.4222 10.8986 30.7523 11.3414Z"
      />
    </svg>
  )
}

export const Submit = ({
  className = "",
  color,
  width,
  height,
  backgroundColor,
}) => {
  color = color.toLowerCase()
  checkColorProps(color)
  return (
    <svg
      className={`${className} ${styles[color]}`}
      style={{ backgroundColor }}
      width={width}
      height={height}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.9957 13.6097L42.9886 9L17.9809 24.0968L5.53473 15.6841C4.61278 15.1079 4.95851 13.725 5.9957 13.6097Z"
        stroke="#002D72"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.0479 29.398L17.9809 39.0784V24.0968L33.0777 34.1229L43.1038 9"
        stroke="#002D72"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const SubmitFooter = ({ className, color, width, height, bgcolor }) => {
  color = color.toLowerCase()
  checkColorProps(color)
  return (
    <svg
      className={`${className} ${styles[color]}`}
      style={{ backgroundColor: bgcolor }}
      width={width}
      height={height}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.9957 13.6097L42.9886 9L17.9809 24.0968L5.53473 15.6841C4.61278 15.1079 4.95851 13.725 5.9957 13.6097Z"
        stroke="#ffffff"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.0479 29.398L17.9809 39.0784V24.0968L33.0777 34.1229L43.1038 9"
        stroke="#ffffff"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
