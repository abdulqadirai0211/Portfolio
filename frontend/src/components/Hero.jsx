import { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown } from 'react-icons/fi';
import './Hero.css';

const Hero = ({ data }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = data?.roles || [
    'AI/ML Engineer',
    'Generative AI Developer',
    'Data Scientist',
    'AI Systems Builder',
  ];

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting) {
      if (text.length < currentRole.length) {
        timeout = setTimeout(() => {
          setText(currentRole.slice(0, text.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(currentRole.slice(0, text.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex, roles]);

  return (
    <section className="hero" id="hero">
      <div className="hero__container container">
        <div className="hero__content">
          <div className="hero__greeting">
            <span className="hero__wave">👋</span>
            <span className="hero__hi">Hello, I'm</span>
          </div>

          <h1 className="hero__name">
            {data?.name || 'Abdul Qadir'}
          </h1>

          <div className="hero__role-wrapper">
            <span className="hero__role-prefix">&gt; </span>
            <span className="hero__role gradient-text">{text}</span>
            <span className="hero__cursor">|</span>
          </div>

          <p className="hero__summary">
            {data?.summary ||
              'Building production-grade AI applications with 2+ years of experience in Generative AI, Agentic Systems, and end-to-end ML pipelines.'}
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn-primary" onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              View My Work <FiArrowDown />
            </a>
            <a href="#contact" className="btn btn-secondary" onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <FiDownload /> Get in Touch
            </a>
          </div>

          <div className="hero__socials">
            <a
              href={data?.github || 'https://github.com/AbdulQadir0211'}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="GitHub"
              id="hero-github"
            >
              <FiGithub />
            </a>
            <a
              href={data?.linkedin || 'https://linkedin.com/in/abdul-qadir0'}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="LinkedIn"
              id="hero-linkedin"
            >
              <FiLinkedin />
            </a>
            <a
              href={`mailto:${data?.email || 'abdulkadir9929@gmail.com'}`}
              className="hero__social-link"
              aria-label="Email"
              id="hero-email"
            >
              <FiMail />
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__avatar-ring">
            <div className="hero__avatar-inner">
              <span className="hero__avatar-icon">🤖</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;
