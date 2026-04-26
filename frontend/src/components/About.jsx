import { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiCpu, FiLayers, FiAward } from 'react-icons/fi';
import './About.css';

const AnimatedCounter = ({ end, suffix = '', inView }) => {
  const [count, setCount] = useState(0);
  const parsed = parseInt(end);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(duration / parsed);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= parsed) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [inView, parsed]);

  return <span>{count}{suffix}</span>;
};

const About = ({ data }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const stats = [
    {
      icon: <FiCode />,
      value: data?.years_experience || '2',
      suffix: '+',
      label: 'Years Experience',
    },
    {
      icon: <FiCpu />,
      value: data?.api_tools_built || '15',
      suffix: '+',
      label: 'API Tools Built',
    },
    {
      icon: <FiLayers />,
      value: data?.live_projects || '4',
      suffix: '+',
      label: 'Live Projects',
    },
    {
      icon: <FiAward />,
      value: data?.certifications_count || '3',
      suffix: '',
      label: 'Certifications',
    },
  ];

  return (
    <section className="about section" id="about" ref={ref}>
      <div className="container">
        <div className={`section-title animate-in ${inView ? 'visible' : ''}`}>
          <h2>About <span className="gradient-text">Me</span></h2>
          <p>Passionate about turning cutting-edge AI research into real-world solutions</p>
        </div>

        <div className={`about__content animate-in ${inView ? 'visible' : ''}`}>
          <div className="about__text glass-card">
            <p>
              I'm an <strong>AI/ML Engineer</strong> with <strong>2+ years</strong> of hands-on experience 
              building production-grade AI applications. My expertise spans across 
              <span className="gradient-text"> Generative AI</span>, 
              <span className="gradient-text"> Agentic Systems</span>, and 
              <span className="gradient-text"> end-to-end ML pipelines</span>.
            </p>
            <p>
              From developing MCP Servers for Kubernetes observability platforms to building 
              multi-agent orchestration systems, I thrive on solving complex problems with 
              elegant AI solutions. I'm proficient in the modern AI stack — LangChain, LangGraph, 
              RAG pipelines, and LLM fine-tuning.
            </p>
            <p>
              Currently working at <strong>Opstree Solutions</strong> as a Generative AI Engineer, 
              building AI-powered diagnostics and monitoring tools for cloud-native infrastructure.
            </p>
          </div>
        </div>

        <div className="about__stats">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`about__stat glass-card animate-in stagger-${i + 1} ${inView ? 'visible' : ''}`}
            >
              <div className="about__stat-icon">{stat.icon}</div>
              <div className="about__stat-value">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <div className="about__stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
