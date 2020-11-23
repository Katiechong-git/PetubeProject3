
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import 'swiper/swiper.scss';
// import Swiper styles
import "swiper/swiper-bundle.css";

export default function SwiperImage() {
  return (
    <Swiper
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div
          style={{height:700,backgroundImage:"url(https://www.ingridkuhn.com/themes/unitedpets/img/slider/slide3.jpg)",backgroundPosition:"center",backgroundSize:"cover"}}
        ></div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{height:700,backgroundImage:"url(https://www.ingridkuhn.com/themes/unitedpets/img/slider/slide3.jpg)",backgroundPosition:"center",backgroundSize:"cover"}}
        ></div>
      </SwiperSlide>
    </Swiper>
  );
};