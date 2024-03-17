
import { axiosClient, handleApiError } from "./axiosClient";

export const getBusById = async (BusId) => {
  try {
    const response = await axiosClient.get(`/api/v1/Bus/GetBusById/${BusId}`);
    return response?.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const getBusRoutes = async (
    pageIndex = 1,
    pageSize = 200,
    searchParams = "",
) => {
    try{
        const { data } = await axiosClient.get(`/api/v1/Route?pageIndex=${pageIndex}&pageSize=${pageSize}
        ${
            searchParams ? `&searchParams=${searchParams}` : ""
        }
        `);
        return {
            error: null,
            data: data
        }
    }catch(e){
        return {
            error: e?.response,
            data: null
        };
    }
}

export const getBusRoute = async (id) => {
    try{
        const { data } = await axiosClient.get(`/api/v1/Route/${id}`);
        return {
            error: null,
            data: data
        }
    }catch(e){
        return {
            error: e?.response,
            data: null
        };
    }
}
