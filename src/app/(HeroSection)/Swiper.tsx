"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiperStyle.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { SwiperType } from "../types";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

function SwiperApp({ swiperData }: { swiperData: SwiperType[] }) {
  const searchParam = useSearchParams();
  const lang = searchParam?.get("lang");
  const swiperList = swiperData.map((swiper, index) => (
    <SwiperSlide key={index}>
      <Image
        src={lang == "en" ? swiper.image_en : swiper.image_ar}
        width={948}
        height={332}
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
