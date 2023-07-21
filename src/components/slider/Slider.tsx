import React from "react";
import classes from "./Slider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";

const Slider: React.FC = () => {
  return (
    <Swiper
      loop={true}
      navigation
      modules={[Navigation]}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
      }}
    >
      <SwiperSlide className={classes.slide}>
        <img
          src={`${process.env.PUBLIC_URL}/img/slide1.png`}
          alt="Game character - male"
        />
      </SwiperSlide>
      <SwiperSlide className={classes.slide}>
        <img
          src={`${process.env.PUBLIC_URL}/img/slide2.png`}
          alt="Game character - male"
        />
      </SwiperSlide>
      <SwiperSlide className={classes.slide}>
        <img
          src={`${process.env.PUBLIC_URL}/img/slide3.png`}
          alt="Game character - male"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
