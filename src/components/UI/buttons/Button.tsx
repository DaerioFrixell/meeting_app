import "./button.scss";
import { FC } from 'react';

export type Button_T = {
  title: string;

  className?: string;
  type?: any;
};

/* DO: перенести стили для button и использовать везде текущий компонент, а не стандартный button */
export const Button: FC<Button_T> = ({
  title,

  className,
  type }) => {
  return (
    <button
      className={`default-button ${className}`}
      type={type}
    >
      {title}
    </button>

  );
};