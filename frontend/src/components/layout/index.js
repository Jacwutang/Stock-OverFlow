import React from "react";
import Header from '../header';
import Footer from '../footer';
import styles from "./index.module.css";

const Layout = (props) => (
  <div className={styles.container}>
    <Header />
      {props.children}
    <Footer />
  </div>
);

export default Layout;
