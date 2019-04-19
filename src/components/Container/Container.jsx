import React, { Component } from "react";
import PropTypes from "prop-types";

class Container extends Component {
  render() {
    return <main className={this.props.bootstrap}>{this.props.children}</main>;
  }
}

Container.propTypes = {
  bootstrap: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired
};

export default Container;
