import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('About Me');

  const handleNavigationClick = (section) => {
    setCurrentSection(section);
  };

  return (
    <div>
      <Header />
      <Navigation currentSection={currentSection} onNavigationClick={handleNavigationClick} />
      {currentSection === 'About Me' && <AboutMe currentSection={currentSection} />}
      {currentSection === 'Portfolio' && <Portfolio currentSection={currentSection} />}
      {currentSection === 'Contact' && <Contact currentSection={currentSection} />}
      {currentSection === 'Resume' && <Resume currentSection={currentSection} />}
      <Footer />
    </div>
  );
}

export default App;

