import React from 'react';
import styles from "./menu.module.css"; 

class Menu extends React.Component {
  render() {
    return (
      <div className={styles.menu}>
        <ul>
          <li>
            <a href="">Пункт 1</a>
          </li>
          <li>
            <a href="">Пункт 2</a>
          </li>
          <li>
            <a href="">Пункт 3</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
