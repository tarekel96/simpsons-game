// import packages
import React from "react";
import axios from "axios";
import { useSpring, animated } from "react-spring";
// import components
import Container from "../components/Container";
import Loading from "../components/Loading";
import { TriviaCard } from "../components/Card";
import { Button } from "../components/Button/Button.jsx";
// import styles
import styles from "../styles/Trivia.module.scss";

const Trivia = () => {
  const [currentQuote, setQuote] = React.useState(null);
  const [currentIndex, setIndex] = React.useState(0);
  const [clicked, setClick] = React.useState(false);
  const { transform } = useSpring({
    transform: `perspective(600px) rotateX(${clicked ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
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
    const results = await axios.get(
      "https://thesimpsonsquoteapi.glitch.me/quotes"
    );
    setQuote(results.data[0]);
  };
  if (currentQuote === null) return <Loading />;

  return (
    <Container className={styles["triviaContainer"]}>
      <TriviaCard
        character={currentQuote.character}
        image={currentQuote.image}
        quote={currentQuote.quote}
        style={transform}
      />
      <Button onClick={updateQuote} className="triviaBtn" variant="secondary">
        Next Card
      </Button>
    </Container>
  );
};

export default Trivia;
