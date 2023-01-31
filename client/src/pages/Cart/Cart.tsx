import React from "react";
import styles from "./Cart.module.scss";
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
export const Cart = () => {
  return (
    <section className={styles.cart}>
      <div className={styles.carttop}>
        <h2 className={styles.title}>Корзина</h2>
        <button className={styles.clear}>Очистить корзину</button>
      </div>
      <div className="cart-items">
        {<CartItem />}
        <div className={styles.bottom}>
          <div className={styles.details}>
            <span>
              Всего : <b>{3} шт.</b>
            </span>
            <span>
              Сумма заказа: <b> {123123} ₽</b>
            </span>
          </div>
          <div className={styles.buttons}>
            <button className={styles.back}>
              <Link to="/">Вернуться назад</Link>
            </button>
            <button className={styles.pay}>
              <Link to="/">Оплатить сейчас</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
