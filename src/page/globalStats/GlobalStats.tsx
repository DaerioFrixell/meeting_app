import { FC } from 'react';
import { MainTitle } from '../../components/UI/mainTitle/MainTitle';
import { ChangePeriod } from '../../components/statistics/changePeriod/ChangePeriod';
import { ScaleCompletly } from '../../components/statistics/scaleCompletly/scaleCompletly';
import { CommonInfo } from '../../components/statistics/commonInfo/CommonInfo';

export const GlobalStats: FC = () => {
  return (
    <section className="global-stats">
      <MainTitle title="main stats" />

      <CommonInfo />

      <ScaleCompletly />

      <ChangePeriod />
    </section>
  );
};
