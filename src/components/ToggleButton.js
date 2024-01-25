// ToggleButton.js
import './SizeBar/SizeBar.css';
import React from 'react';
import chev from '../assets/icon/left-chevron.svg';

const ToggleButton = ({ isOpen, toggleSizeBar }) => {
    return (
      <button className="toggleButton" onClick={toggleSizeBar}>
        <img src={chev} alt="ChevLogo"style={{
            width: '50px',  
            height: '50px', 
            background: 'none', 
           border: 'none',
          cursor: 'pointer',
          paddingTop: '100px',
          paddingLeft: '100px',
      
          }} />
      </button>
    );
  };
  
  export default ToggleButton;