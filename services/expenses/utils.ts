import { ExpenseDTO } from "./types";

export const getCategoriesAmounts = (expenses: ExpenseDTO[]) => {
  const categoriesAmount: { [key: string]: number } = {};

  expenses.forEach(({ amount, category_id }) => {
    if (categoriesAmount[category_id]) {
      categoriesAmount[category_id] += amount;
    } else {
      categoriesAmount[category_id] = amount;
    }
  });

  return categoriesAmount;
};

export const getCategoriesTotalAmount = (categories: {
  [key: string]: number;
}) => {
  return Object.values(categories).reduce((acc, amount) => acc + amount, 0);
};

export const getGoalsTotalAmount = (goals: { [key: string]: number }) => {
  return Object.values(goals).reduce((acc, amount) => acc + amount, 0);
};
