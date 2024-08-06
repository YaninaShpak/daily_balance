import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setSavings } from "../../redux/slices/initialMoneySlice";

import ErrorInputMessage from "../ErrorInputMessage/ErrorInputMessage";
import MoneyAmountInput from "../inputs/MoneyAmountInput/MoneyAmountInput";
import RangeInput from "../inputs/RangeInput/RangeInput";

import styles from "./Savings.module.css";

const Savings = () => {
  const dispatch = useAppDispatch();
  const { savings, totalResult } = useAppSelector((state) => state.initialMoney);
  const [isError, setIsError] = useState(false);

  const onHandleChange = (value: string) => {
    const numberValue = Number(value);
    if (isNaN(numberValue)) {
      alert('Ошибка');
    } else if (numberValue > totalResult){
      setIsError(true);
    } else {
      setIsError(false);
      dispatch(setSavings(numberValue));
    }
  };

  return (
    <section className={styles.root}>
      <h2 className="title">Сбережения</h2>
      <RangeInput/>
      <MoneyAmountInput
        value={savings}
        handleFunction={(e) => onHandleChange(e)}
      />
      {isError && <ErrorInputMessage message="Не должно превышать бюджет до вычета сбережений"/>}
    </section>
  );
};

export default Savings;