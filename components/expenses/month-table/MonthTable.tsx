import { ExpenseDTO } from "@/services/expenses";
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
import { getCurrentMonthNumber, getMonthName } from "@/lib/utils";

type MonthTableProps = {
  expenses: ExpenseDTO[];
};

export function MonthTable({ expenses }: MonthTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Category</TableHead>
          <TableHead>Subcategories</TableHead>
          <TableHead>Goal</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {expenses.map(
          ({ amount, category_name, expense_id, subcategory_name }) => (
            <TableRow key={expense_id}>
              <TableCell>{category_name}</TableCell>
              <TableCell>{subcategory_name}</TableCell>
              <TableCell>{amount}</TableCell>
              <TableCell className="text-right">{amount}</TableCell>
            </TableRow>
          )
        )}
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
