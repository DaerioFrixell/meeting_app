import { configureStore } from '@reduxjs/toolkit';
import { unitReducer } from '../model/unitReducer';
import { someReducer } from '../model/something/someReducer';
import { userReducer } from '../model/user/user.reducer';
import { settingReducer } from '../model/settings/settings.reducer';


const store = configureStore({
  reducer: {
    unit: unitReducer,
    user: userReducer,
    setting: settingReducer,
    some: someReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store