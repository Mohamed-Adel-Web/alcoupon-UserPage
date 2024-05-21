"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiperStyle.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { SwiperType } from "../types";
import Image from "next/image";

function SwiperApp({ swiperData }: { swiperData: SwiperType[] }) {
  const swiperList = swiperData.map((swiper, index) => (
    <SwiperSlide key={index}>
      <Image
        src={swiper.images.images}
        width={948}
        height={302}
        alt="Hot offer Image"
      />
    </SwiperSlide>
  ));

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
        className="mySwiper"
      >
        {swiperList}
      </Swiper>
    </div>
  );
}
export default SwiperApp;
