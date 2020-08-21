// import packages
import React, { useState, useEffect } from "react";
import axios from "axios";
// import components
import { Container, Grid, GridItem } from "../Grid";
import Icon from "../Icon";
import { Button } from "../Button/Button";
// import styles
import styles from "./lightbox.module.scss";

export const Input = ({
  children,
  className,
  name,
  value,
  required,
  onBlur,
  onChange,
  type,
  placeholder,
}) => {
  return (
    <input
      className={className}
      onBlur={onBlur}
      onChange={onChange}
      name={name}
      value={value}
      type={type}
      required={required}
      placeholder={placeholder}
    >
      {children}
    </input>
  );
};

/**
 * @name Form
 * @param {string} className - a props for className
 * @param {string} header - header of the LightBox Modal
 * @param {string} paragraph - the first paragraph for the LightBox modal
 * @param {boolean} modal - boolean props that determines whether the modal is open or not
 * @param {function} toggleModal - function that must be passed that toggles the modal should to be shown or not.
 * IMPORTANT - Modal State is handled in its the parent element
 */
export const Form = ({
  className = "",
  header = "Get in Touch",
  paragraph = "Want to work with us? Have a question? Or do you have the next great idea? Use this form to send us a message! We’ll get back to you as soon as we can.",
  modal = false,
  toggleModal,
}) => {
  //regex email validator
  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  // form state for inputs - name, email, message
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // check if input state is empty
  const [emptyName, nameIsEmpty] = useState(true);
  const [emptyEmail, emailIsEmpty] = useState(true);
  const [emptyTextArea, textAreaIsEmpty] = useState(true);
  // validEmail - boolean that is false if the email is not valid and toggles an error message
  const [validEmail, checkEmail] = useState(true);
  // confirmation - boolean that is true if a message is sent successfully and sends a success message
  const [confirmation, setConfirmation] = useState(false);

  const resetForm = () => {
    setName("");
    nameIsEmpty(true);
    setEmail("");
    emailIsEmpty(true);
    setMessage("");
    textAreaIsEmpty(true);
    checkEmail(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // form data
    const form = e.target;
    // submit form data to Zapiar hook
    axios({
      method: "POST",
      url: "https://hooks.zapier.com/hooks/catch/5846/ozg48qy/",
      data: new FormData(form),
    })
      .then((r) => {
        resetForm(); // resets form data
        toggleModal(); // closes modal
        setConfirmation((state) => !state); // opens success message
      })
      .catch((error) => {
        resetForm();
        alert("Error in sending message.");
        console.log(error);
        return <h1>Error</h1>;
      });
  };
  useEffect(() => {
    // logic that allows to close modal by clicking outside of the modal
    const handleClick = (e) => {
      console.log("clicked");
      let name = String(e.target.className);
      // if confirmation message is open
      if (confirmation) {
        if (name.includes("lightboxOverlay")) {
          setConfirmation((state) => !state);
        }
      }
      // if modal is open
      if (modal) {
        if (name.includes("lightboxOverlay")) {
          toggleModal();
          resetForm();
        }
      }
    };
    document.body.addEventListener("click", handleClick);
    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  });
  // render confirmation message only - confirmation true and modal false
  if (confirmation && !modal) {
    return (
      <Container className={`${styles["lightboxOverlay"]} ${className}`} fluid>
        <SuccessMessage setConfirmation={setConfirmation} />
      </Container>
    );
  }
  // render modal only - confirmation false and modal true
  if (!confirmation && modal) {
    return (
      <Container className={`${styles["lightboxOverlay"]} ${className}`} fluid>
        <Grid
          className={
            validEmail
              ? `${styles["modalContainer"]}`
              : `${styles["modalContainerErrorMessage"]}`
          }
          name="modal"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // form will not submit if the email is invalid
              if (!validEmail) {
                return alert("Please enter a valid email.");
              } else {
                handleSubmit(e);
              }
            }}
            id={"formElement"}
          >
            <GridItem
              row={[1, 2]}
              col={[12, 13]}
              className={`${styles["modalIconContainer"]}`}
            >
              <div
                className={`${styles["modalIcon"]}`}
                onClick={(e) => {
                  toggleModal(e);
                  resetForm();
                }}
              >
                <Icon name="cancel" width={22} height={22} />
              </div>
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
              <div>{paragraph}</div>
            </GridItem>
            {/* only rendered if the email is not valid */}
            {validEmail ? "" : <ErrorMessage />}
            <GridItem
              row={[4, 5]}
              col={[1, 13]}
              className={`${styles["modalInputContainer"]}`}
            >
              <Input
                type="text"
                name="name"
                required="required"
                value={name}
                onChange={(e) => {
                  e.preventDefault();
                  setName(e.target.value);
                }}
                onBlur={(e) => {
                  if (name === "") {
                    nameIsEmpty(true);
                  } else {
                    nameIsEmpty(false);
                  }
                }}
                placeholder="Name"
              />
            </GridItem>
            <GridItem
              row={[5, 6]}
              col={[1, 13]}
              className={`${styles["modalInputContainer"]}`}
            >
              <Input
                className={`${styles["emailInput"]}`}
                placeholder="Email"
                type="text"
                name="email"
                required="required"
                value={email}
                // onBlur - when user leaves email field
                onBlur={() => {
                  if (email === "") {
                    emailIsEmpty(true);
                    checkEmail(true);
                  } else {
                    emailIsEmpty(false);
                    const valid = validEmailRegex.test(email);
                    checkEmail(valid);
                  }
                }}
                onChange={(e) => {
                  e.preventDefault();
                  setEmail(e.target.value);
                }}
              />
            </GridItem>
            <GridItem
              row={[6, 7]}
              col={[1, 13]}
              className={`${styles["modalInputContainer"]}`}
            >
              <textarea
                placeholder="How Can We Help?"
                name="message"
                required="required"
                className={`${styles["formTextArea"]}`}
                value={message}
                onChange={(e) => {
                  e.preventDefault();
                  setMessage(e.target.value);
                }}
                onBlur={() => {
                  if (message === "") {
                    textAreaIsEmpty(true);
                  } else {
                    textAreaIsEmpty(false);
                  }
                }}
              ></textarea>
            </GridItem>
            <GridItem
              className={`${styles["modalBtnContainer"]}`}
              row={[7, 8]}
              col={[1, 13]}
            >
              <Button
                size="big"
                variant={
                  validEmail && !emptyName && !emptyEmail && !emptyTextArea
                    ? "primary"
                    : "textdisabled"
                }
                className={`${styles["modalBtn"]}`}
              >
                Send
              </Button>
            </GridItem>
          </form>
        </Grid>
      </Container>
    );
  }
  // render null if neither confirmation nor modal are true
  if (!confirmation && !modal) {
    return null;
  }
  return null;
};
// error message component
export const ErrorMessage = ({ message = "Please enter a valid email" }) => {
  return (
    <div className={`${styles["modalErrorMessage"]}`}>
      <Icon
        name="invalid"
        color="red"
        className={`${styles["modalErrorIcon"]}`}
        width={55}
        height={55}
      />
      <span>{message}</span>
    </div>
  );
};
// success message component
export const SuccessMessage = ({ setConfirmation }) => {
  return (
    <div className={`${styles["modalSuccessMessageContainer"]}`}>
      <div
        className={`${styles["modalSuccessMessageIconContainer"]}`}
        onClick={(e) => {
          setConfirmation((state) => !state);
        }}
      >
        <Icon
          className={`${styles["modalSuccessMessageIcon"]}`}
          name="cancel"
          width={22}
          height={22}
        />
      </div>
      <div className={`${styles["modalSuccessMessageHeader"]}`}>
        Message Received!
      </div>
      <p className={`${styles["modalSuccessMessageParagraph"]}`}>
        We have received your request and will respond back as soon as we can!
      </p>
    </div>
  );
};

export default Form;
