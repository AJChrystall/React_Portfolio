import React from 'react';

function Header() {
    return (
      <header>
        <h1>Developer's Name</h1>
        <Navigation />
      </header>
    );
  }
  function Navigation({ currentSection }) {
    const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];
  
    return (
      <nav>
        <ul>
          {sections.map((section, index) => (
            <li key={index} className={currentSection === section ? 'active' : ''}>
              <a href="#section">{section}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
  

export default Header;
