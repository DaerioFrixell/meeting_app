import { UnitRequestV1, UnitV1 } from '../Data/UnitV1'
import { $host } from '../core/url'

export const createUnit = async (unit: UnitRequestV1) => {
  const { data } = await $host.post('api/unit', unit)
  return data
}

export const getUnits = async (): Promise<UnitV1[]> => {
  const { data } = await $host.get('api/unit')
  return data
}

export const updateUnitRequest = async (updateUnit: any) => {
  const { data } = await $host.put('api/unit', updateUnit)
  return data
}

export const deleteUnit = async (id: number) => {
  return await $host.delete(`api/unit/${id}`)
}

// export const getLinks = async () => {
//   const { data } = await $host.get("api/unit")
//   return data
// }
