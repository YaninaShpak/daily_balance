import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from './hooks'
import { setIncome, setExpense, setTotalIncome, setTotalExpenses } from './redux/slices/initialMoneySlice'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import SaveButton from './components/buttons/SaveButton/SaveButton'
import EditableList from './components/EditableList/EditableList'
import Savings from './components/Savings/Savings'
import Result from './components/Result/Result'

import './App.css'

function App() {
  const dispatch = useAppDispatch();
  const { income, expense, totalIncome, totalExpenses } = useAppSelector((state) => state.initialMoney);

  useEffect(() => {
    dispatch(setTotalIncome());
    dispatch(setTotalExpenses())
  }, [income, expense])

  return (
    <div className="app">
      <div className="wrapper">
        <Header />
        <main>
          <div className="container mainWrapper">
            <div className="editableWrapper">
              <EditableList title="Доходы" items={income} setFunction={setIncome} total={totalIncome}/>
              <EditableList title="Расходы" items={expense} setFunction={setExpense} total={totalExpenses}/>
            </div>
            <div className="rowWrapper">
              <Savings/>
              <Result/>
            </div>
            <SaveButton />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
