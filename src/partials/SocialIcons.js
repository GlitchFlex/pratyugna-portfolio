'use client'

import React from "react";
import {Link} from "react-router-dom";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { motion } from "framer-motion";
import '../scss/components/socialIcons.scss';

const SocialIcons = () => {
  const socialLinks = [
    { name: "GitHub", icon: <FiGithub />, link: "https://github.com/GlitchFlex" },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/pratyugna-manna-813735227",
    },
    {
      name: "Instagram",
      icon: <FiInstagram />,
      link: "https://www.instagram.com/glitched__god",
    },
    
  ];

  return (
    <motion.div
      className="social-icons"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
    >
      <ul className="social-icons-list">
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} title={name} className="social-icons-list-item">
            <a
              href={link}
              className="social-icons-list-item-link"
              target="_blank"
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SocialIcons;
