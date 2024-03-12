import { axiosClient } from "./axiosClient";

export const getBusRoutes = async (
    pageIndex = 1,
    pageSize = 200,
    searchParams = "",
) => {
    try{
        const { data } = await axiosClient.get(`/api/v1/Route/GetAllRoute?
        pageIndex=${pageIndex}&pageSize=${pageSize}
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
        const { data } = await axiosClient.get(`/api/v1/Route/GetRouteById/${id}`);
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