import { FC } from "react";
import styles from "./AddButton.module.css";
import { MoneyItem } from "../../../redux/slices/initialMoneySlice";
import { Action } from "@reduxjs/toolkit";
import { useAppDispatch } from "../../../hooks";

interface AddButtonProps {
  items: MoneyItem[],
  setFunction: (items: MoneyItem[]) => Action
}

const AddButton: FC<AddButtonProps> = ({items, setFunction}) => {
  const dispatch = useAppDispatch();
  
  const addItem = () => {
    dispatch(setFunction([...items, { titleInput: "", amount: 0 }]))
  };

  return (
    <button className={styles.root} onClick={addItem}>+ Добавить</button>
  );
};

export default AddButton;