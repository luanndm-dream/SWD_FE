import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
export default function HomePage() {
  return (
    <div className='h-screen w-full'>
      <Header />
      <div className='h-full w-full flex'>
        <Sidebar />
        <div>Home Page</div>
      </div>
    </div>
  )
}
