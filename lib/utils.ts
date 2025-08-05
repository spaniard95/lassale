import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCurrentMonth() {
  return new Date().toLocaleString("default", { month: "long" });
}

export const getCurrentMonthNumber = () => new Date().getMonth() + 1;

export const getCurrentYear = () => new Date().getFullYear();

export function getMonthName(month: number) {
  return new Date(0, month - 1).toLocaleString("en-US", { month: "long" });
}
