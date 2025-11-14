import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    session: "",
    timing: "",
    query: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // ✅ Added alert message
    alert("✅ Form has been successfully submitted! Please wait...");

    setTimeout(() => setSubmitted(false), 4000);
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      session: "",
      timing: "",
      query: "",
    });
  };

  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>
          <i className="ri-customer-service-2-line"></i> Contact Us
        </h1>
      </header>

      <div className="contact-container">
        {/* LEFT SIDE */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Welcome to <b>SmartQueue Hospital</b>! Our mission is to provide fast, reliable, and compassionate care.
          </p>
          <div className="info-card">
            <i className="ri-phone-line"></i>
            <div>
              <h3>Phone</h3>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="info-card">
            <i className="ri-mail-line"></i>
            <div>
              <h3>Email</h3>
              <p>support@smartqueuehospital.com</p>
            </div>
          </div>

          <div className="info-card">
            <i className="ri-map-pin-line"></i>
            <div>
              <h3>Address</h3>
              <p>123 Health Street, Pune</p>
            </div>
          </div>

          <div className="timing">
            <h3>Working Hours</h3>
            <ul>
              <li>Mon – Fri: 9 AM – 8 PM</li>
              <li>Sat: 10 AM – 6 PM</li>
              <li>Sun: Emergency Only</li>
            </ul>
          </div>

          <div className="highlights">
            <h3>Our Services</h3>
            <ul>
              <li>24/7 Emergency Care</li>
              <li>Online Appointment Booking</li>
              <li>Experienced Doctors in All Specialties</li>
              <li>Advanced Diagnostic Facilities</li>
              <li>Patient Counseling & Support</li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="contact-form-container">
          <h2>Sender's Message</h2>
          <form onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />

            <label>Phone Number</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />

            <label>Session Type</label>
            <select name="session" value={formData.session} onChange={handleChange} required>
              <option value="">Select Session</option>
              <option value="General Checkup">General Checkup</option>
              <option value="Consultation">Consultation</option>
              <option value="Emergency">Emergency</option>
              <option value="Follow Up">Follow Up</option>
            </select>

            <label>Preferred Timing</label>
            <input type="time" name="timing" value={formData.timing} onChange={handleChange} required />

            <label>Your Query</label>
            <textarea
              name="query"
              value={formData.query}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>

            <div className="form-btn">
              <button type="submit">
                <i className="ri-send-plane-fill"></i> Send Message
              </button>
            </div>

            {submitted && <p className="success-msg">✅ Message sent successfully!</p>}
          </form>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>About SmartQueue</h3>
            <p>
              SmartQueue Hospital is dedicated to providing quality healthcare
              with efficiency and compassion. Your well-being is our top priority.
            </p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>Home</li>
              <li>Appointments</li>
              <li>Doctors</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <ul>
              <li>📍 123 Health Street, Pune</li>
              <li>📞 +91 98765 43210</li>
              <li>✉ support@smartqueuehospital.com</li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>
            © 2025 SmartQueue Hospital | Designed with 💚 by 
            <span> Sakshi</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Contact;