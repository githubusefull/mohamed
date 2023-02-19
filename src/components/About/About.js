import React from 'react'
import { Button, Col,  Row } from 'react-bootstrap';
import './About.css';
import simo from './CV.png';
import { FaFacebookSquare } from 'react-icons/fa';
import {BsGithub} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import {FaCodepen} from 'react-icons/fa';
import {FaFreeCodeCamp} from 'react-icons/fa';
//import Signup from '../Signup/Signup';
import Code from './Code';


function About() {
  return (
   
      <Row>
          <Col md={5}>
          <div className="card-about">
              <h2 className='my-5'>About Me</h2>
             
                       
                           <img src={simo} alt="" className="img-about"  />
                           <p> 
            My name is Mohamed Abdelouahidi, I am a Web developer based in Morocco.
            I am a passionate developer who loves coding and the web platform.
            As a Front-End Developer, I can create a lot of different websites using React.js and React-
            bootstrap, Css and Laravel .
            I like to develop and contribute to open-source projects. That helps me learn a ton of new
            stuff, grow as a developer, and support others.
            In my free time, you can find me at the library, I am interested in books.
                          <h3 className='my-4'><span >I can help you</span></h3>
                        </p>
                  <Button href="https://codepen.io/xdzqwrnu-the-vuer" variant="dark" >View My Work</Button>
              </div>
              <div className="icon-about my-5">
                  <a 
                  href="https://www.facebook.com/profile.php?id=100017614931594" rel="noreferrer" className="face-icon" target="_blank">
                    <i className="face"><FaFacebookSquare /></i></a>
                    
                    <a 
                    href="https://github.com/githubusefull" rel="noreferrer" className="gith-icon" target="_blank">
                    <i className="git"><BsGithub /></i></a>
                    <a href="https://www.linkedin.com/in/mohamed-abdelouahidi-6b824b251/" rel="noreferrer" className="link-icon" target="_blank">
                    <i className="link"><BsLinkedin /></i></a>
                    <a href="https://codepen.io/xdzqwrnu-the-vuer" rel="noreferrer" className="code-icon" target="_blank">
                    <i className="pen"><FaCodepen /></i></a>
                    <a href="https://www.freecodecamp.org/abdelouahidi" rel="noreferrer" className="code-icon" target="_blank">
                    <i className="code"><FaFreeCodeCamp /></i></a>
              </div>

          </Col>
          <Col md={5}>
          <div className="video-code">
          <h2 className='my-5 text-center'> Coding</h2>

                 <Code />
              </div>

          </Col>
      </Row>
        
  
  )
}

export default About
