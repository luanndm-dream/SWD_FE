import { Box } from "@mui/material";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css'
import { useEffect, useState } from "react";
import { axiosClient } from "../../lib/api/axiosClient";






const Map = () => {

    const [viewPort, setViewPort] = useState({
        width: "100%",
        height: "100%",
        latitude: 10.8231,
        longitude: 106.6297,
        zoom: 9,
    });


    const [dataOffice, setDataOffice] = useState([]);
    //call api get lat long Office
    const fetchOfficeData = async () => {
        try {
            const response = await axiosClient.get(`Api/V1/Office`, {
                params: {
                    Status: true,
                    pageIndex: 1,
                    pageSize: 20
                }
            });
            setDataOffice(response.data.data.items)
            console.log(response.data.data.items, "data office")
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        fetchOfficeData();
    }, []);

















    return (
        <div className='h-screen w-full' style={{ display: 'flex', flexDirection: 'column' }}>
            <Header />
            <div className='flex-grow flex' style={{ justifyContent: "space-between" }}>
                <Sidebar />

                <Box
                    sx={{
                        height: 400,
                        position: "relative"
                    }}
                >
                    <ReactMapGL
                        {...viewPort}
                        mapboxAccessToken="pk.eyJ1IjoidGhhbmhwaHUwMyIsImEiOiJjbHR1a3BmaWQxNnNrMmpsYWk4cGl2ZGVuIn0.974KLCaP4yQjRvImqhMA7w"
                        width="100%"
                        height="100%"
                        transitionDuration='200'

                    >

                    </ReactMapGL>


                </Box>
            </div>
        </div >
    );
}

export default Map;