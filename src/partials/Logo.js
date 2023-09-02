import React, {useRef, useState} from "react";
import './Logo.scss';





function Logo() {

 
  
  
  
  
  return (
    
  <>
  {/* <Blob blobA={blobA} blobB={blobB}/> */}
  <svg id="sw-js-blob-svg" className="logo" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs> 
    <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
      <stop id="stop1" stopColor="rgba(240.343, 228.808, 0, 1)" offset="0%"></stop>
      <stop id="stop2" stopColor="rgba(255, 158.795, 0, 1)" offset="100%"></stop>
    </linearGradient>
  </defs>
  <path  fill="url(#sw-gradient)" d="M22,-26.2C29.6,-19.9,37.6,-14,38.8,-6.9C39.9,0.1,34.3,8.3,28.1,13.7C22,19,15.3,21.4,8.5,24.3C1.7,27.2,-5.3,30.5,-10.9,28.9C-16.5,27.3,-20.7,20.8,-22.7,14.5C-24.8,8.1,-24.7,1.9,-25.8,-6.8C-26.9,-15.4,-29.3,-26.6,-25.2,-33.5C-21.1,-40.4,-10.5,-43,-1.7,-41C7.2,-39.1,14.4,-32.4,22,-26.2Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" style={{transition: "all 0.3s ease 0s"}} stroke="#fff"></path>

  <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" font-size="40" fontFamily="monospace" fill="#1a1a1a">P</text>
</svg>

</>
  );
}

export default Logo;
