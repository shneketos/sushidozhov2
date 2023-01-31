import React from "react";
import { Link } from "react-router-dom";
import styles from "./Cart.module.scss";
export const CartEmpty = () => {
  return (
    <section className={styles.empty}>
      <h2>Корзина пустая</h2>
      <p>
        Вероятней всего, Вы еще ничего не добавили в корзину.
        <br />
        Для того, чтобы выбрать товар, перейдите во вкладку меню.
      </p>
      <div className={styles.smile}>😕</div>
      <button className={styles.buttontomenu}>
        <Link to="/catalog">Выбрать товар</Link>
      </button>
    </section>
  );
};

export default CartEmpty;
