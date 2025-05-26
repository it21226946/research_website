import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Home, FlaskRound as Flask, BarChart3, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'research', label: 'Research', icon: Flask, to: '/research' },
    { id: 'results', label: 'Results', icon: BarChart3 },
    { id: 'publications', label: 'Publications', icon: FileText },
    { id: 'about', label: 'About', icon: User },
  ];

  return (
    <header
      className={`fixed w-full z-30 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <span className={`text-xl font-bold ${scrolled ? 'text-blue-900' : 'text-white'}`}>
            G. Nethmina
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            item.to ? (
              <Link
                key={item.id}
                to={item.to}
                className={`flex items-center space-x-1 font-medium transition-colors duration-200 hover:text-blue-600 ${
                  scrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            ) : (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-1 font-medium transition-colors duration-200 hover:text-blue-600 ${
                  scrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            )
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 rounded-md ${
            scrolled ? 'text-gray-800' : 'text-white'
          }`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 z-20 bg-blue-900 bg-opacity-95 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-4">
          {navItems.map((item) => (
            item.to ? (
              <Link
                key={item.id}
                to={item.to}
                className="flex items-center space-x-2 text-white text-xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            ) : (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center space-x-2 text-white text-xl font-medium"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            )
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;