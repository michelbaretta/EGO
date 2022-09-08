import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Card(props) {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  const { product, filter } = props;

  if (
    (filter === "autos" &&
      (product.segment === "Sedan" || product.segment === "Hatchback")) ||
    (filter === "pickups" && product.segment === "Pickups y Comerciales") ||
    (filter === "suvs" && product.segment === "SUVs") ||
    filter === "todos"
  )
    return (
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        layout={true}
        className={styles.product}
      >
        <div key={product.id} className={styles.card}>
          <div className={styles.text}>
            <h2 className={styles.title}>{product.name}</h2>
            <span>{product.year}</span> <span>|</span>{" "}
            <span>{numberWithCommas(`$${product.price}`)}</span>
          </div>
          <img
            className={styles.small}
            src={product.photo}
            alt={product.name}
          ></img>
          <div className={styles.card_body}></div>
          <div className={styles.button_container}>
            <Link to={`/product/${product.id}`}>
              <button className={styles.button} type="button">
                Ver Modelo
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    );
}

export default Card;
