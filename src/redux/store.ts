import { configureStore } from '@reduxjs/toolkit'
import initialMoneySlice from './slices/initialMoneySlice';

export const store = configureStore({
  reducer: {
    initialMoney: initialMoneySlice
  },
});


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch