import "./labelField.scss";
import { FC } from "react";
import { LabelField_T } from "./labelField.type";


export const LabelField: FC<LabelField_T> = ({
  label,
  className = '',
}) => {
  return (
    <label
      className={`label-field ${className}`}
      htmlFor={label}>
      {label}
    </label>
  )
}