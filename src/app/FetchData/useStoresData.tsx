import { StoreType } from "../types";
import { storeUrl } from "../BackEnd/endPoint";
type StoresResponse = {
  last_page: number;
  storesData: StoreType[];
};
const fetchStoresData = async (storeUrl: string): Promise<StoresResponse> => {
  try {
    const response = await fetch(storeUrl, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return {
      storesData: data?.data as StoreType[],
      last_page: data?.last_page,
    };
  } catch (error) {
    console.error("Fetching stores data failed:", error);
    throw error;
  }
};

const useStoresData = async (page = 1) => {
  try {
    const { storesData, last_page } = await fetchStoresData(
      `${storeUrl}?page=${page}`
    );
    return { storesData, last_page };
  } catch (error) {
    console.error("Error in retrieving stores data:", error);
    return { lastPage: 0, storesData: [] };
  }
};
export { useStoresData };
