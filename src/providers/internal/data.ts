const id = () => Math.floor(Math.random() * 1000000);
export const data = [
  {
    category: {
      name: "ROMAN Fireplace",
      typeValues: "boolean",
      Items: [
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
  },
  {
    category: {
      name: "Electric Fireplace",
      typeValues: [],
      Items: [
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
  },
];
