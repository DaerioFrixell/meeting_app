import { UnitCreateV1, UnitUpdateV1, UnitV1 } from '../Data/UnitV1'
import { $host } from '../core/url'

// запрашивать 10/205/ Units, а не несколько тысяч.
export const getUnits = async (search: any): Promise<UnitV1[]> => {
  const { data } = await $host.get(`api/unit?limit=${search.limit}&page=${search.page}`)
  return data
}

// с бэка массив придёт или только созданный объект?
export const createUnit = async (unit: UnitCreateV1) => {
  const { data } = await $host.post('api/unit', unit)
  return data
}

// с бэка весь объект придёт или только обновленные поля?
export const updateUnitRequest = async (updateUnit: UnitUpdateV1) => {
  const { data } = await $host.put('api/unit', updateUnit)
  return data
}

// что с бэка приходит?
export const deleteUnit = async (id: string) => {
  return await $host.delete(`api/unit/${id}`)
}