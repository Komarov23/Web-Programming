import React from "react";
import styles from "./index.module.css";
import {Link} from "react-router-dom";
import {formatCurrencyUSD} from "../../../helpers";

class Product extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className={styles.product}>
      <h3>{this.props.product.name}</h3>
      <p>{this.props.product.description}</p>
      <p>{formatCurrencyUSD(this.props.product.price)}</p>
      <div className={styles.product__footer}>
        <label>
          <input
              type={"checkbox"}
              defaultChecked={false}
              checked={this.props.product.checked}
              onChange={this.props.onChange}
          />
          Обрати
        </label>
        <Link to={`/product/${this.props.product.id}`}>Переглянути товар</Link>
      </div>
    </div>
  }
}

export default Product