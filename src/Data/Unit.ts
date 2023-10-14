export type CreateUnit = {
  name: string
  surname: string
  birth: string
  dateMeet: string
  link: string
  whereMeet: string
  typeMeet: string
}

export type UpdateUnit = {
  id: number
  status: string | null
  name: string
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
