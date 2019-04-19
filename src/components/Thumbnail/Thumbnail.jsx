import React, { Component } from "react";
import Proptypes from "prop-types";

class Thumbnail extends Component {
  render() {
    return (
      <div className={this.props.bootstrap}>
        <button>
          <img
            id={this.props.id}
            src={this.props.imageSrc}
            alt={this.props.alt}
            onClick={this.props.incrementScore.bind(this, this.props.id)}
          />
        </button>
      </div>
    );
  }
}

Thumbnail.propTypes = {
  id: Proptypes.string.isRequired,
  imageSrc: Proptypes.string.isRequired,
  alt: Proptypes.string.isRequired,
  incrementScore: Proptypes.func
};

export default Thumbnail;
