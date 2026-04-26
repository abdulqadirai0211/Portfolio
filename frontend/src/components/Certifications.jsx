import { useInView } from 'react-intersection-observer';
import { FiAward, FiExternalLink } from 'react-icons/fi';
import './Certifications.css';

const Certifications = ({ data }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const certifications = data || [];

  return (
    <section className="certifications section" id="certifications" ref={ref}>
      <div className="container">
        <div className={`section-title animate-in ${inView ? 'visible' : ''}`}>
          <h2>Certifications & <span className="gradient-text">Achievements</span></h2>
          <p>Continuous learning and professional development</p>
        </div>

        <div className="certifications__grid">
          {certifications.map((cert, i) => (
            <div
              key={cert.name}
              className={`certifications__card glass-card animate-in stagger-${i + 1} ${inView ? 'visible' : ''}`}
            >
              <div className="certifications__icon-wrap">
                <FiAward />
              </div>
              <h3 className="certifications__name">{cert.name}</h3>
              <p className="certifications__provider">{cert.provider}</p>
              {cert.badge && (
                <span className="certifications__badge">{cert.badge}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
