import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="logo">
              ASİM <span className="logo-accent">ƏHMƏD</span>
            </a>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-title">Quick Links</h4>
            <ul>
              <li><a href="#home">Ana səhifə</a></li>
              <li><a href="#experience">Təcrübə</a></li>
              <li><a href="#skills">Bacarıqlar</a></li>
              <li><a href="#education">Təhsil</a></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h4 className="footer-title">Əlaqə</h4>
            <div className="social-links">
              <a href="https://github.com/Flatrat3" target="_blank" rel="noopener noreferrer" className="social-icon glass">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/asim-ehmed/" target="_blank" rel="noopener noreferrer" className="social-icon glass">
                <Linkedin size={20} />
              </a>
              <a href="mailto:asim@example.com" className="social-icon glass">
                <Mail size={20} />
              </a>
              <a href="tel:0708038365" className="social-icon glass">
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom border-t border-border-color mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Asim Əhməd. Bütün hüquqlar qorunur..
          </p>
          
          <button onClick={scrollToTop} className="scroll-top glass" aria-label="Scroll to top">
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
