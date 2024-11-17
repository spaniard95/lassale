import { GetExpensesResponse } from "@/app/expenses/types";

export async function fetchAllExpenses(): Promise<GetExpensesResponse> {
  const response = await fetch(`${process.env.B4F_URL}/expenses/all`);
  return await response.json();
}

export async function fetchExpensesByMonth(
  month: number
): Promise<GetExpensesResponse> {
  const response = await fetch(
    `${process.env.B4F_URL}/expenses/all/date?month=${month}`
  );
  return await response.json();
}
