import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ExpensesCardsProps {
  totalSpent: number;
  totalGoal: number;
  isLoading?: boolean;
}

export function ExpensesCards({
  totalSpent,
  totalGoal,
  isLoading,
}: ExpensesCardsProps) {
  const percentage = totalGoal > 0 ? (totalSpent / totalGoal) * 100 : 0;
  const isOverBudget = percentage > 100;
  const remaining = totalGoal - totalSpent;

  if (isLoading) {
    // extract it to a separate component if needed
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Card className="w-full max-w-sm">
          <CardHeader className="pb-2 pt-4">
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-6 w-32" />
            <CardAction>
              <Skeleton className="h-5 w-12" />
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-0.5 text-xs pt-0 pb-4">
            <Skeleton className="h-3 w-24" />
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="pb-0 pt-1">
          <CardDescription className="text-xs">
            Monthly Spending
          </CardDescription>
          <CardTitle className="text-lg font-semibold tabular-nums">
            ${totalSpent.toFixed(2)} / ${totalGoal.toFixed(2)}
          </CardTitle>
          <CardAction>
            <Badge
              variant={isOverBudget ? "destructive" : "outline"}
              className="text-xs"
            >
              {isOverBudget ? (
                <IconTrendingUp className="size-3" />
              ) : (
                <IconTrendingDown className="size-3" />
              )}
              {percentage.toFixed(1)}%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-0.5 text-xs pt-0 pb-1">
          <div className="line-clamp-1 flex gap-1 font-medium">
            {isOverBudget ? (
              <>Over budget by ${Math.abs(remaining).toFixed(2)}</>
            ) : (
              <>Remaining: ${remaining.toFixed(2)}</>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
