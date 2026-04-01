import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import './index.css';

function App() {
  const [showLoading, setShowLoading] = useState(true);

  const handleLoadingComplete = () => {
    setShowLoading(false);
  };

  const triggerLoading = () => {
    setShowLoading(true);
  };

  return (
    <>
      <LoadingScreen 
        isVisible={showLoading} 
        onComplete={handleLoadingComplete} 
      />
      <div className="min-h-screen bg-dark-bg">
        <Navbar onLogoClick={triggerLoading} />
        <main>
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Certifications />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;

