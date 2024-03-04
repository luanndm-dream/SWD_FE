import React from 'react'
import BusIcon from "@/assets/icon/office.svg"
import List from "@/assets/icon/document.svg"
import Clock from "@/assets/icon/clock.svg"
import Pencil from "@/assets/icon/pencil.svg"
import Bin from "@/assets/icon/bin.svg"
import CheckList from "@/assets/icon/to-do-list.svg"
import Money from "@/assets/icon/money.svg"
import { Link } from 'react-router-dom'
import { formatPrice } from '../../../../lib/formatPrice'
export default function OfficeCard({
    office
}) {
  return (
    <div className='rounded-xl bg-slate-200 p-4 px-6 flex items-center gap-4'>
        <div>
            <img src={BusIcon} alt="icon" className="h-32 w-32" />
        </div>
        <div className='flex-1 flex flex-col ml-10 gap-4'>
            <span className='font-bold text-[#4BA2B6]'>{office?.name}</span>
            <span className='flex gap-2 items-center'>
                <img src={CheckList} alt="icon" className="h-10 w-10" />
                <span>Có {office?.orderQuantity} đơn hàng</span>
            </span>
            <div className='self-stretch flex gap-2'>
                <span className='flex gap-2 items-center'>
                    <img src={Clock} alt="icon" className="h-10 w-10" />
                    {office?.startTime} - {office?.endTime}
                </span>
                <span className='flex gap-2 items-center flex-1 flex justify-center'>
                    <img src={Money} alt="icon" className="h-10 w-10" />
                    {formatPrice(office?.totalRevenue || 0)}
                </span>
            </div>
        </div>
        <div>
            <Link to={"/office/"+office?.id} className='p-2 flex items-center gap-4 cursor-pointer'>
                <div>
                    <img src={List} alt="icon" className="h-10 w-10" />
                </div>
                Xem chi tiết
            </Link>
            <div className='p-2 flex items-center gap-4 cursor-pointer'>
                <div>
                    <img src={Pencil} alt="icon" className="h-10 w-10" />
                </div>
                Chỉnh sửa
            </div>
            <div className='p-2 flex items-center gap-4 cursor-pointer'>
                <div>
                    <img src={Bin} alt="icon" className="h-10 w-10" />
                </div>
                Xóa
            </div>
        </div>
    </div>
  )
}
