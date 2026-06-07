import React, { useState, useEffect } from 'react';
import { ExternalLink, Folder, Star, GitBranch } from 'lucide-react';
import TiltCard from './TiltCard';
import './Projects.css';

const GithubIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.37 4.37 0 0 0 9 18v4"></path>
  </svg>
);

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const featuredProjects = [
    {
      id: 1,
      title: 'Dövlət Qulluğu',
      description: 'Dövlət qulluğuna hazırlaşan namizədlər üçün geniş tədris, sınaq imtahanları, qanunvericilik bazası və video dərsləri özündə birləşdirən peşəkar hazırlıq portalı.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'CSS3', 'REST API'],
      liveLink: 'https://dovletqullugu.net/',
      githubLink: '',
    },
    {
      id: 2,
      title: 'DeepFocus',
      description: 'Məhsuldarlığı artırmaq, işə və dərslərə daha yaxşı fokuslanmaq üçün hazırlanmış, istifadəçinin diqqətini yayındıran amilləri və saytları məhdudlaşdıran tətbiq.',
      tech: ['React.js', 'Node.js', 'Express.js', 'CSS Grid', 'Flexbox'],
      liveLink: '',
      githubLink: 'https://github.com/Flatrat3/DeepFocus.git',
    },
    {
      id: 3,
      title: 'Dental Baku',
      description: 'Baku şəhərində fəaliyyət göstərən stomatoloji klinika üçün xidmətlər, həkim heyəti, pasiyent rəyləri və onlayn qəbul qeydiyyatı təqdim edən müasir və tam adaptiv veb-sayt.',
      tech: ['React.js', 'Vite', 'CSS3 Animations', 'Responsive Design'],
      liveLink: 'https://dentalbaku.netlify.app/',
      githubLink: '',
    },
    {
      id: 4,
      title: 'Chainblocker',
      description: 'Blokçeyn və şəbəkə protokollarını simulyasiya edən, zəncirvari bloklama prinsiplərini interaktiv vizuallaşdırma ilə göstərən veb tətbiqi.',
      tech: ['React.js', 'JavaScript', 'Web3', 'CSS3 Transitions'],
      liveLink: 'https://chainblocker.netlify.app/',
      githubLink: '',
    }
  ];

  useEffect(() => {
    fetch('https://api.github.com/users/Flatrat3/repos?sort=updated&per_page=10')
      .then((res) => {
        if (!res.ok) throw new Error('GitHub layihələri yüklənərkən xəta baş verdi');
        return res.json();
      })
      .then((data) => {
        // Filter out forks and already featured ones
        const filtered = data
          .filter(
            (repo) =>
              !repo.fork &&
              repo.name.toLowerCase() !== 'deepfocus' &&
              repo.name.toLowerCase() !== 'portofilo'
          )
          .slice(0, 6);
        setRepos(filtered);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title animate-fade-up">Layihələrim</h2>
        <p className="section-subtitle animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Real olaraq hazırladığım əsas layihələr və tətbiqlər
        </p>

        {/* Featured Projects Grid */}
        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
            <TiltCard
              key={project.id}
              className="project-card glass animate-fade-up"
              style={{ animationDelay: `${(index + 2) * 0.1}s` }}
            >
              <div className="project-card-header">
                <div className="project-icon-box">
                  <Folder size={24} className="text-accent" />
                </div>
                <div className="project-links">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                      aria-label="GitHub link"
                    >
                      <GithubIcon size={18} />
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                      aria-label="Live link"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <div className="project-card-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
              </div>

              <div className="project-card-footer">
                <div className="project-tech-list">
                  {project.tech.map((techItem, i) => (
                    <span key={i} className="project-tech-badge">
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* GitHub Repos Section */}
        <div className="github-repos-section">
          <h3 className="github-repos-title animate-fade-up">Digər GitHub Layihələri</h3>
          <p className="github-repos-subtitle animate-fade-up">
            GitHub-dan real vaxt rejimində çəkilən ictimai repozitoriyalar
          </p>

          {loading ? (
            <div className="repos-loading animate-fade-up">
              <div className="spinner"></div>
              <p>GitHub repozitoriyaları yüklənir...</p>
            </div>
          ) : error ? (
            <div className="repos-error animate-fade-up">
              <p>{error}</p>
              <a
                href="https://github.com/Flatrat3"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ marginTop: '16px' }}
              >
                GitHub-a keçid et <GithubIcon size={18} className="ml-2" />
              </a>
            </div>
          ) : (
            <div className="github-grid">
              {repos.map((repo, index) => (
                <TiltCard
                  key={repo.id}
                  className="github-repo-card glass animate-fade-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}
                  >
                    <div className="repo-header">
                      <Folder size={18} className="repo-folder-icon" />
                      <span className="repo-lang">{repo.language || 'HTML/CSS'}</span>
                    </div>
                    <h4 className="repo-name">{repo.name}</h4>
                    <p className="repo-description">
                      {repo.description || ''}
                    </p>
                    <div className="repo-stats">
                      <span className="repo-stat-item">
                        <Star size={14} /> {repo.stargazers_count}
                      </span>
                      <span className="repo-stat-item">
                        <GitBranch size={14} /> {repo.forks_count}
                      </span>
                    </div>
                  </a>
                </TiltCard>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
