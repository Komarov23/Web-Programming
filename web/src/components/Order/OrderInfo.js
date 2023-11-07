import React, { useContext } from "react";
import OrderContext from "../../context/order";
import products from "../../constants/products";

const OrderInfo = () => {
    const { order } = useContext(OrderContext);
    const product = products.find(p => p.id === parseInt(order.productId));

    return <div>
        <h1>Ви замовили {product.name}</h1>
        <p>{product.description}</p>
        <p>Кількість: {order.qty}</p>
        <p>За адресою {order.user.address}</p>
        <p>На ім'я {order.user.name}</p>
        <p>На email {order.user.email}</p>
    </div>
}

export default OrderInfo