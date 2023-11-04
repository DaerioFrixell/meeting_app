export enum MonthStatsTitle {
  MONTH = 'month',
  ALL = 'all',
  NEGATIVE = 'negative',
  POSITIVE = 'positive',
};

export type MonthStatsData = [
  month: {
    title: MonthStatsTitle.MONTH,
    data: string[]
  },
  all: {
    title: MonthStatsTitle.ALL,
    data: number[]
  },
  negative: {
    title: MonthStatsTitle.NEGATIVE,
    data: number[]
  },
  positive: {
    title: MonthStatsTitle.POSITIVE,
    data: number[]
  },
];