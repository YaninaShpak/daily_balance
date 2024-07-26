import { useAppSelector } from "../../hooks";
import styles from "./Result.module.css";

const Result = () => {
  const {savings, totalResult, dailyBudget} = useAppSelector((state) => state.initialMoney);

  return (
    <section className={styles.root}>
      <h2>Мой бюджет на день: <span>{Math.round(dailyBudget)} ₽</span></h2>
      <div>Общий бюджет на месяц: {totalResult} ₽</div>
      <div>Накоплю за месяц: {savings} ₽</div>
      <div>Накоплю за год: {savings * 12} ₽</div>
    </section>
  );
};

export default Result;