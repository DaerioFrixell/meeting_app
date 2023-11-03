export enum MonthStatsTitle {
  MONTH = 'month',
  ALL = 'all',
  NEGATIVE = 'negative',
  POSITIVE = 'positive',
}

export type MonthStatsData = [
  month: {
    title: MonthStatsTitle.MONTH,
    data: string[]
  },
  all: {
    title: MonthStatsTitle.ALL,
    data: any[]
  },
  negative: {
    title: MonthStatsTitle.NEGATIVE,
    data: any[]
  },
  positive: {
    title: MonthStatsTitle.POSITIVE,
    data: any[]
  }
]