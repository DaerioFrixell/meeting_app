import "./scaleCompletly.scss";
import { FC, useContext, useEffect } from "react";
import { goalObj } from "../../../model/something/some.selector";
import { unitsCountSelector } from "../../../model/user/user.selectors";
import { useAction } from "../../../hooks/useAction";
import { useSelector } from "react-redux";
import { staticData } from "../../../staticData/staticData";
import { getUnitCountSelector } from "../../../model/unit/unit.selectors";
import { ChangePeriodContext } from "../../../model/user/user.context";


export const ScaleCompletly: FC = () => {
  const { getUnitsCount } = useAction();
  const { selectValue } = useContext(ChangePeriodContext)

  useEffect(() => {
    getUnitsCount(selectValue)
  }, [selectValue]) // eslint-disable-line react-hooks/exhaustive-deps

  /** Целевое количество Units на текущий год. */
  const goalCountUits: number = getUnitCountSelector;

  /** Текущее количество Units за текущий год. */
  const currentUnitsCount: number = useSelector(unitsCountSelector);

  /** Процент завершения цели. */
  const completlyPercent = Math.floor(currentUnitsCount / goalCountUits * 100);

  return (
    <div className="scale">
      <div className="scale__calcucation">
        {goalObj.period.map(period =>
          <p key={period}>
            {period}
          </p>
        )}

        {goalObj.count.map(count =>
          <p key={count}>
            {Math.floor(count)}
          </p>
        )}
      </div>

      <div className="scale__process">
        <p>
          {staticData.statistics.global.completly} {completlyPercent}%
        </p>

        <p>
          {currentUnitsCount} из {goalCountUits}
        </p>
      </div>
    </div>
  );
}

