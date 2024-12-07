import React, { useState } from "react";
import { Skeleton } from "@mui/material";
import "./Projects.css";
import AssetsLinks from "../../Assets/AssetsLinks";

const Projects = () => {
  const projects = [
    {
      title: "Automotive CRM",
      desc: "Created a customers management system as a side project, integrating IVR technology to track communication, live inventory update and lead tracking. The system was later purchased by an automotive dealership, showcasing its effectiveness in streamlining the lead management process.",
      logo: AssetsLinks.project1,
      techStack: [
        "React",
        "NodeJS",
        "Express Js",
        "Material UI",
        "MySql",
        "Postman",
        "IVR",
        "JWT",
        "Shared Hosting",
      ],
    },
    {
      title: "AniMash",
      desc: "Developed a web app inspired by Mark Zuckerberg's Facemash, where users can compare and rate anime characters. Implemented a dynamic UI for quick interactions and used a scoring system similar to the original concept, leveraging my frontend development skills.",
      logo: AssetsLinks.project2,
      techStack: [
        "React",
        "NodeJS",
        "Express Js",
        "Material UI",
        "Supabase",
        "Postman",
        "JWT",
        "ImgBB",
        "JSON",
      ],
    },
    {
      title: "DocuVerse",
      desc: "With DocuVerse, you can have a conversation with your PDFs! Simply upload your document, and our AI chatbot will help you find the information you need. It's like having a virtual assistant for your PDFs.",
      logo: AssetsLinks.project3,
      techStack: [
        "React",
        "NodeJS",
        "Express Js",
        "Material UI",
        "Supabase",
        "Postman",
        "LangChain",
        "LLM",
      ],
    },
  ];

  return (
    <div>
      {projects.map((project, index) => (
        <div className="projects-item" key={index}>
          <div>
            <LazyImage src={project.logo} alt={project.title} />
          </div>
          <div className="projects-info">
            <div className="projects-title">{project.title}</div>
            <div className="projects-desc">{project.desc}</div>
            <div className="projects-techstack">
              {project.techStack.map((tech, index) => (
                <div key={index} className="projects-techstack-item">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// LazyImage Component using Skeleton
const LazyImage = ({ src, alt }) => {
    const [loading, setLoading] = useState(true);
  
    return (
      <>
        {loading && (
          <Skeleton
            variant="rectangular"
            width={100}
            height={100}
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.2)", // Light color for dark backgrounds
              "&::after": {
                background: "linear-gradient(90deg, rgba(255,255,255,0.2) 25%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.2) 75%)",
              },
            }}
          />
        )}
        <img
          className="projects-logo"
          src={src}
          alt={alt}
          onLoad={() => setLoading(false)}
          style={{ display: loading ? "none" : "block" }}
        />
      </>
    );
  };
  

export default Projects;
