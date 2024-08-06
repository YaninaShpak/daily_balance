import { useAppSelector } from '../../../hooks';
import styles from './SaveButton.module.css';

const SaveButton = () => {
  const {income, expense, savings} = useAppSelector((state) => state.initialMoney);

  function saveToLocalStorage() {
    localStorage.setItem("income", JSON.stringify(income));
    localStorage.setItem("expense", JSON.stringify(expense));
    localStorage.setItem("savings", JSON.stringify(savings));
  }

  return (
    <button className={styles.root} type="button" onClick={saveToLocalStorage}>Сохранить</button>
  );
};

export default SaveButton;