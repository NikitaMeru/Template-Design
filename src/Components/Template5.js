import React from 'react';
import './Template5.css'; // Import your CSS file for styling
import ResumeData from './ResumeData'; // Import ResumeData

const Template5 = () => {
  const {
    firstname,
    lastname,
    phone,
    email,
    linkedIn,
    GitHub,
    education,
    summary,
    experience,
    skills,
    certifications,
    languages
  } = ResumeData;

  return (
    <div className="cv-container">
      <header className="header">
        <h1 className="name">{firstname} {lastname}</h1>
        <p className="contact-info">
          Email: <a className='mail' href={`mailto:${email}`}>{email}</a> | 
          Phone: {phone} | 
          LinkedIn: <a href={linkedIn} target="_blank" rel="noopener noreferrer">{linkedIn}</a> | 
          GitHub: <a href={GitHub} target="_blank" rel="noopener noreferrer">{GitHub}</a>
        </p>
      </header>

      
      <section className="education">
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.sclName}</h3>
            <p className="dates">{edu.gradeYear}</p>
            <p>{edu.degree} in {edu.fieldOfStudy}, {edu.sclLocation}</p>
          </div>
        ))}
      </section>

      <section className="experience">
        <h2>Experience</h2>
        {experience.map((job, index) => (
          <div key={index} className="experience-item">
            <h3>{job.title} at {job.company} ({job.dateRange})</h3>
            <ul>
              {job.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="technical-strengths">
        <h2>Technical Skills</h2>
        <table>
          <tbody>
            <tr>
              <td><strong>Primary Skills</strong></td>
              <td>{skills.primaryList.join(', ')}</td>
            </tr>
            <tr>
              <td><strong>Secondary Skills</strong></td>
              <td>{skills.secondaryList.join(', ')}</td>
            </tr>
            <tr>
              <td><strong>Certifications</strong></td>
              <td>{certifications.join(', ')}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="languages">
        <h2>Languages</h2>
        <ul>
          {languages.map((lang, index) => (
            <li key={index}>{lang}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Template5;
