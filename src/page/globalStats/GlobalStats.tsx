import './globalStat.scss'
import { MainTitle } from '../../components/UI/mainTitle/MainTitle'
import { FC } from 'react'

export const GlobalStats: FC = () => {
  const countUits = 0
  const year = 0
  const perDay = 'pd'
  const perMonth = 'pm'

  return (
    <section className="global-stats">
      <MainTitle title="main stats" />

      <div className="global-stats__general-info">
        <p className="global-stats__general-info__goal">
          Goal: meeting {countUits} units per {year} year
        </p>

        <div>
          <div className="global-stats__general-info__calcucation">
            <div className="global-stats__general-info__calcucation__plan">
              <p>{perDay}</p>
              <p>2</p>
            </div>

            <div className="global-stats__general-info__calcucation__plan">
              <p>{perMonth}</p>
              <p>60.8</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p>
          <p>completly</p>
        </p>
      </div>

      <div>
        change period
        <p>2023</p>
        <p>2022</p>
      </div>

      <div className="global-stats__block">
        <p className="global-stats__block__subtitle">online</p>
        <div className="global-stats__block__marks">
          <p>1st</p>
          <p>2st</p>
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
        </div>

        <div className="global-stats__block__marks">
          <p>23%</p>
          <p>43%</p>
          <p>15%</p>
          <p>15%</p>
          <p>15%</p>
        </div>
      </div>
    </section>
  )
}
