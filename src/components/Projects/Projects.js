import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import Portfolio from '../Projects/Imgs/Potfolio.JPG'
import Inputdata from '../Projects/Imgs/inputdata.JPG'
import Calcul from '../Projects/Imgs/ReactCal.JPG'
import visual from '../Projects/Imgs/dataV.JPG';
import django from '../Projects/Imgs/django.png';
import express from '../Projects/Imgs/reactexpress.png';

import react from '../Projects/Imgs/reactboot.png';
import './Projects.css';
import { SlLike } from 'react-icons/sl';
import { GrView } from 'react-icons/gr';
import { TfiComment } from 'react-icons/tfi';

function Projects() {
  return (
    <div className='container text-center projects'><h4 className='my-4'>Projects</h4>
    <Row>
        <Col md={3}>
            <Card className="card-projects">
       <img src={Portfolio} className="projects-img" alt=""  />
            </Card>

        
          <p className="card-title my-4">My Portfolio |
          <SlLike className="icon-card-like" /><span>12</span> 
           <GrView className="icon-card-view"/> <span>23K</span>
         <TfiComment className="icon-card-comment"/><span>34</span>
           </p>
 
         <Button variant="dark">Load More</Button>
        </Col>
        <Col md={3}>
            <Card className="card-projects">
       <img src={Inputdata} className="projects-img" alt=""  />
            </Card>

        
          <p className="card-title my-4">Input Data |
          <SlLike className="icon-card-like" /><span>12</span> 
           <GrView className="icon-card-view"/> <span>23K</span>
         <TfiComment className="icon-card-comment"/><span>34</span>
           </p>
 
         <Button variant="dark" href="https://github.com/githubusefull/input-data">Load More</Button>
        </Col>
        
        <Col md={3}>
            <Card className="card-projects">
       <img src={Calcul} className="projects-img" alt=""  />
            </Card>
         <p className="card-title my-4">React Calculator |
          <SlLike className="icon-card-like" /><span>12</span> 
           <GrView className="icon-card-view"/> <span>23K</span>
         <TfiComment className="icon-card-comment"/><span>34</span>
           </p>
         <Button variant="dark" href='https://codepen.io/xdzqwrnu-the-vuer/pen/WNdzWMV'>Load More</Button>
        </Col>
        <Col md={3}>
            <Card className="card-projects">
       <img src={visual} className="projects-img" alt=""  />
            </Card>
         <p className="card-title my-4">Visualize Data |
          <SlLike className="icon-card-like" /><span>12</span> 
           <GrView className="icon-card-view"/> <span>23K</span>
         <TfiComment className="icon-card-comment"/><span>34</span>
           </p>
         <Button variant="dark" href='https://codepen.io/xdzqwrnu-the-vuer/pen/qBpKLpa'>Load More</Button>
        </Col>
        <Col md={3} className="my-4">
            <Card className="card-projects">
       <img src={react} className="projects-img" alt=""  />
            </Card>
         <p className="card-title my-4">React+bootstrap |
          <SlLike className="icon-card-like" /><span>12</span> 
           <GrView className="icon-card-view"/> <span>23K</span>
         <TfiComment className="icon-card-comment"/><span>34</span>
           </p>
         <Button variant="dark" href='https://www.linkedin.com/in/mohamed-abdelouahidi-6b824b251/'>Load More</Button>
        </Col>
        <Col md={3} className="my-4">
            <Card className="card-projects">
       <img src={django} className="projects-img" alt=""  />
            </Card>
         <p className="card-title my-4">React+django |
          <SlLike className="icon-card-like" /><span>12</span> 
           <GrView className="icon-card-view"/> <span>23K</span>
         <TfiComment className="icon-card-comment"/><span>34</span>
           </p>
         <Button variant="dark" href='https://www.linkedin.com/in/mohamed-abdelouahidi-6b824b251/'>Load More</Button>
        </Col>
        <Col md={3} className="my-4">
            <Card className="card-projects">
       <img src={react} className="projects-img" alt=""  />
            </Card>
         <p className="card-title my-4">React |
          <SlLike className="icon-card-like" /><span>12</span> 
           <GrView className="icon-card-view"/> <span>23K</span>
         <TfiComment className="icon-card-comment"/><span>34</span>
           </p>
         <Button variant="dark" href='https://www.linkedin.com/in/mohamed-abdelouahidi-6b824b251/'>Load More</Button>
        </Col>
        <Col md={3} className="my-4">
            <Card className="card-projects">
       <img src={express} className="projects-img" alt=""  />
            </Card>
         <p className="card-title my-4">React+Express |
          <SlLike className="icon-card-like" /><span>12</span> 
           <GrView className="icon-card-view"/> <span>23K</span>
         <TfiComment className="icon-card-comment"/><span>34</span>
           </p>
         <Button variant="dark" href='https://www.linkedin.com/in/mohamed-abdelouahidi-6b824b251/'>Load More</Button>
        </Col>
    </Row>
    </div>
  )
}

export default Projects