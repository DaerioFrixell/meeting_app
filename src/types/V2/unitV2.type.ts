import { Status } from "../statuses"
import { LinkV2 } from "./linkV2.type"
import { TypeMeet } from "./typeMeetV2.type"

export type UnitV2 = {
  id: number
  number: string | number
  status: Status
  name: string
  surname: string
  birth: Date | string
  wasOld: string | number
  dateMeet: Date | string
  link: Omit<LinkV2, "title">
  createAt: Date | string
  updateAt: Date | string
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
