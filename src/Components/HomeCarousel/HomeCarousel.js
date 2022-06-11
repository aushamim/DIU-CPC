import React from "react";

// Carousel Items
import carouselItem1 from "./../../Media/Images/CarouselItem 1.JPG";
import carouselItem2 from "./../../Media/Images/CarouselItem 2.JPG";
import carouselItem3 from "./../../Media/Images/CarouselItem 3.JPG";
import carouselItem4 from "./../../Media/Images/CarouselItem 4.JPG";
import carouselItem5 from "./../../Media/Images/CarouselItem 5.JPG";

const HomeCarousel = () => {
  return (
    <div>
      <div>
        <img src={carouselItem1} alt="Carousel 1" />
      </div>
      <div>
        <img src={carouselItem2} alt="Carousel 2" />
      </div>
      <div>
        <img src={carouselItem3} alt="Carousel 3" />
      </div>
      <div>
        <img src={carouselItem4} alt="Carousel 4" />
      </div>
      <div>
        <img src={carouselItem5} alt="Carousel 5" />
      </div>
    </div>
  );
};

export default HomeCarousel;
