import _ from "lodash";
import { createContext } from "native-base";
import { Component } from "react";
import { data } from "./data";

export const priceQuote = {
  name: "",
  content: [
    {
      name: "Item Name",
      description: "Item Description",
      price: "number",
      type: "type exp. remote/ manual",
    },
  ],
};

export class db extends Component {
  data: any;

  constructor(data: any) {
    super(data);
    this.data = data;
  }

  get categories() {
    return _.map(this.data, (e, i, a) => {
      return e.name;
    });
  }
  render() {
    const { children } = this.props;
    return children;
  }
}
