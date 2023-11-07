import React, { useContext, useRef } from "react";
import OrderContext from "../../context/order";

const UserInfo = ({ next }) => {
    const { order, setOrder } = useContext(OrderContext);
    const name = useRef("");
    const email = useRef("");
    const address = useRef("");

    const handleSubmit = () => {
        setOrder({ ...order, user: {
            name: name.current?.value,
            email: email.current?.value,
            address: address.current?.value
        } })
        next();
    }

    return <form onSubmit={handleSubmit}>
        <input ref={name} placeholder="Enter your name..." />
        <input ref={email} placeholder="Enter your email..."/>
        <input ref={address} placeholder="Enter your address"/>
        <button type="submit">Замовити</button>
    </form>
}

export default UserInfo;
