import List from "@/assets/icon/back.svg";
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import OfficeCardDetails from '../components/OfficeCardDetails';
import { OFFICES } from '../components/mock-data';

export default function OfficeDetails() {
    const navigate = useNavigate();
    const { id } = useParams()

    function handleClick() {
        navigate("/office")
    }
    const [office, setRoute] = useState(OFFICES.find(office => office.id == id))

  return (
    <div>
        <div onClick={handleClick} className='flex items-center gap-2 w-fit p-4 cursor-pointer'>
            <div>
                <img src={List} alt="icon" className="h-16 w-16" />
            </div>
            <button>Quay lại</button>
        </div>
        <OfficeCardDetails office={office}/>
    </div>
  )
}
