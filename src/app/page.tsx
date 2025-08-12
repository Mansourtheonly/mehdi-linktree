"use client";

import React, { useState } from 'react';
import {
  Github, Linkedin, Mail, Phone, MapPin, ExternalLink,
  Code, Database, Wrench, User, Briefcase, GraduationCap, Star
} from 'lucide-react';


const MehdiLinktree = () => {
  const [activeSection, setActiveSection] = useState('links');

  const links = [
    {
      title: "Portfolio Website",
      url: "https://myporfolio-dun.vercel.app/",
      icon: <Code className="w-5 h-5" />,
      description: "View my complete portfolio and projects"
    },
    {
      title: "GitHub",
      url: "https://github.com/Mansourtheonly",
      icon: <Github className="w-5 h-5" />,
      description: "Check out my code repositories"
    },
    {
      title: "LinkedIn",
      url: "https://linkedin.com/in/mehdimansour",
      icon: <Linkedin className="w-5 h-5" />,
      description: "Connect with me professionally"
    },
    {
      title: "Email Me",
      url: "mailto:mehdi.mansor3115@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      description: "Get in touch directly"
    },
    {
      title: "Plombier Global Project",
      url: "https://plombierglobal.com",
      icon: <ExternalLink className="w-5 h-5" />,
      description: "Multi-vendor ecommerce platform I developed"
    }
  ];

  const skills = {
    frontend: ["Next.js", "React", "JavaScript", "TypeScript", "Tailwind CSS"],
    backend: ["Nest.js", "Laravel", "Node.js"],
    databases: ["PostgreSQL", "MySQL", "MongoDB"],
    tools: ["Git", "Figma", "Linux", "Docker"]
  };

  const experiences = [
    {
      title: "Full Stack Developer Internship",
      company: "Signature Consulting",
      period: "Feb 2025 - Jun 2025",
      location: "Oran, Algeria",
      highlights: [
        "Developed Next.js frontend features",
        "Built Nest.js backend functionalities",
        "Implemented security measures and validation",
        "Collaborated on mobile app design"
      ]
    },
    {
      title: "IT Regional & Stock Manager",
      company: "Yalidine",
      period: "Aug 2023 - Jan 2024",
      location: "Oran, Algeria",
      highlights: [
        "Managed regional IT operations",
        "Led large team coordination",
        "Developed stock management system",
        "Maintained network infrastructure"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="relative inline-block mb-6">
            <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
              MM
            </div>
            <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-2">Mehdi Mansour</h1>
          <p className="text-blue-300 text-lg mb-4">Full Stack Developer & Computer Science Student</p>
          
          <div className="flex items-center justify-center gap-4 text-gray-300 text-sm mb-6">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>Oran, Algeria</span>
            </div>
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>+213 776 53 60 38</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-full p-1 flex gap-1">
              {[
                { key: 'links', label: 'Links', icon: <ExternalLink className="w-4 h-4" /> },
                { key: 'about', label: 'About', icon: <User className="w-4 h-4" /> },
                { key: 'experience', label: 'Experience', icon: <Briefcase className="w-4 h-4" /> },
                { key: 'skills', label: 'Skills', icon: <Star className="w-4 h-4" /> }
              ].map(({ key, label, icon }) => (
                <button
                  key={key}
                  onClick={() => setActiveSection(key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                    activeSection === key
                      ? 'bg-white text-purple-900 shadow-lg'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  {icon}
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-4">
          {activeSection === 'links' && (
            <div className="space-y-4">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-all duration-300 rounded-2xl p-6 border border-white/20 hover:border-white/40 transform hover:scale-[1.02] hover:shadow-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white">
                      {link.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-lg mb-1">{link.title}</h3>
                      <p className="text-gray-300 text-sm">{link.description}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400" />
                  </div>
                </a>
              ))}
            </div>
          )}

          {activeSection === 'about' && (
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <User className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">About Me</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Highly motivated Computer Science student specializing in full-stack web development. 
                I have proven ability to build robust, user-friendly web applications from concept to deployment, 
                with a strong focus on problem-solving and continuous learning.
              </p>
              
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-semibold text-white">Education</h3>
              </div>
              <div className="bg-white/5 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-white">Bachelors in Computer Science</h4>
                <p className="text-gray-300">University of Oran 1</p>
                <p className="text-gray-400 text-sm">September 2024 - September 2029</p>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-semibold text-white">Certification in Computer Science and Networks</h4>
                <p className="text-gray-300">CNEPD</p>
              </div>
            </div>
          )}

          {activeSection === 'experience' && (
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                      <p className="text-blue-300 font-semibold">{exp.company}</p>
                      <p className="text-gray-400 text-sm">{exp.location} • {exp.period}</p>
                    </div>
                    <Briefcase className="w-6 h-6 text-blue-400" />
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                        <div className="w-1 h-1 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'skills' && (
            <div className="space-y-4">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center gap-3 mb-4">
                    {category === 'frontend' && <Code className="w-5 h-5 text-blue-400" />}
                    {category === 'backend' && <Database className="w-5 h-5 text-green-400" />}
                    {category === 'databases' && <Database className="w-5 h-5 text-purple-400" />}
                    {category === 'tools' && <Wrench className="w-5 h-5 text-orange-400" />}
                    <h3 className="text-lg font-semibold text-white capitalize">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/20 text-white text-sm rounded-full border border-white/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-8 pt-8 border-t border-white/20">
          <p className="text-gray-400 text-sm">
            Made with ❤️ using Next.js, TypeScript & Tailwind CSS
          </p>
          <p className="text-gray-500 text-xs mt-2">
            © 2025 Mehdi Mansour. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
export default MehdiLinktree; 