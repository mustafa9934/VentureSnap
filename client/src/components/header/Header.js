import React from "react";
import styles from "./Header.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Navbar from "../navbar/Navbar";

const Header = () => {
  return (
    <>
      <Navbar />
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className={styles.swiper}>
        <SwiperSlide className={styles.swiper_slider}>
          <img
            src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="slide-1"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slider}>
          <img
            src="https://images.pexels.com/photos/2478248/pexels-photo-2478248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="slide-1"
          />
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slider}>
          <img
            src="https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="slide-1"
          />
        </SwiperSlide>
      </Swiper>
      <div className={styles.header_container}>
        <div className="container">
          <div className={styles.header_wrapper}>
            <h1 className={styles.header_main_title}>
              No matter where you goes, Just share your experience.
            </h1>
            <div className={styles.header_booked}>
              <div className={styles.header_booked_images}>
                <img
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400"
                  className={styles.header_booked_item}
                  alt=""
                />
                <img
                  src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=400"
                  className={styles.header_booked_item}
                  alt=""
                />
                <img
                  src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400"
                  className={styles.header_booked_item}
                  alt=""
                />
                <img
                  src="https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=400"
                  className={styles.header_booked_item}
                  alt=""
                />
                <img
                  src="https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=400"
                  className={styles.header_booked_item}
                  alt=""
                />
              </div>
              <p className={styles.header_booked_text}>
                Arround 200 peoples have shared their travel experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
