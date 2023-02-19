import React from 'react'
import { Button } from 'react-bootstrap';
import { HiMenu } from 'react-icons/hi';
import './NavBar.css';
import { ImHtmlFive2 } from 'react-icons/im';
import {TbBrandCss3} from 'react-icons/tb';
import {FaReact} from 'react-icons/fa';
import {SiJavascript} from 'react-icons/si';
import {FaLaravel} from 'react-icons/fa';
import {SiExpress} from 'react-icons/si';
import {SiDjango} from 'react-icons/si';
import portfolio from '../NavBar/portfolio.png'
function NavBar() {

  
  return (
   
    <nav className="navbar fixed-top navbar-expand-md bg" >
        <a href="/name" className='navbar-brand fs-2 ms-3 me-auto'>
        <img className="navbar-logo" src={portfolio} alt=""/>
        </a>

    
    <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#btn">
     <HiMenu className="icon-menu"/>
    </button>
    <div className="collapse navbar-collapse ul-bg" id='btn'>

        <ul className='navbar-nav mx-4  ms-auto'>
            <li className='nav-item'>
                <a className="nav-link" href="/"><p>Home</p></a>
            </li>
            <li className='nav-item'>
                <a className="nav-link" href="/about"><p>About</p></a>
            </li>
            <li className='nav-item'>
                <a className="nav-link" href='/contact'><p>Contact</p></a>
            </li>
            <li className="nav-item dropdown" >
          <a className="nav-link dropdown-toggle" href="/vdf"  id="basic-nav-dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Projects
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown" id="dop">
          
            <li className='drop'><a href="https://www.freecodecamp.org/abdelouahidi"  id="item">
            <ImHtmlFive2 className="icon-drop"/>
                Html
                </a></li>
            <li className='drop'><a href="https://www.freecodecamp.org/abdelouahidi" id="item">
            <TbBrandCss3 className="icon-drop"/>
                Css
                </a></li>
            <li className='drop'><a href="https://www.freecodecamp.org/abdelouahidi" id="item">
            <FaReact className="icon-drop"/>
                React.js
                </a></li>
            <li className='drop'><a href="https://codepen.io/your-work" id="item">
            <SiJavascript className="icon-drop"/>
                JavaScript
                </a></li>
            <li className='drop'><a className='icon'  href="/laravel" id="item">
            <FaLaravel className="icon-drop"/>
                Laravel
                
                </a></li>
            <li className='drop'><a href="https://codepen.io/your-work" id="item">
            <SiExpress className="icon-drop"/>
                Express.js
                </a></li>
                <li className='drop'><a href="/django"  id="item">
                <SiDjango className="icon-drop"/>
                Django
                </a></li>
          </ul>
        </li>
        <li className='nav-button'>
                <a href="/django" >
                  <Button variant="outline-dark" className='button-signin'>Sign In</Button>
                </a>
            </li>
            <li className='nav-button'>
                <a href="/django" >
                  <Button variant="dark" className='button-signup'>Sign Up</Button>   
                </a>
            </li>
        </ul>
       
    </div>
   
    </nav>


  )
}
export default NavBar;