import "./titleCenter.scss";
import { FC } from 'react';

export type TitleCenter_T = {
  title: string
}

export const TitleCenter: FC<TitleCenter_T> = ({ title }) => {
  return (
    <p className="title-center">
      {title}
    </p>)
}
