import { $host } from "../core/url"
import { Response_T } from "./api.type"


export const getUnitsCountRequest = async (): Promise<number> => {
  const response: Response_T<number> = await $host.get(`api/unit/count`);

  return response.data;
}