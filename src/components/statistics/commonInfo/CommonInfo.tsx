import "./commonInfo.scss";
import { FC, useContext, useState } from "react";
import { getUnitCountSelector } from "../../../model/unit/unit.selectors";
import { ScaleCompletly } from "../scaleCompletly/scaleCompletly";
import { ChangePeriod } from "../changePeriod/ChangePeriod";
import { Button } from "../../buttons/Button";
import { useNavigate } from "react-router-dom";
import { RoutePaths_E } from "../../../core/routing/type";
import { ChangePeriodContext } from "../../../core/Contexts";

export const CommonInfo: FC = () => {
  const navigate = useNavigate();

  const { setSelectValue } = useContext(ChangePeriodContext);

  const year: number = new Date().getFullYear();
  const goalCountUits: number = getUnitCountSelector;

  const fn = async (e: any) => {
    const chooseYear = e.target.value;

    setSelectValue(chooseYear);
  }


  const goToMonthStats = () => {
    navigate(RoutePaths_E.MONTHS_STAT);
  };

  // 87TODO: вынести в файл staticData всю статику.
  // 87TODO: className fl переимеовать норм.
  return (
    <section className="common-info">
      <div>
        <p className="common-info__goal">
          Goal: meeting {goalCountUits} units per {year} year
        </p>

        <ScaleCompletly />
      </div>

      <div className="fl">
        <ChangePeriod choosePeriod={fn} />

        <Button
          buttonsName={"по месяцам"}
          onClick={goToMonthStats}
        />
      </div>
    </section>
  )
}