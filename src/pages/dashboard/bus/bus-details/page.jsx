import React from 'react'
import {  useNavigate } from 'react-router-dom';
import List from "@/assets/icon/back.svg"

export default function BusDetaisPage() {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/bus")
    }
  return (
    <div>
        <div onClick={handleClick} className='flex items-center gap-2 w-fit p-4'>
            <div>
                <img src={List} alt="icon" className="h-10 w-10" />
            </div>
            <button>Back</button>
        </div>
    </div>
  )
}
