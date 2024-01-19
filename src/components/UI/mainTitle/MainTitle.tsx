import "./mainTitle.scss";
import { FC } from 'react';


export type MainTitle_T = {
  title: string
}

export const MainTitle: FC<MainTitle_T> = ({ title }) => {
  return (
    <h2 className='main-title'>
      {title}
    </h2>)
}
