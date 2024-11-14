import { GetExpensesResponse } from "./types";

export default async function ExpensesPage() {
  let data = await fetch(`${process.env.B4F_URL}/expenses/all`);
  let expenses = (await data.json()) as GetExpensesResponse;

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
