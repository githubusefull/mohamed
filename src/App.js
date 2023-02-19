import './App.css';
import About from './components/About/About';
//import Code from './components/Code';
import Signup from './components/Signup/Signup';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Projects from './components/Projects/Projects';
function App() {
  return (
    <div className="container">
      <NavBar />
    <About />
    <Projects />
    <Signup />
    <Footer />
    </div>
  );
}

export default App;