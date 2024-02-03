import "./input.scss";
import { Input_T } from "./Input.type";
import { FC } from "react";


export const Input: FC<Input_T> = ({
  className,
  id,
  placeholder,
  type = "text",
}) => {
  return (
    <input
      id={id}
      className={`default-input ${className}`}
      placeholder={placeholder}
      type={type}
    />
  )
}