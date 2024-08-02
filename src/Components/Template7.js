import React from 'react';
import ResumeData from './ResumeData'; // Import ResumeData
import './Template7.css'; // Ensure you have the correct path for your CSS

const Template7 = () => {
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
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>{firstname} {lastname}</h1>
          <h2>{profession}</h2>
          <hr />
          <div className="row">
            <div className="col-md-4">
             
              <p>Address: {city}, {country}</p>
              <p>Phone: {phone}</p>
              <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
              <p>LinkedIn: <a href={linkedIn} target="_blank" rel="noopener noreferrer">{linkedIn}</a></p>
              <p>GitHub: <a href={GitHub} target="_blank" rel="noopener noreferrer">{GitHub}</a></p>
            </div>
            
          </div>
          <hr />

          <h3>Education</h3>
          {education && education.map((edu, index) => (
            <div className="row" key={index}>
              <div className="col-md-12">
                <h4>{edu.degree} in {edu.fieldOfStudy}</h4>
                <p>{edu.sclName}, {edu.sclLocation} | {edu.gradeYear}</p>
              </div>
            </div>
          ))}

          <h3>Experience</h3>
          {experience && experience.map((exp, index) => (
            <div className="row" key={index}>
              <div className="col-md-12">
                <h4>{exp.title}</h4>
                <p>{exp.company}, {exp.location} | {exp.dateRange}</p>
                <ul>
                  {exp.responsibilities && exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <hr />
          
          <hr />
          <h3>Skills</h3>
          <div className="row">
            <div className="col-md-12">
              <h4>Primary Skills</h4>
              <ul>
                {skills.primaryList && skills.primaryList.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
              <h4>Secondary Skills</h4>
              <ul>
                {skills.secondaryList && skills.secondaryList.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
          <hr />
          <h3>Certifications</h3>
          <ul>
            {certifications && certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
          <hr />
          <h3>Languages</h3>
          <ul>
            {languages && languages.map((lang, index) => (
              <li key={index}>{lang}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Template7;
