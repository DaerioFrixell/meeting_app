import "./changePeriod.scss";
import { FC } from "react";
import { allYears } from "../../../staticData/date";
import { useNavigate } from "react-router-dom";
import { NavigatePath } from "../../../core/routing/type";

export const ChangePeriod: FC = () => {
  const navigate = useNavigate();

  const goToMonthStats = () => {
    navigate(NavigatePath.MONTHS_STAT);
  };

  return (
    <div className="change-period">
      <span>change period</span>

      <select name="" id="">
        {allYears.map(year =>
          <option value={year}>
            {year}
          </option>)}
      </select>

      <button onClick={goToMonthStats}>
        по месяцам
      </button>
    </div>
  );
};