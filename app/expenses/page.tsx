import { MonthTable } from "@/components/expenses/month-table";
import { Button } from "@/components/ui/button";
import { getCurrentMonthNumber, getMonthName } from "@/lib/utils";
import {
  fetchCategoriesAndSubcategories,
  fetchExpensesByMonth,
} from "@/services/expenses";

export default async function ExpensesPage() {
  const currentMonth = getCurrentMonthNumber();

  const { categories } = await fetchCategoriesAndSubcategories();
  const { expenses } = await fetchExpensesByMonth(currentMonth);

  const categoriesMonthGoals: { [key: string]: number } = {
    1: 500, // id 1 -> hobbies
    2: 300, // id 2 -> Life
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-2 pl-2 pr-2">
        <h2 className="text-2xl font-bold text-black">
          {getMonthName(currentMonth)} Expenses
        </h2>
        <Button
          variant={"outline"}
          type="button"
          // onClick={() => { /* open add expense modal or navigate */ }}
        >
          Add Category
        </Button>
      </div>

      <MonthTable
        expenses={expenses}
        categories={categories}
        categoriesMonthGoals={categoriesMonthGoals}
      />
    </div>
  );
}
