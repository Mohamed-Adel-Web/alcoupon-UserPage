import { couponUrl } from "../BackEnd/endPoint";
import { couponType } from "../types";

type CouponsResponse = {
  last_page: number;
  couponsData: couponType[];
};

const fetchCouponsData = async (url: string): Promise<CouponsResponse> => {
  try {
    const response = await fetch(url, {
      method: "GET",
      cache: "force-cache",
      // next: { revalidate: 10800 },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    return {
      last_page: responseData?.last_page,
      couponsData: responseData?.data as couponType[],
    };
  } catch (error) {
    console.error("Fetching coupon data failed:", error);
    throw error;
  }
};

const useCouponsData = async (page = 1) => {
  try {
    const { last_page, couponsData } = await fetchCouponsData(
      `${couponUrl}?page=${page}`
    );
    return { last_page, couponsData };
  } catch (error) {
    console.error("Error in retrieving coupons data:", error);
    return { lastPage: 0, couponsData: [] };
  }
};

export { useCouponsData };
