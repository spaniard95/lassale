import { Dashboard } from "@/components/expenses/dashboard";
import { MonthTable } from "@/components/expenses/month-table";
import {
  fetchCategoriesAndSubcategories,
  fetchExpensesByYear,
} from "@/services/expenses/services";
import { revalidatePath } from "next/cache";

// Server Action
async function refreshCategories() {
  "use server";

  revalidatePath("/expensesv2/[year]", "page");

  return await fetchCategoriesAndSubcategories();
}

export default async function Page({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const { year } = await params;
  const parsedYear = parseInt(year, 10);

  const { categories } = await fetchCategoriesAndSubcategories();
  // const yearExpenses = await fetchExpensesByYear(parseInt(year, 10));

  return (
    <div className="p-6">
      <Dashboard categories={categories} selectedYear={parsedYear} />
    </div>
  );
}
