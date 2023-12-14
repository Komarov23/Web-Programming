import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import { Modal, Button, Space } from 'antd';
import { Formik, Form } from "formik";
import Input from "../components/Input"

const AuthButton = () => {
  const { authenticated, login, logout } = useAuth();
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleLogin = () => {
    setLoading(true);
      login();
      setLoading(false);
      setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onClick = () => {
    if (authenticated) return logout();
    showModal();
  };

  return <div>
      <button onClick={onClick}>
        {authenticated ? "Вийти" : "Зайти"}
      </button>
      <Modal
        title="Форма авторизації"
        visible={visible}
        onCancel={handleCancel}
      >
        <Formik
            initialValues={{
                email: "",
                password: ""
            }}
            onSubmit={handleLogin}
        >
            {() => (
                <Form>
                    <Space direction="vertical">
                        <Input name="email" type="email" />
                        <Input name="password" type="password" />
                        <button type="submit">Login</button>
                    </Space>
                </Form>
            )}
        </Formik>
      </Modal>
  </div>
}

export default AuthButton
