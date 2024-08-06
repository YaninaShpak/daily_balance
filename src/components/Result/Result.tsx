import { useAppSelector } from "../../hooks";
import styles from "./Result.module.css";

const Result = () => {
  const { savings, totalResult, dailyBudget } = useAppSelector((state) => state.initialMoney);

  return (
    <section className={styles.root}>
      <h2 className="title">Мой бюджет на день: <span>{Math.round(dailyBudget).toLocaleString('ru-RU')} ₽</span></h2>
      <p>Бюджет до вычета сбережений: {totalResult.toLocaleString('ru-RU')} ₽</p>
      <p>Бюджет на месяц: {(totalResult - savings).toLocaleString('ru-RU')} ₽</p>
      <p>Накоплю за месяц: {savings.toLocaleString('ru-RU')} ₽</p>
      <p>Накоплю за год: {(savings * 12).toLocaleString('ru-RU')} ₽</p>
    </section>
  );
};

export default Result;