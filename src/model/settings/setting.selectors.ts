import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../core/store";
import { SearchRequest_T, SettingReducerInitState } from "./setting.type";

const getSearchRequest = (state: RootState): SearchRequest_T => state.setting.searchRequest;

// export const pageSelector = createSelector(
//   getSearchRequest, (settingState: SettingReducerInitState) => {
//     console.log("work selector")
//     return settingState.searchRequest.page;
//   });

export const pageSelector = (state: RootState) => state.setting.searchRequest.page