
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Solution from './components/Solution';
import ServicesSticky from './components/ServicesSticky';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatWeDo from './components/WhatWeDo';
import HowWeWork from './components/HowWeWork';
import ContactPage from './components/ContactPage';
import AboutUs from './components/AboutUs';
import CompanySupportBot from "./components/CompanySupportBot";



export type PageType = 'home' | 'what-we-do' | 'how-we-work' | 'contact' | 'about-us';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [targetSection, setTargetSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealObserver.disconnect();
    };
  }, [currentPage]);

  const navigateTo = (page: PageType, section?: string) => {
    setTargetSection(section || null);
    setCurrentPage(page);
    
    if (!section) {
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden selection:bg-blue-600 selection:text-white">
      <Header isScrolled={isScrolled} onNavigate={navigateTo} currentPage={currentPage} />
     
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero onNavigate={navigateTo} />
            <div className="reveal">
              <Solution onNavigate={navigateTo} />
            </div>
            <ServicesSticky onNavigate={navigateTo} />
            <Contact onNavigate={navigateTo} />
          </>
        ) : currentPage === 'what-we-do' ? (
          <WhatWeDo onNavigate={navigateTo} />
        ) : currentPage === 'how-we-work' ? (
          <HowWeWork onNavigate={navigateTo} />
        ) : currentPage === 'contact' ? (
          <ContactPage targetSection={targetSection} onNavigate={navigateTo} />
        ) : (
          <AboutUs targetSection={targetSection} onNavigate={navigateTo} />
        )}
      
      </main>
     
      <Footer onNavigate={(page, section) => navigateTo(page as PageType, section)} />
            <CompanySupportBot/>
    </div>
  );
};

export default App;
