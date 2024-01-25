import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../core/store";
import { SettingState_T } from "./setting.type";

const _getSettingState = (state: RootState) => state.setting

export const settingPageSelector = createSelector(
  _getSettingState,
  (settingState: SettingState_T) => {
    return settingState.searchRequest.page;
  });

export const settingIsAuthSelector = createSelector(
  _getSettingState,
  (settingState: SettingState_T) => {
    return settingState.isAuth;
  });

export const settingLoadingSelector = createSelector(
  _getSettingState,
  (settingState: SettingState_T) => {
    return settingState.loading;
  });

// export const checkAuthSelector = localStorage.getItem("token");