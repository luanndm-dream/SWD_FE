import { axiosClient, handleApiError } from "./axiosClient";

export const getBusById = async (BusId) => {
  try {
    const response = await axiosClient.get(`/api/v1/Bus/GetBusById/${BusId}`);
    return response?.data;
  } catch (error) {
    handleApiError(error);
  }
};
