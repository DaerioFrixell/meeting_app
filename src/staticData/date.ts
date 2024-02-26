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

// TO DO: сделать функцию, которая будет брать текущий год и от него добавлять n-ое количество предыдущих лет до указанного минимального года, чтобы каждый год не добавлять новый год в список.
export const allYears: (SelectPeriod_T)[] = [
  SelectPeriod_E.ALL_TIME,
  2024,
  2023,
  2022,
  2021,
];

// TO DO: сделать функцию, которая будет динамически различать високосный год и обычный.
export const daysInYear: number = 365;

export const monthsInYear: number = 12;

export const period: string[] = [
  staticData.statistics.global.pDay,
  staticData.statistics.global.pMonth
];