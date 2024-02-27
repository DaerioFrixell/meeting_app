import { apiV1, endpoints, path, queryParam } from "../core/api.setting";
import { $host } from "../core/api";
import { SelectPeriod_T } from "../types/V2/selectPeriodV2.type";
import { Response_T } from "../core/api.type";
import { getStatisticByYear_T } from "../types/V2/userApiV2.type";


/**
 * Запрос на получение количества Unit за выбранный период или за всё время.
 */
export const getUnitsCountRequest = async (period: SelectPeriod_T): Promise<number> => {
  const urlPath = apiV1 + endpoints.statistic + path.statistic.getUnitCount;

  const response: Response_T<number> = await $host
    .get(urlPath + queryParam.statistic.year + period);

  return response.data;
}

/**
 * Запрос на получение статистики за выбранный период или за всё время.
 */
export const getStatisticByYear = async (period: SelectPeriod_T): Promise<getStatisticByYear_T> => {
  const urlPath = apiV1 + endpoints.statistic + path.statistic.getStat;

  const response: Response_T<getStatisticByYear_T> = await $host
    .get(urlPath + queryParam.statistic.year + period);

  return response.data;
}