import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import { Modal, Button, Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

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
    setTimeout(() => {
      login();
      setLoading(false);
      setVisible(false);
    }, 2000);
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
        footer={[
          <Button key="back" onClick={handleCancel}>
            Відміна
          </Button>,
          <Button key="login" type="primary" onClick={handleLogin} loading={loading}>
            Увійти
          </Button>,
        ]}
      >
        <form onSubmit={handleLogin}>
          <Space direction="vertical">
            <Input type="email" required placeholder="Input email" />
            <Input.Password
              placeholder="Input password"
              required
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </Space>
        </form>
      </Modal>
  </div> 
}

export default AuthButton