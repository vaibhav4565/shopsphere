import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', background: '#343a40', color: 'white', padding: '0 2rem', position: 'fixed',width: '100%' , bottom : 0 }}>
      <Container style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
        <div style={{ textAlign: 'center' }}>
          <h5 style={{padding: '1rem', color: 'white' }}>Shopsphere &copy; {currentYear}</h5>
          
        </div>
        <div style={{ padding: '1rem', textAlign: 'center' }}>
          <p>Contact: info@shopsphere.com</p>
        </div>
        <div style={{padding: '1rem', textAlign: 'center' }}>
          <p>Follow us on: <a href="https://twitter.com/shopsphere" target="_blank" rel="noopener noreferrer">Twitter</a> | <a href="https://facebook.com/shopsphere" target="_blank" rel="noopener noreferrer">Facebook</a></p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
