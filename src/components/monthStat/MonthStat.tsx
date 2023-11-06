import './monthStat.scss';
import { FC } from 'react';
import { allMonthes } from '../../staticData/date';
import { MonthStatsData, MonthStatsTitle } from './type';
import { zeroArray_12 } from '../../staticData/others';

type MonthStats_T = {
  asd: any
}
export const MonthStats: FC<MonthStats_T> = ({ asd }) => {
  const data: MonthStatsData = [
    {
      title: MonthStatsTitle.MONTH,
      data: allMonthes,
    },
    {
      title: MonthStatsTitle.ALL,
      data: zeroArray_12,
    },
    {
      title: MonthStatsTitle.NEGATIVE,
      data: zeroArray_12,
    },
    {
      title: MonthStatsTitle.POSITIVE,
      data: zeroArray_12,
    },
  ];

  return (
    <div className="month">
      <p className='month-inner__element'>год: 0000</p>
      <p className='month-inner__element'>всего: 0000</p>
      <div className="month-inner">
        {data.map(d => (
          <div className="">
            <p className="month-inner__title">
              {d.title}
            </p>

            {d.data?.map(newD =>
              <p className='month-inner__element'>{newD ? newD : 0}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
