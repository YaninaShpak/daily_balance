import { CSSProperties } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { setSavings } from "../../../redux/slices/initialMoneySlice";
import styles from "./RangeInput.module.css";

const RangeInput = () => {
  const dispatch = useAppDispatch();
  const {totalResult, savings} = useAppSelector((state) => state.initialMoney);

  return (
    <input className={styles.root}
      type="range"
      min="0"
      max={totalResult}
      value={savings}
      onChange={(e) => dispatch(setSavings(parseInt(e.target.value)))}
      style={{ '--progress-width': `${((savings / totalResult) * 100).toFixed(2)}%` } as CSSProperties}
    />
  );
};

export default RangeInput;