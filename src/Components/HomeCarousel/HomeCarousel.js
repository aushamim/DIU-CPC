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

const HomeCarousel = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        // autoplay={{
        //   delay: 3000,
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
          <img src={carouselItem1} alt="Carousel 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carouselItem2} alt="Carousel 2" />
          <div className="bg-emerald-300">Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={carouselItem3} alt="Carousel 3" />
          <div className="bg-emerald-300">Slide 3</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={carouselItem4} alt="Carousel 4" />
          <div className="bg-emerald-300">Slide 4</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={carouselItem5} alt="Carousel 5" />
          <div className="bg-emerald-300">Slide 5</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeCarousel;
