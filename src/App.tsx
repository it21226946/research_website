import React, { useEffect } from 'react';
import { 
  Header, 
  Hero, 
  Research, 
  Results, 
  Publications, 
  About, 
  Footer 
} from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResearchPage from './ResearchPage';
import { Fade } from 'react-awesome-reveal';

// Component to wrap the existing home page content
const HomePageContent: React.FC = () => {
  useEffect(() => {
    // Update the page title
    document.title = "H.M. Gayasha Nethmina - Academic Research";
    
    // Add smooth scrolling behavior
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = anchor.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <main>
      <Fade triggerOnce>
        <Hero />
      </Fade>
      <Fade triggerOnce>
        <Research />
      </Fade>
      <Fade triggerOnce>
        <Results />
      </Fade>
      <Fade triggerOnce>
        <Publications />
      </Fade>
      <Fade triggerOnce>
        <About />
      </Fade>
    </main>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen font-sans text-gray-900 bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePageContent />} />
          <Route path="/research" element={<ResearchPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;