import './App.css';
import Footer from './compoents/Footer/Footer';
import NavBar from './compoents/NavBar/NavBar';
//import Signup from './compoents/Signup/Signup';
import Cards from './compoents/Cards/Cards';
import About from './compoents/About/About';
//import Contact from './compoents/Contact/Contact';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (
    <div className='App'>
      <NavBar/>
      <About />
      <Cards />
      <Footer />
      </div>
    
  );
}

export default App;
