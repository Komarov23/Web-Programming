import React, { useContext } from "react";
import OrderContext from "../../context/order";

const ProductQty = ({ next }) => {
    const { order, setOrder } = useContext(OrderContext);

    const increment = () => setOrder({...order, qty: order.qty + 1 });
    const decrement = () => setOrder({...order, qty: order.qty - 1 })

    return <div>
        Оберіть кількість: 
        <button onClick={decrement}>-</button>
        {order.qty}
        <button onClick={increment}>+</button>
        <button onClick={next}>Замовити</button>
    </div>
}

export default ProductQty