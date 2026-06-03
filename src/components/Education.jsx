import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: 'Magistr dərəcəsi - Software Developer Engineer',
      school: 'Azərbaycan Dövlət İqtisad Universiteti (UNEC)',
      period: '2022 – 2024',
      honors: 'Fərqlənmə ilə məzun'
    },
    {
      degree: 'Bakalavr dərəcəsi - Beynəlxalq Münasibətlər',
      school: 'Azərbaycan Dillər Universiteti',
      period: '2012 – 2016',
      honors: ''
    }
  ];

  const certifications = [
    '(Sıfırdan) Sistematik Almanca Kursu (A1–B1)',
    'Python 2026: 100 Günlük Programlama Kampı',
    'Node.js 2026: Uygulamalı Full-Stack Web Geliştirme Eğitimi',
    'Javascript | Baştan Sona Uygulamalı Javascript Eğitimi'
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Təhsil & Sertifikatlar </h2>
        
        <div className="edu-grid">
          <div className="edu-column animate-fade-up">
            <h3 className="column-title">
              <GraduationCap size={24} className="text-accent mr-2" />
              Təhsil
            </h3>
            
            <div className="edu-list">
              {education.map((edu, index) => (
                <div key={index} className="edu-card glass">
                  <span className="edu-period">{edu.period}</span>
                  <h4 className="edu-degree">{edu.degree}</h4>
                  <p className="edu-school">{edu.school}</p>
                  {edu.honors && (
                    <div className="edu-honors">
                      <Award size={16} className="text-accent mr-2" />
                      {edu.honors}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="edu-column animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="column-title">
              <Award size={24} className="text-accent mr-2" />
              Sertifikatlar
            </h3>
            
            <div className="cert-list">
              {certifications.map((cert, index) => (
                <div key={index} className="cert-card glass">
                  <div className="cert-icon">
                    <Award size={20} className="text-accent" />
                  </div>
                  <p className="cert-title">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
