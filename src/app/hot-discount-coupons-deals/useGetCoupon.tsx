import { couponUrl } from "../BackEnd/endPoint";
import { couponType } from "../types";
const fetchCouponsData = async (couponUrl: string): Promise<couponType[]> => {
  try {
    const response = await fetch(couponUrl, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data?.data as couponType[];
  } catch (error) {
    console.error("Fetching coupon data failed:", error);
    throw error;
  }
};

const useCouponsData = async () => {
  try {
    const couponsData = await fetchCouponsData(couponUrl);
    console.log("coupons Data:", couponsData);
    return couponsData;
  } catch (error) {
    console.error("Error in retrieving stores data:", error);
    return [];
  }
};
export { useCouponsData};
