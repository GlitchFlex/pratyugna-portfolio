import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import { motion } from "framer-motion";
import '../scss/sections/experiences.scss'


const Experience = () => {
  const [selected, setSelected] = useState(0);

  // useEffect(() => {
  //   const transformSelected = () => {
  //     const underlineElement = document.querySelector<HTMLElement>(".underline");
  //     if (underlineElement) {
  //         underlineElement.style.top = `${selected * 4}rem`;
  //     } else {
  //         console.warn("Element with class 'underline' not found.");
  //     }
  // };


  //   setTimeout(()=>{
  //     transformSelected();
  //     console.log("after 4 sec");
  //   }, 4000);
  //   transformSelected();
  // }, [selected]);

  const experiences = [
    {
      name: "MindWebsVenture",
      role: "Frontend Developer (React) SDE Intern",
      url: "https://www.mindwebs.org",
      start: "August 2022",
      end: "March 2023",
      shortDescription: [
        "API call optimization in the frontend (React + TypeScript) making the application response time faster using React Query.",
        "Developing good to have features such as Spotlight Search and block based text editors",
        "Fixing criticals bugs and taking part in weekly QAT",
      ],
    },
    {
      name: "IEM Diversion 2k21",
      role: "Full Stack Developer (MERN)",
      url: "",
      start: "January 2021",
      end: "March 2021",
      shortDescription: [
        "Developing the entire frontend in react js",
        "Setting up the Socket for the front end.",
      ],
    },
    
  ];

  return (
    <>
      <div id="experience"></div>
      <motion.div
        className="experience"
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
          <h2>Work Experience.</h2>
        </div>
        <div className="container">
          <ul className="exp-slider">
            {/* <div className="underline"></div> */}
            {experiences.map((experience, index) => {
              return (
                <li
                  key={index}
                  className={`exp-slider-item ${
                    index === selected && "exp-slider-item-selected"
                  }`}
                  onClick={() => {setSelected(index)}}
                >
                  <span>{experience.name}</span>
                </li>
              );
            })}
          </ul>
          <div className="exp-details">
            <div className="exp-details-position">
              <h3>
                <span>{experiences[selected].role}</span>
                <span className="experience-details-position-company">
                  &nbsp;@&nbsp;
                  <Link className="link" to={experiences[selected].url}>
                    {experiences[selected].name}
                  </Link>
                </span>
              </h3>
              <p className="exp-details-range">
                {experiences[selected].start} - {experiences[selected].end}
              </p>
              <ul className="exp-details-list">
                {experiences[selected].shortDescription.map(
                  (description, index) => (
                    <li key={index} className="exp-details-list-item">
                      {description}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Experience;
