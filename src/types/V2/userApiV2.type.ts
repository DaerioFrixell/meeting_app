import { StatusMark } from "../statuses";

export type StatisticByYear_T = {
  status: StatusMark,
  value: number
}

export type getStatisticByYear_T = {
  offlineStat: StatisticByYear_T[]
  onlineStat: StatisticByYear_T[]
};