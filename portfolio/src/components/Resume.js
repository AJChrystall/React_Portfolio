import React from 'react';

function Header() {
    return (
      <header>
        <h1>Developer's Name</h1>
        <Navigation />
      </header>
    );
  }
function Resume({ currentSection }) {
    const proficiencies = ['Proficiency 1', 'Proficiency 2', 'Proficiency 3'];
  
    return (
      <section className={currentSection === 'Resume' ? 'selected' : ''}>
        <h2>Resume</h2>
        <a href="path/to/resume.pdf" download>
          Download Resume
        </a>
  
        <h3>Proficiencies</h3>
        <ul>
          {proficiencies.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
      </section>
    );
  }
  

export default Header;
