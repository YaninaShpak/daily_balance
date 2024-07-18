import './App.css'
import EditableList from './components/EditableList/EditableList'
import Header from './components/Header/Header'
import { useAppSelector } from './hooks'
import { setIncome } from './redux/slices/initialMoneySlice'



function App() {
  const { income, totalIncome } = useAppSelector((state) => state.initialMoney)

  return (
    <div className='app'>
      <div className="wrapper">
        <Header />
        <main>
          <div className="container mainWrapper">
            <div className="editableWrapper">
              <EditableList 
              title='Постоянные доходы' 
              items={income} 
              setFunction={setIncome}
              total={totalIncome} />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
