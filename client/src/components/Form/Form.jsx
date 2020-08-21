import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Filter from "bad-words";
import axios from "axios";
import { Button } from "../Button/Button";
import styles from "./Form.module.scss";
const WordFilter = new Filter();
export const Form = ({ topScore }) => {
  const history = useHistory();
  const handleSubmit = (event) => {
    const { name } = entry;
    if (empty) {
      alert("ERROR: Please fill out the form input before submitting.");
      return;
    }
    if (isProfane) {
      console.log("is profane");
      alert("ERROR: Your input contains profane or innappropriate language.");
      return;
    }
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
    if (entry.name === "") {
      isEmpty(true);
    } else {
      isEmpty(false);
    }
    if (WordFilter.isProfane(entry.name)) {
      setProfane(true);
      return;
    } else {
      setProfane(false);
    }
  };
  const checkChange = () => {
    if (entry.name === "") {
      isEmpty(true);
      return;
    } else {
      isEmpty(false);
    }
    if (WordFilter.isProfane(entry.name)) {
      console.log(WordFilter.isProfane(entry.name));
      setProfane(true);
      return;
    } else {
      setProfane(false);
    }
  };
  const [proceedWithForm, showForm] = useState(false);
  const [entry, setEntry] = useState({ name: "" });
  const [score, setScore] = useState(0);
  const [form, updateForm] = useState({ submitting: true, message: "" });
  const [empty, isEmpty] = useState(true);
  const [isProfane, setProfane] = useState(false);

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
            <div className={`${styles["messageAndInputContainer"]}`}>
              {isProfane ? <ErrorMessage errorType="profane" /> : null}
              {empty ? <ErrorMessage errorType="empty" /> : null}
              <div className={`${styles["inputAndBtnContainer"]}`}>
                <input
                  placeholder={"Name"}
                  type="text"
                  value={entry.name}
                  name="name"
                  onChange={handleChange}
                  onBlur={checkChange}
                  onFocus={checkChange}
                />
                <Button
                  className={`${styles["submitButton"]}`}
                  disabled={empty || isProfane ? true : false}
                >
                  Submit
                </Button>
              </div>
            </div>
          </form>
        ) : null}
      </>
    );
  }
};

const ErrorMessage = ({ errorType = null }) => {
  if (errorType !== null) {
    errorType = errorType.toLowerCase();
    const errorMessage = (type) => {
      switch (type) {
        case "empty":
          return (
            <p className={`${styles["errorMessage"]}`}>
              ERROR: Please fill out the form input before submitting.
            </p>
          );
          break;
        case "profane":
          return (
            <p className={`${styles["errorMessage"]}`}>
              ERROR: Your input contains profane or innappropriate language.
            </p>
          );
          break;
        default:
          return <p className={`${styles["errorMessage"]}`}>ERROR</p>;
          break;
      }
    };

    return <div>{errorMessage(errorType)}</div>;
  } else {
    console.log(
      new Error(` Error Type provided, ${errorType}, does NOT exist.`)
    );
  }
};
