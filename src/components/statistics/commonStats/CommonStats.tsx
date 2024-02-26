import { FC, useContext, useEffect } from 'react';
import {
  getOfflineStatistics,
  getOnlineStatistics,
} from '../../../model/user/user.selectors';
import { CommonStatsTemplate } from './CommonStats.template';
import { useAction } from '../../../hooks/useAction';
import { useSelector } from 'react-redux';
import { ChangePeriodContext } from '../../../model/user/user.context';


export const CommonStats: FC = () => {
  /**
   * Запрос на получение статистики по выбранному году.
   */
  const { getStatisticByYearRequest } = useAction();

  /**
   * Текущий выбранный год.
   */
  const { selectValue } = useContext(ChangePeriodContext);

  /**
   * Отправляет запрос на получение статистики по выбранному году.
   */
  useEffect(() => {
    getStatisticByYearRequest(selectValue);
  }, [selectValue]) // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * Количество онлайн Units.
   */
  const countOnlineUnits = useSelector(getOnlineStatistics);

  /**
   * Количество офлайн Units.
   */
  const countOfflineUnits = useSelector(getOfflineStatistics);

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
