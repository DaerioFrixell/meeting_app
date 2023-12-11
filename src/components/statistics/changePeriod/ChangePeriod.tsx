import "./changePeriod.scss";
import { FC } from "react";
import { allYears } from "../../../staticData/date";
import { useNavigate } from "react-router-dom";
import { NavigatePath } from "../../../core/routing/type";
import { Button } from "../../buttons/Button";

export const ChangePeriod: FC = () => {
  const navigate = useNavigate();

  const goToMonthStats = () => {
    navigate(NavigatePath.MONTHS_STAT);
  };

  return (
    <div className="change-period">
      <span>change period</span>

      <select name="" id="">
        {/* TO DO сделать default value */}

        {allYears.map(year =>
          <option value={year}>
            {year}
          </option>)}
      </select>

      <Button
        buttonsName={"по месяцам"}
        onClick={goToMonthStats}
      />
    </div>
  );
};