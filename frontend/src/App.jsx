import { useState, useEffect } from 'react';
import { getResumeData } from './services/api';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resumeData = await getResumeData();
        setData(resumeData);
      } catch (err) {
        console.error('Failed to fetch resume data:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <div className="loader__spinner" />
        <p className="loader__text">Loading Portfolio...</p>
      </div>
    );
  }

  return (
    <div className="app">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero data={data?.personal_info} />
        <About data={data?.stats} />
        <Experience data={data?.experience} />
        <Skills data={data?.skills} />
        <Projects data={data?.projects} />
        <Certifications data={data?.certifications} />
        <Contact data={data?.personal_info} />
      </main>
      <Footer data={data?.personal_info} />
    </div>
  );
}

export default App;
