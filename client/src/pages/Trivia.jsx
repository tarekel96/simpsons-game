// import packages
import React from "react";
import axios from "axios";
// import components
import Container from "../components/Container";
import Loading from "../components/Loading";
import { TriviaCard } from "../components/Card";
import { Button } from "../components/Button/Button.jsx";
// import styles
import styles from "../styles/Trivia.module.scss";

const Trivia = () => {
  const [currentQuote, setQuote] = React.useState(null);
  const [clicked, setClick] = React.useState(false);
  const [animate, setAnimate] = React.useState(true);
  const handleClick = () => {
    setClick((state) => !state);
  };
  const fetchQuote = async () => {
    const results = await axios.get(
      "https://thesimpsonsquoteapi.glitch.me/quotes"
    );
    setQuote(results.data[0]);
  };
  React.useEffect(() => {
    try {
      fetchQuote();
    } catch (e) {
      throw e;
    }
  }, []);
  const updateQuote = async () => {
    if (animate === true) {
      setAnimate(false);
    }
    setClick(false);
    const results = await axios.get(
      "https://thesimpsonsquoteapi.glitch.me/quotes"
    );
    setQuote(results.data[0]);
    setAnimate(true);
  };
  if (currentQuote === null) return <Loading />;
  return (
    <Container className={styles["triviaContainer"]}>
      <TriviaCard
        character={currentQuote.character}
        image={currentQuote.image}
        quote={currentQuote.quote}
        clicked={clicked}
        handleClick={handleClick}
        className={animate ? styles["animation"] : ""}
      />
      <Button onClick={updateQuote} className="triviaBtn" variant="secondary">
        Next Card
      </Button>
    </Container>
  );
};

export default Trivia;
