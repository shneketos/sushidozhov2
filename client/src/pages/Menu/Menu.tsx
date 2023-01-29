import React from "react";
import Item from "../../components/Item/Item";
import styles from "./Menu.module.scss";

export const Menu = () => {
  return (
    <main>
      <aside>
        <ul>
          <li>
            <a href="#pizza">Пицца</a>
          </li>
          <li>
            <a href="#rolls">Роллы</a>
          </li>
          <li>
            <a href="#sushi">Суши</a>
          </li>
          <li>
            <a href="#sets">Сеты</a>
          </li>
        </ul>
      </aside>
      <section className={styles.section}>
        <p id="pizza">Пицца</p>
        <Item />
        <p id="rolls">Роллы</p>
        <Item />
        <p id="sushi">Суши</p>
        <Item />
        <p id="sets">Сеты</p>
        <Item />
      </section>
    </main>
  );
};
export default Menu;
