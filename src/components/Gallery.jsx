import React from "react";
import "./Gallery.css";

function Gallery() {
  const events = [
    {
      img: "data:image/jpeg;base64,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",
      title: "Free Health Camp",
      desc: "Organized a free medical check-up camp for underprivileged communities, serving over 2000 patients.",
      icon: "ri-heart-pulse-line",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDkDAC0-KDCYqrfzBi0_Pco6ZiImXq6mWswQ&s",
      title: "Blood Donation Drive",
      desc: "Collaborated with Red Cross to collect 500+ units of blood for critical care patients.",
      icon: "ri-drop-line",
    },
    {
      img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
      title: "Covid-19 Vaccination Camp",
      desc: "Led a large-scale vaccination program with over 10,000 people safely vaccinated.",
      icon: "ri-shield-cross-line",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWDb65-ZBy-VhMwwyT2BhteIBliZ9llLVJug&s",
      title: "Women's Health Awareness",
      desc: "Conducted health seminars across 30 schools promoting women’s health and hygiene awareness.",
      icon: "ri-women-line",
    },
    {
      img: "https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=800&q=80",
      title: "Mental Health Support Week",
      desc: "Launched counseling and therapy programs to promote emotional well-being among youth.",
      icon: "ri-brain-line",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR0VLV99cGuNOyl5SSMoCGiBMEvGhV7SXaYg&s",
      title: "Rural Health Initiative",
      desc: "Mobile medical vans were deployed in 50+ villages to provide doorstep medical care.",
      icon: "ri-community-line",
    },
    {
      img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
      title: "Child Care Program",
      desc: "Offered nutrition programs and vaccination drives for children under 5 years old.",
      icon: "ri-empathize-line",
    },
    
    {
      img: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80",
      title: "Green Hospital Initiative",
      desc: "Planted 500+ trees around the hospital campus as part of our eco-health project.",
      icon: "ri-leaf-line",
    },
    {
      img: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=800&q=80",
      title: "Award Recognition",
      desc: "Honored as ‘Best Healthcare Service Provider 2024’ for excellence and innovation.",
      icon: "ri-award-line",
    },
    
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJcF99llYFo6IMeg-1ONz4UbZpyoZvf54Yw&s",
      title: "Medical Research Award",
      desc: "Our research team was honored for breakthrough work in AI-driven patient monitoring systems.",
      icon: "ri-flask-line",
    },
  ];

  return (
    <div className="gallery">
      <h1>
        <i className="ri-gallery-line"></i> Our Social Work & Achievements
      </h1>
      <p className="subtitle">
        A glimpse into the milestones, initiatives, and community programs that define our hospital’s
        commitment to health, care, and compassion.
      </p>

      <div className="gallery-grid">
        {events.map((event, index) => (
          <div className="gallery-card" key={index}>
            <img src={event.img} alt={event.title} />
            <div className="gallery-info">
              <i className={event.icon}></i>
              <h3>{event.title}</h3>
              <p>{event.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;