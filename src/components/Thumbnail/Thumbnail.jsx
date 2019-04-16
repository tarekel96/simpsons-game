import React, { Component } from "react";

class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      picked: false
    };
  }

  handleClick() {
    if (this.state.picked === false) {
      this.setState({
        picked: true
      });
      console.log(this.state.picked);
      this.props.incrementScore();
      this.props.updateTopScore(this.props.score);
      this.props.randomizeOrder(this.props.array);
    } else {
      this.props.resetScore();
      this.props.randomizeOrder(this.props.array);
    }
  }

  render() {
    return (
      <div className={this.props.bootstrap}>
        <button onClick={this.handleClick}>
          <img src={this.props.imageSrc} alt={this.props.alt} />
        </button>
      </div>
    );
  }
}

export default Thumbnail;
