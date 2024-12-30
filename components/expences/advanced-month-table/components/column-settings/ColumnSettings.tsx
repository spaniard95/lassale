import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

import { MoreHorizontal } from "lucide-react";

const Button = ({ children }: { children: React.ReactNode }) => {
  return <button>{children}</button>;
};

const ColumnSettings = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
        // className="flex items-center justify-center h-8 w-8 p-0"
        >
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Lesson</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => console.log("click")}>
          Add to portfolio
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Statistics</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ColumnSettings;
