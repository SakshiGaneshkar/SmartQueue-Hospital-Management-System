import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about-hero">
        <h1>
          <i className="ri-hospital-line"></i> About SmartQueue Hospital
        </h1>
        <p>
          Bringing healthcare and technology together to provide seamless,
          efficient, and compassionate care.
        </p>
      </div>

      <div className="about-container">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            SmartQueue Hospital is a modern healthcare center known for its
            innovation and patient-first approach. Established in 2010, we’ve
            transformed the way patients experience healthcare — minimizing wait
            times through our unique <strong>token-based queue system</strong>.
          </p>
          <p>
            Our hospital offers specialized departments like Cardiology,
            Neurology, Pediatrics, and Orthopedics, each equipped with the
            latest medical technologies and experienced professionals. We
            believe in a future where medical services are not just accessible
            but also smart and efficient.
          </p>

          <div className="about-highlights">
            <div className="highlight">
              <i className="ri-heart-pulse-line"></i>
              <h3>Mission</h3>
              <p>
                To provide high-quality, technology-driven healthcare with
                compassion, transparency, and care.
              </p>
            </div>
            <div className="highlight">
              <i className="ri-lightbulb-flash-line"></i>
              <h3>Vision</h3>
              <p>
                To be the most trusted hospital offering digital-first
                healthcare and eliminating long queues forever.
              </p>
            </div>
            <div className="highlight">
              <i className="ri-team-line"></i>
              <h3>Our Values</h3>
              <p>
                Integrity, Innovation, Empathy, and Excellence — our core values
                drive every patient interaction and every decision we make.
              </p>
            </div>
          </div>
        </div>

        <div className="about-image">
          <img
            src="data:image/jpeg;base64,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"
            alt="Hospital Building"
          />
        </div>
      </div>

      <div className="about-stats">
        <div className="stat">
          <i className="ri-user-heart-line"></i>
          <h2>200+</h2>
          <p>Qualified Doctors</p>
        </div>
        <div className="stat">
          <i className="ri-hotel-line"></i>
          <h2>10,000+</h2>
          <p>Happy Patients</p>
        </div>
        <div className="stat">
          <i className="ri-award-line"></i>
          <h2>15+</h2>
          <p>Years of Excellence</p>
        </div>
        <div className="stat">
          <i className="ri-service-line"></i>
          <h2>30+</h2>
          <p>Specialized Departments</p>
        </div>
      </div>
    </div>
  );
}

export default About;