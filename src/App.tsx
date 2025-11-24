import { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CountdownTimer from './components/CountdownTimer';
import EventDetails from './components/EventDetails';
import MemoriesCarousel from './components/MemoriesCarousel';
import Footer from './components/Footer';
import './App.css';

function App() {
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
    </div>
  );
}

export default App;
