import React from 'react';

function Header() {
    return (
      <header>
        <h1>Developer's Name</h1>
        <Navigation />
      </header>
    );
  }
  function AboutMe({ currentSection }) {
    return (
      <section className={currentSection === 'About Me' ? 'selected' : ''}>
        <img src="path/to/photo" alt="Developer" />
        <p>Short bio about the developer.</p>
      </section>
    );
  }
    

export default Header;
