// import React from "react";
// import TabButton from "../TabButton";
// import '../NavBar/ListSize.css';
// import SizeBar from './../SizeBar/SizeBar';
// export default function ListSize() {
//     // const [selectedTopic, setSelectedTopic] = useState();
//     function handleSelect(selectedButton){
//         //selectedButton => 'component'
//         console.log('hello world!');
//       }

//     return (
//         <section id="examples">
            
//                 <menu>
//                 {/* onClick={() => handleSlect('Home')} */}
//                     <TabButton onSelect={() => handleSelect('Home')}>Home</TabButton>
//                     <TabButton onSelect={handleSelect('Quản lý Office')}>Quản lý Office </TabButton>
//                     <TabButton onSelect={handleSelect('Quản lý tuyến xe')}>Quản lý tuyến xe </TabButton>
//                     <TabButton onSelect={handleSelect('Quản lý đơn hàng')}>Quản lý đơn hàng</TabButton>
//                     <TabButton onSelect={handleSelect('Quản lý nhân viên')}>Quản lý nhân viên</TabButton>
//                     <TabButton onSelect={handleSelect('Cài đặt')}>Cài đặt</TabButton>
//                 </menu>


//          </section>
//     )
// }
// //



import React from 'react';
import TabButton from '../TabButton';
import '../SizeBar/SizeBar.css';
import settingsIcon from  '../../assets/icon/settings3.svg';
import managerOrderIcon from  '../../assets/icon/order-management.svg';
import managerStaffIcon from  '../../assets/icon/staff-management.svg';
import managerRouteIcon from  '../../assets/icon/route management.svg';
import managerOfficeIcon from  '../../assets/icon/office-management.svg';
import home from  '../../assets/icon/home.svg';
const ListSize = ({ isOpen, handleSelect }) => {
    return (
      <div className="menu" isOpen={isOpen}>
        {isOpen && (
          <section id="examples">
            <menu>
              <TabButton onSelect={() => handleSelect('Home')}imgSrc={home}>Home</TabButton>
              <TabButton onSelect={handleSelect('Quản lý Office')}imgSrc={managerOfficeIcon}>Quản lý Office </TabButton>
              <TabButton onSelect={handleSelect('Quản lý tuyến xe')}imgSrc={managerRouteIcon}>Quản lý tuyến xe </TabButton>
              <TabButton onSelect={handleSelect('Quản lý đơn hàng')}imgSrc={managerOrderIcon}>Quản lý đơn hàng</TabButton>
              <TabButton onSelect={handleSelect('Quản lý nhân viên')}imgSrc={managerStaffIcon}>Quản lý nhân viên</TabButton>
              <TabButton onSelect={handleSelect('Cài đặt')}imgSrc={settingsIcon}>Cài đặt</TabButton>
            </menu>
          </section>
        )}
      </div>
    );
  };
  
  export default ListSize;