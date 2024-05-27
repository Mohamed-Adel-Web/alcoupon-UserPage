import { storeUrl } from "@/app/BackEnd/endPoint";
import { StoreType } from "@/app/types";

const fetchStoreData = async (storeUrl: string): Promise<StoreType> => {
  try {
    const response = await fetch(storeUrl, {
      method: "GET",
      next: {
        revalidate: 3600, // 1 hour
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data?.data as StoreType;
  } catch (error) {
    console.error("Fetching stores data failed:", error);
    throw error;
  }
};

const useSingleStoreData = async (id: string | null) => {
  try {
    const storesData = await fetchStoreData(`${storeUrl}/${id}`);
    console.log("Stores Data:", storesData);
    return storesData;
  } catch (error) {
    console.error("Error in retrieving stores data:", error);
    return null;
  }
};
export { useSingleStoreData };
