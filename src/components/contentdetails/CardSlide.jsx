import React from "react";
import styles from "./ContentDetails.module.css";

const Card = ({ image, title, text, alt }) => {
  return (
    <div className={styles.container_card}>
      <div className={styles.card}>
        <div className={styles.container_img}>
          <img className={styles.img_card} src={image} alt={alt} />
        </div>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
