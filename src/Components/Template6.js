// src/App.js

import React from 'react';
import ResumeData from './ResumeData'; // Import ResumeData
import { useNavigate } from 'react-router-dom';


// src/Template6.js

 const Template6 = () => {
  const {
    firstname,
    lastname,
    profession,
    phone,
    email,
    linkedIn,
    GitHub,
    education,
    experience,
    skills,
    certifications
  } = ResumeData;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/template7');
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl bg-gray-100">
      <button
        className="btn-next px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        onClick={handleClick}
      >
        Next
      </button>
      
      {/* Header Section */}
      <header className="header text-center mb-12">
        <h1 className="text-4xl font-bold">{firstname} {lastname}</h1>
        <p className="text-xl italic text-gray-700">{profession}</p>
        <p className="text-lg mt-2">
          Email: <a className="text-blue-600 hover:underline" href={`mailto:${email}`}>{email}</a> | 
          Phone: {phone} | 
          LinkedIn: <a className="text-blue-600 hover:underline" href={linkedIn} target="_blank" rel="noopener noreferrer">{linkedIn}</a> | 
          GitHub: <a className="text-blue-600 hover:underline" href={GitHub} target="_blank" rel="noopener noreferrer">{GitHub}</a>
        </p>
      </header>

      {/* Education Section */}
      <div className="education mb-12">
        <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2 mb-4">EDUCATION</h2>
        {education && education.map((edu, index) => (
          <div className="education-item mb-6" key={index}>
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-gray-600">{edu.sclName} | {edu.sclLocation} | {edu.gradeYear}</p>
            <ul className="list-disc list-inside mt-2">
              <li>{edu.fieldOfStudy}</li>
            </ul>
          </div>
        ))}
      </div>

      {/* Experience Section */}
      <div className="experience mb-12">
        <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2 mb-4">EXPERIENCE</h2>
        {experience && experience.map((exp, index) => (
          <div className="experience-item mb-6" key={index}>
            <h3 className="text-xl font-semibold">{exp.title} at {exp.company}</h3>
            <p className="text-gray-600">{exp.dateRange} | {exp.location}</p>
            <ul className="list-disc list-inside mt-2">
              {exp.responsibilities && exp.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="skills mb-12">
        <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2 mb-4">SKILLS</h2>
        <div className="skills-section mb-4">
          <h3 className="text-xl font-semibold">Primary Skills</h3>
          <ul className="list-disc list-inside mt-2">
            {skills.primaryList && skills.primaryList.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="skills-section">
          <h3 className="text-xl font-semibold">Secondary Skills</h3>
          <ul className="list-disc list-inside mt-2">
            {skills.secondaryList && skills.secondaryList.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="certifications mb-12">
        <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2 mb-4">CERTIFICATIONS</h2>
        <ul className="list-disc list-inside">
          {certifications && certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};


export default Template6


