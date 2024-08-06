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

const getItems = (items: MoneyItem[]) => {
  return parseFloat(items.reduce((acc, cur) =>  acc + cur.amount || 0, 0).toFixed(2));
};

const getTotalResult = (totalIncome: number, totalExpenses: number) => {
  return parseFloat((totalIncome - totalExpenses).toFixed(2));
};

const getDailyBudget = (totalResult: number, savings: InitialMoneyState["savings"]) => {
  return (totalResult - savings) / 30;
};

const initialState: InitialMoneyState = {
  income: (() => {
    const stored = localStorage.getItem("income");
    return stored ? JSON.parse(stored) : [
      { titleInput: "Зарплата", amount: 100000 },
      { titleInput: "Фриланс", amount: 0 },
    ]
  })(),
  expense: (() => {
    const stored = localStorage.getItem("expense");
    return stored ? JSON.parse(stored) : [
      { titleInput: "Кредит", amount: 50000 },
      { titleInput: "Еда", amount: 0 },
    ]
  })(),
  savings: (() => {
    const stored = localStorage.getItem("savings");
    return stored ? JSON.parse(stored) : 25000
  })(),
  totalIncome: 0,
  totalExpenses: 0,
  totalResult: 0,
  dailyBudget: 0,
}

export const initialMoneySlice = createSlice({
  name: 'initialMoney',
  initialState,
  reducers: {
    setIncome: (state, action: PayloadAction<MoneyItem[]>) => {
      state.income = action.payload;
    },
    setExpense: (state, action: PayloadAction<MoneyItem[]>) => {
      state.expense = action.payload;
    },
    setTotalIncome: (state) => {
      state.totalIncome = getItems(state.income);
      state.totalResult = getTotalResult(state.totalIncome, state.totalExpenses);
      state.dailyBudget = getDailyBudget(state.totalResult, state.savings);
    },
    setTotalExpenses: (state) => {
      state.totalExpenses = getItems(state.expense);
      state.totalResult = getTotalResult(state.totalIncome, state.totalExpenses);
      state.dailyBudget = getDailyBudget(state.totalResult, state.savings);
    },
    setSavings: (state, action: PayloadAction<number>) => {
      state.savings = action.payload;
      state.dailyBudget = getDailyBudget(state.totalResult, state.savings);
    },
  },
})

export const { setIncome, setExpense, setTotalIncome, setTotalExpenses, setSavings } = initialMoneySlice.actions

export default initialMoneySlice.reducer