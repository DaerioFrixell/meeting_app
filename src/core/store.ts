import { configureStore } from '@reduxjs/toolkit';
import { unitReducer } from '../model/unitReducer';
import { someReducer } from '../model/something/someReducer';

const store = configureStore({
  reducer: {
    unit: unitReducer,
    some: someReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store