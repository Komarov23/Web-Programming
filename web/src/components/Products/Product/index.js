import React from "react";
import styles from "./index.module.css";

class Product extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className={styles.product}>
      <h3>{this.props.product.name}</h3>
      <p>{this.props.product.description}</p>
      <p>{this.props.product.price}</p>
      <label>
        <input
            type={"checkbox"}
            defaultChecked={false}
            checked={this.props.product.checked}
            onChange={this.props.onChange}
        />
        Обрати
      </label>
    </div>
  }
}

export default Product