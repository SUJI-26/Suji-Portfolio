// src/components/Experience.js
import React from 'react';
import { experiences } from '../data/experiences.js'; // adjust path

const Experience = () => {
  if (!experiences || experiences.length === 0) {
    return null; // or a placeholder message
  }

  return (
    <section className="experience-section section" id="experience">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">Career</span>
          <h2 className="section-title">Work Experience</h2>
        </div>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="experience-card"
              data-aos="fade-up"
              data-aos-delay={index * 100} // stagger animation
            >
              <div className="experience-header">
                <div>
                  <h3>{exp.title}</h3>
                  <p className="company">{exp.company}</p>
                </div>
                <div className="date">
                  {exp.startDate} – {exp.endDate}
                </div>
              </div>
              <ul className="experience-description">
                {exp.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;