import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LoveLetter from './components/LoveLetter';
import MemoryGallery from './components/MemoryGallery';
import LoveReasons from './components/LoveReasons';
import RelationshipQuiz from './components/RelationshipQuiz';
import LoveMeter from './components/LoveMeter';
import FutureDreams from './components/FutureDreams';
import FinalSurprise from './components/FinalSurprise';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Update active section on scroll
    const handleScroll = () => {
      const sections = [
        'home',
        'letter',
        'memories',
        'reasons',
        'quiz',
        'love-meter',
        'future',
        'surprise',
      ];

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-romantic-50">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main>
        <Hero onNavigate={handleNavigate} />
        <LoveLetter />
        <MemoryGallery />
        <LoveReasons />
        <RelationshipQuiz />
        <LoveMeter />
        <FutureDreams />
        <FinalSurprise />
      </main>

      {/* Music Player */}
      <MusicPlayer />

      {/* Footer */}
      <footer className="bg-wine text-cream py-8 text-center">
        <p className="mb-2">Made with ❤️ for you</p>
        <p className="text-sm opacity-80">
          This website is a personal love letter created just for you.
        </p>
      </footer>
    </div>
  );
}

export default App;
