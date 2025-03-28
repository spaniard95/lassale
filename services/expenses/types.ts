// DTO types are derived from the B4F API responses

// Expenses services
export type ExpenseDTO = {
  expense_id: number;
  expense_date: string;
  notes: string;
  amount: number;
  category_id: string;
  subcategory_id: string;
};

export type GetExpensesResponse = {
  expenses: ExpenseDTO[];
};

// Categories services
type SubcategoryDTO = {
  id: number;
  name: string;
};

export type CategoryDTO = {
  id: number;
  name: string;
  subcategories: SubcategoryDTO[];
};

export type GetCategoriesResponse = {
  categories: CategoryDTO[];
};
