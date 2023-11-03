import './globalStat.scss';
import { MainTitle } from '../../components/UI/mainTitle/MainTitle';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavigatePath } from '../../core/routing/routes.config';

export const GlobalStats: FC = () => {
  const navigate = useNavigate();

  const countUits = 0;
  const year = 0;
  const perDay = 'pd';
  const perMonth = 'pm';

  const foo = () => {
    navigate(NavigatePath.MONTH_STAT);
  };

  return (
    <section className="global-stats">
      <MainTitle title="main stats" />

      <div className="global-stats__general-info">
        <p className="global-stats__general-info__goal">
          Goal: meeting {countUits} units per {year} year
        </p>

        <div className="gs-inner">
          <div className="gs-inner__calcucation">
            <div className="gs-inner__calcucation__plan">
              <p>{perDay}</p>
              <p>0</p>
            </div>

            <div className="gs-inner__calcucation__plan">
              <p>{perMonth}</p>
              <p>0.00</p>
            </div>
          </div>

          <div className="gs-inner__process">
            <div>
              <span>completly </span>
              <span>0%</span>
            </div>

            <div>
              <span>0</span>
              <span>из</span>
              <span>0000</span>
            </div>
          </div>
        </div>
      </div>

      <div className="global-stats__period">
        <span>change period</span>

        <select name="" id="">
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>

        <button onClick={foo}>по месяцам</button>
      </div>

      <div className="global-stats__block">
        <p className="global-stats__block__subtitle">online</p>
        <div className="global-stats__block__marks">
          <p>1st</p>
          <p>2st</p>
          <p>3st</p>
          <p>3st</p>
          <p>3st</p>
          <p>3st</p>
          <p>3st</p>
          <p>3st</p>
          <p>3st</p>
        </div>

        <div className="global-stats__block__marks">
          <p>23%</p>
          <p>43%</p>
          <p>15%</p>
          <p>15%</p>
          <p>15%</p>
          <p>15%</p>
          <p>15%</p>
          <p>15%</p>
          <p>15%</p>
        </div>
      </div>

      <div className="global-stats__block">
        <p>offline</p>
        <div className="global-stats__block__marks">
          <p>1st</p>
          <p>2st</p>
          <p>3st</p>
          <p>3st</p>
          <p>3st</p>
          <p>3st</p>
          <p>3st</p>
          <p>3st</p>
          <p>3st</p>
        </div>

        <div className="global-stats__block__marks">
          <p>23%</p>
          <p>43%</p>
          <p>15%</p>
          <p>15%</p>
          <p>15%</p>
          <p>15%</p>
          <p>15%</p>
          <p>15%</p>
          <p>15%</p>
        </div>
      </div>
    </section>
  );
};
