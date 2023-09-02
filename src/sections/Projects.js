import React from "react";
import {Link} from "react-router-dom";
import { motion } from "framer-motion";
import '../scss/sections/projects.scss'
import mpm from '../assets/mpm.png';
import elixir from '../assets/elixir.png';



const Projects = () => {
  const projectsData = [
    {
      image: elixir,
      projectName: "Elixir",
      projectLink: "/",
      projectDescription:
        "This is a web application that uses the PokeAPI to display information about different Pokemon.",
      projectTech: ["ReactJs", "PokeAPI", "CSS"],
      projectExternalLinks: {
      },
    },
    {
      image: mpm,
      projectName: "Million Person March",
      projectLink: "https://mpm.mwv.one",
      projectDescription:
        "This project is built to portray the statistics of another application through a beautiful UI",
      projectTech: ["ReactJs", "D3.js"],
      projectExternalLinks: {
      },
    },
    
  ];

  return (
    <motion.div
      className="projects"
      id="work"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>Few Things I&apos;ve Built.</h2>
      </div>
      <div className="project-container">
        <div className="projects-container">
          {projectsData.map(
            ({
              image,
              projectDescription,
              projectLink,
              projectExternalLinks,
              projectName,
              projectTech,
            }) => {
              return (
                <motion.div
                  className="project"
                  key={projectName}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  variants={{
                    visible: { opacity: 1, y: -50 },
                    hidden: { opacity: 0, y: 0 },
                  }}
                >
                  <Link to={projectLink} target="_blank">
                    <div className="project-image">
                      <div className="project-image-overlay"></div>
                      <div className="project-image-container">
                        <img
                          src={image}
                          style={{width : "100%"}}
                          alt={projectName}
                          fill
                          // quality={100}
                        />
                      </div>
                    </div>
                  </Link>
                  <div className="project-info">
                    <p className="project-info-overline">Featured Project</p>
                    <Link
                      style={{ textDecoration: "none" }}
                      to={projectLink}
                      target="_blank"
                    >
                      <h3 className="project-info-title">{projectName}</h3>
                    </Link>
                    <div className="project-info-description">
                      <p>{projectDescription}</p>
                    </div>
                    <ul className="project-info-tech-list">
                      {projectTech.map((tech) => (
                        <li className="project-info-tech-list-item" key={tech}>
                          {tech}
                        </li>
                      ))}
                    </ul>
                    {/* <ul className="project-info-links">
                      <li className="project-info-links-item">
                        <Link
                          to={projectExternalLinks.github}
                          target="_blank"
                          className="project-info-links-item-link"
                        >
                          <FiGithub />
                        </Link>
                      </li>
                      <li className="project-info-links-item">
                        <Link
                          to={projectExternalLinks.externalLink}
                          target="_blank"
                          className="project-info-links-item-link"
                        >
                          <FiExternalLink />
                        </Link>
                      </li>
                    </ul> */}
                  </div>
                </motion.div>
              );
            }
          )}
        </div>
        
      </div>
    </motion.div>
  );
};

export default Projects;
