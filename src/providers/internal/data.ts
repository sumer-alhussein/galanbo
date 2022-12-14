const id = () => Math.floor(Math.random() * 1000000);
export const data = [
  {
    id: "romanFireplace",
    name: "ROMAN Fireplace",
    typeValues: "boolean",
    items: [
      {
        id: id(),
        item: "ROMAN Fireplace 104cm",
        description: "Linear Fireplace Burner 104cm",
        price: 475,
        type: "Manual Control",
      },
      {
        id: id(),
        item: "ROMAN Fireplace 124cm",
        description: "Linear Fireplace Burner 124cm",
        price: 475,
        type: "With Remote Control",
      },
      {
        id: id(),
        item: "ROMAN Fireplace 134cm",
        description: "Linear Fireplace Burner 134cm",
        price: 550,
        type: "Full Remote Control",
      },
    ],
  },
  {
    id: "electricFireplace",
    name: "Electric Fireplace",
    typeValues: [],
    items: [
      {
        id: id(),
        item: "Vatra Fireplace",
        description: 'Electric Fireplace 50"',
        price: 450,
        type: '50"',
      },
      {
        id: id(),
        item: "Vatra Fireplace",
        description: 'Electric Fireplace 60"',
        price: 550,
        type: '60"',
      },
      {
        id: id(),
        item: "Vatra Fireplace",
        description: 'Electric Fireplace 70"',
        price: 550,
        type: '70"',
      },
    ],
  },
];
