import React from 'react'
import BusIcon from "@/assets/icon/bus-circle.svg"
import List from "@/assets/icon/document.svg"
import Clock from "@/assets/icon/clock.svg"
import { Link } from 'react-router-dom'
export default function BusRoute({
    route
}) {
  return (
    <div className='rounded-xl bg-slate-200 p-4 px-6 flex items-center gap-4'>
        <div>
            <img src={BusIcon} alt="icon" className="h-32 w-32" />
        </div>
        <div className='flex-1 flex flex-col self-start ml-10 gap-2'>
            <span className='font-bold text-[#4BA2B6]'>{route.name}</span>
            <span className='text-[16px]'>{route.start} - {route.end}</span>
            <span className='flex gap-2 items-center'>
                <img src={Clock} alt="icon" className="h-10 w-10" />
                {route.startTime} - {route.endTime}
            </span>
        </div>
        <Link to={"/bus/"+route.id} className='p-4 flex items-center gap-4 cursor-pointer'>
            <div>
                <img src={List} alt="icon" className="h-10 w-10" />
            </div>
            Xem chi tiết
        </Link>
    </div>
  )
}
