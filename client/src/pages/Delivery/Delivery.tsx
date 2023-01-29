import React from "react";
import styles from "./Delivery.module.scss";
import DeliverySVG from "../../img/delivery.svg";
import Clock from "../../img/clock.svg";
import Date from "../../img/date.svg";
import Credit from "../../img/credit.svg";
import Nfc from "../../img/nfc.svg";
import Wallet from "../../img/wallet.svg";
export const Delivery = () => {
  return (
    <section className={styles.delivery}>
      <h1 className={styles.top}>Доставка и оплата</h1>

      <section className={styles.infoblock}>
        <h2>Доставка</h2>
        <ul className={styles.infoitems}>
          <li className={styles.infoitem}>
            <img src={DeliverySVG} alt="delivery" />
            <div>
              <p>Доставка осуществляется при заказе от 990 ₽.</p>
              <span>Доставка бесплатная при любой сумме заказа</span>
            </div>
          </li>
          <li className={styles.infoitem}>
            <img src={Clock} alt="clock" />
            <div>
              <p>Время доставки зависит от зоны доставки.</p>
              <ul>
                <li>Зеленая - от 30 минут</li>
                <li>Желтая - от 60 минут</li>
                <li>Красная - от 90 минут</li>
              </ul>
            </div>
          </li>
          <li className={styles.infoitem}>
            <img src={Date} alt="date" />
            <div>
              <p>График работы</p>
              <span>Принимаем и доставляем заказы с 08:00 до 05:00</span>
            </div>
          </li>
        </ul>
      </section>
      <section className={styles.payment}>
        <h2>Оплата</h2>
        <ul className={styles.paymentitems}>
          <li className={styles.paymentitem}>
            <img src={Credit} alt="credit" />
            <h2>Банковской картой</h2>
            <p>
              Вы можете оплатить заказ на сайте банковской картой
              Visa,Mastercard,МИР.
            </p>
          </li>
          <li className={styles.paymentitem}>
            <img src={Nfc} alt="nfc" />
            <h2>Безналичная оплата</h2>
            <p>
              Вы можете оплатить заказ безналичным способом, используя
              банковскую карту или через ваш смартфон с поддержкой NFC.
            </p>
          </li>
          <li className={styles.paymentitem}>
            <img src={Wallet} alt="cash" />
            <h2>Наличными курьеру</h2>
            <p>Вы можете оплатить заказ курьеру при получении.</p>
          </li>
        </ul>
      </section>
      <section>
        <h2>Зоны доставки</h2>
        <p>
          <iframe
            title="delivery-zone"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A6aeac2fb007fff3a2b1dc1456274afdec86ce4f99b5752e7694052c79a6da7b5&amp;source=constructor"
            width="100%"
            height="500"
            frameBorder="0"
          ></iframe>
        </p>
      </section>
    </section>
  );
};
export default Delivery;
