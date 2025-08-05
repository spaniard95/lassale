import { GetCategoriesResponse, GetExpensesResponse } from "./types";

const BASE_URL = "https://murat.deno.dev";

export async function fetchAllExpenses(): Promise<GetExpensesResponse> {
  const response = await fetch(`${BASE_URL}/expenses/all`);
  return await response.json();
}

export async function fetchExpensesByMonth(
  month: number,
  year: number
): Promise<GetExpensesResponse> {
  const response = await fetch(
    `${BASE_URL}/expenses/all/date?month=${month}&year=${year}`
  );
  return await response.json();
}

export async function fetchCategoriesAndSubcategories(): Promise<GetCategoriesResponse> {
  const response = await fetch(`${BASE_URL}/expenses/categories`);

  return await response.json();
}

// export async function fetchExpensesByYear(
//   year: number
// ): Promise<GetExpensesResponse> {
//   const response = await fetch(`${BASE_URL}/expenses/all/date?year=${year}`);

//   if (!response.ok) {
//     const errorText = await response.text();
//     throw new Error(
//       `Failed to fetch expenses by year: ${response.status} - ${errorText}`
//     );
//   }

//   return await response.json();
// }
