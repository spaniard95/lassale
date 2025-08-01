"use client";
import { MonthTable } from "@/components/expenses/month-table";
import { ExpensesCards } from "@/components/expenses/expenses-cards/ExpensesCards";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getMonthName } from "@/lib/utils";
import {
  fetchCategoriesAndSubcategories,
  fetchExpensesByMonth,
} from "@/services/expenses";
import { useQuery } from "@tanstack/react-query";
import { useMonthNavigation } from "@/hooks/useMonthNavigation";
import { toast } from "sonner";
import { useEffect } from "react";

export default function ExpensesPage() {
  const { selectedMonth, handlePreviousMonth, handleNextMonth } =
    useMonthNavigation();

  const { data } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategoriesAndSubcategories,
  });
  const categories = data?.categories ?? [];

  const {
    data: expensesData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["expenses", selectedMonth],
    queryFn: async () => {
      const { expenses } = await fetchExpensesByMonth(selectedMonth);
      return { expenses }; // Return the destructured data
    },
  });

  useEffect(() => {
    if (error) {
      toast.error(
        "Failed to load expenses. Please try again later." + error.message
      );
    }
  }, [error]);

  const categoriesMonthGoals: { [key: string]: number } = {
    1: 500, // id 1 -> hobbies
    2: 300, // id 2 -> Life
  };

  // Calculate total spent and total goal
  const totalSpent =
    expensesData?.expenses?.reduce((sum, expense) => sum + expense.amount, 0) ??
    0;
  const totalGoal = Object.values(categoriesMonthGoals).reduce(
    (sum, goal) => sum + goal,
    0
  );

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-2 pl-2 pr-2">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={handlePreviousMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <h2 className="text-2xl font-bold text-black w-64 text-center">
            {getMonthName(selectedMonth)} Expenses
          </h2>
          <Button variant="ghost" size="sm" onClick={handleNextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <Button
          variant={"outline"}
          type="button"
          // onClick={() => { /* open add expense modal or navigate */ }}
        >
          Add Category
        </Button>
      </div>

      <div className="mt-6">
        <ExpensesCards
          totalSpent={totalSpent}
          totalGoal={totalGoal}
          isLoading={isLoading}
        />
      </div>

      <div className="mt-6">
        <MonthTable
          expenses={expensesData?.expenses ?? []}
          categories={categories}
          categoriesMonthGoals={categoriesMonthGoals}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
