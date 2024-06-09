import { StoreType } from "../types";
import { featuredStores } from "../BackEnd/endPoint";
const fetchStoresData = async (
  featuredStores: string
): Promise<StoreType[]> => {
  try {
    const response = await fetch(featuredStores, {
      method: "GET",
      next: {
        revalidate: 21600,
      },
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

const useFeaturedStoresData = async () => {
  try {
    const storesData = await fetchStoresData(featuredStores);
    console.log("Stores Data:", storesData);
    return storesData;
  } catch (error) {
    console.error("Error in retrieving stores data:", error);
    return [];
  }
};
export { useFeaturedStoresData };
