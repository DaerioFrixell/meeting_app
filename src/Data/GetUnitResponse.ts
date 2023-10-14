export type GetUnitResponse = {
  id: number
  status: string | null
  name: string
  birth: string
  surname: string
  wasOld: number
  dateMeet: string
  link: string
  vk: string | null
  inst: string | null
  telegram: string | null
  whereMeet: string
  typeMeet: 'live' | 'ether'
}
