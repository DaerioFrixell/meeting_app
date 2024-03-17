import { createSelector } from "@reduxjs/toolkit";
import { UnitInitState_T } from "../unitTypes";
import { RootState } from "../../core/store";
import { mockCountUnitGoal } from "../../staticData/others";


const getUnitState = (state: RootState): UnitInitState_T => state.unit;

/**
 * Список Units.
 */
export const unitSelector = createSelector(getUnitState, (unitState: UnitInitState_T) => {
  return unitState.units;
});

/**
 * Статус в ответе любого запроса в Units.
 */
export const unitStatusSelector = createSelector(getUnitState, (unitState: UnitInitState_T) => {
  return unitState.status;
});

/**
 * Ошибка в ответе любого запроса в Units.
 */
export const unitErrorSelector = createSelector(getUnitState, (unitState: UnitInitState_T) => {
  return unitState.error;
});

//TODO: Использовать сделанный селектор для возвращения количества всех Unit.
export const getUnitCountSelector: number = mockCountUnitGoal;