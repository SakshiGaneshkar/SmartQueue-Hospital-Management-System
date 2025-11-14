import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="overlay">
        <div className="home-content">
          <h1 className="main-heading">
            <i className="ri-hospital-line"></i> SmartQueue Hospital
          </h1>
          <p className="tagline">
            Revolutionizing healthcare with a seamless queue-free experience.
            Book, relax, and get your digital token instantly.
          </p>

          <a href="/book" className="book-btn">
            <i className="ri-clipboard-line"></i> Book Appointment
          </a>

          <div className="achievements">
            <div className="ach-card">
              <i className="ri-user-heart-line"></i>
              <h3>50+ Doctors</h3>
              <p>Specialists in every major field of medicine.</p>
            </div>
            <div className="ach-card">
              <i className="ri-empathize-line"></i>
              <h3>9000+ Patients</h3>
              <p>Successfully treated with care and compassion.</p>
            </div>
            <div className="ach-card">
              <i className="ri-award-line"></i>
              <h3>15+ Years</h3>
              <p>Trusted excellence in medical services.</p>
            </div>
          </div>


        
          <div className="about-section">
            <h2>About Our Hospital</h2>
            <p>
              At <strong>SmartQueue Hospital</strong>, we believe time is health.
              Our mission is to simplify your hospital visits with an advanced
              queue management system that minimizes wait time and maximizes
              comfort. We’ve proudly served thousands of patients with
              state-of-the-art facilities and dedicated healthcare professionals.
            </p>
          </div>


          <div className="impact-section">
  <h2>💡 How SmartQueue Helps Society</h2>
  <p>
    <strong>SmartQueue Hospital</strong> reduces long waiting lines by providing a 
    digital token system that manages patient flow efficiently. It ensures 
    patients—especially the elderly, pregnant women, and those with urgent needs— 
    spend less time waiting and more time receiving care.  
  </p>
  <p>
    This initiative saves time, promotes organized healthcare delivery, and 
    supports hospitals in maintaining crowd-free, hygienic environments — 
    making healthcare smarter and more human-centered.
  </p>
</div>
        </div>
      </div>
    </div>
  );
}

export default Home;