import React from 'react';
import { Code, Server, Database, GitBranch, Settings, Globe } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code size={24} />,
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Responsive Web Design', 'Bootstrap', 'Tailwind CSS']
    },
    {
      title: 'Backend Development',
      icon: <Server size={24} />,
      skills: ['Node.js', 'Express.js', 'Python', 'REST API Development', 'API inteqrasiyası']
    },
    {
      title: 'Verilənlər Bazaları',
      icon: <Database size={24} />,
      skills: ['MongoDB', 'MySQL', ]
    },
    {
      title: 'Digərləri',
      icon: <GitBranch size={24} />,
      skills: ['Git', 'GitHub', 'Deployment prosesləri', 'MERN Stack']
    },
    {
      title: 'Dillər',
      icon: <Globe size={24} />,
      skills: ['Türk dili (Ana dili)', 'İngilis dili (B1+)', 'Alman dili (A2)']
    },
    {
      title: 'İT və Kompüter Bacarıqları',
      icon: <Settings size={24} />,
      skills: ['Microsoft Office', 'Windows ƏS quraşdırma', 'Kompüter formatlama', 'Texniki diaqnostika', 'Texniki xidmət']
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Texniki Bacarıqlar</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card glass animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="skill-header">
                <div className="skill-icon text-accent">
                  {category.icon}
                </div>
                <h3 className="skill-title">{category.title}</h3>
              </div>
              
              <ul className="skill-list">
                {category.skills.map((skill, i) => (
                  <li key={i} className="skill-item">
                    <span className="skill-bullet"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
