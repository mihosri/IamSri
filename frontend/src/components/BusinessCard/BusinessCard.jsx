import React from 'react';
import './BusinessCard.css';
import Logo from '../Logo/Logo.jsx';
import FlipButton from '../FlipButton/FlipButton.jsx';

import ArrowDesign from '../Design/ArrowDesign.jsx';
import EmailIcon from '../Icons/EmailIcon.jsx';
import GithubIcon from '../Icons/GithubIcon.jsx';
import LinkedinIcon from '../Icons/LinkedinIcon.jsx';
import PhoneIcon from '../Icons/PhoneIcon.jsx';
import ResumeIcon from '../Icons/ResumeIcon.jsx';

import WorkIcon from '../Icons/WorkIcon.jsx';
import EducationIcon from '../Icons/EducationIcon.jsx';
import ProjectsIcon from '../Icons/ProjectsIcon.jsx';
import SkillsIcon from '../Icons/SkillsIcon.jsx';
import BlogIcon from '../Icons/BlogIcon.jsx';
import CertificationIcon from '../Icons/CertificationIcon.jsx';
import AwardsIcon from '../Icons/AwardsIcon.jsx';
import { Link } from 'react-router-dom';

function BusinessCard() {

  const linkedinUrl = 'https://www.linkedin.com/in/sri-guru-girahha/';
  const gitUrl = 'https://github.com/mihosri';
  const blogUrl = 'https://medium.com/@Srineethi';

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
            <ArrowDesign/>
          </div>
          {/* About Me and contact icons */}
          <div className='texticons'>
            <div className='aboutme'>
              <p>Hi, Step into my portfolio realm!</p>
              <p> I'm a Calgary-based software developer who loves to learn, code and squash bugs! My goal is to create software solutions that leave a meaningful impact on people’s lives. Come explore my projects, witness the magic of simplicity and efficiency!</p>
            </div>
            <div className='icons'>
              <a href={linkedinUrl} target='_blank' rel='noopener noreferrer'>
                <div className='linkedin'>
                  <LinkedinIcon/>
                </div>
              </a>
              <a href={gitUrl} target='_blank' rel='noopener noreferrer'>
                <div className='git'>
                  <GithubIcon/>
                </div>
              </a>
              <a href='mailto:blossomshini@gmail.com'>
                <div className='email'>
                  <EmailIcon/>
                </div>
              </a>
              <a href='tel:+14037719155'>
                <div className='phone'>
                  <PhoneIcon/>
                </div>
              </a>
              
              <div className='resume'>
                <ResumeIcon/>
              </div>
            </div>
          </div>      
        </div>

        <div className='back'>
          <div className='logocontainer'>
            <div className='logoelements'>
              <Logo/>
            </div>            
          </div>
          <div className='arrowsvg'>
            <ArrowDesign/>
          </div>

          <div className='list'>
            <div>
              <div className='experience'>
                <p>WORK EXPERIENCE <span><WorkIcon/></span></p>                
              </div>
              <br></br>
              <Link to='/education' target='_blank'>
                <div className='education'>
                  <p>EDUCATION <span><EducationIcon/></span> </p>                
                </div>
              </Link>              
              <br></br>
              <div className='projects'>
                <p>PROJECTS <span><ProjectsIcon/></span></p>                
              </div>
              <br></br>
              <div className='skills'>
                <p>TECHNICAL SKILL SET <span><SkillsIcon/></span> </p>                
              </div>
              <br></br>
              <a href={blogUrl} target='_blank' style={{textDecoration: 'none'}}>    
              <div>
                <p>BLOG WRITING <span><BlogIcon/></span></p>
              </div>                 
              </a>
              <br></br>
              <div className='certification'>
                <p>CERTIFICATION <span><CertificationIcon/></span></p>                
              </div>
              <br></br>
              <div className='awards'>
                <p>AWARDS <span><AwardsIcon/></span></p>                
              </div>
              <br></br>
              <div className='feedback'>
                <p>Peer Feedback</p>                
              </div>
            </div>
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
