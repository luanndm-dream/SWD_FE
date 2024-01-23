import React from 'react';
import '../Header/header.css';
import bus from '../../assets/icon/bus1.svg';
function Store() {
    return (
     <nav className='Nav'>
        <div className='leftNav'>
        <img src={bus} alt="BusLogo" style={{ height: '10%', width: '10%' }} />

        <h3>BusDelivery</h3>
      </div>
        </nav>
    )
}
export default Store;