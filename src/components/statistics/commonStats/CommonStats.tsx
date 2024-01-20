import { FC, useEffect } from 'react';
import {
  getStatisticsSelector,
} from '../../../model/user/user.selectors';
import { CommonStatsTemplate } from './CommonStats.template';
import { useAction } from '../../../hooks/useAction';
import { useSelector } from 'react-redux';


export const CommonStats: FC = () => {
  const { getCountUnitsForAllStatusesRequest } = useAction()

  useEffect(() => {
    getCountUnitsForAllStatusesRequest()
  }, [])

  const statistics = useSelector(getStatisticsSelector);
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
