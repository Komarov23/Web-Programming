import React from "react";
import products from "../constants/products";
import Layout from "../layout";
import {useParams} from "react-router-dom";
import Form from "../components/Products/Form";
import {convertToUAH, formatCurrencyUAH, formatCurrencyUSD} from "../helpers";

const Product = () => {
  const { productId } = useParams()
  const product = products.find(p => p.id === parseInt(productId));
  const usdPrice = formatCurrencyUSD(product.price);
  const uahPrice = formatCurrencyUAH(convertToUAH(product.price));

  return (
      <Layout>
        <h1>Інформація про {product.name}</h1>
        <p>{usdPrice + ' - ' + uahPrice}</p>
        <p>{product.description}</p>
        <Form productId={productId} />
      </Layout>
  );
}

export default Product;
