// About.js
import "./About.css";
import { aboutConfig } from "../data/data";

const About = () => {
  return (
    <section className="about">
      <div className="about__cont container">
        <div className="about__left">
          <div className="about__image">
            <img
              src={aboutConfig.image}
              alt="about image"
              className="about__imaageIcon"
            />
          </div>
        </div>
        <div className="about__right">
          <h1 className="about__headding">{aboutConfig.title}</h1>
          <p className="about__desc">{aboutConfig.description}</p>
          {aboutConfig.skills.map((skill, index) => (
            <div className="about__progress" key={index}>
              <ul className="about__list">
                <li className="about__item">{skill.name}</li>
                <li className="about__item">{skill.percentage}</li>
              </ul>
              <div className="about__progressbar">
                <div
                  className="about__progressing"
                  style={{ width: skill.percentage }}
                >
                  <div className="about__progressRound"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
