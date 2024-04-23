import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>Contact Us</h4>
            <p>Email: travelsri@gmail.com</p>
            <p>Phone: +94 77-145-9451</p>
          </div>
          <div className="col-md-4">
            <h4>Address</h4>
            <p>No. 174, "Singhegiri"</p>
            <p>Vijayarama Road, Colombo 04</p>
          </div>
          <div className="col-md-4">
            <h4>Follow Us</h4>
            <p>Facebook</p>
            <p>Instagram</p>
          </div>
        </div>
      </div>
  </footer>
  )
};

export default Footer;
