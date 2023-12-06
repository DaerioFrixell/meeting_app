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
  typeMeet: 'offline' | 'online'

  createAt: Date | string
  updateAt: Date | string
}

type UnitRequestV1 = Omit<UnitV1,
  'id'
  | "wasOld"
  | "createAt"
  | "updateAt"
>;

export type UnitResponseV1 = UnitV1[];

export type UnitCreateV1 = UnitRequestV1

export type UnitUpdateV1 = Omit<UnitV1,
  "wasOld"
  | "createAt"
  | "updateAt"
>