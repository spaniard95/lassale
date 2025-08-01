import { GetCategoriesResponse, GetExpensesResponse } from "./types";

const BASE_URL = "https://murat.deno.dev";

export async function fetchAllExpenses(): Promise<GetExpensesResponse> {
  const response = await fetch(`${BASE_URL}/expenses/all`);
  return await response.json();
}

export async function fetchExpensesByMonth(
  month: number
): Promise<GetExpensesResponse> {
  const response = await fetch(`${BASE_URL}/expenses/all/date?month=${month}`);
  return await response.json();
}

export async function fetchCategoriesAndSubcategories(): Promise<GetCategoriesResponse> {
  const response = await fetch(`${BASE_URL}/expenses/categories`);

  return await response.json();
}
