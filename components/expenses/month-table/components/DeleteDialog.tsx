"use client";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type DeleteDialogProps = {
  setIsDialogOpen: (open: boolean) => void;
};

export function DeleteDialog({ setIsDialogOpen }: DeleteDialogProps) {
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Delete</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you&#39;re done.
        </DialogDescription>
      </DialogHeader>

      <DialogFooter>
        <Button
          variant="destructive"
          //onClick={() => console.log("Deleted")}
        >
          Delete
        </Button>
        <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
          Cancel
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}
