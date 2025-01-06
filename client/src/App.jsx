import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Slide from './components/Slide/Slide';



function App() {
  return (
    <div>
      {/* Navbar is common across all routes */}
      <Navbar />
      
      {/* Define routes */}
     
        <Hero />
       
    
      <Footer />
    </div>
  );
}

export default App;
