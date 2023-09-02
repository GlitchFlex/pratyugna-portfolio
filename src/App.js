
import React, {useState} from 'react';
import './App.scss';


import Loader from './partials/Loader';
import About from './sections/About';
import Email from './partials/Email';
import Contact from './sections/Contact';
import Navbar from './sections/Navbar';
import SocialIcons from './partials/SocialIcons';
import Hero from './sections/Hero';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Footer from './sections/Footer';
import './scss/main.scss';


function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 450);
  };

  return (
    <>
      {showContent ? (
        <>
          <Navbar />
          <SocialIcons />
          <Email />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
          </main>
        </>
      ) : (
        <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
      )}
    </>
  );
}

export default App;
