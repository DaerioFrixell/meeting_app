export type UnitV1 = {
  id: number
  status: string | null
  name: string
  surname: string
  birth: Date | string
  wasOld: number
  dateMeet: string
  link: string
  whereMeet: string
  typeMeet: 'live' | 'ether'

  createAt: Date | string
  updateAt: Date | string
}

export type UnitRequestV1 = Omit<UnitV1,
  'id'
  | "wasOld"
  | "createAt"
  | "updateAt"
>;

export type UnitResponseV1 = UnitV1[];
export type UnitCreateV1 = UnitRequestV1

export type UnitUpdateV1 = UnitV1

// export type CreateUnit = {
//   name: string
//   surname: string
//   birth: string
//   dateMeet: string
//   link: string
//   whereMeet: string
//   typeMeet: string
// }

// export type UpdateUnit = {
//   id: number
//   status: string | null
//   name: string
//   surname: string
//   birth: Date | string
//   wasOld: number
//   dateMeet: string
//   link: string
//   whereMeet: string
//   typeMeet: 'live' | 'ether'

//   createAt: Date | string
//   updateAt: Date | string
// }