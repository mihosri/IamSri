import React from 'react';
import './BusinessCard.css';

function BusinessCard() {
  // function flipCard() {
  //   var card = document.querySelector('.card');
  //   if (card.style.transform === 'rotateY(180deg)') {
  //     card.style.transform = 'rotateY(0)';
  //   } else {
  //     card.style.transform = 'rotateY(180deg)';
  //   }
  // }
  var card = document.querySelector('.card');

  card.addEventListener('mousemove', function(e) {
    var xPosition = e.clientX;
    var cardWidth = card.offsetWidth;
    var flipThreshold = cardWidth * 0.8; // Adjust the threshold as needed
  
    if (xPosition > flipThreshold) {
      card.style.transform = 'rotateY(180deg)';
    } else {
      card.style.transform = 'rotateY(0)';
    }
  });
  
  card.addEventListener('mouseout', function() {
    card.style.transform = 'rotateY(0)';
  });
  
  return (
    <>
    <div className='container'>
      <div className='card'>
        
        <div className="front">
          <h1>Sri Guru Girahha</h1>
          <p>Aspiring full stack developer</p>
          <a href='https://www.linkedin.com/in/sri-guru-girahha/' target='blank'>Sri LinkedIn</a>

          {/* <button onClick={()=>flipCard()}>Flip Card</button> */}
        </div>

        <div className='back'>
          <h1>Rear view</h1>
          <a href='https://github.com/mihosri' target='blank'>Sri Github</a>

          {/* <button onClick={()=>flipCard()}>Flip Card</button> */}
        </div>
        
      </div>
    </div>

    
    
    {/* Background text */}
    {/* <div className='bgtext'>
      <h3>Open for hire</h3>
      <h3>Take a chance on me as an employee</h3>
    </div> */}
    
  </>
  );
};

export default BusinessCard;
