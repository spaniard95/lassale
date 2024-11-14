export default async function ExpensesPage() {
  let data = await fetch(`${process.env.B4F_URL}/expenses/all`);
  let data2 = await data.json();

  return (
    <div>
      <h1>Expenses</h1>
      <ul>
        {data2.map((item: any) => (
          <li key={item.id}>
            {item.category_name} -{item.subcategory_name} - {item.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}
