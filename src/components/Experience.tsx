import React from 'react';
import { Calendar, MapPin, Briefcase, CheckCircle } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Junior DevOps Engineer",
      company: "2 Sahaba Solutions LLP",
      location: "Wayanad, Kerala",
      period: "February 2025 - Present",
      type: "Full-time",
      color: "from-indigo-500 to-purple-500",
      achievements: [
        "Lead cloud infrastructure operations for production environments serving 10,000+ daily users",
        "Maintain 99.99% service uptime across 20+ critical applications through monitoring and incident response",
        "Configure Apache Kafka for delivery team integration enabling real-time data streaming with 99.9% message delivery rate",
        "Manage multi-cloud environments with cost optimization strategies",
        "Implement OIDC authentication systems and security best practices",
        "Build and maintain CI/CD pipelines using Jenkins and GitHub Actions",
        "Monitor and optimize AWS infrastructure costs and performance",
        "Troubleshoot and resolve production incidents",
        "Create infrastructure automation scripts using Terraform",
        "Develop technical documentation and mentor junior team members"
      ]
    },
    {
      title: "DevOps Mentor",
      company: "BridgeSkill",
      location: "Wayanad, Kerala", 
      period: "June 2025 - Present",
      type: "Part-time",
      color: "from-purple-500 to-pink-500",
      achievements: [
        "Train aspiring DevOps engineers on cloud infrastructure, CI/CD, and automation tools",
        "Deliver hands-on training in Git, Docker, Jenkins, and Terraform",
        "Conduct mock interviews and code reviews",
        "Develop curriculum for DevOps training programs",
        "Assess student progress and provide feedback"
      ]
    },
    {
      title: "DevOps Intern",
      company: "BridgeSkill",
      location: "Wayanad, Kerala",
      period: "August 2024 - February 2025",
      type: "Internship",
      color: "from-emerald-500 to-teal-500",
      achievements: [
        "Configured and optimized AWS cloud infrastructure and automated deployments",
        "Implemented Dockerized setups for Magento including Elasticsearch and Nginx",
        "Developed skills in Terraform, AWS CLI, and CloudFormation",
        "Authored technical articles on Medium and LinkedIn",
        "Participated in infrastructure setup and deployment automation projects"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full border border-gray-200 mb-8 shadow-sm">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider">
              Experience
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
            Professional
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Journey</span>
          </h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className={`bg-gradient-to-r ${exp.color} w-3 h-3 rounded-full mr-4`}></div>
                    <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-3">
                    <Briefcase size={16} className="mr-2" />
                    <span className="font-semibold">{exp.company}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-gray-500 text-sm">
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 lg:mt-0">
                  <span className={`px-4 py-2 bg-gradient-to-r ${exp.color} text-white rounded-full text-sm font-medium shadow-lg`}>
                    {exp.type}
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <div key={achievementIndex} className="flex items-start p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                    <CheckCircle size={16} className={`text-indigo-500 mt-1 mr-3 flex-shrink-0`} />
                    <span className="text-gray-700 text-sm leading-relaxed">{achievement}</span>
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