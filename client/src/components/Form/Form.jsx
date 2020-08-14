import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { Button } from "../Button/Button";
import styles from "./Form.module.scss";

export const Form = ({ topScore }) => {
  const history = useHistory();
  const handleSubmit = (event) => {
    const { name } = entry;
    event.preventDefault();
    const post = {
      name,
      score,
    };
    updateForm({ submitting: true });
    axios
      .post("http://localhost:5000/api/newscore", JSON.stringify(post), {
        headers: { "Content-Type": "application/json" },
      })
      .then((result) => {
        console.log("score sent...");
        console.log(result);
        updateForm({ submitting: false });
        history.push({
          pathname: "/leaderboards",
          state: {
            response: "Sucessfully added new score to leaderboards",
          },
        });
      })
      .catch((err) => {
        updateForm({ submitting: false });
        console.error(err);
      });
  };
  const handleChange = (event) => {
    setEntry({ name: event.target.value });
  };
  const [proceedWithForm, showForm] = useState(false);
  const [entry, setEntry] = useState({ name: "" });
  const [score, setScore] = useState(0);
  const [form, updateForm] = useState({ submitting: true, message: "" });

  useEffect(() => {
    setScore(topScore);
  }, [topScore]);
  if (topScore !== undefined) {
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
              placeholder={"Name"}
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
  }
};
