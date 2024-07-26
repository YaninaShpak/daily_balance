import { useAppDispatch, useAppSelector } from "../../hooks";
import { setSavings } from "../../redux/slices/initialMoneySlice";
import MoneyAmountInput from "../inputs/MoneyAmountInput/MoneyAmountInput";
import RangeInput from "../inputs/RangeInput/RangeInput";
import styles from "./Savings.module.css";

const Savings = () => {
  const dispatch = useAppDispatch();
  const {savings, totalResult} = useAppSelector((state) => state.initialMoney);

  const onHandleChange = (value: string) => {
    const numberValue = Number(value);
    if (isNaN(numberValue)) {
      alert('Ошибка')
      
    } else if (numberValue > totalResult){
      alert('Не должно превышать сумму дохода')
    } else {
      dispatch(setSavings(numberValue));
    }

    
  };

  return (
    <section className={styles.root}>
      <h2>Сбережения</h2>
      <RangeInput/>
      <MoneyAmountInput
        value={savings}
        handleFunction={(e) => onHandleChange(e.target.value)}
      />
    </section>
  );
};

export default Savings;