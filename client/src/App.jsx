import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div>
      {/* Navbar is common across all routes */}
      <Navbar />
      
      {/* Define routes */}
      <Routes>
        <Route path="/" element={<Hero />} />
      
        {/* Add more routes as needed */}
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
