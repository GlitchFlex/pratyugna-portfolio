"use client";

import React from "react";
import { motion } from "framer-motion";
import '../scss/components/email.scss'


const Email = () => {
  return (
    <motion.div
      className="email"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
    >
      <a href="mailto:pratyugna@gmail.com" target = "_blank" className="email-link">
        pratyugna@gmail.com
      </a>
    </motion.div>
  );
};

export default Email;
