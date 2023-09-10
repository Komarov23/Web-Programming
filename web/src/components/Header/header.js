import React from 'react';
import styles from "./header.module.css"

class Header extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        <h1>Це заголовок</h1>
      </div>
    );
  }
}

export default Header;
