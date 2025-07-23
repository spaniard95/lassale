import { MonthTable } from "@/components/expenses/month-table";
import { getCurrentMonthNumber, getMonthName } from "@/lib/utils";
import {
  ExpenseDTO,
  fetchCategoriesAndSubcategories,
  fetchExpensesByMonth,
} from "@/services/expenses";

export default async function ExpensesPage() {
  const currentMonth = getCurrentMonthNumber();

  const { categories } = await fetchCategoriesAndSubcategories();
  const { expenses } = await fetchExpensesByMonth(currentMonth);

  const categoriesMonthGoals: { [key: string]: number } = {
    1: 500,
    2: 300,
  };

  return (
    <div>
      <h2 className="mb-1 pl-2 text-2xl font-bold">
        {getMonthName(currentMonth)} Expenses
      </h2>
      <MonthTable
        expenses={expenses}
        categories={categories}
        categoriesMonthGoals={categoriesMonthGoals}
      />
    </div>
  );
}
