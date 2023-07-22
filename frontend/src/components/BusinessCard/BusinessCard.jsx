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
import FeedbackIcon from '../Icons/FeedbackIcon';
import OwlEmojiIcon from '../Icons/OwlEmojiIcon.jsx';

import { Link } from 'react-router-dom';

function BusinessCard() {

  const linkedinUrl = 'https://www.linkedin.com/in/sri-guru-girahha/';
  const gitUrl = 'https://github.com/mihosri';
  const blogUrl = 'https://medium.com/@Srineethi';
  const certificationUrl = 'https://www.credly.com/badges/9d9569d9-16ef-4994-918c-d1516584c82e/linked_in_profile';
  const resumeUrl = 'https://drive.google.com/file/d/1f8v_0u7g3RbkS8CCrha0IyCCDDjqF-q3/view?usp=sharing';

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
            <p><OwlEmojiIcon/> Hi, Step into my portfolio realm!</p>
            <br></br>
            <p> I'm a Calgary-based software developer who loves to learn, code and squash bugs! My goal is to create software solutions that leave a meaningful impact on people's lives. Come explore my projects, experience the magic of simplicity and efficiency!</p>
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
              <a href='tel:+14037719155' className='phone-container'>
                <div className='phone'>
                  <PhoneIcon/>
                </div>
                <span className='tooltip'>Phone: +1(403)771-9155</span>
              </a>
              <a href={resumeUrl} target='_blank' rel='noopener noreferrer'>
              <div className='resume'>
                <ResumeIcon/>
              </div>
              </a>
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
              <div>
              <Link to='/experience' target='_blank' style={{textDecoration: 'none', color: 'white'}}>                
                <span>WORK EXPERIENCE <span><WorkIcon/></span></span>     
              </Link>
              </div>
              <br></br>
              <div>
              <Link to='/education' target='_blank' style={{textDecoration: 'none', color: 'white'}}>                
                <span>EDUCATION <span><EducationIcon/></span></span>
              </Link>
              </div>              
              <br></br>
              <div>
              <Link to='/projects' target='_blank' style={{textDecoration: 'none', color: 'white'}}>                
                <span>PROJECTS <span><ProjectsIcon/></span></span>
              </Link>
              </div>              
              <br></br>
              <div>
              <Link to='/skills' target='_blank' style={{textDecoration: 'none', color: 'white'}}>              
                <span>TECHNICAL SKILL SET <span><SkillsIcon/></span></span> 
              </Link>
              </div>
              <br></br>
              <div>
              <a href={blogUrl} target='_blank' style={{textDecoration: 'none', color: 'white'}}> 
                <span>BLOG WRITING <span><BlogIcon/></span></span>                 
              </a>
              </div>
              <br></br>
              <div>
              <a href={certificationUrl} target='_blank' style={{textDecoration: 'none', color: 'white'}}>
                <span>CERTIFICATION <span><CertificationIcon/></span></span>
              </a>
              </div>
              <br></br>
              <div>
              <Link to='/awards' target='_blank' style={{textDecoration: 'none', color: 'white'}}>
                <span>AWARDS <span><AwardsIcon/></span></span> 
              </Link>
              </div>
              <br></br>
              <div>
              <Link to='/feedback' target='_blank' style={{textDecoration: 'none', color: 'white'}}>
                <span>PEER FEEDBACK <span><FeedbackIcon/></span></span>                
              </Link>
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
