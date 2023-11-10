import { FC } from 'react';
import {
  getCountOfflineUnitsSelector,
  getCountOnlineUnitsSelector,
} from '../../../model/user/user.selectors';
import { CommonStatsTemplate } from './CommonStats.template';

export const CommonStats: FC = () => {
  const countOnlineUnits = getCountOnlineUnitsSelector
  const countOfflineUnits = getCountOfflineUnitsSelector

  return (
    <>
      <CommonStatsTemplate
        statsType="online"
        valueArray={countOnlineUnits}
      />

      <CommonStatsTemplate
        statsType="offline"
        valueArray={countOfflineUnits}
      />
    </>
  );
};
