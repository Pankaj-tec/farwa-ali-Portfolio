import "./About.css";
import aboutImg from "../../../public/images/about-img.png";
const About = () => {
  return (
    <section className="about">
        <div className="about__cont container">
            <div className="about__left">
                <div className="about__image">
                    <img src={aboutImg } alt="about image" className="about__imaageIcon"/>
                </div>
                 </div>
            <div className="about__right"> 
            <h1 className="about__headding">
            About Me
            </h1>
            <p className="about__desc">Lorem ipsum dolor sit amet consectetur. Nunc eget vestibulum porttitor massa at ullamcorper duis vitae. Ullamcorper suspendisse quis nibh libero pharetra tristique. </p>
          <div className="about__progress">
            <ul className="about__list">
                <li className="about__item">UX</li>
                <li className="about__item">92%</li>
            </ul>
            <div className="about__progressbar">
                <div className="about__progressing">
                    <div className="about__progressRound"></div>
                </div>
            </div>
          </div>
          <div className="about__progress">
            <ul className="about__list">
                <li className="about__item">Website Design</li>
                <li className="about__item">86%</li>
            </ul>
            <div className="about__progressbar">
                <div className="about__progressing">
                    <div className="about__progressRound"></div>
                </div>
            </div>
          </div>
          <div className="about__progress">
            <ul className="about__list">
                <li className="about__item">App Design </li>
                <li className="about__item">80%</li>
            </ul>
            <div className="about__progressbar">
                <div className="about__progressing">
                    <div className="about__progressRound"></div>
                </div>
            </div>
          </div>
          <div className="about__progress">
            <ul className="about__list">
                <li className="about__item">Graphic Design </li>
                <li className="about__item">90%</li>
            </ul>
            <div className="about__progressbar">
                <div className="about__progressing">
                    <div className="about__progressRound"></div>
                </div>
            </div>
          </div>
            </div>

        </div>
    </section>
  );
};

export default About;
