import React from 'react';
import { Mail, Phone, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">H.M. Gayasha Nethmina</h3>
            <p className="text-blue-200 mb-4">
              Academic Researcher
              <br />
              Computer Science Department
              <br />
              IT21226946
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="mailto:gayanethmina2001@gmail.com"
                className="text-blue-200 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-blue-200 hover:text-white transition-colors"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-blue-200 hover:text-white transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Research', href: '#research' },
                { label: 'Results', href: '#results' },
                { label: 'Publications', href: '#publications' },
                { label: 'About', href: '#about' },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              {[
                { label: 'Research Papers', href: '#' },
                { label: 'Data Sets', href: '#' },
                { label: 'Code Repository', href: '#' },
                { label: 'Academic Profile', href: '#' },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-6 text-center text-blue-300 text-sm">
          <p>© {currentYear} H.M. Gayasha Nethmina. All rights reserved.</p>
          <p className="mt-2">
            Created for academic and research purposes. The information presented on this website is part of an academic research project.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;