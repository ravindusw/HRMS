import React from 'react';
import './Footer.css'; // Create a separate CSS file for styling
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Jupiter Apparels HRM</h4>
          <p>Empowering our workforce for a better tomorrow.</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/employee-directory">Employee Directory</a></li>
            <li><a href="/leave-requests">Leave Requests</a></li>
            <li><a href="/payroll">Payroll</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: hr@jupiterapparels.com</p>
          <p>Phone: +94 123 456 789</p>
          <p>Address: No. 123, Apparel Avenue, Colombo, Sri Lanka</p>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com/jupiterapparels" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/jupiterapparels" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com/company/jupiterapparels" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Jupiter Apparels. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;



