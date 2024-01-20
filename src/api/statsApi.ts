import { StatusMark } from "../types/statuses";
import { $host } from "../core/url"
import { Response_T } from "./api.type";


// V2: в статусе в итоге должно быть: описание для подсказок при наведении, краткий статус, значение.
type getCountUnitsForAllStatuses_T = {
  status: StatusMark,
  value: number
}[];

export const getCountUnitsForAllStatuses = async (): Promise<getCountUnitsForAllStatuses_T> => {
  const response: Response_T<getCountUnitsForAllStatuses_T> = await $host.get(`api/stats`);

  return response.data;
}