import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Action } from '@reduxjs/toolkit';
import { MoneyItem } from '../../redux/slices/initialMoneySlice';

import AddButton from '../buttons/AddButton/AddButton';
import RemoveButton from '../buttons/RemoveButton/RemoveButton';
import MoneyTextInput from '../inputs/MoneyTextInput/MoneyTextInput';
import MoneyAmountInput from '../inputs/MoneyAmountInput/MoneyAmountInput';

import styles from './EditableList.module.css'

// Интерфейс для props компонента
interface EditableListProps {
  title: string,
  items: MoneyItem[],
  setFunction: (items: MoneyItem[]) => Action,
  total: number
}

// Типы для аргументов функций
type HandleItemChangeFunction = (index: number, field: string, value: string | number) => void

const EditableList: FC<EditableListProps> = ({ title, items, setFunction, total }) => {
  const dispatch = useDispatch();

  const handleItemChange: HandleItemChangeFunction = (index, field, value) => {
    const newState = [...items];
    newState[index] = { ...newState[index], ...{ [field]: value } };
    dispatch(setFunction(newState));
  };

  const handleAmountChange = (index: number, value: string) => {
    const numberValue = Number(value);
    if (!isNaN(numberValue)) {
      handleItemChange(index, "amount", numberValue)
    } else {
      alert('Ошибка')
    }
  };

  return (
    <section className={styles.root}>
      <h2 className="title">{title}</h2>
      <ul className={`listReset ${styles.list}`}>
        {items.map((el, index) => (
          <li className={styles.item} key={index}>
            <MoneyTextInput value={el.titleInput} handleFunction={(e) => handleItemChange(
              index,
              "titleInput",
              e.target.value)} />
            <MoneyAmountInput value={el.amount} handleFunction={(value) => handleAmountChange(
              index,
              value)} />
            <RemoveButton items={items} setFunction={setFunction} index={index}/>
          </li>
        ))}
      </ul>
      <AddButton items={items} setFunction={setFunction} />
      <p><span className={styles.textUnderline}>Итого:</span> {total.toLocaleString('ru-RU')} ₽</p>
    </section>
  );
};

export default EditableList;