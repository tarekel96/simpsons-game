import React from "react";
import { Container, Grid, GridItem } from "../Grid";
import { Button } from "../Button";
import styles from "./lightbox.module.scss";
/**
 * @name LightBox
 * @param {string} className - a props for className
 * @param {string} header - header of the LightBox Modal
 * @param {string} paragraphOne - the first paragraph for the LightBox modal
 * @param {string} paragraphTwo - the second paragraph for the LightBox modal
 * @param {boolean} modal - boolean props that determines whether the modal is open or not
 * @param {function} toggleModal - function that must be passed to determine when the modal should be shown or not.
 * IMPORTANT - Modal State is handled in its the parent element
 */
export const LightBox = ({
  className = "",
  header = "Hack Week Begins",
  paragraphOne = "When people talk about innovation, they tend to talk about newproducts or ideas.",
  paragraphTwo = "But it is also about the ability of organizations to reinvent themselves by doing things outside the norm. By relooking at every day processes and elevating the value of creativity in the organization.",
  modal = false,
  toggleModal,
}) => {
  {
    window.addEventListener("click", (e) => {
      let name = String(e.target.className);
      if (name.includes("lightboxOverlay")) {
        toggleModal(e);
      }
    });
  }
  return (
    <Container
      className={`${styles["lightboxOverlay"]} ${className} ${
        modal ? "" : (className += styles["hideModal"])
      }`}
      fluid
      name="container"
    >
      {modal ? (
        <Grid className={`${styles["modalContainer"]}`} name="modal">
          <GridItem
            row={[1, 2]}
            col={[12, 13]}
            className={`${styles["modalIconContainer"]}`}
          >
            <div
              className={`${styles["modalIcon"]}`}
              onClick={(e) => toggleModal(e)}
            ></div>
          </GridItem>
          <GridItem
            col={[1, 13]}
            row={[2, 3]}
            className={`${styles["modalHeader"]}`}
          >
            {header}
          </GridItem>
          <GridItem
            row={[3, 4]}
            col={[1, 13]}
            className={`${styles["modalParagraph"]}`}
          >
            {paragraphOne}
            <br />
            <br />
            {paragraphTwo}
          </GridItem>
          <GridItem
            row={[4, 5]}
            col={[1, 13]}
            className={`${styles["modalNameContainer"]}`}
          >
            <input
              placeholder="First Name"
              className={`${styles["modalNameFirst"]} ${styles["modalName"]}`}
            />
            <input
              placeholder="Last Name"
              className={`${styles["modalNameLast"]} ${styles["modalName"]}`}
            />
          </GridItem>
          <GridItem
            row={[5, 6]}
            col={[1, 13]}
            className={`${styles["modalInputContainer"]}`}
          >
            <input placeholder="Department" />
          </GridItem>
          <GridItem
            row={[6, 7]}
            col={[1, 13]}
            className={`${styles["modalInputContainer"]}`}
          >
            <input placeholder="Email" />
          </GridItem>
          <GridItem
            row={[7, 8]}
            col={[1, 13]}
            className={`${styles["modalBtnContainer"]}`}
          >
            <Button
              size="big"
              variant="text"
              className={`${styles["modalBtnOne"]}`}
              onClick={(e) => toggleModal(e)}
            >
              Maybe Later
            </Button>
            <Button
              size="big"
              variant="text"
              className={`${styles["modalBtnTwo"]}`}
              dark
            >
              Register Now
            </Button>
          </GridItem>
        </Grid>
      ) : (
        ""
      )}
    </Container>
  );
};
