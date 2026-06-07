import React from 'react';
import { Code, Server, Database, GitBranch, Settings, Globe } from 'lucide-react';
import TiltCard from './TiltCard';
import './Skills.css';

const CircularProgress = ({ percentage, label, size = 72, strokeWidth = 5.5 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="skill-progress-item">
      <div className="skill-circle-container" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="skill-circle-svg">
          {/* Background Ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            className="skill-circle-bg"
            strokeWidth={strokeWidth}
          />
          {/* Active Progress Ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            className="skill-circle-active"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            stroke="url(#skillGradient)"
          />
        </svg>
        <span className="skill-percentage-text">{percentage}%</span>
      </div>
      <span className="skill-label">{label}</span>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code size={24} />,
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'JavaScript', level: 92 },
        { name: 'React.js', level: 90 },
        { name: 'Responsive Web Design', level: 95 },
        { name: 'Bootstrap', level: 80 },
        { name: 'Tailwind CSS', level: 85 }
      ]
    },
    {
      title: 'Backend Development',
      icon: <Server size={24} />,
      skills: [
        { name: 'Node.js', level: 82 },
        { name: 'Express.js', level: 85 },
        { name: 'Python', level: 75 },
        { name: 'REST API', level: 88 },
        { name: 'API inteqrasiyası', level: 85 }
      ]
    },
    {
      title: 'Verilənlər Bazaları',
      icon: <Database size={24} />,
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'MySQL', level: 85 }
      ]
    },
    {
      title: 'Digərləri',
      icon: <GitBranch size={24} />,
      skills: [
        { name: 'Git', level: 90 },
        { name: 'GitHub', level: 90 },
        { name: 'Deployment', level: 80 },
        { name: 'MERN Stack', level: 85 }
      ]
    },
    {
      title: 'Dillər',
      icon: <Globe size={24} />,
      skills: [
        { name: 'Türk dili', level: 100 },
        { name: 'İngilis dili', level: 75 },
        { name: 'Alman dili', level: 40 }
      ]
    },
    {
      title: 'İT və Kompüter Bacarıqları',
      icon: <Settings size={24} />,
      skills: [
        { name: 'MS Office', level: 95 },
        { name: 'Windows ƏS', level: 95 },
        { name: 'Formatlama', level: 95 },
        { name: 'Texniki diaqnostika', level: 90 },
        { name: 'Texniki xidmət', level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      {/* Global SVG Gradient definition used by all CircularProgress bars */}
      <svg style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
        <defs>
          <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent)" />
            <stop offset="100%" stopColor="#9333ea" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container">
        <h2 className="section-title">Texniki Bacarıqlar</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <TiltCard key={index} className="skill-card glass animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="skill-header">
                <div className="skill-icon text-accent">
                  {category.icon}
                </div>
                <h3 className="skill-title">{category.title}</h3>
              </div>
              
              <div className="skill-circles-grid">
                {category.skills.map((skill, i) => (
                  <CircularProgress key={i} percentage={skill.level} label={skill.name} />
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
