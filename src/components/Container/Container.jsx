import React, { Component } from "react";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <main className={this.props.bootstrap}>{this.props.children}</main>;
  }
}

export default Container;
