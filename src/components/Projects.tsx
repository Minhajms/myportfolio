import React from 'react';
import { Github, Bot, Cloud, Zap } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "productdatapro",
      subtitle: "ai-assisted development & devops",
      description: "built ai-powered e-commerce platform using prompt engineering and devops orchestration. demonstrates cutting-edge ai-assisted development methodology and modern deployment practices.",
      icon: <Bot className="w-6 h-6" />,
      technologies: ["replit deployment", "ai-assisted development", "automated ci/cd", "github actions"],
      highlights: [
        "built ai-powered e-commerce platform using prompt engineering and devops orchestration",
        "implemented zero-code architecture with ai-driven development workflows", 
        "demonstrated cutting-edge ai-assisted development methodology and modern deployment practices"
      ],
      github: "https://github.com/Minhajms/productdata"
    },
    {
      title: "paper.social",
      subtitle: "multi-cloud devops platform",
      description: "developed enterprise-grade multi-cloud deployment pipeline demonstrating advanced devops practices with exceptional uptime achievement and zero-downtime deployments.",
      icon: <Cloud className="w-6 h-6" />,
      technologies: ["terraform", "ansible", "docker", "aws", "ibm cloud", "github actions", "prometheus", "grafana"],
      highlights: [
        "developed enterprise-grade multi-cloud deployment pipeline",
        "implemented infrastructure as code, blue-green deployments, automated ci/cd, monitoring",
        "achieved 99.99% uptime with zero-downtime deployments"
      ],
      github: "https://github.com/Minhajms/paper-social-devops"
    },
    {
      title: "ai tools collection",
      subtitle: "community resource platform",
      description: "created platform with 50+ ai tools with automated link verification and modern ui serving developers worldwide. comprehensive community resource with advanced search capabilities.",
      icon: <Zap className="w-6 h-6" />,
      technologies: ["html5", "javascript", "css3", "python", "github actions", "papa parse"],
      highlights: [
        "created platform with 50+ ai tools with automated link verification",
        "implemented search functionality, automated validation, responsive design, ci/cd deployment",
        "serves as community resource for developers and ai enthusiasts"
      ],
      github: "https://github.com/Minhajms/AI-Tools-Collection-"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg mb-8">
            <span className="text-green-400 text-sm font-medium">./projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            featured
            <span className="text-green-400"> work</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden hover:border-green-400 transition-colors duration-300">
              <div className="p-6 border-b border-gray-700">
                <div className="text-green-400 mb-4">
                  {project.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.subtitle}</p>
              </div>

              <div className="p-6">
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <h4 className="font-medium text-white mb-3 text-sm">key_highlights:</h4>
                  <div className="space-y-2">
                    {project.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-start">
                        <div className="w-1 h-1 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-400 text-xs leading-relaxed">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded border border-gray-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-4 py-3 bg-green-400 text-black rounded-lg font-medium hover:bg-green-300 transition-colors duration-300 text-sm"
                >
                  <Github size={16} className="mr-2" />
                  view_on_github
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;