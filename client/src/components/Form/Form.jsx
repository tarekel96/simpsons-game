import React, { useState, useEffect } from "react";
import { Button } from "../Button/Button";
import styles from "./Form.module.scss";

export const Form = ({ topScore }) => {
  let handleSubmit = (event) => {
    event.preventDefault();
    const post = {
      name: entry,
      score,
    };
    console.log(post);
    return post;
  };
  let handleChange = (event) => {
    setEntry({ name: event.target.value });
  };
  let [proceedWithForm, showForm] = useState(false);
  let [entry, setEntry] = useState({ name: "" });
  let [score, setScore] = useState(0);
  useEffect(() => {
    setScore({ score: topScore });
  }, [topScore]);
  return (
    <>
      <p>Would You Like to Submit Your Score?</p>
      <Button
        variant="primary"
        customStyle={`${styles.confirmBtn}`}
        onClick={() => {
          showForm(true);
        }}
      >
        Heck Yeah!
      </Button>
      {proceedWithForm ? (
        <form className={styles.scoreForm} onSubmit={handleSubmit}>
          <p>Enter your name:</p>
          <input
            type="text"
            value={entry.name}
            name="name"
            onChange={handleChange}
          />
          <Button>Submit</Button>
        </form>
      ) : null}
    </>
  );
};
