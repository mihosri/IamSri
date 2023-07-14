import React from 'react'
import './FlipButton.css';
import fliparrow from '../../media/fliparrow.png';

const FlipButton = () => {

    function flipCard() {
        var card = document.querySelector('.card');
        if (card.style.transform === 'rotateY(180deg)') {
          card.style.transform = 'rotateY(0)';
        } else {
          card.style.transform = 'rotateY(180deg)';
        }
      }

  return (
    <>
    
      <img 
        className='flipbutton'
        src={fliparrow} 
        alt="Flip button for business card" 
        onClick={()=>flipCard()}
        width="100"
        height="100"
      />
    
    </>
  );
};

export default FlipButton;
