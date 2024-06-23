import axios from "axios";
import { usersUrl } from "../BackEnd/endPoint";
import { userType } from "../types";
const fetchUserData = async (
  userUrl: string,
  requestBody: userType
): Promise<boolean> => {
  try {
    const response = await axios.post(userUrl, requestBody);

    return true;
  } catch (error) {
    console.error("Fetching user data failed:", error);
    return false;
  }
};

const useUserData = async (requestBody: userType) => {
  try {
    const isSuccess = await fetchUserData(usersUrl, requestBody);
    return { isSuccess };
  } catch (error) {
    console.error("Error in retrieving user data:", error);
    return { isSuccess: false };
  }
};

export default useUserData;
