import './App.css';
import Footer from './compoents/Footer/Footer';
import NavBar from './compoents/NavBar/NavBar';
//import Signup from './compoents/Signup/Signup';
import Cards from './compoents/Cards/Cards';
import About from './compoents/About/About';
//import Contact from './compoents/Contact/Contact';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function App() {
  
  return (
    <div className='App'>
      <NavBar/>
      <BrowserRouter>
      <Container>
        <About />
       <Routes>
      <Route path='/projects' element={<Cards />} />
      </Routes>
      </Container>
        </BrowserRouter>
 <Footer />
      </div>
    
  );
}

export default App;
