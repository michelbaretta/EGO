import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../../images/logoego.png";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  let id = location.pathname;
  const [nav, setNav] = useState(false);

  return (
    <header className={styles.navbar}>
      {console.log(id)}
      <Link to="/">
        <img src={Logo} alt="/" />
      </Link>
      <nav>
        <ul className={styles.menu}>
          <li>
            <a href="/" className={id === "/" ? styles.models : styles.models1}>
              Modelos
            </a>
          </li>
          <li>
            <a
              href="javascript: void(0)"
              className={id === "/" ? styles.models1 : styles.models}
            >
              Ficha de Modelo
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.menu2}>
        <div className={styles.menu3}>
          <div className={styles.menu4}>
            <span className={styles.menutext}>Menú</span>{" "}
          </div>
          <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
            <span className={styles.btn}>
              <AiOutlineMenu size={30}></AiOutlineMenu>{" "}
            </span>
            <div>
              <div
                className={
                  nav ? [styles.list, styles.active].join(" ") : [styles.list]
                }
              >
                <ul className={styles.first_items}>
                  <div className={styles.close}>
                    <span className={styles.closetext}>cerrar</span>
                    <AiOutlineClose size={10}></AiOutlineClose>
                  </div>
                  <li>
                    <a href="#">Modelos</a>
                  </li>
                  <li>
                    <a href="#">Servicios y Accesorios</a>
                  </li>
                  <li>
                    <a href="#">Financiación</a>
                  </li>
                  <li>
                    <a href="#">Reviews y Comunidad</a>
                  </li>
                  <hr className={styles.division}></hr>
                </ul>
                <ul className={styles.second_items}>
                  <li>
                    <a href="#">Toyota Mobility Service</a>
                  </li>
                  <li>
                    <a href="#">Toyota Gazoo Racing</a>
                  </li>
                  <li>
                    <a href="#">Toyota Híbridos</a>
                  </li>
                  <hr className={styles.division}></hr>
                </ul>
                <ul className={styles.third_items}>
                  <li>
                    <a href="#">Concesionarios</a>
                  </li>
                  <li>
                    <a href="#">Test Drive</a>
                  </li>
                  <li>
                    <a href="#">Contacto</a>
                  </li>
                  <hr className={styles.division}></hr>
                </ul>
                <ul className={styles.fourth_items}>
                  <li>
                    <a href="#">Actividades</a>
                  </li>
                  <li>
                    <a href="#">Servicios al Cliente</a>
                  </li>
                  <li>
                    <a href="#">Ventas Especiales</a>
                  </li>
                  <li>
                    <a href="#">Prensa</a>
                  </li>
                  <li>
                    <a href="#">Acerca de...</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
