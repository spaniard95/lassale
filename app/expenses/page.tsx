import { GetExpensesResponse } from "./types";

export default async function ExpensesPage() {
  const data = await fetch(`${process.env.B4F_URL}/expenses/all`);
  const expenses = (await data.json()) as GetExpensesResponse;

  return (
    <div>
      <h1>Expenses</h1>
      <ul>
        {expenses.map((item: any) => (
          <li key={item.id}>
            {item.category_name} -{item.subcategory_name} - {item.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}
