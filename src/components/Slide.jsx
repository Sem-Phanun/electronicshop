import React from "react";
import { Link } from "react-router-dom";
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
          delay: 3000,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[25rem] mt-0 "
      >
        {sliderImage.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <figure className="mt-20 flex flex-row items-center justify-evenly max-[428px]:flex-col max-[428px]:py-4 max-[428px]:mt-4">
                <figcaption className="text-center mt-4  max-[428px]:-mt-10 max-[428px]:p-4">
                  <p className="text-xl font-bold">{slide.title}</p>
                  <p className="text-sm mt-2">{slide.description}</p>
                  <Link to={""} className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">More</Link>
                </figcaption>
                <img
                  src={slide.image}
                  alt=""
                  className="w-[14rem] h-auto object-cover max-[428px]:h-auto max-[428px]:w-[10rem]"
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
