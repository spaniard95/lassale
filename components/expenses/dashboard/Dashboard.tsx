"use client";
import { CategoryDTO } from "@/services/expenses/types";
import { MonthTable } from "../month-table";
import { useMonthNavigation } from "@/hooks/useMonthNavigation";
import { useQuery } from "@tanstack/react-query";
import { fetchExpensesByMonth } from "@/services/expenses/services";
import { toast } from "sonner";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { getMonthName } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DashboardProps {
  categories: CategoryDTO[];
  selectedYear: number;
}
export function Dashboard({ categories, selectedYear }: DashboardProps) {
  const { selectedMonth, handlePreviousMonth, handleNextMonth } =
    useMonthNavigation();

  const {
    data: expensesData,
    error,
    // isLoading,
  } = useQuery({
    queryKey: ["expenses", selectedMonth, selectedYear],
    queryFn: () => fetchExpensesByMonth(selectedMonth, selectedYear),
  });

  // check if it can be done without useEffect
  useEffect(() => {
    if (error) {
      toast.error(
        "Failed to load expenses. Please try again later. " + error.message
      );
    }
  }, [error]);

  return (
    <div className="space-y-4">
      {/* Month Navigation */}
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
      </div>

      {/* Month Table */}
      <MonthTable categories={categories} expenses={expensesData?.expenses} />
    </div>
  );
}
