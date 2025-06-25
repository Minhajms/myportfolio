import React from 'react';
import { Github, ExternalLink, Bot, Cloud, Zap } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "ProductDataPro",
      subtitle: "AI-Assisted Development & DevOps",
      description: "Built AI-powered e-commerce platform using prompt engineering and DevOps orchestration. Demonstrates cutting-edge AI-assisted development methodology and modern deployment practices.",
      icon: <Bot className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      technologies: ["Replit deployment", "AI-assisted development", "automated CI/CD", "GitHub Actions"],
      highlights: [
        "Built AI-powered e-commerce platform using prompt engineering and DevOps orchestration",
        "Implemented zero-code architecture with AI-driven development workflows", 
        "Demonstrated cutting-edge AI-assisted development methodology and modern deployment practices"
      ],
      github: "https://github.com/Minhajms/productdata"
    },
    {
      title: "Paper.Social",
      subtitle: "Multi-Cloud DevOps Platform",
      description: "Developed enterprise-grade multi-cloud deployment pipeline demonstrating advanced DevOps practices with exceptional uptime achievement and zero-downtime deployments.",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      technologies: ["Terraform", "Ansible", "Docker", "AWS", "IBM Cloud", "GitHub Actions", "Prometheus", "Grafana"],
      highlights: [
        "Developed enterprise-grade multi-cloud deployment pipeline",
        "Implemented Infrastructure as Code, blue-green deployments, automated CI/CD, monitoring",
        "Achieved 99.99% uptime with zero-downtime deployments"
      ],
      github: "https://github.com/Minhajms/paper-social-devops"
    },
    {
      title: "AI Tools Collection",
      subtitle: "Community Resource Platform",
      description: "Created platform with 50+ AI tools with automated link verification and modern UI serving developers worldwide. Comprehensive community resource with advanced search capabilities.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500",
      technologies: ["HTML5", "JavaScript", "CSS3", "Python", "GitHub Actions", "Papa Parse"],
      highlights: [
        "Created platform with 50+ AI tools with automated link verification",
        "Implemented search functionality, automated validation, responsive design, CI/CD deployment",
        "Serves as community resource for developers and AI enthusiasts"
      ],
      github: "https://github.com/Minhajms/AI-Tools-Collection-"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gray-50 rounded-full border border-gray-200 mb-8">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider">
              Projects
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
            Featured
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Work</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:scale-105">
              <div className={`bg-gradient-to-r ${project.color} p-8 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/90 text-sm">{project.subtitle}</p>
                </div>
              </div>

              <div className="p-8">
                <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wider">Key Highlights</h4>
                  <div className="space-y-3">
                    {project.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-start">
                        <div className={`w-2 h-2 bg-gradient-to-r ${project.color} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                        <span className="text-gray-600 text-sm leading-relaxed">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r ${project.color} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
                >
                  <Github size={18} className="mr-2" />
                  View on GitHub
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