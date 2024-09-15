import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import ReservationForm from './component/ReservationForm';
import Navbar from './component/NavBar';
import HeroSection from './component/HeroSection';
import SpecialsSection from './component/SpecialSection';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<><HeroSection /><SpecialsSection /></>} />
          <Route path="/reservation" element={<><ReservationForm /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
