import { StoreType } from "../types";
import { storeUrl } from "../BackEnd/endPoint";
const fetchStoresData = async (storeUrl: string): Promise<StoreType[]> => {
  try {
    const response = await fetch(storeUrl, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data?.data as StoreType[];
  } catch (error) {
    console.error("Fetching stores data failed:", error);
    throw error;
  }
};

const useStoresData = async () => {
  try {
    const storesData = await fetchStoresData(storeUrl);
    console.log("Stores Data:", storesData);
    return storesData;
  } catch (error) {
    console.error("Error in retrieving stores data:", error);
    return [];
  }
};
export { useStoresData };
