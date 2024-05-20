"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiperStyle.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { SwiperType } from "../types";
import { useSwiperData } from "../FetchData/useGetSwiper";

 function SwiperApp() {
  const [imagesSrc, setImagesSrc] = useState<SwiperType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await useSwiperData();
        setImagesSrc(data);
      } catch (error) {
        console.error("Failed to fetch images:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  const swiperList = imagesSrc.map((swiper, index) => (
    <SwiperSlide key={index}>
      <img
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
