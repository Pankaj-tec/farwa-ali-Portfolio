// Hero.js
import "./Hero.css";
import { heroContent } from "../data/data";
import SocialIcon from "../Social-icon/SocialIcon";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__cont container">
        <div className="hero__left">
          <h4 className="hero__title">{heroContent.title}</h4>
          <h3 className="hero__subtitle">{heroContent.subtitle}</h3>
          <h1 className="hero__heading">{heroContent.heading}</h1>
          <p className="hero__desc">{heroContent.description}</p>
          <div className="hero__btns">
            {heroContent.buttons.map((button, index) => (
              <button
                key={index}
                className={button.className}
                type={button.type}
              >
                {button.iconSrc && (
                  <img
                    src={button.iconSrc}
                    alt={button.iconAlt}
                    className="hero__downloadImg"
                  />
                )}
                <span>{button.label}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="hero__right">
          <div className="hero__image">
            <img
              src={heroContent.image}
              alt="hero"
              className="hero__imageIconx"
            />
          </div>
        </div>
      </div>
      <SocialIcon />
    </section>
  );
};

export default Hero;
