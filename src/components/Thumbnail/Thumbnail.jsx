import React from "react";
import Proptypes from "prop-types";

const Thumbnail = ({ bootstrap, id, imageSrc, alt, incrementScore }) => {
  return (
    <div className={bootstrap}>
      <button>
        <img
          id={id}
          src={imageSrc}
          alt={alt}
          onClick={incrementScore.bind(this, id)}
        />
      </button>
    </div>
  );
};

Thumbnail.propTypes = {
  id: Proptypes.string.isRequired,
  imageSrc: Proptypes.string.isRequired,
  alt: Proptypes.string.isRequired,
  incrementScore: Proptypes.func,
};

export default Thumbnail;
