import React, { useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom';
import List from "@/assets/icon/back.svg"
import BusRouteDetails from '../components/BusRouteDetails';
import { busRoutes } from '../components/mock-data';

export default function BusDetaisPage() {
    const navigate = useNavigate();
    const { id } = useParams()

    function handleClick() {
        navigate("/bus")
    }
    const [route, setRoute] = useState(busRoutes.find(route => route.id == id))

  return (
    <div>
        <div onClick={handleClick} className='flex items-center gap-2 w-fit p-4 cursor-pointer'>
            <div>
                <img src={List} alt="icon" className="h-16 w-16" />
            </div>
            <button>Quay lại</button>
        </div>
        <BusRouteDetails route={route}/>
    </div>
  )
}
