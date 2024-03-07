import "./labelField.scss";
import { FC } from "react";
import { LabelField_T } from "./labelField.type";
import classNames from "classnames";

const cl = classNames;


export const LabelField: FC<LabelField_T> = ({
  label,
  className = '',
}) => {
  return (
    <label
      className={cl("label-field", className)}
      htmlFor={label}>
      {label}
    </label>
  )
}