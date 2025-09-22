import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { CaseStudies } from './components/CaseStudies';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { CaseStudyDetail } from './components/CaseStudyDetail';
import { Contact } from './components/Contact';
import backgroundTexture from 'figma:asset/f6fdd7d3bd59a9930f06bd9ed0fdd9a224cee661.png';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPage.startsWith('case-study-')) {
    const caseStudyId = currentPage.replace('case-study-', '');
    return (
      <div 
        className="min-h-screen bg-charcoal"
        style={{
          backgroundImage: `url(${backgroundTexture})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center'
        }}
      >
        <Navigation currentPage={currentPage} onNavigate={handleNavigation} />
        <CaseStudyDetail caseStudyId={caseStudyId} onNavigate={handleNavigation} />
      </div>
    );
  }

  if (currentPage === 'work') {
    return (
      <div 
        className="min-h-screen bg-charcoal"
        style={{
          backgroundImage: `url(${backgroundTexture})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center'
        }}
      >
        <Navigation currentPage={currentPage} onNavigate={handleNavigation} />
        <div className="pt-16 md:pt-20">
          <CaseStudies onNavigate={handleNavigation} />
        </div>
        <Footer />
      </div>
    );
  }

  if (currentPage === 'about') {
    return (
      <div 
        className="min-h-screen bg-charcoal"
        style={{
          backgroundImage: `url(${backgroundTexture})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center'
        }}
      >
        <Navigation currentPage={currentPage} onNavigate={handleNavigation} />
        <div className="pt-16 md:pt-20">
          <About />
        </div>
        <Footer />
      </div>
    );
  }

  if (currentPage === 'contact') {
    return (
      <div 
        className="min-h-screen bg-charcoal"
        style={{
          backgroundImage: `url(${backgroundTexture})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center'
        }}
      >
        <Navigation currentPage={currentPage} onNavigate={handleNavigation} />
        <Contact onNavigate={handleNavigation} />
        <Footer />
      </div>
    );
  }

  // Home page with Hero section
  return (
    <div 
      className="min-h-screen bg-charcoal"
      style={{
        backgroundImage: `url(${backgroundTexture})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center'
      }}
    >
      <Navigation currentPage={currentPage} onNavigate={handleNavigation} />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}