import "./scaleCompletly.scss";
import { FC, useEffect } from "react";
import { goalObj } from "../../../model/something/some.selector";
import { countUnitsSelector } from "../../../model/user/user.selectors";
import { useAction } from "../../../hooks/useAction";
import { useSelector } from "react-redux";

export const ScaleCompletly: FC = () => {
  const { getUnitsCount } = useAction();

  useEffect(() => {
    getUnitsCount();
  }, []);

  /** 
   * Целевое количество Units на текущий год.
   */
  const goalCountUits: number = 500;

  /** 
   * Текущее количество Units за текущий год.
   */
  const currentUnits: number = useSelector(countUnitsSelector);

  /** 
   * процент завершения цели.
   */
  const completlyPercent = currentUnits / goalCountUits * 100

  return (
    <div className="gs-inner">
      <div className="gs-inner__calcucation">
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

      <div className="gs-inner__process">
        <p>
          {/* Вынести статику в staticData. */}
          completly {completlyPercent}%
        </p>

        <p>
          {currentUnits} из {goalCountUits}
        </p>
      </div>
    </div>
  );
}

