import "./button.scss";
import { ButtonHTMLAttributes, FC } from 'react';

export type Button_T = {
  buttonsName: string

  className?: string | boolean
  disabled?: boolean
  type?: ButtonHTMLAttributes<any>["type"]
  onClick?: () => void
}

export const Button: FC<Button_T> = ({
  buttonsName,
  onClick,

  className,
  type = "button",
}) => {
  return (
    <button
      className={`default-button ${className}`}
      type={type}
      onClick={onClick}
    >
      {buttonsName}
    </button>
  )
}