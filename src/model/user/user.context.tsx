import { FC, createContext, useState } from "react";
import { SelectPeriod_E, SelectPeriod_T } from "../../types/V2/selectPeriodV2.type";
import { DefaultValueSelectProvider_T, SelectPeriodProvider_T } from "./user.type";


/** Создание контекста для выбора периода с дэфлтным значением. */
export const ChangePeriodContext = createContext({
  selectValue: 2024,
  setSelectValue: () => { }
} as DefaultValueSelectProvider_T);

/** Создание провайдера */
export const SelectPeriodProvider: FC<SelectPeriodProvider_T> = ({ children }) => {
  const [selectValue, setSelectValue] = useState<SelectPeriod_T>(SelectPeriod_E.ALL_TIME)

  return (
    <ChangePeriodContext.Provider value={{ selectValue, setSelectValue }}>
      {children}
    </ChangePeriodContext.Provider>)
}