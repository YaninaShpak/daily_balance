import { FC } from 'react';
import styles from './MoneyTextInput.module.css'

interface MoneyTextInputProps {
  placeholder: string
}

const MoneyTextInput: FC<MoneyTextInputProps> = ({placeholder}) => {
  return (
    <input
      className={styles.root}
      type="text"
      placeholder={placeholder}
    />
  );
};

export default MoneyTextInput;