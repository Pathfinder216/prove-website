export type LineItem = {
  category: string;
  description: string;
  cost: number;
};

export type Budget = {
  year: string;
  lineItems: LineItem[];
};

export const budgets: Budget[] = [
  {
    year: "2014-2015",
    lineItems: [
      { category: "Administrative", description: "Regional entrace fee", cost: 100 },
      { category: "Tools", description: "PVC, motors", cost: 150 },
      { category: "Props", description: "PVC", cost: 50 },
      {
        category: "Electronics and Cameras",
        description: "Color camera, Xbox controllers",
        cost: 120,
      },
      { category: "Poster", description: "Poster board, printed poster", cost: 75 },
      { category: "T-Shirts", description: "Custom T-Shirts", cost: 150 },
      { category: "Website", description: "Domain name", cost: 35 },
    ]
  }
];
