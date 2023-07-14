import React from 'react';
import './BusinessCard.css';
import Logo from '../Logo/Logo.jsx';
import FlipButton from '../FlipButton/FlipButton.jsx';

function BusinessCard() {
  
  return (
    <>
    <div className='container'>
      <div className='card'>
        
        <div className="front">

          {/* Logo component */}
          <Logo/>

        </div>

        <div className='back'>

          {/* Logo component */}
          <Logo/>
          
        </div>
        
      </div>
    </div>

    <br></br>
    <br></br>

    {/* Flip Button */}
    <FlipButton/>
    
  </>
  );
};

export default BusinessCard;
