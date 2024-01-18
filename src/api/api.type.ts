import { AxiosHeaders } from "axios"
import { UnitV1 } from "../Data/UnitV1"

export type Response_T<T> = {
  config: {},
  data: T,
  headers: AxiosHeaders,
  request: XMLHttpRequest,
  status: number,
  statusText: string
}