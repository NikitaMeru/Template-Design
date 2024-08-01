import React from 'react';
import './Resume.css';
import { useNavigate } from 'react-router-dom';
import ResumeData from './ResumeData'; // Import ResumeData

const Resume = () => {
    const navigate = useNavigate();
    const data = ResumeData; // Use ResumeData directly

    const handleClick = () => {
        navigate('/template2');
    };

    return (
        <div className="resume-container">
            <button className='btn-name' onClick={handleClick}>
                Next
            </button>
            <header className="resume-header">
                <h1 className="name">{data.firstname} {data.lastname}</h1>
                <p className="contact-info">
                    Email: <a className='mail' href={`mailto:${data.email}`}>{data.email}</a> | 
                    Phone: {data.phone} | 
                    LinkedIn: <a href={data.linkedIn}>{data.linkedIn}</a> | 
                    GitHub: <a href={data.GitHub}>{data.GitHub}</a>
                </p>
            </header>


            <section className="experience">
                <h2>Experience</h2>
                {data.experience.map((job, index) => (
                    <div key={index} className="job">
                        <h3>{job.title}</h3>
                        <p>{job.company} | {job.location} | {job.dateRange}</p>
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
                {data.education.map((edu, index) => (
                    <div key={index} className="degree">
                        <h3>{edu.degree} in {edu.fieldOfStudy}</h3>
                        <p>{edu.sclName}, {edu.sclLocation}</p>
                        <p>Graduated: {edu.gradeYear}</p>
                    </div>
                ))}
            </section>

            <section className="skills">
                <h2>Skills</h2>
                <div className="skills-section">
                    <h3>Primary Skills</h3>
                    <ul>
                        {data.skills.primaryList.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
                <div className="skills-section">
                    <h3>Secondary Skills</h3>
                    <ul>
                        {data.skills.secondaryList.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="additional-sections">
                <h2>Certifications</h2>
                <ul>
                    {data.certifications.map((cert, index) => (
                        <li key={index}>{cert}</li>
                    ))}
                </ul>
                <h2>Languages</h2>
                <ul>
                    {data.languages.map((lang, index) => (
                        <li key={index}>{lang}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Resume;
