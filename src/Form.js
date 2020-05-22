import React, { useState } from "react";
import styles from "./styles/Form.module.scss";

const Form = () => {
  let [proceedWithForm, showForm] = useState(false);
  return (
    <>
      <p>Would You Like to Submit Your Score?</p>
      <button
        className={`btn-success ${styles.confirmBtn}`}
        onClick={() => {
          showForm(true);
        }}
      >
        Heck Yeah!
      </button>
      {proceedWithForm ? (
        <form>
          <p>Enter your name:</p>
          <input type="text" />
          <input type="submit" className={`btn-primary ${styles.submitBtn}`} />
        </form>
      ) : null}
    </>
  );
};

export default Form;
