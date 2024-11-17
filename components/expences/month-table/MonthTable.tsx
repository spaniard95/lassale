import { ExpenseDTO } from "@/app/expenses/types";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type MonthTableProps = {
  expenses: ExpenseDTO[];
};

export function MonthTable({ expenses }: MonthTableProps) {
  return (
    <Table>
      <TableCaption>Current month Expenses</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Category</TableHead>
          <TableHead>Subcategories</TableHead>
          <TableHead>Goal</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {expenses.map((expense) => (
          <TableRow key={expense.expense_id}>
            <TableCell>{expense.category_name}</TableCell>
            <TableCell>{expense.subcategory_name}</TableCell>
            <TableCell>{expense.amount}</TableCell>
            <TableCell className="text-right">{expense.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
