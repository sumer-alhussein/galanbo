import _ from "lodash";

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

import { Component } from "react";

export class db extends Component {
  data: any;

  constructor(data: any) {
    super(data);
    this.data = data;
  }

  get categories() {
    return _.map(this.data, (e, i, a) => {
      return e.category.name;
    });
  }
  render() {
    const { children } = this.props;
    return children;
  }
}
