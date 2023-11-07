import { Status } from "./statuses"
import { Links } from "./links"
import { TypeMeet } from "./typeMeet"

export type UnitV2 = {
  id: number
  number: string | number
  status: Status
  name: string
  surname: string
  birth: Date
  wasOld: string | number
  dateMeet: Date
  link: Omit<Links, "title">
  createAt: Date
  updateAt: Date
  whereMeet: string
  typeMeet: TypeMeet
}

export type CreateUnit = Omit<UnitV2,
  "id"
  | "number"
  | "wasOld"
  | "createAt"
  | "updateAp"
>

export type UpdateUnit = Omit<UnitV2,
  "number"
  | "createAt"
  | "updateAt"
  | "wasOld"
  | "createAt"
  | "updateAt"
>
