import _ from "lodash";
import React, { Component, ReactNode, createContext } from "react";
import { data } from "../../providers/internal/data";

export interface Params {
  children: ReactNode;
  data: [];
}

export class priceQuoteContainer extends Component {
  constructor(params) {
    super(params);
    this.state = {
      categeryList: [1, 2, 3],
      data: [],
    };
  }

  get categories() {
    return _.map(data, (e, i, a) => {
      return e.category.name;
    });
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

export default priceQuoteContainer;
