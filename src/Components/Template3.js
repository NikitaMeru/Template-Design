import React from 'react';
import './Template3.css'; // Import your CSS file for styling
import ResumeData from './ResumeData'; // Import the CV data
import { useNavigate } from 'react-router-dom';

const Template3 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/template4');
  };

  const {
    firstname,
    lastname,
    profession,
    city,
    country,
    phone,
    email,
    linkedIn,
    GitHub,
    education,
    experience,
    skills,
    certifications,
    languages
  } = ResumeData;

  return (
    <div className="resume-template">
      <button className='btn-next' onClick={handleClick}>
        Next
      </button>
      <header>
        <h1>{firstname} {lastname}</h1>
        <p>{profession}</p>
        <div className="contact-info">
          <p className='contact'>CONTACT</p>
          <ul>
            <li style={{color:'white'}}>{city}, {country}</li>
            <li style={{color:'white'}}>{phone}</li>
            <li style={{color:'white'}}>Email: <a href={`mailto:${email}`}>{email}</a></li>
            <li style={{color:'white'}}>GitHub: <a href={GitHub} target="_blank" rel="noopener noreferrer">{GitHub}</a></li>
            <li style={{color:'white'}}>LinkedIn: <a href={linkedIn} target="_blank" rel="noopener noreferrer">{linkedIn}</a></li>
          </ul>
        </div>
      </header>
      
      <section className="education">
        <h2>EDUCATION</h2>
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <p>{edu.sclName} | {edu.sclLocation}</p>
            <p>{edu.degree} in {edu.fieldOfStudy}</p>
            <p>Graduated: {edu.gradeYear}</p>
          </div>
        ))}
      </section>

      <section className="experience">
        <h2>EXPERIENCE</h2>
        {experience.map((job, index) => (
          <div key={index} className="experience-item">
            <p>{job.dateRange}</p>
            <p>{job.title} at {job.company} | {job.location}</p>
            <ul>
              {job.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="skills">
        <h2>SKILLS</h2>
        <div className="skills-section">
          <h3>Primary Skills</h3>
          <ul>
            {skills.primaryList.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="skills-section">
          <h3>Secondary Skills</h3>
          <ul>
            {skills.secondaryList.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="certifications">
        <h2>CERTIFICATIONS</h2>
        <ul>
          {certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </section>

      <section className="languages">
        <h2>LANGUAGES</h2>
        <ul>
          {languages.map((lang, index) => (
            <li key={index}>{lang}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Template3;
