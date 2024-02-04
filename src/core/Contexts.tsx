import { Dispatch, FC, ReactNode, SetStateAction, createContext, useState } from "react";
import { SelectPeriod_E, SelectPeriod_T } from "../types/V2/selectPeriodV2.type";

// 87TODO: весь этот файл вынести в user.context или что-то такое. Сюда все контексты будут попадать и раскидываться по приложухе.

// 87TODO: в файл с типами вынести
export type DefaultValueSelectProvider_T = {
  selectValue: SelectPeriod_T
  setSelectValue: Dispatch<SetStateAction<SelectPeriod_T>>
}

// 87TODO: в файл с типами вынести
/** Описание провайдера */
export type SelectPeriodProvider_T = {
  children: ReactNode
}

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