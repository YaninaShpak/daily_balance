import { ChangeEvent, FC } from 'react';
import styles from './MoneyTextInput.module.css'

interface MoneyTextInputProps {
  value: string,
  handleFunction: (e: ChangeEvent<HTMLInputElement>) => void
}

const MoneyTextInput: FC<MoneyTextInputProps> = ({value, handleFunction}) => {
  return (
    <input
      className={styles.root}
      type="text"
      placeholder="Название"
      value={value}
      onChange={handleFunction}
    />
  );
};

export default MoneyTextInput;