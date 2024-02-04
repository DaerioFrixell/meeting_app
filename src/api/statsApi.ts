import { $host } from "../core/url"
import { Response_T } from "./api.type";
import { SelectPeriod_T } from "../types/V2/selectPeriodV2.type";
import { getStatisticByYear_T } from "../types/V2/userApiV2.type";

// TO DO: перенести <api/> в корень формирования api, <statiscit> в statApi. Либо как-то еще архитектурно зарефакторить, чтобы было просто менять урлы.
const api = 'api/';
const stat = 'statistic/';
const path = 'count-stat-unit';

const queryParam = '?year=';

// TO DO: это вызывается в User.Action, но Api для Statistic? Перенести в ./user.api.ts
export const getStatisticByYear = async (arg: SelectPeriod_T): Promise<getStatisticByYear_T> => {
  const urlPath = api + stat + path + queryParam;

  const response: Response_T<getStatisticByYear_T> = await $host
    .get(urlPath + arg);

  return response.data;
}