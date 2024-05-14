
import { GetLang } from "@/app/BackEnd/endPoint";
import { Language } from "@/app/types";
const fetchLang = async (GetLang: string): Promise<Language> => {
  try {
    const response = await fetch(GetLang, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data?.data as Language;
  } catch (error) {
    console.error("Fetching stores data failed:", error);
    throw error;
  }
};

const useGetLang = async () => {
  try {
    const Lang = await fetchLang(GetLang);
    console.log("current lang:", Lang);
    return Lang;
  } catch (error) {
    console.error("Error in retrieving lang data:", error);
    return Language.AR;
  }
};
export { useGetLang };
