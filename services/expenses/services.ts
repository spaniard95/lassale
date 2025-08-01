import { GetCategoriesResponse, GetExpensesResponse } from "./types";

const BASE_URL = process.env.NEXT_PUBLIC_BE_URL || "https://murat.deno.dev";

// Debug logs for production
console.log("Environment:", process.env.NODE_ENV);
console.log("NEXT_PUBLIC_BE_URL:", process.env.NEXT_PUBLIC_BE_URL);
console.log("BASE_URL being used:", BASE_URL);

export async function fetchAllExpenses(): Promise<GetExpensesResponse> {
  console.log("Fetching from:", `${BASE_URL}/expenses/all`);
  const response = await fetch(`${BASE_URL}/expenses/all`);
  console.log("Response status:", response.status);
  return await response.json();
}

export async function fetchExpensesByMonth(
  month: number
): Promise<GetExpensesResponse> {
  console.log("Fetching from:", `${BASE_URL}/expenses/all/date?month=${month}`);
  const response = await fetch(`${BASE_URL}/expenses/all/date?month=${month}`);
  console.log("Response status:", response.status);
  return await response.json();
}

export async function fetchCategoriesAndSubcategories(): Promise<GetCategoriesResponse> {
  console.log("Fetching from:", `${BASE_URL}/expenses/categories`);
  const response = await fetch(`${BASE_URL}/expenses/categories`);
  console.log("Response status:", response.status);
  return await response.json();
}
