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

  createAt: Date | string;
  updateAt: Date | string;
};

export type UnitCreateV1 = Omit<UnitV1,
  'id'
  | "wasOld"
  | "createAt"
  | "updateAt"
>;

export type UnitUpdateV1 = Omit<UnitV1,
  "wasOld"
  | "createAt"
  | "updateAt"
>;