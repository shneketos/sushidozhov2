import React from "react";
import Logo from "../../img/l2.png";
import Cart from "../../img/cart.svg";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Dropdown } from "./Dropdown";
export const Header = () => {
  const location = useLocation();
  const [isMenu, setIsMenu] = React.useState(false);
  useEffect(() => {
    location.pathname === "/menu" ? setIsMenu(true) : setIsMenu(false);
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <header className={isMenu ? styles.fix : ""}>
      <Link to="/">
        <img src={Logo} alt="logo" className={styles.logo} />
      </Link>
      <Dropdown />
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
      </div>
    </header>
  );
};

export default Header;
