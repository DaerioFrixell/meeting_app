import { Status } from "./statuses"
import { Links } from "./links"
import { TypeMeet } from "./typeMeet"

export type Unit = {
  id: number
  number: string | number
  status: Status
  name: string
  surname: string
  birth: Date | string
  wasOld: string | number
  dateMeet: Date | string
  link: Omit<Links, "title">
  createAt: Date | string
  updateAt: Date | string
  whereMeet: string
  typeMeet: TypeMeet
}

export type CreateUnit = Omit<Unit,
  "id"
  | "number"
  | "wasOld"
  | "createAt"
  | "updateAp"
>

export type UpdateUnit = Omit<Unit,
  "number"
  | "createAt"
  | "updateAt"
  | "wasOld"
  | "createAt"
  | "updateAt"
>
