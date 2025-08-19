import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Slide from './components/Slide/Slide';
import useLenis from './hooks/useLenis';



function App() {
  useLenis()
  return (
    <div>
      
      <Navbar />

     
        <Hero />
       
    
      <Footer />
    </div>
  );
}

export default App;
