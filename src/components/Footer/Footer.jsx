// Footer.js
import "./Footer.css";
import { Link } from "react-router-dom";
import { footerConfig } from "../data/data";

const Footer = () => {
  return (
    <footer className='ftr'>
      <div className='ftr__container container'>
        <Link to={footerConfig.logo.path} className="ftr__logo">
          <div className="ftr__logoBg">
            <div className="ftr__round"></div>
            <div className="ftr__round ftr__round--blue"></div>
          </div>
          <h3 className="ftr__logoNme">{footerConfig.logo.name}</h3>
        </Link>
        <div className='ftr__navbar'>
          <ul className='ftr__list'>
            {footerConfig.navLinks.map((link, index) => (
              <li className='ftr__item' key={index}>
                <Link to={link.path} className="ftr__link">{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className="ftr__socials">
            {footerConfig.socialLinks.map((social, index) => (
              <a href={social.url} className="ftr__social" key={index} target="_blank" rel="noopener noreferrer">
                <img src={social.icon} alt={social.alt} className="ftr__socialIcons" />
              </a>
            ))}
          </div>
        </div>
        <button className='btn ftr__backTop'>{footerConfig.backToTopText}</button>
      </div>
      <div className="ftr__btm">
        <p className='ftr__copyRight'>
          {footerConfig.copyright} <Link to={footerConfig.copyrightLink.path} className="ftr__copyRgtLink">{footerConfig.copyrightLink.label}</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
