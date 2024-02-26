import { apiV1, endpoints, path, queryParam } from "../core/api.setting";
import { $host } from "../core/api";
import { SelectPeriod_T } from "../types/V2/selectPeriodV2.type";
import { Response_T } from "../core/api.type";


/**
 * Запрос на получение количества Unit за выбранный период или за всё время.
 */
export const getUnitsCountRequest = async (period: SelectPeriod_T): Promise<number> => {
  const urlPath = apiV1 + endpoints.statistic + path.statistic.getUnitCount;

  const response: Response_T<number> = await $host.get(
    urlPath + queryParam.statistic.year + period
  );

  return response.data;
}