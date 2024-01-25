// import './SizeBar.css';
// import React, { useState } from 'react';
// import chev from '../../assets/icon/left-chevron.svg';
// import ListSize from '../NavBar/ListSize';
// import TabButton from '../TabButton';

// const SizeBar = (props) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSizeBar = () => {
//     setIsOpen(!isOpen);
//   };

//   function handleSelect(selectedButton) {
//     console.log('hello world!');
//   }

//   const cssClass = isOpen ? 'cssOpen' : 'cssClose';

//   return (
//     <div className={`SizeBar ${cssClass}`} isOpen={props.isOpen}>
//       <button className="toggleButton" onClick={toggleSizeBar}>
//         <img  src={chev} alt="ChevLogo" />
//       </button>
//       <div className="menu" isOpen={isOpen}>
//         {isOpen && (
//           <section id="examples">
//             <menu>
//               <TabButton onSelect={() => handleSelect('Home')}>Home</TabButton>
//               <TabButton onSelect={handleSelect('Quản lý Office')}>Quản lý Office </TabButton>
//               <TabButton onSelect={handleSelect('Quản lý tuyến xe')}>Quản lý tuyến xe </TabButton>
//               <TabButton onSelect={handleSelect('Quản lý đơn hàng')}>Quản lý đơn hàng</TabButton>
//               <TabButton onSelect={handleSelect('Quản lý nhân viên')}>Quản lý nhân viên</TabButton>
//               <TabButton onSelect={handleSelect('Cài đặt')}>Cài đặt</TabButton>
//             </menu>
//           </section>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SizeBar;


// SizeBar.js

import React, { useState } from 'react';
import ToggleButton from '../ToggleButton';
import ListSize from '../NavBar/ListSize';
import './SizeBar.css';
import googleMapImage from '../../assets/images/ggMap.png'; 
const SizeBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSizeBar = () => {
    setIsOpen(!isOpen);
  };

  function handleSelect(selectedButton) {
    console.log('hello world!');
  }

  const cssClass = isOpen ? 'cssOpen' : 'cssClose';

  return (
    <div className={`SizeBar ${cssClass}`} isOpen={props.isOpen}>
      <ToggleButton isOpen={isOpen} toggleSizeBar={toggleSizeBar} />
      <ListSize isOpen={isOpen} handleSelect={handleSelect} />
      
        <div className="google-map-container">
          <img src={googleMapImage} alt="Google Map" />
        </div>
      
    </div>
  );
};

export default SizeBar;

