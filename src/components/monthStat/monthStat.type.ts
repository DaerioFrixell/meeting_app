export enum MonthStatsTitle_E {
  MONTH = 'month',
  ALL = 'all',
  NEGATIVE = 'negative',
  POSITIVE = 'positive',
};

export type MonthStatsData = [
  {
    title: MonthStatsTitle_E.MONTH,
    data: string[]
  },
  {
    title: MonthStatsTitle_E.ALL,
    data: number[]
  },
  {
    title: MonthStatsTitle_E.NEGATIVE,
    data: number[]
  },
  {
    title: MonthStatsTitle_E.POSITIVE,
    data: number[]
  },
];