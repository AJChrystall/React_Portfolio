import React from 'react';

function Header() {
    return (
      <header>
        <h1>Developer's Name</h1>
        <Navigation />
      </header>
    );
  }
  function Contact({ currentSection }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [formError, setFormError] = useState('');
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
  
      if (!name || !email || !message) {
        setFormError('All fields are required.');
      } else if (!isValidEmail(email)) {
        setFormError('Please enter a valid email address.');
      } else {
        // Handle form submission
        // Clear form fields and error message
        setName('');
        setEmail('');
        setMessage('');
        setFormError('');
      }
    };
  
    const isValidEmail = (email) => {
      // Implement email validation logic (regex, external libraries, etc.)
      return true;
    };
  
    return (
      <section className={currentSection === 'Contact' ? 'selected' : ''}>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
  
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
  
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
  
          {formError && <p className="error">{formError}</p>}
  
          <button type="submit">Submit</button>
        </form>
      </section>
    );
  }
  

export default Header;
