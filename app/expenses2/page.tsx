import { DataTable } from "@/components/expences/advanced-month-table";
import { expencesColumns } from "@/components/expences/advanced-month-table/columns";
import { getCurrentMonthNumber, getMonthName } from "@/lib/utils";

import { fetchExpensesByMonth } from "@/services/expenses";

export default async function ExpensesPage() {
  const currentMonth = getCurrentMonthNumber();

  const { expenses } = await fetchExpensesByMonth(currentMonth);

  // TODO: get all the listed categories
  // if one category isnt listed on the current month expenses, it means this category has no expenses this current month
  const columnsOptions = [];

  return (
    <>
      <h2 className="text-3xl font-bold tracking-tight">
        {getMonthName(currentMonth)}
      </h2>

      {expenses.length === 0 ? (
        <p>No expenses have been added yet</p>
      ) : (
        <DataTable data={expenses} columns={expencesColumns} />
      )}
    </>
  );
}
