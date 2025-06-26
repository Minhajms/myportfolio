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
    { name: 'about', href: '#about' },
    { name: 'experience', href: '#experience' },
    { name: 'projects', href: '#projects' },
    { name: 'skills', href: '#skills' },
    { name: 'contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-sm border-b border-gray-800' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-lg font-bold text-green-400">
              <span className="text-white">[</span>minhaj<span className="text-white">]</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm"
              >
                ./{item.name}
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            {[
              { icon: <Github size={18} />, href: "https://github.com/Minhajms" },
              { icon: <Linkedin size={18} />, href: "https://linkedin.com/in/minhajms" },
              { icon: <Mail size={18} />, href: "mailto:minhajoutflow@gmail.com" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.href.startsWith('mailto') ? undefined : "_blank"}
                rel={social.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                className="text-gray-400 hover:text-green-400 transition-colors duration-200 p-2"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-green-400 transition-colors duration-200 p-2"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm border border-gray-800 rounded-lg mt-2 p-4">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-left text-sm"
                >
                  ./{item.name}
                </button>
              ))}
              <div className="flex items-center space-x-4 pt-3 border-t border-gray-800">
                {[
                  { icon: <Github size={18} />, href: "https://github.com/Minhajms" },
                  { icon: <Linkedin size={18} />, href: "https://linkedin.com/in/minhajms" },
                  { icon: <Mail size={18} />, href: "mailto:minhajoutflow@gmail.com" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('mailto') ? undefined : "_blank"}
                    rel={social.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200 p-2"
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