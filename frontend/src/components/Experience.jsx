import { useInView } from 'react-intersection-observer';
import './Experience.css';

const Experience = ({ data }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const experiences = data || [];

  return (
    <section className="experience section" id="experience" ref={ref}>
      <div className="container">
        <div className={`section-title animate-in ${inView ? 'visible' : ''}`}>
          <h2>Work <span className="gradient-text">Experience</span></h2>
          <p>Building production AI systems at scale</p>
        </div>

        <div className="experience__timeline">
          <div className="experience__line" />

          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`experience__item ${i % 2 === 0 ? 'experience__item--left' : 'experience__item--right'} ${
                inView ? 'visible' : ''
              } ${i % 2 === 0 ? 'animate-in-left' : 'animate-in-right'}`}
              style={{ transitionDelay: `${i * 0.2}s` }}
            >
              <div className="experience__dot" />
              <div className="experience__card glass-card">
                <div className="experience__header">
                  <h3 className="experience__title">{exp.title}</h3>
                  <span className="experience__company gradient-text">{exp.company}</span>
                </div>
                <div className="experience__meta">
                  <span className="experience__location">{exp.location}</span>
                  <span className="experience__dates">{exp.dates}</span>
                </div>
                <div className="experience__techs">
                  {exp.technologies?.map((tech) => (
                    <span key={tech} className="badge">{tech}</span>
                  ))}
                </div>
                <ul className="experience__bullets">
                  {exp.bullets?.map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
