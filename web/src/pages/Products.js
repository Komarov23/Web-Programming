import React from "react";
import products from "../constants/products";
import Counter from "../components/Products/Counter";
import Product from "../components/Products/Product";
import styles from "./products.module.css"
import Layout from "../layout";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange (product) {
    this.setState((state) => {
      return {
        products: state.products.map(p => {
          if (p.id !== product.id) return p;
          return {
            ...p,
            checked: !p.checked
          }
        })
      }
    })
  }

  render() {
    return (
      <Layout>
        <Counter products={this.state.products} />
        <div className={styles.products}>
          {this.state.products.map(product =>
              <Product
                  key={product.id}
                  product={product}
                  onChange={() => this.onChange(product)}
              />
          )}
        </div>
      </Layout>
    );
  }
}

export default Products;
