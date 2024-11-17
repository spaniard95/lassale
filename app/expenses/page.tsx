import { MonthTable } from "@/components/expences/month-table";
import { getCurrentMonthNumber } from "@/lib/utils";

import { fetchExpensesByMonth } from "@/services/expenses";

export default async function ExpensesPage() {
  const currentMonth = getCurrentMonthNumber();
  const { expenses } = await fetchExpensesByMonth(currentMonth);

  return (
    <div>
      <MonthTable expenses={expenses} />
    </div>
  );
}
