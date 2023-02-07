import React from "react";
import styles from "./CartItem.module.scss";
import Minus from "../../img/minus.svg";
import Plus from "../../img/plus.svg";
import Del from "../../img/del.svg";
export const CartItem = () => {
  return (
    <div className={styles.cartitem}>
      <div className={styles.cart_left}>
        <img
          className={styles.cartimg}
          src="https://habrastorage.org/webt/qc/fs/ni/qcfsnicmqu_zwlh4wv1nj7okqdq.jpeg"
          alt="name"
        />

        <div className={styles.cartinfo}>
          <h3>{"Филадельфия"}</h3>
        </div>
      </div>

      <div className={styles.cart_right}>
        <div className={styles.cartcount}>
          <button className={styles.btn}>
            <img src={Minus} alt="-" />
          </button>
          <b>{"10"}</b>
          <button className={styles.btn}>
            <img src={Plus} alt="+" />
          </button>
        </div>
        <div className={styles.price}>
          <b>{"1800"}₽</b>
        </div>
        <button className={styles.btn}>
          <img src={Del} alt="x" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
