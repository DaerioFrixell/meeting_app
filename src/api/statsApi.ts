import { $host } from "../core/url"

export const getCountUnitsForAllStatuses = async (): Promise<any> => {
  const { data } = await $host.get(`api/stats`)
  return data
}