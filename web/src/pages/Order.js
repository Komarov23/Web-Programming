import React, { useState } from "react";
import Layout from "../layout";
import { useParams } from "react-router-dom";
import products from "../constants/products";
import ProductInfo from "../components/Order/ProductInfo";
import OrderContext from "../context/order";
import ProductQty from "../components/Order/ProductQty";
import UserInfo from "../components/Order/UserInfo";
import OrderInfo from "../components/Order/OrderInfo";

const orderInfo = {
    productId: null,
    qty: 0,
    user: {
        address: "",
        email: "",
        name: ""
    }
}

const Order = () => {
    const { productId } = useParams()
    const product = products.find(p => p.id === parseInt(productId));

    const [progress, setProgess] = useState(0);
    const [order, setOrder] = useState({ ...orderInfo, productId });

    const nextStep = () => setProgess(progress + 1);

    return (
        <Layout>
            {progress < 2 ? <ProductInfo product={product} /> : ""}
            <OrderContext.Provider value={{ order, setOrder }}>
                {progress === 0 ? <ProductQty next={nextStep} /> : ""}
                {progress === 1 ? <UserInfo next={nextStep} /> : ""}
                {progress === 2 ? <OrderInfo /> : ""}
            </OrderContext.Provider>
        </Layout>
    )
}

export default Order;
