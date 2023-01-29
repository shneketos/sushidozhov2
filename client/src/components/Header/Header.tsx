import React from "react";
import Logo from "../../img/l2.png";
import Cart from "../../img/cart.svg";
import User from "../../img/user.svg";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
export const Header = () => {
  const fix = 0;
  return (
    <header className={fix ? styles.fix : ""}>
      <Link to="/">
        <img src={Logo} alt="logo" className={styles.logo} />
      </Link>
      <ul className={styles.center}>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/menu">Меню</Link>
        </li>
        <li>
          <Link to="/delivery">Доставка</Link>
        </li>
        <li>
          <Link to="/about-us">О нас</Link>
        </li>
      </ul>
      <div className={styles.right}>
        <div>
          <Link to="/cart" className={styles.cart}>
            <span>5150P</span>
            <div className={styles.delim}>|</div>
            <img src={Cart} alt="cart"></img>
            <span>10</span>
          </Link>
        </div>
        <Link to="/profile">
          <img src={User} alt="user" className={styles.user} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
