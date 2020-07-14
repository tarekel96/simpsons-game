import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "../Button/Button";
import styles from "./Form.module.scss";

export const Form = ({ topScore }) => {
  let handleSubmit = (event) => {
    event.preventDefault();
    const post = {
      name: entry,
      score,
    };
    axios
      .post("http://localhost:5000/api/newscore", JSON.stringify(post), {
        headers: { "Content-Type": "application/json" },
      })
      .then((result) => {
        console.log("score sent...");
        console.log(result);
      })
      .catch((err) => {
        console.error(err);
      });
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
