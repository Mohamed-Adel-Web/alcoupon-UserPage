import { couponType } from "../types";
import { featuredCoupons } from "../BackEnd/endPoint";
const fetchCouponsData = async (
  featuredCoupons: string
): Promise<couponType[]> => {
  try {
    const response = await fetch(featuredCoupons, {
      method: "GET",
      cache: "force-cache",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data?.data as couponType[];
  } catch (error) {
    console.error("Fetching coupons data failed:", error);
    throw error;
  }
};

const useFeaturedCoupons = async () => {
  try {
    const couponsData = await fetchCouponsData(featuredCoupons);
    console.log("coupons Data:", couponsData);
    return couponsData;
  } catch (error) {
    console.error("Error in retrieving coupons data:", error);
    return [];
  }
};
export { useFeaturedCoupons };
