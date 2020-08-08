import React from "react"
// import styles
import "./custom-grid.scss"

/**
 * @name Container
 * @param {Object} children - the HTML elements within the GridContainer
 * @param {string} className - the className for the Grid component
 * @param {boolean} fluid - fluid grid takes up the full width of the screen
 */
export const Container = ({
  children,
  className = "",
  fluid = false,
  onClick,
}) => {
  if (fluid) {
    className += " fluid"
  }
  return (
    <div
      className={`gridContainer ${className}`}
      onClick={() => {
        if (onClick) {
          onClick()
        }
      }}
    >
      {children}
    </div>
  )
}

/**
 * @name Grid
 * @param {Object} children - the HTML elements within the GridContainer
 * @param {string} className - the className for the Grid component
 * @param {boolean} fluid - fluid grid takes up the full width of the screen
 */
export const Grid = ({ children, className = "", fluid = false }) => {
  if (fluid) {
    className += " fluid"
  }
  return <div className={`grid ${className}`}>{children}</div>
}

/**
 * @name GridItem
 * @param {Array<number>} smCol - the col spans for the small breakpoint (4 Columns - 0-599px). The first element is the col start span and the second element is the col end span.
 * @param {Array<number>} smRow - the row spans for the small breakpoint (4 Rows -0-599px). The first element is the row start span and the second element is the row end span.
 * @param {Array<number>} mdCol - the col spans for the medium breakpoint (8 Columns - 600-839px). The first element is the col start span and the second element is the col end span.
 * @param {Array<number>} mdRow - the row spans for the medium breakpoint (8 Rows - 600-839px). The first element is the row start span and the second element is the row end span.
 * @param {Array<number>} col - the col spans (12 Columns 840+px). The first element is the col start span and the second element is the col end span.
 * @param {Array<number>} row - the row spans (12 Rows 840+px). The first element is the row start span and the second element is the row end span.
 * @param {string} className - the className for the GridItem component
 * @param {string} centerText - centers the text of the GridItem (utility props).
 * @param {string} centerX - sets justify-content to center for the GridItem (utility props). Note: Default flex orientation is row.
 * @param {string} centerY - sets align-content to center for the GridItem (utility props). Note: Default flex orientation is row.
 * @param {Object} children - the HTML elements within the GridItem
 * @param {string} height - determines the height of the GridItem
 * @param {string} backgroundColor - determines the backgroundColor of the GridItem
 */
export const GridItem = ({
  children,
  className = "",
  col = [],
  row = [],
  smCol = [],
  smRow = [],
  mdCol = [],
  mdRow = [],
  centerX = false,
  centerY = false,
  centerText = false,
}) => {
  // utility props
  if (centerX) {
    className += " gridItemCenterX"
  }
  if (centerY) {
    className += " gridItemCenterY"
  }
  if (centerText) {
    className += " gridItemCenterText"
  }

  // adds the class names that specify the span of the cols
  if (col[0] !== undefined && col[1] !== undefined) {
    if (
      !checkPropArraySizes(col, row) &&
      !checkCols(1, 13, col[0]) &&
      !checkCols(1, 13, col[1])
    ) {
      className += " cols-" + col[0] + "-" + col[1]
    }
  }
  if (row[0] !== undefined && row[1] !== undefined) {
    if (!checkPropArraySizes(col, row) && !checkRows(row[0], row[1])) {
      className += " rows-" + row[0] + "-" + row[1]
    }
  }
  if (mdCol[0] !== undefined && mdCol[1] !== undefined) {
    if (
      !checkPropArraySizes(mdCol, mdRow) &&
      !checkCols(1, 9, mdCol[0]) &&
      !checkCols(1, 9, mdCol[1])
    ) {
      className += " cols-md-" + mdCol[0] + "-" + mdCol[1]
    }
  }
  if (mdRow[0] !== undefined && mdRow[1] !== undefined) {
    if (!checkPropArraySizes(mdCol, mdRow) && !checkRows(mdRow[0], mdRow[1])) {
      className += " rows-md-" + mdRow[0] + "-" + mdRow[1]
    }
  }
  if (smCol[0] !== undefined && smCol[1] !== undefined) {
    if (
      !checkPropArraySizes(smCol, smRow) &&
      !checkCols(1, 5, smCol[0]) &&
      !checkCols(1, 5, smCol[1])
    ) {
      className += " cols-sm-" + smCol[0] + "-" + smCol[1]
    }
  }
  if (smRow[0] !== undefined && smRow[1] !== undefined) {
    if (!checkPropArraySizes(smCol, smRow) && !checkRows(smRow[0], smRow[1])) {
      className += " rows-sm-" + smRow[0] + "-" + smRow[1]
    }
  }
  return <div className={`${className} gridItem `}>{children}</div>
}

/************************************** 
        ERROR CHECKING FUNCTIONS
**************************************/
//ensures that an invalid cols props is not provided to the GridItem component
const checkCols = (min, max, col) => {
  if (col > max) {
    console.log(
      new Error(
        `The col props value (${col}) exceeds the max track number: ${max}`
      )
    )
    return true
  }
  if (col < min) {
    console.log(
      new Error(
        `The col props value ${col} is below the min track number: ${max}`
      )
    )
    return true
  }
  return false
}
const checkRows = (rowStart, rowEnd) => {
  if (rowStart > rowEnd) {
    console.log(
      new Error(
        `The starting row track: ${rowStart} exceeds the ending row track: ${rowEnd}`
      )
    )
    return true
  }
  return false
}
const checkPropArraySizes = (array1, array2) => {
  if (array1.length > 2) {
    console.log(
      new Error(`Invalid prop input: ${array1} should not exceed 2 elements`)
    )
    return true
  }
  if (array2.length > 2) {
    console.log(
      new Error(`Invalid prop input: ${array2} should not exceed 2 elements`)
    )
    return true
  }
  return false
}
