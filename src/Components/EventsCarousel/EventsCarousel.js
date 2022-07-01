import React from "react";

// Carousel Items
import carouselItem1 from "./../../Media/Images/CarouselItem 1.JPG";
import carouselItem2 from "./../../Media/Images/CarouselItem 2.JPG";
import carouselItem3 from "./../../Media/Images/CarouselItem 3.JPG";
import carouselItem4 from "./../../Media/Images/CarouselItem 4.JPG";
import carouselItem5 from "./../../Media/Images/CarouselItem 5.JPG";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";
import CountDown from "../CountDown/CountDown";

const EventsCarousel = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        // autoplay={{
        //   delay: 8000,
        //   disableOnInteraction: false,
        // }}
        grabCursor={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <div className="h-48 bg-white dark:bg-slate-800 flex items-center justify-center rounded-lg shadow-sm m-8">
            <CountDown date="Oct 3, 2022 3:00:00"></CountDown>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-48 bg-white dark:bg-slate-800 flex items-center justify-center rounded-lg shadow-sm m-8">
            <CountDown date="Jul 4, 2022 3:00:00"></CountDown>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-48 bg-white dark:bg-slate-800 flex items-center justify-center rounded-lg shadow-sm m-8">
            <CountDown date="Jul 5, 2022 3:00:00"></CountDown>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-48 bg-white dark:bg-slate-800 flex items-center justify-center rounded-lg shadow-sm m-8">
            <CountDown date="Jul 6, 2022 3:00:00"></CountDown>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-48 bg-white dark:bg-slate-800 flex items-center justify-center rounded-lg shadow-sm m-8">
            <CountDown date="Jul 7, 2022 3:00:00"></CountDown>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default EventsCarousel;
