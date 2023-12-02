import { FC, useEffect } from 'react';
import {
  getCountOfflineUnitsSelector,
  getCountOnlineUnitsSelector,
  getStatisticsSelector,
} from '../../../model/user/user.selectors';
import { CommonStatsTemplate } from './CommonStats.template';
import { useAction } from '../../../hooks/useAction';
import { useSelector } from 'react-redux';

export const CommonStats: FC = () => {
  const { getCountUnitsForAllStatusesRequest } = useAction()
  const statistics = useSelector(getStatisticsSelector)

  useEffect(() => {
    getCountUnitsForAllStatusesRequest()
  }, [])
  const countOnlineUnits = statistics
  const countOfflineUnits = statistics

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
