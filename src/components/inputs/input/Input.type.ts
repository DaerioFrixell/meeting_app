import { HTMLAttributes, InputHTMLAttributes } from "react";


export type Input_T = {
  className?: string
  id?: HTMLAttributes<HTMLInputElement>["id"]
  placeholder?: string
  type?: InputHTMLAttributes<HTMLInputElement>["type"]
}