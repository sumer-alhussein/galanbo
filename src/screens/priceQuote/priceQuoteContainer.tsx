import _ from "lodash";
import React, { Component, ReactNode, createContext } from "react";
// import { data } from "../../providers/internal/data";
const localData = require("../../components/quoteAddButton/local.json");

const fetchData = setTimeout(() => {
  return { age: 100, count: 3 };
}, 1000);

export interface PiceQuoteContainerParams {
  children: ReactNode;
  data: [];
}
export interface PriceQuoteParams {
  clientName: string;
  content: {
    category: string;
    product: "string";
    type: string;
    price: number;
    count: number;
  }[];
}

export interface Data {
  products: {
    category: string;
    title: string;
    products: { id: number; title: string; type: string; price: number }[];
  }[];
}
const priceQuoteInetialState: PriceQuoteParams = {
  clientName: "",
  content: [],
};

export class priceQuoteContainer extends Component<PiceQuoteContainerParams> {
  constructor(params: PiceQuoteContainerParams, data: Data) {
    super(params);
    this.state = {
      categeryList: [1, 2, 3],
      data: [],
    };
  }

  get categories() {
    return _.map(localData.fireplace, (e, i, a) => {
      return e.category;
    });
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

export default priceQuoteContainer;
