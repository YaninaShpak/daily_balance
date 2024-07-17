import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface MoneyItem {
  titleInput: string,
  amount: number
}

export interface InitialMoneyState {
  income: MoneyItem[],
  expense: MoneyItem[],
  savings: number,
  totalIncome: number,
  totalExpenses: number,
  totalResult: number,
  dailyBudget: number
}

const initialState: InitialMoneyState = {
  income: [
    { titleInput: "Зарплата", amount: 100000 },
    { titleInput: "Фриланс", amount: 0 },
  ],
  expense: [
    { titleInput: "Кредит", amount: 50000 },
    { titleInput: "Еда", amount: 0 },
  ],
  savings: 25000,
  totalIncome: 0,
  totalExpenses: 0,
  totalResult: 0,
  dailyBudget: 0,
}

export const initialMoneySlice = createSlice({
  name: 'initialMoney',
  initialState,
  reducers: {
    setIncome: (state, action: PayloadAction<number>) => {
      state.dailyBudget = action.payload;
    },
  },
})

export const { setIncome } = initialMoneySlice.actions

export default initialMoneySlice.reducer