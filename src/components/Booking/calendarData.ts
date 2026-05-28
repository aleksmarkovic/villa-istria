import { Lang } from "../../context/LangContext";

function range(y: number, m: number, d1: number, d2: number) {
  const out: string[] = [];
  for (let d = d1; d <= d2; d++)
    out.push(
      `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`,
    );
  return out;
}

export const BOOKED = new Set([
  ...range(2026, 5, 15, 28),
  ...range(2026, 6, 5, 19),
  ...range(2026, 7, 1, 16),
  ...range(2026, 8, 2, 12),
]);

export function fmt(y: number, m: number, d: number) {
  return `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}

export function daysInMonth(y: number, m: number) {
  return new Date(y, m + 1, 0).getDate();
}

export function firstDay(y: number, m: number) {
  return new Date(y, m, 1).getDay();
}

const MONTHS_EN = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const MONTHS_HR = [
  "Siječanj",
  "Veljača",
  "Ožujak",
  "Travanj",
  "Svibanj",
  "Lipanj",
  "Srpanj",
  "Kolovoz",
  "Rujan",
  "Listopad",
  "Studeni",
  "Prosinac",
];

const DAYS_EN = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const DAYS_HR = ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"];

export const months = (lang: Lang) => (lang === "hr" ? MONTHS_HR : MONTHS_EN);
export const days = (lang: Lang) => (lang === "hr" ? DAYS_HR : DAYS_EN);
