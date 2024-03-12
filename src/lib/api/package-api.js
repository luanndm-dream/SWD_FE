import { axiosClient, handleApiError } from "./axiosClient";

export const getPackageById = async (packageId) => {
  try {
    const response = await axiosClient.get(
      `/api/v1/Package/GetPackage/${packageId}`
    );
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
