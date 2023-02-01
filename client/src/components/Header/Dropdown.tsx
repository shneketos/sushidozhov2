import React from "react";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import menu from "../../img/menu.svg";
export const Dropdown = () => {
  const [open, setOpen] = React.useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const handleClickOutsideDropdown = (e: any) => {
    if (open && !menuRef.current?.contains(e.target as Node)) {
      setOpen(false);
    }
  };
  window.addEventListener("click", handleClickOutsideDropdown);

  return (
    <div
      className={styles.dropdown}
      ref={menuRef}
      onClick={() => {
        setOpen(!open);
      }}
    >
      <img src={menu} alt="menu" />
      <ul
        className={
          open
            ? `${styles.dropdownmenu} ${styles.dropdownmenu_active}`
            : `${styles.dropdownmenu} ${styles.dropdownmenu_inactive}`
        }
      >
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
    </div>
  );
};
