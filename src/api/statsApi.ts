import { StatusMark } from "../types/statuses";
import { $host } from "../core/url"
import { Response_T } from "./api.type";
import { getStatisticByYear_T } from "../model/user/user.type";

// TO DO: перенести <api/> в корень формирования api, <statiscit> в statApi. Либо как-то еще архитектурно зарефакторить, чтобы было просто менять урлы.
const api = 'api/';
const stat = 'statistic/';
const path = 'count-stat-unit';

const queryParam = '?year=';

// TO DO: вынести getStatisticByYear_T в другое место, т.к. используется на разных уровнях, а формируется для Model только.
export const getStatisticByYear = async (arg: number | "за всё время"): Promise<getStatisticByYear_T> => {
  // TO DO: должно браться из функции. Год или "за всё время"
  const urlPath = api + stat + path + queryParam

  const response: Response_T<getStatisticByYear_T> = await $host
    .get(urlPath + arg);

  console.log(response.data)

  return response.data;
}