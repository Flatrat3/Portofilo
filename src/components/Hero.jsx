import React from 'react';
import { ArrowRight, Download, Mail, Phone } from 'lucide-react';
import './Hero.css';

const Github = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.37 4.37 0 0 0 9 18v4"></path></svg>
);
const Linkedin = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
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
            Beynəlxalq münasibətlər və proqram təminatı mühəndisliyi sahələrində təhsil almış, kommunikasiya və texnologiyanı birləşdirən peşəkar mütəxəssisəm. Hazırda Fövqəladə Hallar Nazirliyinin Akademiyasında ictimaiyyətlə əlaqələr sahəsində fəaliyyət göstərirəm. Full Stack Web Development istiqamətində bilik və bacarıqlara sahibəm, müasir veb texnologiyaları ilə işləyirəm. Daim özünü inkişaf etdirməyə və yeni biliklər əldə etməyə önəm verirəm.
          </p>
          
          <div className="hero-actions">
            <a href="#experience" className="btn btn-primary">
              İş təcrübəm <ArrowRight size={18} className="ml-2" />
            </a>
            <a href="tel:0708038365" className="btn btn-outline">
              <Phone size={18} className="mr-2" /> 070-803-83-65
            </a>
            <a href="mailto:asim@example.com" className="btn btn-outline">
              <Mail size={18} className="mr-2" /> Email
            </a>
          </div>
          
          <div className="hero-social">
            <p>Mənimlə əlaqə:</p>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon glass">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon glass">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="hero-image-wrapper animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="hero-image-container glass">
            <img src="/profile.jpg" alt="Asim Ahmad" className="hero-profile-img" />
            
            <div className="floating-card card-1 glass">
              <span className="card-value">6+</span>
              <span className="card-label">İl təcrübə.</span>
            </div>
            
            <div className="floating-card card-2 glass">
              <span className="card-value">PR Mütəxəssisi</span>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
