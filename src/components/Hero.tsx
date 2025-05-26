import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToResearch = () => {
    const element = document.getElementById('research');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative py-20 md:py-24 lg:py-32 flex items-center justify-center bg-gradient-to-br from-olive-900 to-olive-700 text-white overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-olive-900 opacity-60"></div>
      
      <div className="container mx-auto px-4 z-10 text-center relative">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 animate-fadeIn">
          Detecting Generalized Anxiety Disorder Using NLP and Machine Learning
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-light mb-6 opacity-90">
          A Social Media-Based Approach
        </h2>
        <div className="w-16 h-1 bg-olive-400 mx-auto mb-6"></div>
        <p className="text-md md:text-lg opacity-80 mb-8">
          By H.M. Gayasha Nethmina • IT21226946
        </p>
        
        <button
          onClick={scrollToResearch}
          className="mt-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
          aria-label="Explore Research"
        >
          Explore Research
          <ArrowDown className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
        </button>
      </div>
      
      {/* Optional: Remove the bouncing arrow if it feels less elegant */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-8 w-8 text-white opacity-80" />
      </div> */}
    </section>
  );
};

export default Hero;