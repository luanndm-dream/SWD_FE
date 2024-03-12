import { axiosClient, handleApiError } from "./axiosClient";

export const getOffices = async () => {
    try{
        const { data } = await axiosClient.get("/api/v1/Office/GetOffices?status=true&pageIndex=1&pageSize=100");
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

export const getOffice = async (id) => {
    try{
        const { data } = await axiosClient.get(`/api/v1/Office/GetOffices/${id}`);
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