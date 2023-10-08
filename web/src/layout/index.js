import React from "react";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import styles from "./layout.module.css";

class Layout extends React.Component {
  render() {
    return (
      <div className={styles.layout}>
        <Header/>
        <main className={styles.content}>
          {this.props.children}
        </main>
        <Footer/>
      </div>
    )
  }
}

export default Layout