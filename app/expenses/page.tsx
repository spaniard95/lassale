import { MonthTable } from "@/components/expenses/month-table";
import { getCurrentMonthNumber, getMonthName } from "@/lib/utils";
import {
  CategoryDTO,
  ExpenseDTO,
  getCategoriesAndSubcategories,
} from "@/services/expenses";

// import { fetchExpensesByMonth } from "@/services/expenses";

export default async function ExpensesPage() {
  const currentMonth = getCurrentMonthNumber();

  // console.log(currentMonth);
  // const { expenses } = await fetchExpensesByMonth(currentMonth);
  const { categories } = await getCategoriesAndSubcategories();

  const demoExpenses: ExpenseDTO[] = [
    {
      expense_id: 1,
      expense_date: "2022-01-01",
      category_id: "1",
      subcategory_id: "1",
      amount: 100,
      notes: "Bought some fruits and vegetables",
    },
    {
      expense_id: 2,
      category_id: "2",
      subcategory_id: "2",
      amount: 200,
      expense_date: "2022-01-02",
      notes: "Had dinner with friends",
    },
    {
      expense_id: 3,
      category_id: "3",
      subcategory_id: "3",
      amount: 50,
      expense_date: "2022-01-03",
      notes: "Took a bus to work",
    },
  ];

  const demoCategories: CategoryDTO[] = [
    {
      id: 1,
      name: "Food",
      subcategories: [
        { id: 1, name: "Groceries" },
        { id: 2, name: "Dining Out" },
      ],
    },
    {
      id: 2,
      name: "Transportation",
      subcategories: [
        { id: 3, name: "Public Transport" },
        { id: 4, name: "Gas" },
      ],
    },
    {
      id: 3,
      name: "Entertainment",
      subcategories: [
        { id: 5, name: "Movies" },
        { id: 6, name: "Concerts" },
      ],
    },
  ];

  const categoriesMonthGoals: { [key: string]: number } = {
    1: 500,
    2: 300,
    3: 200,
  };
  const currentMonthName = getMonthName(currentMonth);
  return (
    <div>
      <h2>{currentMonthName} Expenses</h2>
      <MonthTable
        expenses={demoExpenses}
        categories={categories}
        categoriesMonthGoals={categoriesMonthGoals}
      />
    </div>
  );
}
