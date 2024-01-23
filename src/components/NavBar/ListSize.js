import React from "react";
import TabButton from "../TabButton";
import '../NavBar/ListSize.css';
import SizeBar from './../SizeBar/SizeBar';
export default function ListSize() {
    // const [selectedTopic, setSelectedTopic] = useState();
    function handleSelect(selectedButton){
        //selectedButton => 'component'
        console.log('hello world!');
      }

    return (
        <section id="examples">
            
                <menu>
                {/* onClick={() => handleSlect('Home')} */}
                    <TabButton onSelect={() => handleSelect('Home')}>Home</TabButton>
                    <TabButton onSelect={handleSelect('Quản lý Office')}>Quản lý Office </TabButton>
                    <TabButton onSelect={handleSelect('Quản lý tuyến xe')}>Quản lý tuyến xe </TabButton>
                    <TabButton onSelect={handleSelect('Quản lý đơn hàng')}>Quản lý đơn hàng</TabButton>
                    <TabButton onSelect={handleSelect('Quản lý nhân viên')}>Quản lý nhân viên</TabButton>
                    <TabButton onSelect={handleSelect('Cài đặt')}>Cài đặt</TabButton>
                </menu>


         </section>
    )
}
//