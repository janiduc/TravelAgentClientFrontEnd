import React from 'react';
import '../styles/footerr.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>Contact Us</h4>
            <p>Email: example@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
          <div className="col-md-4">
            <h4>Address</h4>
            <p>1234 Street Name</p>
            <p>City, State, Country</p>
          </div>
          <div className="col-md-4">
            <h4>Follow Us</h4>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
