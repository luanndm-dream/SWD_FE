import { axiosClient, handleApiError } from "./axiosClient";

export const getPackageById = async (packageId) => {
  try {
    const response = await axiosClient.get(`/api/v1/Package/${packageId}`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const getPackages = async (pageIndex, pageSize, search, fromTime, toTime) => {
  try {
    const response = await axiosClient.get(
      `/api/v1/Package?pageIndex=${pageIndex}&pageSize=${pageSize}
        ${search ? `&search=${search}` : ""}
        ${fromTime ? `&fromTime=${fromTime}` : ""}
        ${toTime ? `&toTime=${toTime}` : ""}
`
    );
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
}