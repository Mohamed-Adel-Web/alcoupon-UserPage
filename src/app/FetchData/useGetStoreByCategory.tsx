import { AllCategories } from "@/app/BackEnd/endPoint";
import { StoreType, categoryTypes } from "@/app/types";
import { redirect } from "next/navigation";

const fetchStoresByCategory = async (
  storeUrl: string
): Promise<categoryTypes> => {
  try {
    const response = await fetch(storeUrl, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data?.data as categoryTypes;
  } catch (error) {
    console.error("Fetching stores data failed:", error);
    throw error;
  }
};

const useGetStoreByCategory = async (id: string | null) => {
  try {
    const categoryData = await fetchStoresByCategory(`${AllCategories}/${id}`);
    return categoryData;
  } catch (error) {
    console.error("Error in retrieving stores data:", error);
    return null;
  }
};
export { useGetStoreByCategory };
