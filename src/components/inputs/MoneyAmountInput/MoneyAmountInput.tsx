import { ChangeEvent, KeyboardEvent, FC, useEffect, useState } from 'react';
import ErrorInputMessage from '../../ErrorInputMessage/ErrorInputMessage';

import styles from './MoneyAmountInput.module.css'

interface MoneyAmountInputProps {
  value: number,
  handleFunction: (value: string) => void
}

const MoneyAmountInput: FC<MoneyAmountInputProps> = ({value, handleFunction}) => {
  const [localValue, setLocalValue] = useState(`${value.toLocaleString('ru-RU')} ₽/мес`);
  const [isFocused, setIsFocused] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const newValue = isFocused ? value.toLocaleString('ru-RU') : `${value.toLocaleString('ru-RU')} ₽/мес`;
    setLocalValue(newValue)
  }, [value, isFocused]);

  const formatNumber = (num: string): string => {
    // Удаление всех нецифровых символов
    const cleanNum = num.replace(/\D/g, '');
    // Преобразование в число и форматирование
    return Number(cleanNum).toLocaleString('ru-RU');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.search(/[^0-9]/ig) !== -1) {
      setIsError(true)
    }
    const formatted = formatNumber(e.target.value)
    setLocalValue(formatted);
  };

  const handleFocus = () => {
    setIsFocused(true);
    setLocalValue(value.toLocaleString('ru-RU'))
  };

  const handleBlurOrEnter = () => {
    setIsFocused(false);
    setIsError(false);
    const numericValue = localValue.replace(/\D/g, '');
    if (numericValue === '') {
      handleFunction('0');
      setLocalValue('0 ₽/мес');
    } else {
      handleFunction(numericValue);
      setLocalValue(`${formatNumber(numericValue)} ₽/мес`);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleBlurOrEnter();
      e.currentTarget.blur();
    }
  };

  return (
    <div className={styles.rootWrapper}>
      <input
        className={styles.root}
        type="text"
        placeholder="Сумма"
        value={localValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlurOrEnter}
        onKeyDown={handleKeyDown}
      />
      {isError && <ErrorInputMessage message="Введите число"/>}
    </div>
  );
};

export default MoneyAmountInput;