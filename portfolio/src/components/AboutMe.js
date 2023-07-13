import React from 'react';
import Header from './Header';

  function AboutMe({ currentSection }) {
    return (
      <section className={currentSection === 'About Me' ? 'selected' : ''}>
        <img src="path/to/photo" alt="Developer" />
        <p>Short bio about the developer.</p>
      </section>
    );
  }
    

export default Header;
