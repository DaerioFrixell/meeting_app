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
  id: any
  status: string | null
  name: string
  surname: string
  wasOld: number
  dateMeet: string
  link: string
  vk: string
  inst: string
  telegram: string
  whereMeet: string
  typeMeet: 'live' | 'ether'
}
