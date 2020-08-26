import React from "react";
import { useSpring, animated } from "react-spring";
import styles from "./card.module.scss";

export const TriviaCard = ({
  className = "",
  clicked,
  character,
  handleClick,
  image,
  quote,
}) => {
  // const [clicked, setClick] = React.useState(false);
  const { transform } = useSpring({
    transform: `perspective(600px) rotateX(${clicked ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <div className={className}>
      {clicked ? (
        <animated.section
          style={{
            transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
          }}
          className={` ${
            clicked
              ? styles["triviaCardFlippedState"]
              : styles["triviaCardContainer"]
          }`}
          onClick={handleClick}
        >
          <img src={image} alt={`${character}`} />
          <h3>{character}</h3>
        </animated.section>
      ) : (
        <animated.section
          style={{ transform }}
          className={` ${
            clicked
              ? styles["triviaCardFlippedState"]
              : styles["triviaCardContainer"]
          }`}
          onClick={handleClick}
        >
          <h1>Quote: </h1>
          <p>{quote}</p>
          <article>
            *Try Guessing the Character Before Clicking on the Card
          </article>
        </animated.section>
      )}
    </div>
  );
};

export default TriviaCard;
