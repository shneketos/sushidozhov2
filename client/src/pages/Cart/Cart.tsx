import React from "react";
import styles from "./Cart.module.scss";
import { Link } from "react-router-dom";
export const Cart = () => {
  return (
    <section className="cart">
      <div className="cart-top">
        <h2 className="cart-top-title">Корзина</h2>
        <button className="cart-top-clear">
          <span>Очистить корзину</span>
        </button>
      </div>
      <div className="cart-items">
        <div className="cart-bottom">
          <div className="cart-bottom-details">
            <span>
              Всего : <b>{3} шт.</b>
            </span>
            <span>
              Сумма заказа: <b> {123123} ₽</b>
            </span>
          </div>
          <div className="cart-bottom-buttons">
            <button>
              <Link to="/" className="button-back">
                <span>Вернуться назад</span>
              </Link>
            </button>
            <button className="button-pay">
              <span>Оплатить сейчас</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
