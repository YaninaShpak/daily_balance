import { Trash2 } from 'lucide-react';
import styles from "./RemoveButton.module.css";
import { MoneyItem } from '../../../redux/slices/initialMoneySlice';
import { FC } from 'react';
import { useAppDispatch } from '../../../hooks';
import { Action } from '@reduxjs/toolkit';

interface RemoveButtonProps {
  items: MoneyItem[],
  setFunction: (items: MoneyItem[]) => Action,
  index: number
}

const RemoveButton: FC<RemoveButtonProps> = ({items, setFunction, index}) => {
  const dispatch = useAppDispatch();

  const removeItem = () => {
    dispatch(setFunction(items.filter((_, i) => i !== index)));
  };

  return (
    <button className={styles.root} onClick={removeItem} title='Удалить'>
      <Trash2 color='#6e6e6e'/>
    </button>
  );
};

export default RemoveButton;