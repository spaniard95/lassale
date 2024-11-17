import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCurrentMonth() {
  return new Date().toLocaleString("default", { month: "long" });
}

export const getCurrentMonthNumber = () => new Date().getMonth();

export function getMonthName(month: number) {
  return new Date(0, month).toLocaleString("default", { month: "long" });
}
