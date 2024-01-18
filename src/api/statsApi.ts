import { $host } from "../core/url"

// TO DO: типизировать промис и респонс по аналогии со всеми .api.ts.
export const getCountUnitsForAllStatuses = async (): Promise<any> => {
  const { data } = await $host.get(`api/stats`);

  return data;
}