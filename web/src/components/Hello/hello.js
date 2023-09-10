import React from 'react';
import styles from "./hello.module.css"

class HelloWorld extends React.Component {
  render() {
    return <div className={styles.hello}>Hello, World!</div>;
  }
}

export default HelloWorld;
