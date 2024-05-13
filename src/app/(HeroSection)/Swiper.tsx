// Import Swiper React components
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiperStyle.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
const imagesSrc: string[] = [
  "/images/Banners/Banner1.jpg",
  "/images/Banners/Banner2.png",
  "/images/Banners/Banner3.jpg",
];
const swiperList = imagesSrc.map((src, index) => (
  <SwiperSlide key={index}>
    <img src={src} width={948} height={332} alt="Hot offer Image" />{" "}
  </SwiperSlide>
));

function SwiperApp() {
  return (
    <div style={{ position: "relative" }}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        {swiperList}
      </Swiper>
    </div>
  );
}
export default SwiperApp;
