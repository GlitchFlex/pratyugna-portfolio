import React from "react";
import '../scss/components/button.scss'


const Button = ({ text, link }) => {

  

  return (
    
    <a href={link} className="btn" target="_blank">
      {text}
    </a>


    // <Link to={link} className="btn" target="_blank">
    //   {text}
    // </Link>
    // </button>
  );
};

export default Button;
