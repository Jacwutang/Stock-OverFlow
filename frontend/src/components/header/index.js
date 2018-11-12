import React from "react";
import Search from "../search";
import styles from "./index.module.css";
import Logo from "assets/images/logo.svg";
const Header = () => (
  <nav className={styles.nav}>
    <div className={styles.navbar_left}>
      <a href="/">
        <img alt="logo" src={Logo} className={styles.logo} />
      </a>
      <Search />
    </div>
    <ul className={styles.navbar_right}>
      <li> Sign Up </li>
      <li> Log In </li>
      <li> Simulator </li>
    </ul>
  </nav>
);
export default Header;
