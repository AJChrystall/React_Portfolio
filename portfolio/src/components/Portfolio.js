import React from 'react';

function Header() {
    return (
      <header>
        <h1>Developer's Name</h1>
        <Navigation />
      </header>
    );
  }
  function Portfolio({ currentSection }) {
    return (
      <section className={currentSection === 'Portfolio' ? 'selected' : ''}>
        <div className="portfolio-item">
          <img src="path/to/app1" alt="App 1" />
          <h3>App 1</h3>
          <p>
            <a href="link-to-deployed-app1">Deployed App</a> |{' '}
            <a href="link-to-github-repo1">GitHub Repo</a>
          </p>
        </div>
        {/* Add more portfolio items */}
      </section>
    );
  }
  

export default Header;
