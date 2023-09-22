import React from "react";
import styles from "./index.module.css";
import Product from "./Product";

class Products extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={styles.products}>
      {this.props.products.map(product =>
          <Product
            key={product.id}
            product={product}
            onChange={() => this.props.onChange(product)}
        />
      )}
    </div>
  }
}

export default Products