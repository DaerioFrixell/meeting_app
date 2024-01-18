import { AxiosHeaders } from "axios"

export type Response_T<T> = {
  config: {},
  data: T,
  headers: AxiosHeaders,
  request: XMLHttpRequest,
  status: number,
  statusText: string
}