import  { useState } from 'react';
import '../css section/About.css';

export default function About() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send email goes here, possibly using an email service API
    console.log('Form submitted:', formData);
  };

  return (
    <div className="aboutus-container">
      <div className="aboutus-content">
        <h1>About Us</h1>
        <p>Welcome to our personal budget website, your trusted partner in achieving financial stability. Our mission is to provide you with powerful and user-friendly tools to track your income and expenses, set realistic financial goals, and monitor your progress. With our intuitive interface, you can effortlessly manage your finances, make informed decisions, and secure your financial future. We believe that everyone deserves financial peace of mind, and we're here to help you every step of the way. Join us and take the first step towards a more organized and prosperous life.</p>
      </div>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </div>
    </div>
  );
}
