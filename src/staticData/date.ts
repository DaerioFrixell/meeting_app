import { SelectPeriod_E, SelectPeriod_T } from "../types/V2/selectPeriodV2.type";
import { staticData } from "./staticData";

/**
 * Краткое название месяцев.
 */
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

/**
 * Инициализация пустого массива, в котором будут храниться периоды, за который отображат
 * статистику
 */
export const allYears: (SelectPeriod_T)[] = [];

/**
 * Создаёт возможные для выбора периоды времени для показа статистики.
 */
const genericYears = (): void => {
  const currentYear = new Date().getFullYear();

  // TO DO: Минимальная дата должна браться из дат в БД, т.к можно добавить любую дату встречи при создании.
  const minYear = 2021;

  let i = currentYear;

  while (i >= minYear) {
    allYears.push(i)
    i--
  }

  allYears.push(SelectPeriod_E.ALL_TIME)
}

genericYears();

// TO DO: сделать функцию, которая будет динамически различать високосный год и обычный.
export const daysInYear: number = 365;

export const monthsInYear: number = 12;

export const period: string[] = [
  staticData.statistics.global.pDay,
  staticData.statistics.global.pMonth
];