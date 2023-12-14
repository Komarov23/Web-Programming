import React from "react";
import Counter from "../components/Products/Counter";
import Product from "../components/Products/Product";
import styles from "./products.module.css"
import Layout from "../layout";
import {useDispatch, useSelector} from "react-redux";
import {selectProducts} from "../features/products/products.selector";
import {toggleProduct} from "../features/products/products.slice";

const Products = () => {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch()

  const toggle = (product) => dispatch(toggleProduct(product))

  return (
      <Layout>
        <Counter />
        <div className={styles.products}>
          {products.map(product =>
              <Product
                  key={product.id}
                  product={product}
                  onChange={() => toggle(product)}
              />
          )}
        </div>
      </Layout>
  );
}

export default Products;
