import { CategoryDTO, ExpenseDTO } from "@/services/expenses";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  getCategoriesAmounts,
  getCategoriesTotalAmount,
  getGoalsTotalAmount,
} from "@/services/expenses/utils";

type MonthTableProps = {
  expenses?: ExpenseDTO[];
  categories?: CategoryDTO[];
  categoriesMonthGoals?: { [key: string]: number };
};

export function MonthTable({
  expenses = [],
  categories = [],
  categoriesMonthGoals = {},
}: MonthTableProps) {
  const categoriesAmounts = getCategoriesAmounts(expenses);

  const goalsTotalAmount = getGoalsTotalAmount(categoriesMonthGoals);
  const categoriesTotalAmount = getCategoriesTotalAmount(categoriesAmounts);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Category</TableHead>
          <TableHead>Subcategories</TableHead>
          <TableHead>Goal</TableHead>
          <TableHead>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories.map(({ id, name, subcategories }) => (
          <TableRow key={id}>
            <TableCell>{name}</TableCell>
            <TableCell>
              {subcategories
                ?.map((subCategory) => subCategory?.name)
                .join(", ")}
            </TableCell>
            <TableCell>{categoriesMonthGoals?.[id] ?? "Not set"}</TableCell>
            <TableCell>{categoriesAmounts?.[id] ?? 0}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell>{goalsTotalAmount}</TableCell>
          <TableCell>{categoriesTotalAmount}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
