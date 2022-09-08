import axios from "axios";
import React from "react";
import styles from "./ContentDetails.module.css";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import CardSlide from "./CardSlide";
import Photo1 from "../../images/photo1.png";
import Photo2 from "../../images/photo2.png";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

function ContentDetails() {
  const [products, setProducts] = useState([]);

  const params = useParams();
  const productId = params.id;
  const apiProduct = `https://challenge.agenciaego.tech/api/models/${productId}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(apiProduct);
        setProducts(response);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  function sacarHTML(palabra) {
    let newArray;
    let newNewArray;
    let newPalabra;

    newArray = palabra?.split("</p>");
    newNewArray = newArray?.[0]?.split(">");
    newPalabra = newNewArray?.[1];

    return newPalabra;
  }

  return (
    <div>
      {console.log(params)}
      <div className={styles.container}>
        <img
          className={styles.img}
          src={products.photo}
          alt={products.name}
        ></img>
        <div className={styles.text}>
          <h2 className={styles.name}>{products.name}</h2>
          <h3 className={styles.title}>{products.title}</h3>
          {console.log(sacarHTML(products?.model_highlights?.[0]?.content))}

          <p className={styles.textp}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non commodi
            itaque magni, qui architecto soluta quam! Dicta similique maiores
            doloremque corporis est vel, earum cupiditate, explicabo libero
            reprehenderit, quaerat atque.
          </p>
        </div>
      </div>
      <div className={styles.slider}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={15}
          slidesPerView={3}
          loop={true}
          navigation
          breakpoints={{
            // when window width is >= 340px
            200: {
              slidesPerView: 1,
            },
            576: {
              width: 576,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 1,
            },
            // when window width is >= 1040px
            1040: {
              width: 1040,
              slidesPerView: 2,
            },
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <CardSlide
              image={products.model_features?.[0].image}
              alt={products.name}
              title={products.model_features?.[0].name}
              text={products.model_features?.[0].description}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardSlide
              image={products.model_features?.[1].image}
              alt={products.name}
              title={products.model_features?.[1].name}
              text={products.model_features?.[1].description}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardSlide
              image={products.model_features?.[0].image}
              alt={products.name}
              title={products.model_features?.[0].name}
              text={products.model_features?.[0].description}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardSlide
              image={products.model_features?.[1].image}
              alt={products.name}
              title={products.model_features?.[1].name}
              text={products.model_features?.[1].description}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.bottom_container}>
        <div className={styles.bottom_containertext}>
          <h1 className={styles.bottom_title}>Título de 20 px</h1>
          <p className={styles.bottom_text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem aliquid magni aspernatur aperiam praesentium. Nobis
            doloribus amet architecto quod dicta sapiente, unde id reiciendis
            temporibus?
          </p>
        </div>
        <img
          className={styles.bottom_img}
          src={Photo1}
          alt={products.name}
        ></img>
      </div>
      <div className={styles.bottom_container1}>
        <img
          className={styles.bottom_img1}
          src={Photo2}
          alt={products.name}
        ></img>
        <div className={styles.bottom_containertext1}>
          <h1 className={styles.bottom_title1}>Título de 20 px</h1>
          <p className={styles.bottom_text1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem aliquid magni aspernatur aperiam praesentium. Nobis
            doloribus amet architecto quod dicta sapiente, unde id reiciendis
            temporibus?
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContentDetails;
