import React, { Component } from "react";

class Thumbnail extends Component {
  // constructor(props) {
  //   super(props);
  // }

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

export default Thumbnail;
