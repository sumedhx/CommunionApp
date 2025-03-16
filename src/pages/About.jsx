import React from "react";
import '../styles/About.css'

const About = () => {
  return (
    <div className="about-page">
      <h1 className="about-title">About Us</h1>
      
      <section className="about-section">
        <h2 className="about-subtitle">Our Mission</h2>
        <p className="about-text">
          Our Communion App is designed to bring communities closer by simplifying 
          <strong> event organization, participation, and engagement.</strong> 
          Whether it’s a <strong>religious gathering, social event, or charity fundraiser,</strong> 
          we provide a platform to <strong>connect, share, and celebrate</strong> with ease.
        </p>
      </section>

      <section className="about-section">
        <h2 className="about-subtitle">What We Offer</h2>
        <ul className="about-list">
          <li><strong>Event Management –</strong> Easily create, manage, and promote events.</li>
          <li><strong>Community Engagement –</strong> Find events that match your interests and participate in meaningful gatherings.</li>
          <li><strong>Seamless Communication –</strong> Stay updated with event notifications and real-time updates.</li>
          <li><strong>Accessibility for Everyone –</strong> No complicated setups, just a user-friendly experience for all.</li>
        </ul>
      </section>

      <section className="about-section">
        <h2 className="about-subtitle">Why Choose Us?</h2>
        <ul className="about-list">
          <li>✅ <strong>Bringing People Together –</strong> Strengthening bonds within religious, social, and charitable communities.</li>
          <li>✅ <strong>Effortless Event Planning –</strong> Organizers can efficiently handle RSVPs, details, and attendees.</li>
          <li>✅ <strong>Safe & Inclusive –</strong> A space where everyone feels welcomed and valued.</li>
        </ul>
      </section>

      <p className="about-footer">Join us in making events more <strong>meaningful, accessible, and impactful!</strong></p>
    </div>
  );
};

export default About;
