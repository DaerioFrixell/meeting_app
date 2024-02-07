import { $host } from "../core/url"
import { SelectPeriod_T } from "../types/V2/selectPeriodV2.type";
import { Response_T } from "./api.type"

// TO DO: перенести <api/> в корень формирования api, <statiscit> в statApi. Либо как-то еще архитектурно зарефакторить, чтобы было просто менять урлы.
const api = 'api/';
const stat = 'statistic/';
const path = 'count-unit';

const queryParam = '?year=';

export const getUnitsCountRequest = async (period: SelectPeriod_T): Promise<number> => {
  const urlPath = api + stat + path + queryParam;

  const response: Response_T<number> = await $host.get(urlPath + period);

  return response.data;
}