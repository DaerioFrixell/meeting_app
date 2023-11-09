export type UnitV1 = {
  id: number | string;
  status: string;
  name: string;
  surname?: string;
  birth: Date;
  dateMeet?: Date;
  link: string;
  whereMeet: string;
  typeMeet: 'live' | 'ether';
};

export type UnitV1Requset = Omit<UnitV1,
  "id"
  & "birth"
>;

export type UnitV1Respons = {};

export type CreateUnit = {
  name: string;
  surname: string;
  birth: string;
  dateMeet: string;
  link: string;
  whereMeet: string;
  typeMeet: string;
};

export type UpdateUnit = {
  id: number;
  status: string | null;
  name: string;
  surname: string;
  wasOld: number;
  dateMeet: string;
  link: string;
  vk: string | null;
  inst: string | null;
  telegram: string | null;
  whereMeet: string;
  typeMeet: 'live' | 'ether';
};
