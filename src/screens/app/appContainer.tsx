import React, { Component } from "react";

export class AppContainer extends Component {
  constructor(params) {
    super(params);
  }

  render() {
    const { children } = this.props;
    return children && children;
  }
}

export default AppContainer;
