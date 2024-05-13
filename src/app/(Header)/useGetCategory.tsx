import { categoryTypes } from "../types";
import { AllCategories } from "../BackEnd/endPoint";
const fetchCategoriesData = async (
  featuredCategories: string
): Promise<categoryTypes[]> => {
  try {
    const response = await fetch(AllCategories, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data?.data as categoryTypes[];
  } catch (error) {
    console.error("Fetching Categories data failed:", error);
    throw error;
  }
};

const useGetCategories = async () => {
  try {
    const CategoriesData = await fetchCategoriesData(AllCategories);
    console.log("Categories Data:", CategoriesData);
    return CategoriesData;
  } catch (error) {
    console.error("Error in retrieving Categories data:", error);
    return [];
  }
};
export { useGetCategories };
