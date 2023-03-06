import React from 'react'
import { Button } from 'react-bootstrap';
import  './About.css';
import simo from './CV.png';
import { FaFacebookSquare } from 'react-icons/fa';
import {BsGithub} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import {FaCodepen} from 'react-icons/fa';
import {FaFreeCodeCamp} from 'react-icons/fa';
import { Col,  Row,  Card, Form } from "react-bootstrap";
import logo from './portfolio.png';
import Cards from '../Cards/Cards';

function About() {
  return (
    <div className='container  my-5'>
        <div class="row">
  <div class="col-sm-6">

      <div className="card-body">
        <h5 class="card-title" className="my-5">About me</h5>
             
                       
             <img src={simo} alt="" className="img-about"  />
             <p className='my-4'> 
My name is Mohamed Abdelouahidi, I am a Web developer based in Morocco.
I am a passionate developer who loves coding and the web platform.
As a Front-End Developer, I can create a lot of different websites using React.js and React-
bootstrap, Css and Laravel .
I like to develop and contribute to open-source projects. That helps me learn a ton of new
stuff, grow as a developer, and support others.
In my free time, you can find me at the library, I am interested in books.
            <h4 className='my-4'>I can help you</h4>
          </p>
    <Button href="https://codepen.io/xdzqwrnu-the-vuer" 
    className='my-5'
    variant="dark" >View My Work</Button>
</div>
<div className="icon-about my-5 ">
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
  </div>


  <div className="sign-top col-sm-6">
      <div class="card-body">
      <h5 class="card-title"  className="my-5">Sign Up</h5>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={10} xs={13}>
            <div className="card-signup shadow px-4">
              <Card.Body>

                <div className="mb-8 mt-md-8">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                  <img src={logo} className="nav-logo my-4"  alt="logo"/>
                  </h2>
                  <div className="mb-3">
                    <Form>
                      <Form.Group  controlId="Name">
                        <Form.Label className="">Name
                        </Form.Label>
                        <Form.Control type="text" color="black" placeholder="Enter Name" />
                      </Form.Group>

                      <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" />
                      </Form.Group>

                      <Form.Group
                        className="mb-4"
                        controlId="formBasicPassword"
                      >
                        <Form.Control  type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Control type="password" placeholder="Confirm Password" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="dark" type="submit" className='my-4'>
                          Sign Up
                        </Button>
                      </div>
                    </Form>
                    
                </div>
                 
               </div>
              </Card.Body> 
              <Row className='my-4'>
              <p className='already-sign text-center my-3'>
                      Already have an account??{" "}
                        <a href="{''}" className="text-black fw-bold">
                          Sign In
                        </a>
                      </p>
              </Row> 
            </div>
        
          </Col>
         
        </Row>
       </div>  
    </div>
    </div>
    <Cards />
  </div>


  )
}

export default About;