import "./mainTitle.scss";
import { FC } from 'react';
import { MainTitle_T } from "./mainTitle.type";


export const MainTitle: FC<MainTitle_T> = ({ title }) => {
  return (
    <h2 className='main-title'>
      {title}
    </h2>)
}
