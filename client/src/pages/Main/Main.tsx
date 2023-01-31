import React from "react";
import Banner from "../../img/sushidozho2.png";
import Clock from "../../img/clock.svg";
import Wallet from "../../img/wallet.svg";
import Delivery from "../../img/delivery.svg";
import styles from "./Main.module.scss";
export const Main = () => {
  return (
    <main className={styles.main}>
      <section>
        <img src={Banner} width={1250} alt="banner" />
        <div className={styles.info}>
          <h1>Сушидо Жо</h1>
          <span>Доставка пиццы,роллов,суши и др.</span>
        </div>
        <div className={styles.items}>
          <div className={styles.item}>
            <img src={Clock} alt="clock" />
            <div>
              <div>До 90 мин</div>
              <span>время доставки</span>
            </div>
          </div>
          <div className={styles.item}>
            <img src={Wallet} alt="wallet" />
            <div>
              <div>990 ₽</div>
              <span>мин. сумма заказа</span>
            </div>
          </div>
          <div className={styles.item}>
            <img src={Delivery} alt="delivery" />
            <div>
              <div>0 ₽</div>
              <span>Бесплатная доставка</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
