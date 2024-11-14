export type ExpenseDto = {
  expense_id: number;
  expense_date: string;
  notes: string;
  amount: number;
  category_name: string;
  subcategory_name: string;
};

export type GetExpensesResponse = ExpenseDto[];
