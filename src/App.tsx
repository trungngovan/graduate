import { useEffect, useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CountdownTimer from './components/CountdownTimer';
import EventDetails from './components/EventDetails';
import MemoriesCarousel from './components/MemoriesCarousel';
import Footer from './components/Footer';
import CharityModal from './components/CharityModal';
import FloatingCharityButton from './components/FloatingCharityButton';
import './App.css';

function App() {
  const [isCharityModalOpen, setIsCharityModalOpen] = useState(false);

  useEffect(() => {
    // Add entrance animation class
    document.querySelector('.app-container')?.classList.add('loaded');
  }, []);

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <div className="content-wrapper">
          <div className="content-inner">
            <HeroSection />
            <CountdownTimer />
            <EventDetails />
            <MemoriesCarousel />
          </div>
        </div>
        <Footer />
      </main>
      
      <FloatingCharityButton onClick={() => setIsCharityModalOpen(true)} />
      <CharityModal 
        isOpen={isCharityModalOpen} 
        onClose={() => setIsCharityModalOpen(false)} 
      />
    </div>
  );
}

export default App;
