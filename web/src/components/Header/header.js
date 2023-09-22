import React from 'react';
import styles from "./header.module.css"
import Menu from "../Menu/Menu";
import AuthButton from "../AuthButton";

class Header extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        <h1>Це заголовок</h1>
        <Menu/>
        <AuthButton />
      </div>
    );
  }
}

export default Header;
