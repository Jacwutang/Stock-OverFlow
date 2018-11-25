import React from "react";
import Search from "../search";
import styles from "./index.module.css";
import Logo from "assets/images/logo.svg";

const Header = (props) => {

  const renderList = () => {
    if(props.loggedIn) {
      return(
        <ul className={styles.navbar_right}>
            <li> <a href="/simulator"> Simulator </a> </li>
            <li onClick={props.logout}> Log out </li>
          </ul>
      );
    }
    else {
      return(
        <ul className={styles.navbar_right}>
           <li> <a href="/signup"> Sign Up </a> </li>
           <li> <a href="/login"> Log In </a>  </li>
           <li> <a href="/simulator"> Simulator </a>  </li>
         </ul>
      );
    }
  }
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
