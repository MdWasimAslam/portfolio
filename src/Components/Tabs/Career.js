import React from "react";
import "./Career.css";
import AssetsLinks from "../../Assets/AssetsLinks";

const Career = () => {
  const experiences = [
    {
      companyImg: AssetsLinks.companyImg,  
      company: "NLB Technology Services Pvt Ltd",
      role: "Software Engineer",
      duration: "Feb 2022 - Present",
      description: "I worked on a variety of projects, including the development of an Applicant Tracking System (ATS), health analytics tools, and AI-driven applications. I contributed to building scalable and efficient web applications, optimizing backend APIs, and integrating third-party services to enhance overall functionality. With a strong emphasis on clean and secure code, I implemented robust authentication systems and developed reusable UI components to improve user experience. Additionally, I collaborated closely with cross-functional teams, utilizing Agile methodologies to ensure timely delivery of high-quality solutions.",
      techStack : [
        "React",
        "Material UI",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Azure DevOps",
        "TypeScript",
        "JWT (JSON Web Tokens)",
        "Docker",
        "Sequelize",
        "MySQL",
        "Nginx",
        "Postman",
        "Git",
        "GitHub",
        "Babel",
        "AWS",
        "Mongoose",
        "Express Validator",
        "Tailwind CSS",
        "Cloudinary",
        "WebSocket",
        "Vercel",
        "React Router",
        "Heroku",
        "Jira",
        "MongoDB Atlas",
        "VSCode",
        "Figma",
      ]
      
    },
    
  ];

  return (
    <div className="career-container">
      {/* <h1 className="career-title">My Career Journey</h1>
      <p className="career-subtitle">I have experience working with a few companies, small… big… but I loved what I did!
      </p> */}
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
                <img src={exp.companyImg} alt="company logo" className="timeline-company-logo" />
              <h3 className="timeline-company">{exp.company}</h3>
              <p className="timeline-role">{exp.role}</p>
              <p className="timeline-description">{exp.description}</p>

                <div className="tech-stack">
                    <ul>
                        {exp.techStack.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                        </ul>
                </div>

              <p className="timeline-duration">{exp.duration}</p>


            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
