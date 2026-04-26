import { useInView } from 'react-intersection-observer';
import {
  FiCode,
  FiBarChart2,
  FiCpu,
  FiEye,
  FiMessageSquare,
  FiZap,
  FiDatabase,
  FiSettings,
} from 'react-icons/fi';
import './Skills.css';

const iconMap = {
  'Programming Languages': <FiCode />,
  'Data Analysis': <FiBarChart2 />,
  'Machine Learning': <FiCpu />,
  'Computer Vision': <FiEye />,
  'Natural Language Processing': <FiMessageSquare />,
  'Generative & Agentic AI': <FiZap />,
  'Databases': <FiDatabase />,
  'AI/MLOps': <FiSettings />,
};

const Skills = ({ data }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const skillCategories = data ? Object.entries(data) : [];

  return (
    <section className="skills section" id="skills" ref={ref}>
      <div className="container">
        <div className={`section-title animate-in ${inView ? 'visible' : ''}`}>
          <h2>Technical <span className="gradient-text">Skills</span></h2>
          <p>My toolbox for building intelligent systems</p>
        </div>

        <div className="skills__grid">
          {skillCategories.map(([category, skills], i) => (
            <div
              key={category}
              className={`skills__card glass-card animate-in stagger-${Math.min(i + 1, 6)} ${inView ? 'visible' : ''}`}
            >
              <div className="skills__card-header">
                <span className="skills__card-icon">
                  {iconMap[category] || <FiCode />}
                </span>
                <h3 className="skills__card-title">{category}</h3>
              </div>
              <div className="skills__badges">
                {skills.map((skill) => (
                  <span key={skill} className="badge">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
