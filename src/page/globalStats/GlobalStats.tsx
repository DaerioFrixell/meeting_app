import './globalStat.scss';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainTitle } from '../../components/UI/mainTitle/MainTitle';
import { NavigatePath } from '../../core/routing/type';
import { allYears,  } from '../../staticData/date';
import { getCurrentCountUnitsSelector, getUnitCountSelector } from '../../model/unit/unit.selectors';
import { useSelector } from 'react-redux';
import { globalStatistics, goalObj } from '../../model/something/some.selector';

export const GlobalStats: FC = () => {
  const navigate = useNavigate();

  const goToMonthStats = () => {
    navigate(NavigatePath.MONTHS_STAT);
  };

  const year: number = new Date().getFullYear();

  const countUits: number = getUnitCountSelector;
  const currentUnits: number = useSelector(getCurrentCountUnitsSelector);
  const completlyPercent: number = Math.floor(currentUnits / countUits * 100);

  /** TO DO в компоненте 3 */
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

        {/* TO DO 1 компонента со шкалой завершенности, она динамическая! */}
        <div className="gs-inner">
          <div className="gs-inner__calcucation">
            {goalObj.period.map(perion => <p>{perion}</p>)}
            {goalObj.count.map(count => <p>{Math.floor(count)}</p>)}
          </div>

          <div className="gs-inner__process">
            <p>
              completly {completlyPercent}%
            </p>

            <p>
              {currentUnits} из {countUits}
            </p>
          </div>
        </div>
      </div>

      {/* TO DO 2 компонента с выбором периода, она динамическая */}
      <div className="global-stats__period">
        <span>change period</span>

        <select name="" id="">
          {allYears.map(year =>
            <option value={year}>{year}</option>)}
        </select>

        <button onClick={goToMonthStats}>по месяцам</button>
      </div>

      {/* TO DO 3 компонента со статистикой, она динамическая! */}
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
