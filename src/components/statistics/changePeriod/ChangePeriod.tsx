import "./changePeriod.scss";
import { FC } from "react";
import { allYears } from "../../../staticData/date";

export type ChangePeriod_T = {
  choosePeriod: (arg: any) => void
}
export const ChangePeriod: FC<ChangePeriod_T> = ({ choosePeriod }) => {


  // 87TODO: всю статику вынести в файл staticData .
  return (
    <div className="change-period">
      <span>change period</span>

      <select name="" id="" onChange={(e) => choosePeriod(e)}>
        {allYears.map(year =>
          <option key={year} defaultValue={2023} value={year}  >
            {year}
          </option>)}
      </select>
    </div>
  );
};