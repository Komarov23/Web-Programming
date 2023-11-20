import React, { useState } from "react";
import styles from "./index.module.css";
import {Link} from "react-router-dom";
import {formatCurrencyUSD} from "../../../helpers";
import ProductDialog from "../../ProductDialog";

const Product = ({ product, onChange }) => {
  const [showDialog, setShowDialog] = useState(false);

  const chooseProduct = () => {
    onChange();
    setShowDialog(true);
    setInterval(() => setShowDialog(false), 1500);
  }

  return <div className={styles.product}>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{formatCurrencyUSD(product.price)}</p>
      <div className={styles.product__footer}>
        <label>
          <input
              type={"checkbox"}
              defaultChecked={false}
              checked={product.checked}
              onChange={chooseProduct}
          />
          Обрати
        </label>
        <Link to={`/product/${product.id}`}>Переглянути товар</Link>
      </div>
      <div className={styles.product__dialog}>
        <ProductDialog isOpened={showDialog} isAdded={product.checked} />
      </div>
    </div>
}

export default Product