import { $host } from "../core/url"
import { AddUnitType } from "../model/unitTypes"

export const createUnit = async (unit: AddUnitType) => {

  const { data } = await $host.post("api/unit", unit)
  return data
}

export const getUnits = async () => {
  const { data } = await $host.get("api/unit")
  return data
}

// export const getLinks = async () => {
//   const { data } = await $host.get("api/unit")
//   return data
// }