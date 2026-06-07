import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import TiltCard from './TiltCard';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Həmkarlar İttifaqı Komitəsinin Sədri',
      company: 'Fövqəladə Hallar Nazirliyinin Akademiyası',
      period: '2021 – 2025',
      description: 'Komitənin fəaliyyətinə rəhbərlik, işçilərin hüquqlarının qorunması və sosial layihələrin idarə olunması.'
    },
    {
      title: 'İctimaiyyətlə və KİV ilə Əlaqələr Bölməsi – Rəis əvəzi',
      company: 'Fövqəladə Hallar Nazirliyinin Akademiyası',
      period: '2021 – 2025',
      description: 'Bölmənin ümumi rəhbərliyi və media strategiyasının hazırlanması.'
    },
    {
      title: 'İctimaiyyətlə və KİV ilə Əlaqələr Bölməsi – İnspektor',
      company: 'Fövqəladə Hallar Nazirliyinin Akademiyası',
      period: '2020 – indiyədək',
      description: 'İctimaiyyətlə əlaqələrin qurulması, KİV nümayəndələri ilə əməkdaşlıq, rəsmi məlumatların hazırlanması və yayılması, korporativ kommunikasiya fəaliyyətlərinin həyata keçirilməsi.'
    },
    {
      title: 'Dövlət Qulluğu üzrə – Qanunvericilik müəllimi',
      company: 'Youtube platforması',
      period: '2024 – indiyədək',
      description: 'İctimaiyyətlə əlaqələrin qurulması, KİV nümayəndələri ilə əməkdaşlıq, rəsmi məlumatların hazırlanması və yayılması, korporativ kommunikasiya fəaliyyətlərinin həyata keçirilməsi.'
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Təcrübə</h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item animate-fade-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="timeline-dot glass">
                <Briefcase size={20} className="text-accent" />
              </div>
              
              <TiltCard className="timeline-content glass">
                <div className="timeline-header">
                  <h3 className="timeline-title">{exp.title}</h3>
                  <span className="timeline-period">
                    <Calendar size={16} className="mr-2" />
                    {exp.period}
                  </span>
                </div>
                
                <h4 className="timeline-company">{exp.company}</h4>
                <p className="timeline-desc">{exp.description}</p>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
