import "./titleCenter.scss";
import { FC } from 'react';


export type TitleCenter_T = {
  title: string

  className?: string
}

export const TitleCenter: FC<TitleCenter_T> = ({ title, className }) => {
  return (
    <p className={`title-center ${className}`}>
      {title}
    </p>)
}
