import React from "react";
import axios from "axios";
import Card from "../card/Card";
import LoadingBox from "../loading/Loading";
import MessageBox from "../message/Message";
import styles from "./Hero.module.css";
import { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineDown } from "react-icons/ai";

function Hero() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("todos");
  const [order, setOrder] = useState("none");
  const [isActive, setIsActive] = useState(false);
  const [isActiveFilter, setIsActiveFilter] = useState(false);
  const [selected, setSelected] = useState("Filtrar por");
  const [selectedFilter, setSelectedFilter] = useState("Ordenar por");

  const url = "https://challenge.agenciaego.tech/api/models/";

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, []);

  const sortOrder = (e) => {
    if (order === "lowest") {
      e.sort((a, b) => a.price - b.price);
      return e;
    } else if (order === "highest") {
      e.sort((a, b) => b.price - a.price);
      return e;
    } else if (order === "oldest") {
      e.sort((a, b) => a.year - b.year);
      return e;
    } else if (order === "newest") {
      e.sort((a, b) => b.year - a.year);
      return e;
    } else if (order === "none") {
      return e;
    }
  };

  return (
    <div>
      <div>
        <div>
          <h1 className={styles.title}>Descubrí todos los modelos</h1>
        </div>
        <div className={styles.bar}>
          <div className={styles.filters}>
            <span className={styles.filter_title}>Filtrar por</span>
            <span
              className={filter === "todos" ? styles.active : styles.item}
              onClick={() => setFilter("todos")}
            >
              Todos
            </span>
            <span
              className={filter === "autos" ? styles.active : styles.item}
              onClick={() => setFilter("autos")}
            >
              Autos
            </span>
            <span
              className={filter === "pickups" ? styles.active : styles.item}
              onClick={() => setFilter("pickups")}
            >
              Pickups y Comerciales
            </span>
            <span
              className={filter === "suvs" ? styles.active : styles.item}
              onClick={() => setFilter("suvs")}
            >
              SUVs y Crossovers
            </span>
            <div className={styles.dropdown}>
              <div
                className={styles.dropdown_btn}
                onClick={(e) => setIsActive(!isActive)}
              >
                {selected}
                <span
                  className={isActive === true ? styles.icon2 : styles.icon}
                >
                  <AiOutlineDown></AiOutlineDown>
                </span>
              </div>
              {isActive && (
                <ul className={styles.dropdown_content}>
                  <li>
                    <span
                      className={
                        filter === "todos" ? styles.active2 : styles.item2
                      }
                      onClick={() => setFilter("todos")}
                    >
                      Todos
                    </span>
                  </li>
                  <li>
                    <span
                      className={
                        filter === "autos" ? styles.active2 : styles.item2
                      }
                      onClick={() => setFilter("autos")}
                    >
                      Autos
                    </span>
                  </li>
                  <li>
                    <span
                      className={
                        filter === "pickups" ? styles.active2 : styles.item2
                      }
                      onClick={() => setFilter("pickups")}
                    >
                      Pickups y Comerciales
                    </span>
                  </li>

                  <li>
                    <span
                      className={
                        filter === "suvs" ? styles.active2 : styles.item2
                      }
                      onClick={() => setFilter("suvs")}
                    >
                      SUVs y Crossovers
                    </span>
                  </li>
                </ul>
              )}
            </div>
          </div>

          <div>
            <div className={styles.dropdown1}>
              <div
                className={styles.dropdown_btn1}
                onClick={(e) => setIsActiveFilter(!isActiveFilter)}
              >
                {selectedFilter}
                <span
                  className={
                    isActiveFilter === true ? styles.icon2 : styles.icon
                  }
                >
                  <AiOutlineDown></AiOutlineDown>
                </span>
              </div>
              {isActiveFilter && (
                <ul className={styles.dropdown_content}>
                  <li>
                    <span
                      className={
                        filter === "none" ? styles.active2 : styles.item2
                      }
                      onClick={() => setOrder("none")}
                    >
                      Nada
                    </span>
                  </li>
                  <li>
                    <span
                      className={
                        filter === "lowest" ? styles.active2 : styles.item2
                      }
                      onClick={() => setOrder("lowest")}
                    >
                      De <span className={styles.bold}>menor</span> a{" "}
                      <span className={styles.bold}>mayor</span> precio
                    </span>
                  </li>
                  <li>
                    <span
                      className={
                        filter === "highest" ? styles.active2 : styles.item2
                      }
                      onClick={() => setOrder("highest")}
                    >
                      De <span className={styles.bold}>mayor</span> a{" "}
                      <span className={styles.bold}>menor</span> precio
                    </span>
                  </li>

                  <li>
                    <span
                      className={
                        filter === "newest" ? styles.active2 : styles.item2
                      }
                      onClick={() => setOrder("newest")}
                    >
                      Más <span className={styles.bold}>nuevo</span> primero
                    </span>
                  </li>
                  <li>
                    <span
                      className={
                        filter === "oldest" ? styles.active2 : styles.item2
                      }
                      onClick={() => setOrder("oldest")}
                    >
                      Más <span className={styles.bold}>viejo</span> primero
                    </span>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.division}></hr>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        className={styles.container_card}
        layout={true}
      >
        <motion.div layout={true} className={styles.card}>
          {sortOrder(data).map((data) => (
            <Card key={data.id} product={data} filter={filter}></Card>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;
