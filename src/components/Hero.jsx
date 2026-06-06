import React from 'react';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import './Hero.css';

const Github = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.37 4.37 0 0 0 9 18v4"></path></svg>
);
const Linkedin = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const Youtube = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);
const GlobeIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content animate-fade-up">
          <div className="hero-badge glass">
            <span>👋 Salam, mən Asim Əhməd</span>
          </div>
          
          <h1 className="hero-title">
            Proqram təminatçısı <br/>
            <span className="text-gradient">& PR Mütəxəssisi</span>
          </h1>
          
          <p className="hero-subtitle">
            Beynəlxalq münasibətlər, proqram təminatı mühəndisliyi və qanunvericilik sahələrində fəaliyyət göstərən, kommunikasiya və texnologiyanı birləşdirən peşəkaram. Dövlət qulluğuna hazırlıq üçün nəzərdə tutulmuş və minlərlə namizədin istifadə etdiyi <a href="https://dovletqullugu.net/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline', fontWeight: 600 }}>dovletqullugu.net</a> portalının yaradıcısıyam. Eyni zamanda qanunvericilik mövzusunda 500-dən çox video dərslik və 4000+ abunəçisi olan YouTube kanalını idarə edirəm.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              Layihələrim <ArrowRight size={18} className="ml-2" />
            </a>
            <a href="tel:0708038365" className="btn btn-outline">
              <Phone size={18} className="mr-2" /> 070-803-83-65
            </a>
            <a href="mailto:asim@example.com" className="btn btn-outline">
              <Mail size={18} className="mr-2" /> Email
            </a>
          </div>
          
          <div className="hero-social">
            <p>Mənimlə əlaqə və layihələrim:</p>
            <div className="social-links">
              <a href="https://github.com/Flatrat3" target="_blank" rel="noopener noreferrer" className="social-icon glass" title="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/asim-ehmed/" target="_blank" rel="noopener noreferrer" className="social-icon glass" title="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://www.youtube.com/@dovlet_qullugu" target="_blank" rel="noopener noreferrer" className="social-icon glass" title="YouTube Kanalı (4000+ Abunəci)" style={{ color: '#ef4444' }}>
                <Youtube size={20} />
              </a>
              <a href="https://dovletqullugu.net" target="_blank" rel="noopener noreferrer" className="social-icon glass" title="Dövlət Qulluğu Portalı">
                <GlobeIcon size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="hero-image-wrapper animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="hero-image-container glass">
            <img src="/profile.jpg" alt="Asim Ahmad" className="hero-profile-img" />
            
            <div className="floating-card card-1 glass">
              <span className="card-value">dovletqullugu.net</span>
              <span className="card-label">Saytın Yaradıcısı</span>
            </div>
            
            <div className="floating-card card-2 glass">
              <span className="card-value" style={{ color: '#ef4444' }}>4000+ Abunə</span>
              <span className="card-label">500+ Dərs Videosu</span>
            </div>

            <div className="floating-card card-3 glass">
              <span className="card-value">6+ İl</span>
              <span className="card-label">İş Təcrübəsi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
