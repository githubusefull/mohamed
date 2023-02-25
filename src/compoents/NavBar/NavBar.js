import React,{useState} from 'react';
import './NavBar.css';
import {TbMenu2} from 'react-icons/tb';
import logo from './portfolio-white.png';
import Modal from '../Modal/Modal';
import Modal2 from '../Modal2/Modal2';


function NavBar() {
  const [openModal, setOpenModal] = useState(false);


  return (
   
   <header className='header' >


    <div className="container-fluid">
        <div className="navb-log"   id="navbarModel">
            <img src={logo} className="nav-logo"  alt="logo"/>
        </div>

        <div className="navb-items" >
            <div className="item">
              <a className='home' href="/">Home</a>
            </div>
            <div className="item">
              <a className='services' href="/about">About</a>
            </div>
            <div className="item">
              <a className='cases' href="/projects">Projects</a>
            </div>
            
            <div className="item-button">
       
        <div type='button'  className='navb-button'

              onClick={() => {
                setOpenModal(true);
              }}>Contact</div>

      {openModal && <Modal2 closeModal={setOpenModal}/>}

            
            </div>
            </div>
        <div className="mobile-toggler d-lg-none">
        
        <a href="/dddd"   

        className="mobile-toggler" 
        type="button" 
        data-bs-toggle="modal"
        aria-controls="navbModel"
        data-bs-target="#navbModel"
        aria-expanded="false"
        aria-label="Toggle navigation"

        >
           <TbMenu2 className='icon-menu' />
        </a>
        </div>
        


<div className="modal fade" id="navbModel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <Modal />
  </div>

</div>
</header>

  )
}

export default NavBar;