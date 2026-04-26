import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import './Footer.css';

const Footer = ({ data }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="footer__divider" />
      <div className="container">
        <div className="footer__content">
          <div className="footer__left">
            <a href="#hero" className="footer__logo">
              <span className="gradient-text">&lt;AQ /&gt;</span>
            </a>
            <p className="footer__tagline">Building intelligent systems that matter.</p>
          </div>

          <div className="footer__socials">
            <a
              href={data?.github || 'https://github.com/AbdulQadir0211'}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href={data?.linkedin || 'https://linkedin.com/in/abdul-qadir0'}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href={`mailto:${data?.email || 'abdulkadir9929@gmail.com'}`}
              className="footer__social-link"
              aria-label="Email"
            >
              <FiMail />
            </a>
          </div>

          <div className="footer__bottom">
            <p>
              © {year} Abdul Qadir. Built with <FiHeart className="footer__heart" /> using
              <span className="gradient-text"> React</span> &
              <span className="gradient-text"> FastAPI</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
