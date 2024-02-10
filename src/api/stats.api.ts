import { $host } from "../core/api"
import { Response_T } from "../core/api.type";
import { SelectPeriod_T } from "../types/V2/selectPeriodV2.type";
import { getStatisticByYear_T } from "../types/V2/userApiV2.type";
import { apiV1, endpoints, path, queryParam } from "../core/api.setting";


// TO DO: это вызывается в User.Action, но Api для Statistic? Перенести в ./user.api.ts
export const getStatisticByYear = async (arg: SelectPeriod_T): Promise<getStatisticByYear_T> => {
  const urlPath = apiV1 + endpoints.statistic + path.statistic.getStat;

  const response: Response_T<getStatisticByYear_T> = await $host.get(
    urlPath + queryParam.statistic.year + arg
  );

  return response.data;
}