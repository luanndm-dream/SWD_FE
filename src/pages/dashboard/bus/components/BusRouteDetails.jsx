import BusIcon from "@/assets/icon/bus-circle.svg"
import React from 'react'
export default function BusRouteDetails({
    route
}) {
  return (
    <div className='rounded-xl bg-[#F2F8FB] p-4 px-20 flex items-center gap-4 pt-0 pb-52'>
        <div>
            <img src={BusIcon} alt="icon" className="h-52 w-52" />
        </div>
        <div className='flex-1 flex flex-col self-start ml-10 gap-10 pt-52'>
            <span className='font-bold text-[#4BA2B6] text-3xl'>{route.name}</span>
            <span className='text-2xl'><b>Từ trạm: </b> {route.start}</span>
            <span className='text-2xl'><b>Đến trạm: </b> {route.end}</span>
            <span className='text-2xl'><b>Thời gian bắt đầu: </b> {route.startTime}</span>
            <span className='text-2xl'><b>Thời gian kết thúc: </b> {route.endTime}</span>
        </div>
    </div>
  )
}
