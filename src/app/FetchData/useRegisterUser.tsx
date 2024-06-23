import axios from "axios";
import { usersUrl } from "../BackEnd/endPoint";
import { userType } from "../types";

interface FetchUserDataResponse {
  isSuccess: boolean;
  errorMessage?: string;
}

const fetchUserData = async (
  userUrl: string,
  requestBody: userType
): Promise<FetchUserDataResponse> => {
  try {
    await axios.post(userUrl, requestBody);
    return { isSuccess: true };
  } catch (error) {
    let errorMessage = "An error occurred";
    if (axios.isAxiosError(error) && error.response) {
      errorMessage = error.response.data.errors.errors.email || errorMessage;
    }
    return { isSuccess: false, errorMessage };
  }
};

const useUserData = async (requestBody: userType) => {
  try {
    const response = await fetchUserData(usersUrl, requestBody);
    return response;
  } catch (error) {
    console.error("Error in retrieving user data:", error);
    return { isSuccess: false, errorMessage: "An unexpected error occurred" };
  }
};

export default useUserData;
