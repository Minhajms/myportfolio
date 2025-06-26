import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Award, BookOpen, ExternalLink, MessageCircle, Download } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "email",
      value: "minhajoutflow@gmail.com",
      href: "mailto:minhajoutflow@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "phone",
      value: "+91 9562474580",
      href: "tel:+919562474580"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "location",
      value: "wayanad, kerala, india",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      title: "github",
      username: "@minhajms",
      href: "https://github.com/Minhajms"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      title: "linkedin",
      username: "@minhajms",
      href: "https://linkedin.com/in/minhajms"
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-5 h-5" />,
      title: "manorama startup competition winner",
      year: "2023"
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "published technical writer",
      platform: "medium & linkedin"
    }
  ];

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv/minhaj-cv.pdf';
    link.download = 'minhaj-devops-engineer-cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg mb-8">
            <span className="text-green-400 text-sm font-medium">./contact</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            let's
            <span className="text-green-400"> connect</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            ready to discuss your next project or explore collaboration opportunities?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-6">get_in_touch</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center bg-gray-900 border border-gray-700 rounded-lg p-4 hover:border-green-400 transition-colors duration-300"
                  >
                    <div className="text-green-400 mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1 text-sm">{info.title}</h4>
                      <p className="text-gray-400 text-sm">{info.value}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-500 ml-auto" />
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">follow_me</h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-gray-900 border border-gray-700 rounded-lg p-4 hover:border-green-400 transition-colors duration-300"
                  >
                    <div className="text-green-400 mr-3">
                      {social.icon}
                    </div>
                    <div>
                      <h5 className="font-medium text-white text-sm">{social.title}</h5>
                      <p className="text-gray-400 text-xs">{social.username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements & CTA */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-bold text-white mb-6">achievements</h4>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="text-green-400 mr-3 mt-1">
                        {achievement.icon}
                      </div>
                      <div>
                        <h5 className="font-bold text-white mb-1 text-sm">{achievement.title}</h5>
                        <p className="text-green-400 text-xs">
                          {'year' in achievement ? achievement.year : achievement.platform}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CV Download */}
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
              <h4 className="text-lg font-bold text-white mb-4">download_resume</h4>
              <p className="text-gray-400 mb-4 text-sm">
                get a detailed overview of my experience, skills, and achievements
              </p>
              <button
                onClick={downloadCV}
                className="inline-flex items-center px-4 py-3 bg-green-400 text-black rounded-lg font-medium hover:bg-green-300 transition-colors duration-300 text-sm"
              >
                <Download className="w-4 h-4 mr-2" />
                download_cv.pdf
              </button>
            </div>

            {/* Call to Action */}
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
              <h4 className="text-lg font-bold text-white mb-4">ready_to_work_together?</h4>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                i'm always interested in discussing new opportunities, innovative projects, 
                and ways to help your team succeed with modern devops practices.
              </p>
              <a
                href="https://wa.me/919562474580"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-3 bg-green-400 text-black rounded-lg font-medium hover:bg-green-300 transition-colors duration-300 text-sm"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                start_conversation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;