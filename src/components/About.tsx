import React, { useEffect, useRef } from 'react';
import { Award, Users, TrendingUp, Zap, Target, Rocket, Shield } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "99.99% Uptime",
      description: "Maintaining exceptional service reliability across critical production applications",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "10,000+ Users",
      description: "Supporting daily operations for thousands of users in production environments",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "20+ Applications",
      description: "Managing diverse application portfolio with advanced monitoring and optimization",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI Innovation",
      description: "Pioneering AI-assisted development workflows and automation solutions",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Excellence",
      description: "Committed to delivering high-quality solutions"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Innovation",
      description: "Embracing cutting-edge technologies"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Reliability",
      description: "Building robust and secure systems"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-indigo-100/50 to-purple-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-100/50 to-pink-100/50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-20 animate-on-scroll">
          <div className="inline-flex items-center px-6 py-3 bg-indigo-50 rounded-full border border-indigo-100 mb-8">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider">
              About Me
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
            Passionate About
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Innovation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            DevOps Engineer specializing in cloud infrastructure, automation, and scalable solutions that drive business success
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          <div className="space-y-8 animate-on-scroll">
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Professional Journey
              </h3>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  As a DevOps Engineer, I've focused on mastering cloud infrastructure management 
                  and automation. My journey began during my internship at BridgeSkill, where I 
                  developed foundational skills in AWS, Docker, and infrastructure automation.
                </p>
                <p className="text-lg">
                  Currently, I manage production environments at 2 Sahaba Solutions LLP, where I've 
                  successfully maintained 99.99% uptime across 20+ critical applications serving 
                  10,000+ daily users. My expertise spans AWS, Docker, Terraform, Jenkins, and container orchestration.
                </p>
                <p className="text-lg">
                  Beyond my primary role, I'm passionate about knowledge sharing and mentoring. I actively 
                  train aspiring DevOps engineers at BridgeSkill and contribute to the tech community 
                  through technical writing and published articles.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 animate-on-scroll">
              {values.map((value, index) => (
                <div key={index} className="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-105">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-sm">{value.title}</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-on-scroll">
            {highlights.map((highlight, index) => (
              <div key={index} className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className={`bg-gradient-to-r ${highlight.gradient} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {highlight.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-4 text-xl">{highlight.title}</h4>
                <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-16 text-white relative overflow-hidden shadow-2xl animate-on-scroll">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative z-10">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div className="space-y-4 group">
                <h4 className="text-5xl md:text-6xl font-black group-hover:scale-110 transition-transform duration-300">20+</h4>
                <p className="text-indigo-100 text-xl font-medium">Applications Managed</p>
              </div>
              <div className="space-y-4 group">
                <h4 className="text-5xl md:text-6xl font-black group-hover:scale-110 transition-transform duration-300">99.99%</h4>
                <p className="text-purple-100 text-xl font-medium">Service Uptime</p>
              </div>
              <div className="space-y-4 group">
                <h4 className="text-5xl md:text-6xl font-black group-hover:scale-110 transition-transform duration-300">10K+</h4>
                <p className="text-pink-100 text-xl font-medium">Daily Users Served</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;