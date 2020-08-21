import React from "react";
import styles from "./thumbnail.module.scss";

/**
 * @param {string} bootstrap the bootstrap class styles
 * @param {number} id the id number of the char
 * @param {string} imageSrc the image url of a thumbnail
 * @param {string} alt alternate property for image with thumbnail
 * @param {function} incrementScore function that handles the logic of incrementing the score
 */
const Thumbnail = ({ customStyles, id, imageSrc, alt, incrementScore }) => {
  return (
    <div className={`${styles.thumbnailContainer} ${customStyles}`}>
      <img
        className={styles.thumbnail}
        id={id}
        src={imageSrc}
        alt={alt}
        onClick={incrementScore.bind(this, id)}
      />
    </div>
  );
};

export default Thumbnail;
