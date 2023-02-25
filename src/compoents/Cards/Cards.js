import React from 'react';
import './Cards.css';
import react2 from '../Projects/Imgs/inputdata.png';
import react3 from '../Projects/Imgs/React.png';
import react4 from '../Projects/Imgs/dataV.JPG';
import react5 from '../Projects/Imgs/bootstrap-png.png';
import react6 from '../Projects/Imgs/calculator.png';
import react7 from '../Projects/Imgs/djan.png';
import react8 from '../Projects/Imgs/express.png';
import react9 from '../Projects/Imgs/reactboostrap.png';
import react10 from '../Projects/Imgs/redux.png';
import laravel from '../Projects/Imgs/laravel.png';
import { SlLike } from 'react-icons/sl';
import { GrView } from 'react-icons/gr';
import { TfiComment } from 'react-icons/tfi';
import {TfiMoreAlt} from 'react-icons/tfi';
function Cards() {
  return (
    <div className='container'>
        <h4 className='my-5'>Projects</h4>
        <div class="row row-cols-1 row-cols-md-4 g-4">
            
  <div class="col">
    <div class="card h-100">
      <img src={react3} className="card-img-top" alt="..."/>
      

        <h5 class="card-title">Portfolio</h5>
        <p>using react.js</p> 

        <p class="card-text">
        <SlLike className="icon-card-like" /><span>12</span> 
           <GrView className="icon-card-view"/> <span>23K</span>
         <TfiComment className="icon-card-comment"/><span>34</span>
        </p>
        
        <a className='see-more' type='button' href="https://github.com/githubusefull/"><TfiMoreAlt/></a>
      

    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={react2} className="card-img-top" alt="..."/>
      


        <h5 class="card-title">Input Data</h5>
        <p>using react.js</p> 

        <p class="card-text">
        <SlLike className="icon-card-like" /><span>12</span> 
           <GrView className="icon-card-view"/> <span>23K</span>
         <TfiComment className="icon-card-comment"/><span>34</span>
        </p>
        
        <a className='see-more' type='button' href="https://github.com/githubusefull/input-data"><TfiMoreAlt/></a>

    

    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={react5}  className="card-img-top" alt="..."/>

        <h5 class="card-title my-4">React.js + Bootstrap 5</h5>
        <p>using react.js</p> 

        <p class="card-text">
        <SlLike className="icon-card-like" /><span>12</span> 
           <GrView className="icon-card-view"/> <span>23K</span>
         <TfiComment className="icon-card-comment"/><span>34</span>
        </p>
       
        <a className='see-more' type='button' href="https://www.linkedin.com/in/mohamed-abdelouahidi-6b824b251/"><TfiMoreAlt/></a>

    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={react9}   className="card-img-top" alt="..."/>

     
        <h5 class="card-title my-4">ReactBootstrap</h5>
        <p>using react.js</p> 

        <p class="card-text">
        <SlLike className="icon-card-like" /><span>12</span> 
           <GrView className="icon-card-view"/> <span>23K</span>
         <TfiComment className="icon-card-comment"/><span>34</span>
        </p>
        <a className='see-more' type='button' href="https://www.linkedin.com/in/mohamed-abdelouahidi-6b824b251/"><TfiMoreAlt/></a>

        
    
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={react4}  className="card-img-top" alt="..."/>

     
        <h5 class="card-title my-5">Data Visualisation</h5>
        <p>using html css and react.js</p> 

        <p class="card-text">
        <SlLike className="icon-card-like" /><span>12</span> 
           <GrView className="icon-card-view"/> <span>23K</span>
         <TfiComment className="icon-card-comment"/><span>34</span>
        </p>
        <a className='see-more' type='button' href="https://www.linkedin.com/in/mohamed-abdelouahidi-6b824b251/"><TfiMoreAlt/></a>


    
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={react7}  className="card-img-top" alt="..." />
      


        <h5 class="card-title">React.js + Django</h5>
        <p class="card-text">
        <SlLike className="icon-card-like" /><span>12</span> 
           <GrView className="icon-card-view"/> <span>23K</span>
         <TfiComment className="icon-card-comment"/><span>34</span>
        </p>
        <a className='see-more' type='button' href="https://www.linkedin.com/in/mohamed-abdelouahidi-6b824b251/"><TfiMoreAlt/></a>

    </div>
  </div>


  <div class="col">
    <div class="card h-100">
      <img src={react8} className="card-img-top" alt="..."/>
    

        <h5 class="card-title my-4">React.js + Express.js</h5>
        <p>using express.js in backend</p> 

        <p class="card-text">
        <SlLike className="icon-card-like" /><span>12</span> 
           <GrView className="icon-card-view"/> <span>23K</span>
         <TfiComment className="icon-card-comment"/><span>34</span>
        </p>
        <a className='see-more' type='button' href="https://www.linkedin.com/in/mohamed-abdelouahidi-6b824b251/"><TfiMoreAlt/></a>

    </div>
    </div>
 
  <div class="col">
    <div class="card h-100">
      <img src={react10}  className="card-img-top"alt="..."/>


        <h5 class="card-title">React.js + Redux</h5>
        <p class="card-text">
        <SlLike className="icon-card-like" /><span>12</span> 
           <GrView className="icon-card-view"/> <span>23K</span>
         <TfiComment className="icon-card-comment"/><span>34</span>
    </p>
    <a className='see-more' type='button' href="https://www.linkedin.com/in/mohamed-abdelouahidi-6b824b251/"><TfiMoreAlt/></a>

    </div>
    </div>
    <div class="col">
    <div class="card h-100">
      <img src={react6}  className="card-img-top"alt="..."/>


        <h5 class="card-title">Calculator</h5>
        <p>using react.js</p>

        <p class="card-text">
        <SlLike className="icon-card-like" /><span>12</span> 
           <GrView className="icon-card-view"/> <span>23K</span>
         <TfiComment className="icon-card-comment"/><span>34</span>
    </p>
    <a className='see-more' type='button' href="https://www.linkedin.com/in/mohamed-abdelouahidi-6b824b251/"><TfiMoreAlt/></a>

    </div>
    </div>
    <div class="col">
    <div class="card h-100">
      <img src={react3} className="card-img-top" alt="..."/>
      

        <h5 class="card-title">Portfolio</h5>
        <p>using react.js</p> 

        <p class="card-text">
        <SlLike className="icon-card-like" /><span>12</span> 
           <GrView className="icon-card-view"/> <span>23K</span>
         <TfiComment className="icon-card-comment"/><span>34</span>
        </p>
        
        <a className='see-more' type='button' href="https://github.com/githubusefull/"><TfiMoreAlt/></a>
      

    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={react2} className="card-img-top" alt="..."/>
      


        <h5 class="card-title">Input Data</h5>
        <p>using react.js</p> 

        <p class="card-text">
        <SlLike className="icon-card-like" /><span>12</span> 
           <GrView className="icon-card-view"/> <span>23K</span>
         <TfiComment className="icon-card-comment"/><span>34</span>
        </p>
        
        <a className='see-more' type='button' href="https://github.com/githubusefull/input-data"><TfiMoreAlt/></a>

    

    </div>
  </div>
    <div class="col">
    <div class="card h-100">
      <img src={laravel}  className="card-img-top"alt="..."/>


        <h5 class="card-title my-5">Laravel</h5>
        <p>using laravel</p>

        <p class="card-text">
        <SlLike className="icon-card-like" /><span>12</span> 
           <GrView className="icon-card-view"/> <span>23K</span>
         <TfiComment className="icon-card-comment"/><span>34</span>
    </p>
    <a className='see-more' type='button' href="https://www.linkedin.com/in/mohamed-abdelouahidi-6b824b251/"><TfiMoreAlt/></a>

    </div>
    </div>
  </div>
    </div>
  )
}

export default Cards