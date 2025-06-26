import React, { useState, useEffect } from 'react';
import { ChevronDown, MapPin, Mail, Terminal, MessageCircle, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    'devops_engineer',
    'cloud_specialist', 
    'aws_expert',
    'automation_expert'
  ];

  useEffect(() => {
    const currentRoleText = roles[currentRole];
    
    if (currentIndex < currentRoleText.length) {
      const timer = setTimeout(() => {
        setDisplayText(currentRoleText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex(0);
        setCurrentRole((currentRole + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, currentRole, roles]);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv/minhaj-cv.pdf';
    link.download = 'minhaj-devops-engineer-cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen bg-black flex items-center justify-center pt-16 relative">
      {/* Terminal grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0,255,65,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="mb-12">
          {/* Terminal prompt */}
          <div className="inline-flex items-center px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg mb-8">
            <Terminal className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-green-400 text-sm">user@portfolio:~$</span>
            <span className="text-white text-sm ml-2">whoami</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-white">minhaj</span>
            <span className="text-green-400">.</span>
            <span className="text-gray-400">dev</span>
          </h1>
          
          <div className="h-16 flex items-center justify-center mb-8">
            <p className="text-xl md:text-2xl text-gray-400">
              <span className="text-green-400">&gt; </span>
              <span className="text-white">{displayText}</span>
              <span className="animate-pulse text-green-400 ml-1">|</span>
            </p>
          </div>
        </div>

        <div className="mb-12">
          <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-3xl mx-auto">
            <span className="text-green-400"># </span>
            Building scalable cloud infrastructure and automation pipelines
            <br />
            <span className="text-green-400"># </span>
            Maintaining 99.99% uptime across 20+ production applications
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-gray-500 mb-12">
            <div className="flex items-center gap-2 bg-gray-900 border border-gray-700 rounded-lg px-4 py-2">
              <MapPin size={16} className="text-green-400" />
              <span className="text-sm">wayanad, kerala, india</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-900 border border-gray-700 rounded-lg px-4 py-2">
              <Mail size={16} className="text-green-400" />
              <span className="text-sm">minhajoutflow@gmail.com</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { value: "20+", label: "applications_managed" },
              { value: "99.99%", label: "service_uptime" },
              { value: "10k+", label: "daily_users_served" }
            ].map((stat, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-green-400 transition-colors duration-300">
                <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={scrollToAbout}
            className="px-6 py-3 bg-green-400 text-black rounded-lg font-medium hover:bg-green-300 transition-colors duration-300"
          >
            ./explore_work
          </button>
          <button
            onClick={downloadCV}
            className="px-6 py-3 bg-gray-900 border border-gray-700 text-white rounded-lg font-medium hover:border-green-400 transition-colors duration-300 flex items-center"
          >
            <Download className="w-4 h-4 mr-2" />
            ./download_cv
          </button>
          <a
            href="https://wa.me/919562474580"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-900 border border-gray-700 text-white rounded-lg font-medium hover:border-green-400 transition-colors duration-300 flex items-center"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            ./contact
          </a>
        </div>

        <div className="animate-bounce">
          <button onClick={scrollToAbout} className="text-gray-600 hover:text-green-400 transition-colors duration-300">
            <ChevronDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;