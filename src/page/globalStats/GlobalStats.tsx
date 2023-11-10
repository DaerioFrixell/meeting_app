import "./globalStats.scss";
import { FC } from 'react';
import { MainTitle } from '../../components/UI/mainTitle/MainTitle';
import { CommonInfo } from '../../components/statistics/commonInfo/CommonInfo';
import { CommonStats } from '../../components/statistics/commonStats/CommonStats';

export const GlobalStats: FC = () => {
  return (
    <section className="global-stats">
      <MainTitle title="main stats" />

      <CommonInfo />

      <CommonStats />
    </section>
  );
};
