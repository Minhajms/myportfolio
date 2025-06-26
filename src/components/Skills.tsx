import React from 'react';
import { Cloud, Container, Settings, GitBranch, Shield, Monitor } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "cloud_platforms",
      icon: <Cloud className="w-5 h-5" />,
      skills: [
        "amazon web services (aws)",
        "ec2, s3, alb, iam",
        "cloudformation, aws cli", 
        "cloud infrastructure management",
        "cost optimization"
      ]
    },
    {
      title: "containerization",
      icon: <Container className="w-5 h-5" />,
      skills: [
        "docker & docker compose",
        "container registry management",
        "container orchestration"
      ]
    },
    {
      title: "infrastructure_as_code",
      icon: <Settings className="w-5 h-5" />,
      skills: [
        "terraform",
        "aws cloudformation",
        "infrastructure automation",
        "configuration management"
      ]
    },
    {
      title: "ci/cd_automation",
      icon: <GitBranch className="w-5 h-5" />,
      skills: [
        "jenkins pipeline",
        "github actions",
        "automated deployments",
        "build automation"
      ]
    },
    {
      title: "monitoring",
      icon: <Monitor className="w-5 h-5" />,
      skills: [
        "newrelic",
        "uptime monitoring",
        "log management",
        "performance analytics"
      ]
    },
    {
      title: "security",
      icon: <Shield className="w-5 h-5" />,
      skills: [
        "oidc (openid connect)",
        "oauth2 authentication",
        "security best practices",
        "access management"
      ]
    }
  ];

  const additionalTech = [
    "elasticsearch", "apache kafka", "nginx", "magento", "git", "python", "html/css/js"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg mb-8">
            <span className="text-green-400 text-sm font-medium">./skills</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            technical
            <span className="text-green-400"> expertise</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-green-400 transition-colors duration-300">
              <div className="flex items-center mb-4">
                <div className="text-green-400 mr-3">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-start">
                    <div className="w-1 h-1 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-8">
          <h3 className="text-xl font-bold text-white mb-6 text-center">additional_technologies</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {additionalTech.map((tech) => (
              <span key={tech} className="px-3 py-2 bg-gray-800 text-gray-300 rounded-lg border border-gray-600 text-sm">
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