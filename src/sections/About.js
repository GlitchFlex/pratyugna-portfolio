"use client";
import React from "react";
import '../scss/sections/about.scss';
import { motion } from "framer-motion";
import profile from '../assets/profile.jpeg';

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiNodedotjs,
  SiCss3,
  SiFigma,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const About = () => {
  return (
    <motion.div
      className="about"
      id="about"
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
        <h2>About Me.</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Hello! I am Pratyugna, a full time web developer, and a part time gamer. Currently I am pursuing my Btech degree
            on Information Technology. As a enthusiastic developer I love traversing the upcoming range of technologies in my free time.

          
          </p>
          <p className="about-grid-info-text">
            Fast-forward to today, I had the privilege to work with at an amazing
            startup{" "}
            <a
              href="https://www.mindwebs.org"
              className="link"
              target="_blank"
            >
              MindWebsVentures
            </a>{" "}

            , where I got the opportunities to comtibute to their prestigious products.
            
            </p>
            
            

            
          <p className="about-grid-info-text">
            Currently I am open for any opportunity to work on an amazing
            project. Feel free to{" "}
            <a
              href="mailto:pratyugna@gmail.com"
              className="link"
              target="_blank"
            >
              Contact Me
            </a>{" "}
            for any such opportunities available.
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">
              <SiJavascript />
              <span>Javascript</span>
            </li>
            <li className="about-grid-info-list-item">
              <SiTypescript />
              <span>Typescript</span>
            </li>
            <li className="about-grid-info-list-item">
              <SiReact />
              <span>React</span>
            </li>
            <li className="about-grid-info-list-item">
              <SiNextdotjs />
              <span>Next.js</span>
            </li>
            <li className="about-grid-info-list-item">
              <SiRedux />
              <span>Redux Toolkit</span>
            </li>
            <li className="about-grid-info-list-item">
              <TbBrandReactNative />
              <span>React Native</span>
            </li>
            <li className="about-grid-info-list-item">
              <SiNodedotjs />
              <span>Node.js</span>
            </li>
            <li className="about-grid-info-list-item">
              <SiCss3 />
              <span>CSS</span>
            </li>
            <li className="about-grid-info-list-item">
              <SiFigma />
              <span>Figma</span>
            </li>
          </ul>
        </div>
        <div className="about-grid-photo" style = {{overflow : "hidden"}}>
          <div className="overlay"></div>
          {/* <div className="overlay-border"></div> */}
          {/* <div className="about-grid-photo-container"> */}
            {/* < src="/sayan.jpg" alt="profile" fill /> */}
            <img className = "img" src={profile} alt="profile" style={{width : "100%", margin : "0", padding : "0", objectFit : "cover"}} />
            
        </div>
      </div>
    </motion.div>
  );
};

export default About;
