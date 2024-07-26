import { MoneyItem } from '../../redux/slices/initialMoneySlice';
import AddButton from '../buttons/AddButton/AddButton';
import styles from './EditableList.module.css'
import { useDispatch } from 'react-redux';
import { FC } from 'react';
import { Action } from '@reduxjs/toolkit';
import MoneyTextInput from '../inputs/MoneyTextInput/MoneyTextInput';
import MoneyAmountInput from '../inputs/MoneyAmountInput/MoneyAmountInput';
import RemoveButton from '../buttons/RemoveButton/RemoveButton';

// Интерфейс для props компонента
interface EditableListProps {
  title: string,
  items: MoneyItem[],
  setFunction: (items: MoneyItem[]) => Action
}

// Типы для аргументов функций
type HandleItemChangeFunction = (index: number, field: string, value: string | number) => void

const EditableList: FC<EditableListProps> = ({title, items, setFunction }) => {
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
      <h2 className={styles.title}>{title}</h2>
      <ul className={`listReset ${styles.list}`}>
        {items.map((el, index) => (
          <li className={styles.item} key={index}>
            <MoneyTextInput value={el.titleInput} handleFunction={(e) => handleItemChange(
              index,
              "titleInput",
              e.target.value)} />
            <MoneyAmountInput value={el.amount} handleFunction={(e) => handleAmountChange(
              index,
              e.target.value)} />
            <RemoveButton items={items} setFunction={setFunction} index={index}/>
          </li>
        ))}
      </ul>
      <AddButton items={items} setFunction={setFunction} />
    </section>
  );
};

export default EditableList;