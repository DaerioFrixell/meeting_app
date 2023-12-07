import "./input.scss";
import { FC } from 'react';

export type Input_T = {
  className?: string;
  type?: any;
  placeholder?: string;
};

/* DO: перенести стили для input и использовать везде текущий компонент, а не стандартный input */
export const Input: FC<Input_T> = ({
  className,
  placeholder,
  type }) => {
  return (
    <input
      className={`default-input ${className}`}
      placeholder={placeholder}
      type={type}
    />
  );
};