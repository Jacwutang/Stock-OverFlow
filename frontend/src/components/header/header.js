import React from "react";
import {Link} from "react-router-dom";
import Search from "../search";
import styles from "./index.module.css";
import Logo from "assets/images/logo.svg";

const Header = (props) => {

  const renderList = () => {
    if(props.loggedIn) {
      return(
        <ul className={styles.navbar_right}>
            <li> <Link to="/simulator"> Simulator </Link> </li>
            <li onClick={props.logout}> Log out </li>
          </ul>
      );
    }
    else {
      return(
        <ul className={styles.navbar_right}>
           <li> <Link to="/signup"> Sign Up </Link> </li>
           <li> <Link to="/login"> Log In </Link>  </li>
           <li> <Link to="/simulator"> Simulator </Link>  </li>
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
