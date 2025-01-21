import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { sliderImage } from "../data/data";
const Slide = () => {
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[80vh] mt-0"
      >
        {sliderImage.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <figure className="w-[100vw] h-[100vh] flex flex-row items-center justify-evenly">
                <figcaption className="text-center mt-4">
                  <p className="text-xl font-bold">{slide.title}</p>
                  <p className="text-sm mt-2">{slide.description}</p>
                </figcaption>
                <img
                  src={slide.image}
                  alt=""
                  className="w-[10rem] h-auto object-cover"
                />
              </figure>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Slide;
