"use client";
import { ColumnDef } from "@tanstack/react-table";

import { ColumnHeader, ColumnSettings } from "./components";
import { Badge } from "@/components/ui/badge";
import { ExpenseDTO } from "@/services/expenses";

export type EnhancedColumnDef<TData> = ColumnDef<TData> & {
  label?: string;
  options?: { label: string; value: string }[];
  accessorKey?: string;
};

const expencesColumns: EnhancedColumnDef<ExpenseDTO>[] = [
  {
    accessorKey: "category_name",
    label: "Category",
    header: "Category",
    options: [
      { label: "Food", value: "food" },
      { label: "Transport", value: "transport" },
      { label: "Entertainment", value: "entertainment" },
    ],
    cell: ({ row }) => row.getValue("category_name"),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  //   {
  //     accessorKey: "subCategory",
  //     label: "Sub Category",
  //     header: "Sub Category",
  //     options: [
  //       { label: "Groceries", value: "groceries" },
  //       { label: "Restaurants", value: "restaurants" },
  //       { label: "Fast Food", value: "fast-food" },
  //     ],
  //     cell: ({ row }) => (
  //       <Badge variant="default">{row.getValue("subCategory")}</Badge>
  //     ),
  //     filterFn: (row, id, value) => {
  //       return value.includes(row.getValue(id));
  //     },
  //   },
  {
    accessorKey: "amount",
    label: "Amount",
    header: ({ column }) => <ColumnHeader column={column} title="Amount" />,
    cell: ({ row }) => <div className="pl-4">{row.getValue("amount")}</div>,
  },
  {
    id: "actions",
    cell: () => {
      // const payment = row.original;

      return <ColumnSettings />;
    },
  },
];

// const lessonsColumns: EnhancedColumnDef<any>[] = [
//   {
//     accessorKey: "title",
//     label: "Title",
//     header: "Title",
//   },
//   {
//     accessorKey: "category",
//     label: "Category",
//     header: "Category",
//     options: [
//       { label: "Math", value: "math" },
//       { label: "Science", value: "science" },
//       { label: "Biology", value: "biology" },
//     ],
//     cell: ({ row }) => (
//       <Badge variant="default">{row.getValue("category")}</Badge>
//     ),
//     filterFn: (row, id, value) => {
//       return value.includes(row.getValue(id));
//     },
//   },
//   {
//     accessorKey: "grade",
//     label: "Grade",
//     header: ({ column }) => <ColumnHeader column={column} title="Grade" />,
//     cell: ({ row }) => <div className="pl-4">{row.getValue("grade")}</div>,
//   },
//   {
//     id: "actions",
//     cell: () => {
//       // const payment = row.original;

//       return <ColumnSettings />;
//     },
//   },
// ];

// const teachersColumns: EnhancedColumnDef<any>[] = [
//   {
//     accessorKey: "name",
//     header: "Name",
//     label: "Name",
//   },
//   {
//     accessorKey: "email",
//     header: "Email",
//     label: "Email",
//   },
//   {
//     id: "actions",
//     cell: () => {
//       // const payment = row.original;

//       return <ColumnSettings />;
//     },
//   },
// ];

// const semesterColumns: EnhancedColumnDef<any>[] = [
//   {
//     accessorKey: "title",
//     header: "Title",
//     label: "Title",
//   },
//   {
//     accessorKey: "category",
//     header: "Category",
//     label: "Category",
//     options: [
//       { label: "Math", value: "math" },
//       { label: "Science", value: "science" },
//       { label: "English", value: "english" },
//     ],
//     cell: ({ row }) => (
//       <Badge variant="default">{row.getValue("category")}</Badge>
//     ),
//     filterFn: (row, id, value) => {
//       return value.includes(row.getValue(id));
//     },
//   },
//   {
//     accessorKey: "grade",
//     label: "Grade",
//     header: ({ column }) => <ColumnHeader column={column} title="Grade" />,
//     cell: ({ row }) => <div className="pl-4">{row.getValue("grade")}</div>,
//   },
//   {
//     accessorKey: "teacher",
//     label: "Teacher",
//     header: ({ column }) => <ColumnHeader column={column} title="Teacher" />,
//     cell: ({ row }) => <div className="pl-4">{row.getValue("teacher")}</div>,
//   },
//   {
//     id: "actions",
//     cell: () => {
//       // const payment = row.original;

//       return <ColumnSettings />;
//     },
//   },
// ];

export { expencesColumns };
