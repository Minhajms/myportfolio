import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-3xl font-bold mb-6">
              <span className="font-black">Minhaj</span>
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              DevOps Engineer passionate about cloud infrastructure, automation, 
              and building scalable solutions that drive innovation.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: <Github size={20} />, href: "https://github.com/Minhajms", color: "hover:bg-gray-700" },
                { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/minhajms", color: "hover:bg-blue-600" },
                { icon: <Mail size={20} />, href: "mailto:minhajoutflow@gmail.com", color: "hover:bg-indigo-600" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : "_blank"}
                  rel={social.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                  className={`bg-gray-800 p-3 rounded-xl ${social.color} transition-all duration-300 hover:scale-110`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-indigo-400 transition-colors duration-200 text-lg hover:translate-x-2 transform transition-transform inline-block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Contact Info
            </h4>
            <div className="space-y-4 text-gray-300 text-lg">
              <p className="hover:text-indigo-400 transition-colors duration-200">
                minhajoutflow@gmail.com
              </p>
              <p className="hover:text-indigo-400 transition-colors duration-200">
                +91 9562474580
              </p>
              <p className="hover:text-indigo-400 transition-colors duration-200">
                Wayanad, Kerala, India
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0 flex items-center">
              <span>© 2025 Minhaj. Crafted with</span>
              <Heart className="w-4 h-4 text-red-500 mx-2 animate-pulse" />
              <span>and modern web technologies.</span>
            </div>
            <div className="text-gray-400 text-sm">
              Built with React, TypeScript & Tailwind CSS
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;