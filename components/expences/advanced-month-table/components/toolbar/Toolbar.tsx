"use client";

import { XCircle } from "lucide-react";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { FacetedFilter, ViewOptions } from "./components";
import { EnhancedColumnDef } from "../../columns";

interface ToolbarProps<TData> {
  table: Table<TData>;
  columns?: EnhancedColumnDef<TData>[];
}

function Toolbar<TData>({ table, columns = [] }: ToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex flex-1 items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter by title..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />

        {columns.map(
          ({ label, accessorKey, options = [] }) =>
            options.length > 0 && (
              <FacetedFilter
                key={`id-item-${accessorKey}`}
                column={table.getColumn(accessorKey ?? "")}
                title={label}
                options={options}
              />
            )
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <XCircle className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <ViewOptions table={table} />
    </div>
  );
}

export default Toolbar;
