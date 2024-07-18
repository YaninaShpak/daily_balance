import { FC } from 'react';
import styles from './MoneyTextInput.module.css'

interface MoneyTextInputProps {
  value: string | number,
  placeholder: string,
  handleFunction: (e: string) => void
}

const MoneyTextInput: FC<MoneyTextInputProps> = ({value, placeholder, handleFunction}) => {
  return (
    <input
      className={styles.root}
      type="text"
      value={value}
      onChange={(e) => handleFunction(e.target.value)}
      placeholder={placeholder}
    />
  );
};

export default MoneyTextInput;