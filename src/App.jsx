import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Header from './Header'; 
import Loader from './Loader'; 
import Hero from './Hero'; 
import SocialMedia from './SocialMedia';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Quote from "./Quote";
import Footer from './Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Loading screen timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    );
  }

  return (
    <AppContainer>
      <Header /> 
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Quote />
      <Footer />
    </AppContainer>
  );
}

// --- Styled Components ---

const LoaderContainer = styled.div`
  background-color: var(--bg-color); /* FIXED: Swapped #050505 for theme variable */
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AppContainer = styled.main`
  position: relative;
  z-index: 1;        
  width: 100%;
  min-height: 100vh;
  /* background-color: #050505; <-- DELETE THIS LINE COMPLETELY */
`;

export default App;