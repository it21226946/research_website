import React from 'react';
import { Mail, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Undergraduate and Researcher passionate about developing innovative solutions.
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
          <div className="md:w-1/3">
            <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-xl p-1">
              <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                <img
                  src="/images/my_image.jpeg"
                  alt="H.M. Gayasha Nethmina"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="mt-6 flex justify-center space-x-4">
              <a
                href="mailto:gayanethmina2001@gmail.com"
                className="text-gray-500 hover:text-orange-600 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-orange-600 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-orange-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-orange-600 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">H.M. Gayasha Nethmina</h3>
            <p className="text-gray-600 mb-2">Student ID: IT21226946</p>
            <p className="text-gray-600 mb-6">
              <a 
                href="mailto:gayanethmina2001@gmail.com" 
                className="text-blue-600 hover:text-orange-800 transition-colors duration-300"
              >
                gayanethmina2001@gmail.com
              </a>
            </p>
            
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                I am an Information Technology undergraduate student with a deep passion for research and developing innovative solutions to real-world problems. My academic journey has ignited a keen interest in areas such as machine learning, natural language processing, and data analysis. I am particularly fascinated by the potential of these technologies to address complex challenges in various domains.
              </p>
              <p className="mb-4">
                As a dedicated researcher, I actively seek opportunities to explore novel concepts and apply theoretical knowledge to practical projects. My current work often involves leveraging computational models and algorithms to extract meaningful insights from data, aiming to contribute to advancements in the field of computer science.
              </p>
              <p>
                My background as an IT student provides me with a strong technical foundation, while my research pursuits drive me to continuously learn and push the boundaries of what's possible. I am always eager to collaborate on exciting projects and contribute my skills to impactful initiatives.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Research Interests</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Algorithm Optimization</li>
                  <li>• Machine Learning Applications</li>
                  <li>• Computational Modeling</li>
                  <li>• Data Analysis and Visualization</li>
                  <li>• Natural Language Processing</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Education</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• BSc in Information Technology</li>
                  <li>• Advanced certificates in Machine learning</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Visit Academic Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;