import { Text, View } from "react-native";
import React, { Component } from "react";
import AppScreen from "./appScreen";

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
