import { CategoryDTO, ExpenseDTO } from "@/services/expenses";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

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

import { DropdownKebab } from "./components/DropdownKebab";

type MonthTableProps = {
  expenses?: ExpenseDTO[];
  categories?: CategoryDTO[];
  categoriesMonthGoals?: { [key: string]: number };
  isLoading?: boolean;
};

export function MonthTable({
  expenses = [],
  categories = [],
  categoriesMonthGoals = {},
  isLoading = false,
}: MonthTableProps) {
  const categoriesAmounts = getCategoriesAmounts(expenses);

  const goalsTotalAmount = getGoalsTotalAmount(categoriesMonthGoals);
  const categoriesTotalAmount = getCategoriesTotalAmount(categoriesAmounts);

  // extract it to a separate component if needed
  if (isLoading) {
    return (
      <div>
        <div className="flex justify-end mb-4">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            Add Category
          </Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Category</TableHead>
              <TableHead>Subcategories</TableHead>
              <TableHead>Goal</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 3 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Skeleton className="h-4 w-20" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-32" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-16" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-16" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-8" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell>
                <Skeleton className="h-4 w-16" />
              </TableCell>
              <TableCell colSpan={2}>
                <Skeleton className="h-4 w-16" />
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-end mb-4">
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          Add Category
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Category</TableHead>
            <TableHead>Subcategories</TableHead>
            <TableHead>Goal</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead></TableHead>
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
              <TableCell>
                <DropdownKebab payment={{ id: id.toString() }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell>{goalsTotalAmount}</TableCell>
            <TableCell colSpan={2}>{categoriesTotalAmount}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
