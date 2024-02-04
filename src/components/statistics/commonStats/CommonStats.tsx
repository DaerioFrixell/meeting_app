import { FC, useEffect } from 'react';
import {
  getOfflineStatistics,
  getOnlineStatistics,
} from '../../../model/user/user.selectors';
import { CommonStatsTemplate } from './CommonStats.template';
import { useAction } from '../../../hooks/useAction';
import { useSelector } from 'react-redux';


export const CommonStats: FC = () => {
  const { getStatisticByYearRequest } = useAction()

  useEffect(() => {
    getStatisticByYearRequest()
  }, [])

  const countOnlineUnits = useSelector(getOnlineStatistics);
  const countOfflineUnits = useSelector(getOfflineStatistics);

  console.log("onl: ", countOnlineUnits)
  console.log("ofl: ", countOfflineUnits)

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
