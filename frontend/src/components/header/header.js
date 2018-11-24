import React from "react";
import Search from "../search";
import styles from "./index.module.css";
import Logo from "assets/images/logo.svg";
const Header = (props) => {

  const renderList = () => (
    props.loggedIn?
    ( <ul className={styles.navbar_right}>
        <li> Simulator </li>
        <li onClick={props.logout}> Log out </li>
      </ul>
    )
    :
    ( <ul className={styles.navbar_right}>
        <li> Sign Up </li>
        <li> Log In </li>
        <li> Simulator </li>
      </ul>
    )
  );


  return (
    <nav className={styles.nav}>
      <div className={styles.navbar_left}>
        <a href="/">
          <img alt="logo" src={Logo} className={styles.logo} />
        </a>
        <Search />
      </div>
      {renderList()}
    </nav>
  )
};
export default Header;
