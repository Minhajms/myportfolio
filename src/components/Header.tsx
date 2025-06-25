import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h1 className={`text-2xl font-bold transition-all duration-500 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              <span className="font-black">Minhaj</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative transition-all duration-300 font-medium text-sm uppercase tracking-wider group ${
                  isScrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white/90 hover:text-indigo-300'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            {[
              { icon: <Github size={20} />, href: "https://github.com/Minhajms" },
              { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/minhajms" },
              { icon: <Mail size={20} />, href: "mailto:minhajoutflow@gmail.com" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.href.startsWith('mailto') ? undefined : "_blank"}
                rel={social.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50' 
                    : 'text-white/90 hover:text-indigo-300 hover:bg-white/10'
                }`}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isScrolled ? 'text-gray-700 hover:text-indigo-600' : 'text-white/90 hover:text-indigo-300'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl rounded-2xl mt-4 p-6 shadow-xl border border-gray-100">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium text-left py-2 text-sm uppercase tracking-wider"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                {[
                  { icon: <Github size={20} />, href: "https://github.com/Minhajms" },
                  { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/minhajms" },
                  { icon: <Mail size={20} />, href: "mailto:minhajoutflow@gmail.com" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('mailto') ? undefined : "_blank"}
                    rel={social.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                    className="p-2 rounded-lg text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;