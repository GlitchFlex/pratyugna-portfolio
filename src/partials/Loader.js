"use client";

import React, { useEffect } from "react";
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
