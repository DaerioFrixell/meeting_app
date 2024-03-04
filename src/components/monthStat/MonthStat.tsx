import './monthStat.scss';
import { FC } from 'react';
import { allMonthes } from '../../staticData/date';
import { MonthStatsData, MonthStatsTitle_E } from './monthStat.type';
import { zeroArray_12 } from '../../staticData/others';


export const MonthStats: FC = () => {
  const data: MonthStatsData = [
    {
      title: MonthStatsTitle_E.MONTH,
      data: allMonthes,
    },
    {
      title: MonthStatsTitle_E.ALL,
      data: zeroArray_12,
    },
    {
      title: MonthStatsTitle_E.NEGATIVE,
      data: zeroArray_12,
    },
    {
      title: MonthStatsTitle_E.POSITIVE,
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
