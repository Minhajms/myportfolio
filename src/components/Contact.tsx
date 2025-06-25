import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Award, BookOpen, ExternalLink, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "minhajoutflow@gmail.com",
      href: "mailto:minhajoutflow@gmail.com",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 9562474580",
      href: "tel:+919562474580",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Wayanad, Kerala, India",
      href: "#",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      username: "@Minhajms",
      href: "https://github.com/Minhajms",
      color: "from-gray-700 to-gray-900"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      username: "@minhajms",
      href: "https://linkedin.com/in/minhajms",
      color: "from-blue-600 to-blue-800"
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Manorama Startup Competition Winner",
      year: "2023",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Published Technical Writer",
      platform: "Medium & LinkedIn",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gray-50 rounded-full border border-gray-200 mb-8">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider">
              Contact
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
            Let's
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Connect</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your next project or explore collaboration opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="group flex items-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-105"
                  >
                    <div className={`bg-gradient-to-r ${info.color} w-14 h-14 rounded-xl flex items-center justify-center text-white mr-6 group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                      <p className="text-gray-600 group-hover:text-indigo-600 transition-colors duration-200">
                        {info.value}
                      </p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 ml-auto group-hover:text-indigo-600 transition-colors duration-200" />
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-6">Follow Me</h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-105"
                  >
                    <div className={`bg-gradient-to-r ${social.color} w-12 h-12 rounded-xl flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      {social.icon}
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 text-sm">{social.title}</h5>
                      <p className="text-gray-600 text-sm">{social.username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements & CTA */}
          <div className="space-y-8">
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-8">Achievements</h4>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-start">
                      <div className={`bg-gradient-to-r ${achievement.color} w-12 h-12 rounded-xl flex items-center justify-center text-white mr-4 mt-1`}>
                        {achievement.icon}
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900 mb-2">{achievement.title}</h5>
                        <p className="text-indigo-600 font-semibold">
                          {'year' in achievement ? achievement.year : achievement.platform}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-4">Ready to Work Together?</h4>
                <p className="text-white/90 mb-6 leading-relaxed">
                  I'm always interested in discussing new opportunities, innovative projects, 
                  and ways to help your team succeed with modern DevOps practices.
                </p>
                <a
                  href="https://wa.me/919562474580"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start a Conversation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;