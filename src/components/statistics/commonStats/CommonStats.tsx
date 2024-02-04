import { FC, useContext, useEffect } from 'react';
import {
  getOfflineStatistics,
  getOnlineStatistics,
} from '../../../model/user/user.selectors';
import { CommonStatsTemplate } from './CommonStats.template';
import { useAction } from '../../../hooks/useAction';
import { useSelector } from 'react-redux';
import { ChangePeriodContext } from '../../../core/Contexts';


export const CommonStats: FC = () => {
  const { getStatisticByYearRequest } = useAction();
  const { selectValue } = useContext(ChangePeriodContext);

  useEffect(() => {
    getStatisticByYearRequest(selectValue);
  }, [selectValue]) // eslint-disable-line react-hooks/exhaustive-deps

  // 87TODO: суммировать к статусас C, CA e.t.c если есть их продвижения.
  const countOnlineUnits = useSelector(getOnlineStatistics);
  const countOfflineUnits = useSelector(getOfflineStatistics);

  return (
    < >
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
