import React from 'react';
import { Cloud, Container, Settings, GitBranch, Shield, Monitor } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        "Amazon Web Services (AWS)",
        "EC2, S3, ALB, IAM",
        "CloudFormation, AWS CLI", 
        "Cloud Infrastructure Management",
        "Cost Optimization"
      ]
    },
    {
      title: "Containerization",
      icon: <Container className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500",
      skills: [
        "Docker & Docker Compose",
        "Container Registry Management",
        "Container Orchestration"
      ]
    },
    {
      title: "Infrastructure as Code",
      icon: <Settings className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        "Terraform",
        "AWS CloudFormation",
        "Infrastructure Automation",
        "Configuration Management"
      ]
    },
    {
      title: "CI/CD & Automation",
      icon: <GitBranch className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-500",
      skills: [
        "Jenkins Pipeline",
        "GitHub Actions",
        "Automated Deployments",
        "Build Automation"
      ]
    },
    {
      title: "Monitoring",
      icon: <Monitor className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      skills: [
        "NewRelic",
        "Uptime Monitoring",
        "Log Management",
        "Performance Analytics"
      ]
    },
    {
      title: "Security",
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-pink-500",
      skills: [
        "OIDC (OpenID Connect)",
        "OAuth2 Authentication",
        "Security Best Practices",
        "Access Management"
      ]
    }
  ];

  const additionalTech = [
    "Elasticsearch", "Apache Kafka", "Nginx", "Magento", "Git", "Python", "HTML/CSS/JS"
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full border border-gray-200 mb-8 shadow-sm">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider">
              Skills
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
            Technical
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Expertise</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className={`bg-gradient-to-r ${category.color} w-12 h-12 rounded-xl flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-start">
                    <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                    <span className="text-gray-700 leading-relaxed">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Additional Technologies</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {additionalTech.map((tech) => (
              <span key={tech} className="px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-xl border border-gray-200 font-medium hover:scale-105 transition-transform duration-200">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;