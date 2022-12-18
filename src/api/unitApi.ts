import { $host } from "../core/url"

type UnitType = {
  status: string | null,
  name: string,
  surname: string,
  wasOld: number,
  dateMeet: string,
  link: string,
  whereMeet: string,
  typeMeet: "live" | "ether"
}

export const createUnit = async (unit: UnitType) => {
  const { data } = await $host.post("api/unit", unit)
  return data
}

export const getUnits = async () => {
  const { data } = await $host.get("api/unit")
  return data
}