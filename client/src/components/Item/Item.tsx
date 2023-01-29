import React from "react";
import styles from "./Item.module.scss";
export const Item = () => {
  return (
    <div className={styles.catalog_list}>
      <div className={styles.item_wrapper}>
        <div className={styles.catalog_item}>
          <img
            src="https://habrastorage.org/webt/qc/fs/ni/qcfsnicmqu_zwlh4wv1nj7okqdq.jpeg"
            alt="itemphoto"
          />
          <div className="iteminfo">
            <div className={styles.item_name}>Маргарита</div>
            <p className={styles.item_desc}>Описание</p>
            <div className={styles.item_bottom}>
              <div className={styles.item_price}>{600}P</div>
              <button className={styles.addcart}>
                <b>+</b>
                <span>Добавить</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.item_wrapper}>
        <div className={styles.catalog_item}>
          <img
            src="https://habrastorage.org/webt/qc/fs/ni/qcfsnicmqu_zwlh4wv1nj7okqdq.jpeg"
            alt="itemphoto"
          />
          <div className="iteminfo">
            <div className={styles.item_name}>Маргарита</div>
            <p className={styles.item_desc}>Описание</p>
            <div className={styles.item_bottom}>
              <div className={styles.item_price}>{600}P</div>
              <button className={styles.addcart}>
                <b>+</b>
                <span>Добавить</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.item_wrapper}>
        <div className={styles.catalog_item}>
          <img
            src="https://habrastorage.org/webt/qc/fs/ni/qcfsnicmqu_zwlh4wv1nj7okqdq.jpeg"
            alt="itemphoto"
          />
          <div className="iteminfo">
            <div className={styles.item_name}>Маргарита</div>
            <p className={styles.item_desc}>Описание</p>
            <div className={styles.item_bottom}>
              <div className={styles.item_price}>{600}P</div>
              <button className={styles.addcart}>
                <b>+</b>
                <span>Добавить</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.item_wrapper}>
        <div className={styles.catalog_item}>
          <img
            src="https://habrastorage.org/webt/qc/fs/ni/qcfsnicmqu_zwlh4wv1nj7okqdq.jpeg"
            alt="itemphoto"
          />
          <div className="iteminfo">
            <div className={styles.item_name}>Маргарита</div>
            <p className={styles.item_desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              sapiente accusamus dicta facilis saepe voluptatibus ipsam itaque
              illo dolorum. Iure corporis obcaecati ipsa odit itaque soluta
              nulla voluptas labore cum rerum voluptate, accusamus, adipisci
              atque sit vel recusandae dolores impedit quas ratione. Modi
              maiores, dolores possimus omnis accusantium eaque harum laborum
              ut! Voluptatum culpa possimus facilis ex nobis cumque facere a
              aperiam error pariatur recusandae, cupiditate praesentium dolores
              quasi minima!
            </p>
            <div className={styles.item_bottom}>
              <div className={styles.item_price}>{600}P</div>
              <button className={styles.addcart}>
                <b>+</b>
                <span>Добавить</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Item;
