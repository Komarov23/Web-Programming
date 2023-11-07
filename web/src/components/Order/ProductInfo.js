import React from "react";
import { formatCurrencyUAH, formatCurrencyUSD, convertToUAH } from "../../helpers";

const ProductInfo = ({ product }) => {
    const usdPrice = formatCurrencyUSD(product.price);
    const uahPrice = formatCurrencyUAH(convertToUAH(product.price));

    return (
        <>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{usdPrice} - {uahPrice}</p>
        </>
    )
}

export default ProductInfo;
