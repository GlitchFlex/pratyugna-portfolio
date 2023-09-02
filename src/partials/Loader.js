"use client";

import React, { useEffect, useState } from "react";
// import Logo from "./Logo";
import {MutatingDots} from 'react-loader-spinner';
// import { AnimatePresence, motion } from "framer-motion";
import '../scss/components/loader.scss';


function Loader({ isLoading, setIsLoading }) {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading();
    }, 1900);
  }, [setIsLoading]);
  return (
    <div className="box">
      <div class="jawn"></div>
    </div>
  );
}

export default Loader;
