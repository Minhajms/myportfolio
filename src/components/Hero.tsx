import React, { useState, useEffect } from 'react';
import { ChevronDown, MapPin, Mail, Sparkles, Download, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    'DevOps Engineer',
    'Cloud Infrastructure Specialist', 
    'AWS Expert',
    'CI/CD Automation Expert'
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

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-8 text-center relative z-10">
        <div className="mb-16">
          {/* Status badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-12 group hover:bg-white/15 transition-all duration-300">
            <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
            <Sparkles className="w-4 h-4 text-emerald-400 mr-2" />
            <span className="text-white font-medium text-sm">Available for New Opportunities</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight leading-none">
            <span className="text-white">
              Minhaj
            </span>
          </h1>
          
          <div className="h-20 flex items-center justify-center mb-12">
            <p className="text-2xl md:text-4xl font-light text-gray-300">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {displayText}
              </span>
              <span className="animate-pulse text-indigo-400 ml-1">|</span>
            </p>
          </div>
        </div>

        <div className="mb-16">
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 max-w-4xl mx-auto font-light">
            Crafting <span className="text-indigo-400 font-semibold">scalable cloud solutions</span> and 
            <span className="text-purple-400 font-semibold"> automation pipelines</span> that power 
            <span className="text-pink-400 font-semibold"> modern applications</span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 text-gray-400 mb-16">
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md rounded-full px-6 py-3 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <MapPin size={18} className="text-indigo-400" />
              <span className="text-lg">Wayanad, Kerala, India</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md rounded-full px-6 py-3 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Mail size={18} className="text-purple-400" />
              <span className="text-lg">minhajoutflow@gmail.com</span>
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { value: "20+", label: "Applications Managed", color: "from-indigo-500 to-purple-500" },
              { value: "99.99%", label: "Service Uptime", color: "from-purple-500 to-pink-500" },
              { value: "10K+", label: "Daily Users Served", color: "from-pink-500 to-indigo-500" }
            ].map((stat, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <div className={`text-4xl md:text-5xl font-black mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <button
            onClick={scrollToAbout}
            className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-indigo-500/25 transform hover:-translate-y-1 hover:scale-105"
          >
            <span className="relative z-10 flex items-center">
              <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Explore My Work
            </span>
          </button>
          <a
            href="https://wa.me/919562474580"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl font-semibold text-lg hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-105 flex items-center"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Get In Touch
          </a>
        </div>

        <div className="animate-bounce">
          <button onClick={scrollToAbout} className="text-gray-400 hover:text-white transition-colors duration-300 group">
            <ChevronDown size={32} className="group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;