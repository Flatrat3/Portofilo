import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Phone } from 'lucide-react';
import './Hero.css';

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
