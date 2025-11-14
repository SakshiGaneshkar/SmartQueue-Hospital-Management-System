import React from "react";
import "./Doctors.css";

function Doctors() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Aarav Mehta",
      specialty: "Cardiologist",
      qualification: "MBBS, MD (Cardiology)",
      experience: "15 Years Experience",
      description:
        "Expert in cardiac care and life-saving interventions with compassion and precision.",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      specialty: "Pediatrician",
      qualification: "MBBS, DCH",
      experience: "10 Years Experience",
      description:
        "Dedicated to child care, preventive health, and early development programs.",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "Dr. Rohan Patel",
      specialty: "Orthopedic Surgeon",
      qualification: "MBBS, MS (Ortho)",
      experience: "12 Years Experience",
      description:
        "Specializes in joint replacement, sports injuries, and post-surgery rehabilitation.",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 4,
      name: "Dr. Sneha Nair",
      specialty: "Dermatologist",
      qualification: "MBBS, MD (Dermatology)",
      experience: "8 Years Experience",
      description:
        "Skin, hair, and aesthetic expert with innovative cosmetic procedures.",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 5,
      name: "Dr. Rajesh Verma",
      specialty: "Neurologist",
      qualification: "MBBS, DM (Neurology)",
      experience: "18 Years Experience",
      description:
        "Treats brain, spinal, and nerve disorders using modern neurotech methods.",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      id: 6,
      name: "Dr. Kavita Das",
      specialty: "Gynecologist",
      qualification: "MBBS, MD (Gynecology)",
      experience: "14 Years Experience",
      description:
        "Focuses on maternity, fertility, and advanced women’s healthcare.",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      id: 7,
      name: "Dr. Vikram Singh",
      specialty: "ENT Specialist",
      qualification: "MBBS, MS (ENT)",
      experience: "11 Years Experience",
      description:
        "Expert in hearing, nasal, and throat treatments with surgical precision.",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      id: 8,
      name: "Dr. Neha Gupta",
      specialty: "Radiologist",
      qualification: "MBBS, MD (Radiology)",
      experience: "9 Years Experience",
      description:
        "Provides accurate imaging diagnostics for effective treatment planning.",
      image: "https://randomuser.me/api/portraits/women/8.jpg",
    },
    {
      id: 9,
      name: "Dr. Arjun Desai",
      specialty: "Oncologist",
      qualification: "MBBS, DM (Oncology)",
      experience: "16 Years Experience",
      description:
        "Specialist in cancer treatment with personalized patient care and counseling.",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    {
      id: 10,
      name: "Dr. Nisha Rao",
      specialty: "Psychiatrist",
      qualification: "MBBS, MD (Psychiatry)",
      experience: "10 Years Experience",
      description:
        "Helps patients achieve mental wellness through therapy and clinical guidance.",
      image: "https://randomuser.me/api/portraits/women/10.jpg",
    },
  ];

  return (
    <div className="doctors">
      <h1 className="heading">
        <i className="ri-user-heart-line"></i> Our Expert Doctors
      </h1>
      <p className="sub-text">
        Meet our highly qualified doctors who bring compassion and excellence
        together to deliver world-class healthcare.
      </p>

      <div className="doctor-grid">
        {doctors.map((doc) => (
          <div key={doc.id} className="doctor-card">
            <div className="image-container">
              <img src={doc.image} alt={doc.name} />
            </div>
            <h2>{doc.name}</h2>
            <h4>{doc.specialty}</h4>
            <p className="qual">{doc.qualification}</p>
            <p className="exp">
              <i className="ri-stethoscope-line"></i> {doc.experience}
            </p>
            <p className="desc">{doc.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctors;