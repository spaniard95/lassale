import { MonthTable } from "@/components/expenses/month-table";
import { getCurrentMonthNumber, getMonthName } from "@/lib/utils";
import { ExpenseDTO, getCategoriesAndSubcategories } from "@/services/expenses";

// import { fetchExpensesByMonth } from "@/services/expenses";

export default async function ExpensesPage() {
  const currentMonth = getCurrentMonthNumber();

  // console.log(currentMonth);
  // const { expenses } = await fetchExpensesByMonth(currentMonth);
  const categories = await getCategoriesAndSubcategories();

  const demoExpenses: ExpenseDTO[] = [
    {
      expense_id: 1,
      expense_date: "2022-01-01",
      category_name: "Food",
      subcategory_name: "Groceries",
      amount: 100,
      notes: "Bought some fruits and vegetables",
    },
    {
      expense_id: 2,
      category_name: "Food",
      subcategory_name: "Restaurants",
      amount: 200,
      expense_date: "2022-01-02",
      notes: "Had dinner with friends",
    },
    {
      expense_id: 3,
      category_name: "Transport",
      subcategory_name: "Public Transport",
      amount: 50,
      expense_date: "2022-01-03",
      notes: "Took a bus to work",
    },
  ];
  const currentMonthName = getMonthName(currentMonth);
  return (
    <div>
      <h2>{currentMonthName} Expenses</h2>
      <MonthTable expenses={demoExpenses} />
    </div>
  );
}
