import { FC } from 'react';
import styles from './EditableList.module.css'
import { InitialMoneyState } from '../../redux/slices/initialMoneySlice'
import MoneyTextInput from '../inputs/MoneyTextInput/MoneyTextInput';

interface EditableListProps {
  title: string,
  items: InitialMoneyState['income'],
  total: number
}

const EditableList: FC<EditableListProps> = ({ title, items, total }) => {
  return (
    <section className={styles.root}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={`listReset ${styles.list}`}>
        {items.map((el, index) => (
          <li className={styles.item} key={index}>
            <MoneyTextInput placeholder='Название'/>
          </li>
        ))}
      </ul>
      <p>Итого: {total} ₽</p>
    </section>
  );
};

export default EditableList;