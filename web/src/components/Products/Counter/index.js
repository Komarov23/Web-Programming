import React from "react";
import styles from "./index.module.css";

class Counter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const count = this.props.products.filter(p => p.checked).length
    return <h2 className={styles.counter}>Кількість обраних товарів: {count}</h2>
  }
}

export default Counter;