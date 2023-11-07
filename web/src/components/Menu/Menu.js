import React from 'react';
import styles from "./menu.module.css";
import {Link} from "react-router-dom";

class Menu extends React.Component {
  render() {
    return (
      <div className={styles.menu}>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
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
