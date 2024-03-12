import { axiosClient, handleApiError } from "./axiosClient";

export const getOrders = async () => {
  try {
    const response = await axiosClient.get("/api/v1/Order/GetOrders");
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const getOrderById = async (orderId) => {
  try {
    const response = await axiosClient.get(
      `/api/v1/Order/GetOrders/${orderId}`
    );
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
