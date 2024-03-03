import checklist from '@/assets/icon/checklist (1).svg';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Filter from './components/Filter.jsx';
import { Outlet } from 'react-router-dom';

export default function OrderManagementPage() {
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
          <Filter />
          <Outlet />
        </TabsContent>
        <TabsContent value="processed">
          <Filter />
          <Outlet />
        </TabsContent>
      </Tabs>



    </div>
  )
}
