import { SwiperType } from "../types";
import { getSwiperUrl } from "../BackEnd/endPoint";
const fetchSwiperData = async (getSwiperUrl: string): Promise<SwiperType[]> => {
  try {
    const response = await fetch(getSwiperUrl, {
      method: "GET",
 next: {
        revalidate: 21600,
      },    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data?.data as SwiperType[];
  } catch (error) {
    console.error("Fetching Swiper data failed:", error);
    throw error;
  }
};

const useSwiperData = async () => {
  try {
    const SwiperData = await fetchSwiperData(getSwiperUrl);
    console.log("Swiper Data:", SwiperData);
    return SwiperData;
  } catch (error) {
    console.error("Error in retrieving Swiper data:", error);
    return [];
  }
};
export default useSwiperData;
