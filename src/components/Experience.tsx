import React from 'react';
import { Calendar, MapPin, Briefcase, CheckCircle } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "junior devops engineer",
      company: "2 sahaba solutions llp",
      location: "wayanad, kerala",
      period: "february 2025 - present",
      type: "full-time",
      achievements: [
        "lead cloud infrastructure operations for production environments serving 10,000+ daily users",
        "maintain 99.99% service uptime across 20+ critical applications through monitoring and incident response",
        "configure apache kafka for delivery team integration enabling real-time data streaming with 99.9% message delivery rate",
        "manage multi-cloud environments with cost optimization strategies",
        "implement oidc authentication systems and security best practices",
        "build and maintain ci/cd pipelines using jenkins and github actions",
        "monitor and optimize aws infrastructure costs and performance",
        "troubleshoot and resolve production incidents",
        "create infrastructure automation scripts using terraform",
        "develop technical documentation and mentor junior team members"
      ]
    },
    {
      title: "devops mentor",
      company: "bridgeskill",
      location: "wayanad, kerala", 
      period: "june 2025 - present",
      type: "part-time",
      achievements: [
        "train aspiring devops engineers on cloud infrastructure, ci/cd, and automation tools",
        "deliver hands-on training in git, docker, jenkins, and terraform",
        "conduct mock interviews and code reviews",
        "develop curriculum for devops training programs",
        "assess student progress and provide feedback"
      ]
    },
    {
      title: "devops intern",
      company: "bridgeskill",
      location: "wayanad, kerala",
      period: "august 2024 - february 2025",
      type: "internship",
      achievements: [
        "configured and optimized aws cloud infrastructure and automated deployments",
        "implemented dockerized setups for magento including elasticsearch and nginx",
        "developed skills in terraform, aws cli, and cloudformation",
        "authored technical articles on medium and linkedin",
        "participated in infrastructure setup and deployment automation projects"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-950">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg mb-8">
            <span className="text-green-400 text-sm font-medium">./experience</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            professional
            <span className="text-green-400"> journey</span>
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-8 hover:border-green-400 transition-colors duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  </div>
                  
                  <div className="flex items-center text-gray-400 mb-2 text-sm">
                    <Briefcase size={14} className="mr-2" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-gray-500 text-xs">
                    <div className="flex items-center">
                      <MapPin size={12} className="mr-1" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={12} className="mr-1" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 lg:mt-0">
                  <span className="px-3 py-1 bg-green-400 text-black rounded-full text-xs font-medium">
                    {exp.type}
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <div key={achievementIndex} className="flex items-start p-3 bg-gray-800 rounded-lg">
                    <CheckCircle size={14} className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 text-xs leading-relaxed">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;