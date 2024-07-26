import { ChangeEvent, FC } from 'react';
import styles from './MoneyAmountInput.module.css'

interface MoneyAmountInputProps {
  value: number,
  handleFunction: (e: ChangeEvent<HTMLInputElement>) => void
}

const MoneyAmountInput: FC<MoneyAmountInputProps> = ({value, handleFunction}) => {
  return (
    <input
      className={styles.root}
      type="text"
      placeholder="Сумма"
      value={value}
      onChange={handleFunction}
    />
  );
};

export default MoneyAmountInput;