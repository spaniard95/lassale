"use client";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { DeleteDialog } from "./DeleteDialog";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

interface DropdownKebabProps {
  payment: { id: string };
}

export function DropdownKebab({}: DropdownKebabProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal /> {/* This is the kebab button */}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem>
            <DialogTrigger asChild>
              <span className="cursor-pointer ">Delete Profile</span>
            </DialogTrigger>
          </DropdownMenuItem>
          <DropdownMenuItem>Delete Subcategory</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
          // onClick={() => console.error("Expenses not implemented")}
          >
            View expenses
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Delete Dialog Content */}
      <DeleteDialog setIsDialogOpen={setIsDialogOpen} />
    </Dialog>
  );
}
