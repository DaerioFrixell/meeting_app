import { SelectPeriod_E, SelectPeriod_T } from "../types/V2/selectPeriodV2.type";
import { staticData } from "./staticData";

export const allMonthes: string[] = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'june',
  'july',
  'aug',
  'sept',
  'oct',
  'nov',
  'dec',
];

export const allYears: (SelectPeriod_T)[] = [
  SelectPeriod_E.ALL_TIME,
  2024,
  2023,
  2022,
  2021,
];

export const daysInYear: number = 365;

export const monthsInYear: number = 12;

export const period: string[] = [
  staticData.statistics.global.pDay,
  staticData.statistics.global.pMonth
];
