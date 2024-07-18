import { FC } from 'react';
import styles from './EditableList.module.css'
import { InitialMoneyState, MoneyItem } from '../../redux/slices/initialMoneySlice'
import MoneyTextInput from '../inputs/MoneyTextInput/MoneyTextInput'
import { useAppDispatch } from '../../hooks';

interface EditableListProps {
  title: string,
  items: InitialMoneyState['income'],
  total: number,
  setFunction: (items: InitialMoneyState['income']) => void
}

interface ItemChange {
  index: number,
  value: string,
  field: string,
  stateItems: InitialMoneyState['income'],
  stateFunction: (items: InitialMoneyState['income']) => void
}

const EditableList: FC<EditableListProps> = ({ title, items, total, setFunction }) => {
  const dispatch = useAppDispatch();

  const handleItemChange = ({index, field, value, stateItems, stateFunction}: ItemChange) => {
    const newState = [...stateItems];
    newState[index] = { ...newState[index], ...{ [field]: value } };
    dispatch(stateFunction(newState));
  };

  return (
    <section className={styles.root}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={`listReset ${styles.list}`}>
        {items.map((el, index) => (
          <li className={styles.item} key={index}>
            <MoneyTextInput 
              value={el.titleInput} 
              handleFunction={(e) => handleItemChange({
                index: index,
                field: "titleInput",
                value: e,
                stateItems: items,
                stateFunction: setFunction
              })} 
              placeholder='Название' />
          </li>
        ))}
      </ul>
      <p>Итого: {total} ₽</p>
    </section>
  );
};

export default EditableList;