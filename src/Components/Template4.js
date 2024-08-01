import React from 'react';
import './Template4.css'; // Import your CSS file for styling
import ResumeData from './ResumeData'; // Import the CV data
import { useNavigate } from 'react-router-dom';

const Template4 = () => {
  const currentDate = new Date().toLocaleDateString();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/template5');
  };

  const {
    firstname,
    lastname,
    profession,
    city,
    country,
    phone,
    email,
    GitHub,
    linkedIn,
    education,
    experience,
    certifications,
    languages
  } = ResumeData;

  return (
    <div className="cv-container">
      <button className='btn-nxt' onClick={handleClick}>
        Next
      </button>
      <header className="header">
        <h1 className="name">{firstname} {lastname}</h1>
        <p className="contact-info">
          Email: <a className='mail' href={`mailto:${email}`}>{email}</a> | 
          Phone: {phone} | 
          LinkedIn: <a href={linkedIn} target="_blank" rel="noopener noreferrer">{linkedIn}</a> | 
          GitHub: <a href={GitHub} target="_blank" rel="noopener noreferrer">{GitHub}</a>
        </p>
      </header>

      <section className="experience">
        <h2>Experience</h2>
        {experience.map((job, index) => (
          <div key={index} className="job">
            <h3>{job.title} at {job.company} ({job.dateRange})</h3>
            <ul>
              {job.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="education">
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.degree} in {edu.fieldOfStudy}</h3>
            <h4>{edu.sclName} ({edu.sclLocation})</h4>
            <p>Graduated: {edu.gradeYear}</p>
          </div>
        ))}
      </section>

      <section className="certifications">
        <h2>Certifications</h2>
        <ul>
          {certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </section>

      <section className="languages">
        <h2>Languages</h2>
        <ul>
          {languages.map((lang, index) => (
            <li key={index}>{lang}</li>
          ))}
        </ul>
      </section>

      <footer className="footer">
        <p>Last updated on {currentDate}</p>
      </footer>
    </div>
  );
};

export default Template4;
