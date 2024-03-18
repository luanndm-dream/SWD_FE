import checklist from '@/assets/icon/checklist (1).svg';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Filter from './components/Filter.jsx';
import { Outlet } from 'react-router-dom';
import NotProccessList from './components/NotProccessList.jsx';
import ProccessList from './components/ProcessList.jsx';
import { useEffect, useState } from 'react';
import { getOrders } from '../../../lib/api/order-api.js';



export default function OrderManagementPage() {

  const [fromDate, setFromDate] = useState(null)
  const [toDate, setToDate] = useState(null)
  const [search, setSearch] = useState("")
  const [orders, setOrders] = useState([]);
  const [pageIndex, setPageIndex] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    console.log(search)
  }, [search, fromDate, toDate])

  const handleGetOrders = async () => {
    const response = await getOrders(pageIndex, pageSize, search);
    console.log(response);
    setOrders(response?.data?.items);
    setTotal(response?.data?.totalCount);
    console.log(orders?.data?.totalCount);
  }
  useEffect(() => {
    handleGetOrders();
  }, [pageIndex, pageSize, search])

  return (
    <div className='w-full h-full'>

      <div className='flex items-center px-4 py-2 border-b-2 border-[#4BA2B6]'>
        <img src={checklist} alt="checklist" className="w-8 h-8 inline-block" />
        <div className="uppercase px-4 py-2 text-base text-[#4BA2B6]">
          Danh Sách Đơn Hàng
        </div>
      </div>

      <Tabs defaultValue="notProcess" className="w-full mt-4" >
        <TabsList className='w-full grid grid-cols-2 h-14 bg-[#d5e9f5]'>
          <TabsTrigger value="notProcess" className='col-span-1 h-full'>Chưa xử lý</TabsTrigger>
          <TabsTrigger value="processed" className='col-span-1 h-full'>Đã xử lý</TabsTrigger>
        </TabsList>
        <TabsContent value="notProcess">
          <Filter setSearchToPage={setSearch} />
          <NotProccessList orders={orders} />
        </TabsContent>
        <TabsContent value="processed">
          <Filter setSearchToPage={setSearch} />
          <ProccessList orders={orders} />
        </TabsContent>
      </Tabs>

      <div className="flex justify-center gap-4 items-center mt-2">
        <button
          className="p-2 bg-slate-200 rounded-md cursor-pointer"
          onClick={() => {
            setPageIndex(pageIndex - 1)
          }}
          disabled={pageIndex === 1}
        >
          Trang trước
        </button>
        <div className="p-2 bg-slate-200 rounded-md">
          Trang {pageIndex} / {Math.ceil(total / pageSize)}
        </div>
        <button
          className="p-2 bg-slate-200 rounded-md cursor-pointer"
          onClick={() => {
            setPageIndex(pageIndex + 1)
          }}
          disabled={pageIndex * pageSize >= total}
        >
          Trang sau
        </button>
      </div>
    </div>
  )
}
