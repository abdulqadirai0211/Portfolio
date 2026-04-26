import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  FiMail,
  FiPhone,
  FiLinkedin,
  FiGithub,
  FiMapPin,
  FiSend,
  FiCheck,
  FiAlertCircle,
} from 'react-icons/fi';
import { submitContactForm } from '../services/api';
import './Contact.css';

const Contact = ({ data }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await submitContactForm(form);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(null), 5000);
    } catch (err) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again.');
      setTimeout(() => setStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      label: 'Email',
      value: data?.email || 'abdulkadir9929@gmail.com',
      href: `mailto:${data?.email || 'abdulkadir9929@gmail.com'}`,
    },
    {
      icon: <FiPhone />,
      label: 'Phone',
      value: data?.phone || '+91 9792753113',
      href: `tel:${data?.phone || '+919792753113'}`,
    },
    {
      icon: <FiLinkedin />,
      label: 'LinkedIn',
      value: 'abdul-qadir0',
      href: data?.linkedin || 'https://linkedin.com/in/abdul-qadir0',
    },
    {
      icon: <FiGithub />,
      label: 'GitHub',
      value: 'AbdulQadir0211',
      href: data?.github || 'https://github.com/AbdulQadir0211',
    },
    {
      icon: <FiMapPin />,
      label: 'Location',
      value: 'India',
      href: null,
    },
  ];

  return (
    <section className="contact section" id="contact" ref={ref}>
      <div className="container">
        <div className={`section-title animate-in ${inView ? 'visible' : ''}`}>
          <h2>Get in <span className="gradient-text">Touch</span></h2>
          <p>Let's build something amazing together</p>
        </div>

        <div className="contact__wrapper">
          <div className={`contact__info animate-in-left ${inView ? 'visible' : ''}`}>
            <h3 className="contact__info-title">Let's Connect</h3>
            <p className="contact__info-text">
              Whether you have a project in mind, want to collaborate, or just want to say hello — 
              I'd love to hear from you. Feel free to reach out through any of these channels.
            </p>

            <div className="contact__links">
              {contactInfo.map((item) => (
                <div key={item.label} className="contact__link-item">
                  <span className="contact__link-icon">{item.icon}</span>
                  <div>
                    <span className="contact__link-label">{item.label}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact__link-value"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact__link-value">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`contact__form-wrap glass-card animate-in-right ${inView ? 'visible' : ''}`}>
            <form className="contact__form" onSubmit={handleSubmit} id="contact-form">
              <div className="contact__field">
                <label htmlFor="contact-name">Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="contact__field">
                <label htmlFor="contact-email">Email</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className="contact__field">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or just say hi..."
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary contact__submit"
                disabled={status === 'loading'}
                id="contact-submit"
              >
                {status === 'loading' ? (
                  <>Sending...</>
                ) : status === 'success' ? (
                  <><FiCheck /> Sent!</>
                ) : (
                  <><FiSend /> Send Message</>
                )}
              </button>

              {status === 'success' && (
                <div className="contact__toast contact__toast--success">
                  <FiCheck /> Message sent successfully!
                </div>
              )}

              {status === 'error' && (
                <div className="contact__toast contact__toast--error">
                  <FiAlertCircle /> {errorMsg}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
