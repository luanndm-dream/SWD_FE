import { useState } from "react"
import OfficeIcon from "@/assets/icon/list.svg"
import BusLine from "@/assets/icon/bus-lane.svg"
import { busRoutes } from "./components/mock-data"
import BusRoute from "./components/BusRoute"

export default function BusManagementPage() {
  const [tabs, setTabs] = useState([
    { name: "Danh sách", isActive: true, icon: <div>
      <img src={OfficeIcon} alt="icon" className="h-14 w-14" />
    </div> },
    { name: "Tìm tuyến xe", isActive: false, icon:
    <div>
      <img src={BusLine} alt="icon" className="h-14 w-14" />
    </div>}
  ])
  return (
    <div className="w-full">
      <section className="flex w-full">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`flex-1 py-4 ${
              tab.isActive
                ? "border-b-2 border-blue-500"
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
            busRoutes.map((route, index) => (
              <BusRoute key={index} route={route} />
            ))
          }
        </div> 
        : 
        <div className="h-[80vh] overflow-y-scroll space-y-4">
          <div>
            <input
              type="text"
              placeholder="Nhập tên tuyến xe"
              className="w-full p-4 rounded-xl border-2 border-gray-300"
            />
          </div>
          {
            busRoutes.slice(7).map((route, index) => (
              <BusRoute key={index} route={route} />
            ))
          }
        </div>
        }
      </div>
    </div>
  )
}
