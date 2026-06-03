import React from 'react';
import { Mail, ArrowUp, Phone } from 'lucide-react';
import './Footer.css';

const Github = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.37 4.37 0 0 0 9 18v4"></path></svg>
);
const Linkedin = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

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
