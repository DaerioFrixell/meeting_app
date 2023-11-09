import './globalStat.scss';
import { MainTitle } from '../../components/UI/mainTitle/MainTitle';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavigatePath } from '../../core/routing/type';
import { StatusMark } from '../../Data/statuses';
import { mockCountUnitGoal, mockCurrentUnits, zeroArray_10 } from '../../staticData/others';
import { allYears, daysInYear, monthsInYear } from '../../staticData/date';

type asd = {
  period: string[],
  count: number[];
};


export const GlobalStats: FC = () => {
  const navigate = useNavigate();

  const statTitles: string[] = Object.keys(StatusMark);

  // слой абстракции для теста на моковых данных. Это будет из селекторов вытаскиваться, так что можно сразу там сделать.
  const countUits: number = mockCountUnitGoal;
  const currentUnits: number = mockCurrentUnits; 
  const year: number = allYears[3];

  const completlyPercent: number = Math.floor(currentUnits / countUits * 100);

  const goalObj: asd = {
    period: ['pDay', 'pMonth'],
    count: [
      countUits / daysInYear,
      countUits / monthsInYear,
    ]
  };

  const goToMonthStats = () => {
    navigate(NavigatePath.MONTHS_STAT);
  };

  // та же история с селекторами. Можно туда перенести сразу.
  const globalStatistics = [
    {
      statuses: statTitles,
      online: zeroArray_10,
      offline: zeroArray_10,
    }
  ];

  const statusesList = globalStatistics.map(glStat => glStat
    .statuses.map(status => (
      <p key={status}>{status}</p>
    )));

  return (
    <section className="global-stats">
      <MainTitle title="main stats" />

      <div className="global-stats__general-info">
        <p className="global-stats__general-info__goal">
          Goal: meeting {countUits} units per {year} year
        </p>

        <div className="gs-inner">
          <div className="gs-inner__calcucation">
            {goalObj.period.map(perion => <p>{perion}</p>)}
            {goalObj.count.map(count => <p>{Math.floor(count)}</p>)}
          </div>

          <div className="gs-inner__process">
            <div>
              <span>completly</span>
              <span> {completlyPercent}%</span>
            </div>

            <div>
              {currentUnits} из {countUits}
            </div>
          </div>
        </div>
      </div>

      <div className="global-stats__period">
        <span>change period</span>

        <select name="" id="">
          {allYears.map(year =>
            <option value={year}>{year}</option>)}
        </select>

        <button onClick={goToMonthStats}>по месяцам</button>
      </div>

      <div className="global-stats__block">
        <p className="global-stats__block__subtitle">
          online
        </p>

        {globalStatistics.map(globStat => (
          <div className="global-stats__block__marks">
            {statusesList}

            {globStat.online.map(onlineValue => (
              <p>
                {onlineValue}
              </p>
            ))}
          </div>
        ))}

        <p className="global-stats__block__subtitle">offline</p>

        {globalStatistics.map(globStat => (
          <div className="global-stats__block__marks">
            {statusesList}

            {globStat.offline.map(offlineValue => (
              <p>
                {offlineValue}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
