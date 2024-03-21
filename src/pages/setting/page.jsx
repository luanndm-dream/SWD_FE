import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

const ManageSetting = () => {
    return ( 
        <div className='h-screen w-full'>
      <Header />
      <div className='h-full w-full flex'>
        <Sidebar />
        <div>Setting</div>
      </div>
    </div>
     );
}
 
export default ManageSetting;