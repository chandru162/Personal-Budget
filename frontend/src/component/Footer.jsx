import React from 'react';
import '../css section/Footer.css';

export default function Footer() {
  return (
    <footer className="footer bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>"Manage your finances effortlessly with our comprehensive budgeting tools. Our platform helps you track spending, set financial goals, and save more effectively. Get detailed insights into your financial habits and make informed decisions. Whether you're planning for a big purchase or just want to stay on top of your bills, we've got you covered. Join us today and take the first step towards financial freedom."</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/home" className="text-white">Home</a></li>
              <li><a href="/profile" className="text-white">Profile</a></li>
              <li><a href="/managment" className="text-white">Contact</a></li>
              <li><a href="/about" className="text-white">About</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: support@budgetwebsite.com</p>
            <p>Phone: +1 234 567 890</p>
            <div className="social-icons">
              <a href="https://facebook.com" className="text-white me-2"><i className="fab fa-facebook"></i></a>
              <a href="https://twitter.com" className="text-white me-2"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com" className="text-white me-2"><i className="fab fa-instagram"></i></a>
              <a href="https://linkedin.com" className="text-white"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col text-center">
            <p>&copy; 2024 Personal Budget. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
