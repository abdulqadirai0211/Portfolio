import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './Projects.css';

const Projects = ({ data }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const projects = data || [];

  return (
    <section className="projects section" id="projects" ref={ref}>
      <div className="container">
        <div className={`section-title animate-in ${inView ? 'visible' : ''}`}>
          <h2>Featured <span className="gradient-text">Projects</span></h2>
          <p>AI applications built for real-world impact</p>
        </div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <div
              key={project.name}
              className={`projects__card glass-card animate-in stagger-${Math.min(i + 1, 6)} ${inView ? 'visible' : ''}`}
            >
              <div className="projects__card-top">
                <div className="projects__card-icon">
                  <FiGithub />
                </div>
                <div className="projects__card-links">
                  {project.demo_link && project.demo_link !== '#' && (
                    <a
                      href={project.demo_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__link"
                      aria-label={`Live demo of ${project.name}`}
                    >
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="projects__card-title">{project.name}</h3>
              <p className="projects__card-desc">{project.description}</p>

              <div className="projects__card-techs">
                {project.technologies?.map((tech) => (
                  <span key={tech} className="badge">{tech}</span>
                ))}
              </div>

              {project.demo_link && project.demo_link !== '#' ? (
                <a
                  href={project.demo_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projects__demo-btn"
                >
                  Live Demo <FiExternalLink size={14} />
                </a>
              ) : (
                <span className="projects__demo-btn projects__demo-btn--placeholder">
                  Live Demo <FiExternalLink size={14} />
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
