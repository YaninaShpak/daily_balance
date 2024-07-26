import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import SaveButton from './components/buttons/SaveButton/SaveButton'
import EditableList from './components/EditableList/EditableList'
import { useAppSelector } from './hooks'
import { setIncome } from './redux/slices/initialMoneySlice'

function App() {
  const {income} = useAppSelector((state) => state.initialMoney);

  return (
    <div className='app'>
      <div className="wrapper">
        <Header />
        <main className='mainWrapper'>
          <div className="container">
            <div className="editableWrapper">
              <EditableList title="Доход" items={income} setFunction={setIncome}/>
            </div>
          </div>
          <div className="container">
            <SaveButton/>
          </div>
          
        </main>
        <Footer/>
      </div>
    </div>
  )
}

export default App
