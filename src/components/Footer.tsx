import React from 'react';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'about', href: '#about' },
    { name: 'experience', href: '#experience' },
    { name: 'projects', href: '#projects' },
    { name: 'skills', href: '#skills' },
    { name: 'contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">
              <span className="text-green-400">[</span>minhaj<span className="text-green-400">]</span>
            </h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              devops engineer passionate about cloud infrastructure, automation, 
              and building scalable solutions that drive innovation.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
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
                  className="bg-gray-800 p-2 rounded-lg text-gray-400 hover:text-green-400 hover:bg-gray-700 transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-green-400">
              quick_links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm"
                  >
                    ./{link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-green-400">
              contact_info
            </h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>minhajoutflow@gmail.com</p>
              <p>+91 9562474580</p>
              <p>wayanad, kerala, india</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 mb-4 md:mb-0 flex items-center text-sm">
              <Terminal className="w-4 h-4 mr-2" />
              <span>© 2025 minhaj. crafted with modern web technologies.</span>
            </div>
            <div className="text-gray-500 text-xs">
              built with react, typescript & tailwind css
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;