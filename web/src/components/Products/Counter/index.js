import React from "react";
import styles from "./index.module.css";
import {useSelector} from "react-redux";
import {selectProducts} from "../../../features/products/products.selector";

const Counter = () => {
  const products = useSelector(selectProducts);
  const count = products.filter(p => p.checked).length
  return <h2 className={styles.counter}>Кількість обраних товарів: {count}</h2>
}

export default Counter;
