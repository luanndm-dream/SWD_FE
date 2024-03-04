import FindOffice from "@/assets/icon/find-office.svg"
import OfficeIcon from "@/assets/icon/list.svg"
import CreateOffice from "@/assets/icon/create-office.svg"
import { useState } from "react"
import { OFFICES } from "./components/mock-data"
import OfficeCard from "./components/OfficeCard"
import { Search } from "lucide-react"

export default function OfficeManagementPage() {

  const [tabs, setTabs] = useState([
    { name: "Danh sách", isActive: true, icon: <div>
      <img src={OfficeIcon} alt="icon" className="h-14 w-14" />
    </div> },
    { name: "Tìm Office", isActive: false, icon:
    <div>
      <img src={FindOffice} alt="icon" className="h-14 w-14" />
    </div>},
    {
      name: "Tạo mới office", isActive: false, icon:
      <div>
        <img src={CreateOffice} alt="icon" className="h-14 w-14" />
      </div>
    }
  ])
  
  return (
    <div className="w-full">
      <section className="flex w-full">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`flex-1 py-4 ${
              tab.isActive
                ? "border-b-2 border-[#4BA2B6]"
                : "border-b-2 border-transparent"
            }`}
          >
            <button
              className="w-full flex justify-center gap-4 items-center"
              onClick={() => {
                const newTabs = tabs.map((t, i) => {
                  if (index === i) {
                    return { ...t, isActive: true }
                  }
                  return { ...t, isActive: false }
                })
                setTabs(newTabs)
              }}
            >
              {
                tab.icon
              }
              {tab.name}
            </button>
          </div>
        ))}
      </section>
      <div className="p-2">{tabs[0].isActive ? 
        <div className="h-[80vh] overflow-y-scroll space-y-4">
          {
            OFFICES.map((office, index) => (
              <OfficeCard key={index} office={office}/>
            ))
          }
        </div> 
        : <div>
          {
            tabs[1].isActive ? 
            <div className="h-[80vh] overflow-y-scroll space-y-4">
              <div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Nhập tên văn phòng"
                    className="w-full p-4 rounded-xl border-2 border-gray-300 pl-16"
                  />
                  <Search className="absolute left-6 top-5 text-gray-400" />
                </div>
                <div className="py-2 px-4 bg-slate-200 rounded-md mt-4">
                  Có 10 địa điểm/tên trùng với tìm kiếm
                </div>
              </div>
              {
                OFFICES.map((office, index) => (
                  <OfficeCard key={index} office={office}/>
                ))
              }
            </div>
            : 
            <div>
              Form tạo
            </div>
          }
        </div>
        
        }
      </div>
    </div>
  )
}
