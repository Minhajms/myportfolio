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
      icon: <Award className="w-6 h-6" />,
      title: "99.99% uptime",
      description: "maintaining exceptional service reliability across critical production applications"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "10,000+ users",
      description: "supporting daily operations for thousands of users in production environments"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "20+ applications",
      description: "managing diverse application portfolio with advanced monitoring and optimization"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "ai innovation",
      description: "pioneering ai-assisted development workflows and automation solutions"
    }
  ];

  const values = [
    {
      icon: <Target className="w-5 h-5" />,
      title: "excellence",
      description: "committed to delivering high-quality solutions"
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "innovation",
      description: "embracing cutting-edge technologies"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "reliability",
      description: "building robust and secure systems"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg mb-8">
            <span className="text-green-400 text-sm font-medium">./about</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            passionate about
            <span className="text-green-400"> innovation</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            devops engineer specializing in cloud infrastructure, automation, and scalable solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-8 animate-on-scroll">
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-8 hover:border-green-400 transition-colors duration-300">
              <h3 className="text-xl font-bold text-green-400 mb-6">
                professional_journey
              </h3>
              <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                <p>
                  as a devops engineer, i've focused on mastering cloud infrastructure management 
                  and automation. my journey began during my internship at bridgeskill, where i 
                  developed foundational skills in aws, docker, and infrastructure automation.
                </p>
                <p>
                  currently, i manage production environments at 2 sahaba solutions llp, where i've 
                  successfully maintained 99.99% uptime across 20+ critical applications serving 
                  10,000+ daily users. my expertise spans aws, docker, terraform, jenkins, and container orchestration.
                </p>
                <p>
                  beyond my primary role, i'm passionate about knowledge sharing and mentoring. i actively 
                  train aspiring devops engineers at bridgeskill and contribute to the tech community 
                  through technical writing and published articles.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 animate-on-scroll">
              {values.map((value, index) => (
                <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-center hover:border-green-400 transition-colors duration-300">
                  <div className="text-green-400 flex justify-center mb-3">
                    {value.icon}
                  </div>
                  <h4 className="font-bold text-white mb-2 text-sm">{value.title}</h4>
                  <p className="text-gray-400 text-xs">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-on-scroll">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-green-400 transition-colors duration-300">
                <div className="text-green-400 mb-4">
                  {highlight.icon}
                </div>
                <h4 className="font-bold text-white mb-3 text-sm">{highlight.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-12 text-center animate-on-scroll">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h4 className="text-3xl md:text-4xl font-bold text-green-400">20+</h4>
              <p className="text-gray-400 text-sm">applications managed</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-3xl md:text-4xl font-bold text-green-400">99.99%</h4>
              <p className="text-gray-400 text-sm">service uptime</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-3xl md:text-4xl font-bold text-green-400">10k+</h4>
              <p className="text-gray-400 text-sm">daily users served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;