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
          <div className='logocontainer'>
            <div className='logoelements'>
              {/* Logo component */}
              <Logo/>
            </div>            
          </div>
          <div className='arrowsvg'>
            <svg width="179" height="494" viewBox="0 0 179 494" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M178.456 218.144L0.696696 493.027L162.361 218.133L0.231246 8.42791e-05L178.456 218.144Z" fill="#D9D9D9"/>
            </svg>
          </div>
          {/* About Me and contact icons */}
          <div className='texticons'>
            <div className='aboutme'>
              <p>Hi, Step into my portfolio realm!</p>
              <p> I'm a Calgary-based software developer who loves to learn, code and squash bugs! My goal is to create software solutions that leave a meaningful impact on people’s lives. Come explore my projects, witness the magic of simplicity and efficiency!</p>
            </div>

            <div className='icons'>
              <div className='linkedin'>
                <svg width="59" height="60" viewBox="0 0 59 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_143_48)">
                  <path d="M54.6326 0H4.35586C1.94746 0 0 1.93359 0 4.32422V55.6641C0 58.0547 1.94746 60 4.35586 60H54.6326C57.041 60 59 58.0547 59 55.6758V4.32422C59 1.93359 57.041 0 54.6326 0ZM17.5041 51.1289H8.74629V22.4883H17.5041V51.1289ZM13.1252 18.5859C10.3135 18.5859 8.04336 16.2773 8.04336 13.4297C8.04336 10.582 10.3135 8.27344 13.1252 8.27344C15.9254 8.27344 18.1955 10.582 18.1955 13.4297C18.1955 16.2656 15.9254 18.5859 13.1252 18.5859ZM50.2768 51.1289H41.5305V37.207C41.5305 33.8906 41.4728 29.6133 36.9787 29.6133C32.427 29.6133 31.7355 33.2344 31.7355 36.9727V51.1289H23.0008V22.4883H31.3898V26.4023H31.5051C32.6689 24.1523 35.5268 21.7734 39.7789 21.7734C48.6404 21.7734 50.2768 27.7031 50.2768 35.4141V51.1289V51.1289Z" fill="white"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_143_48">
                  <rect width="59" height="60" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
              </div>
              <div className='git'>
                <svg width="70" height="60" viewBox="0 0 70 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M34.9884 0C26.6793 0.00381029 18.6426 2.60485 12.3155 7.33801C5.98832 12.0712 1.78325 18.6278 0.452175 25.8356C-0.878902 33.0433 0.750797 40.4321 5.0499 46.6808C9.34901 52.9295 16.0372 57.6306 23.9184 59.9435C25.6572 60.2287 26.3121 59.2763 26.3121 58.4664C26.3121 57.6566 26.2773 55.3086 26.2657 52.7415C16.5288 54.6006 14.4713 49.11 14.4713 49.11C12.8832 45.5446 10.5881 44.6075 10.5881 44.6075C7.412 42.7026 10.8257 42.7382 10.8257 42.7382C14.3438 42.9572 16.1927 45.9114 16.1927 45.9114C19.3108 50.6125 24.3821 49.2526 26.3758 48.458C26.6888 46.4665 27.5988 45.1117 28.6014 44.3426C20.8235 43.5684 12.6514 40.9301 12.6514 29.1441C12.6032 26.0875 13.8939 23.1315 16.2564 20.8878C15.8971 20.1136 14.6973 16.9863 16.5983 12.7384C16.5983 12.7384 19.5368 11.9133 26.2252 15.8912C31.962 14.5125 38.0148 14.5125 43.7517 15.8912C50.4342 11.9133 53.3669 12.7384 53.3669 12.7384C55.2737 16.9761 54.074 20.1034 53.7146 20.8878C56.0846 23.1319 57.378 26.093 57.3254 29.1543C57.3254 40.9657 49.136 43.5684 41.3464 44.3273C42.5983 45.2849 43.7169 47.1541 43.7169 50.0268C43.7169 54.1422 43.6763 57.4529 43.6763 58.4664C43.6763 59.2865 44.308 60.244 46.0816 59.9435C53.9638 57.6303 60.6526 52.9284 64.9516 46.6786C69.2506 40.4289 70.8795 33.039 69.5469 25.8306C68.2143 18.6221 64.0071 12.0654 57.6779 7.33307C51.3486 2.60072 43.3101 0.00139514 35 0H34.9884Z" fill="white"/>
                </svg>
              </div>
              <div className='email'>

              </div>
              <div className='phone'>

              </div>
              <div className='resume'>

              </div>
            </div>
          </div>      

        </div>

        <div className='back'>
          <div className='logocontainer'>
            <div className='logoelements'>
              {/* Logo component */}
              <Logo/>
            </div>            
          </div>
          <div className='arrowsvg'>
            <svg width="179" height="494" viewBox="0 0 179 494" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M178.456 218.144L0.696696 493.027L162.361 218.133L0.231246 8.42791e-05L178.456 218.144Z" fill="#D9D9D9"/>
            </svg>
          </div>
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
