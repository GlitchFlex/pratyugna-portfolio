import {Link} from "react-router-dom";
import React, { useEffect, useState } from "react";

function Footer() {
  const [githubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    fetch("https://api.github.com/users/GlitchFlex/repos")
      .then((response) => response.json())
      .then((json) => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch((e) => console.error(e));
  }, []);

  // console.log(githubInfo);

  return (
    <footer>
      <Link
        to="https://github.com/GLitchFlex"
        target="_blank"
        className="footer-link"
      >
        <span className="footer-info">Designed and Built by Pratyugna Manna.</span>
       
      </Link>
    </footer>
  );
}

export default Footer;
