import { StatusMark_E } from "../statuses.type";

export type StatisticByYear_T = {
  status: StatusMark_E,
  value: number
}

export type getStatisticByYear_T = {
  offlineStat: StatisticByYear_T[]
  onlineStat: StatisticByYear_T[]
};