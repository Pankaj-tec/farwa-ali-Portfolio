import heroImage from "../../../public/images/hero.png" 
import dowanloadImg from "../../../public/images/dowanload.svg";
import "./Hero.css"
import SocialIcon from "../Social-icon/SocialIcon";
const Hero = () => {
  return (
    <section className="hero">
        <div className="hero__cont container">
            <div className="hero__left">
                <h4 className="hero__title">Hi</h4>
                <h3 className="hero__subtitle">Pankaj Sharma</h3>
                <h1 className="hero__heading">Frontend web Developer</h1>
                <p className="hero__desc">Lorem ipsum dolor sit amet consectetur. Nunc eget vestibulum porttitor massa at ullamcorper duis vitae. Ullamcorper suspendisse quis nibh libero pharetra tristique. </p>
                <div className="hero__btns">
                    <button className="hero__hire btn ">Hire</button>
                    <button className="btn hero__dowanload"><img src={dowanloadImg} alt="dwoanload" className="heroDowanloadImg"/><span>Dowanload CV</span></button>
                </div>
            </div>
            <div className="hero__right">
                <div className="hero__image">
                    <img src={heroImage} alt="hero" className="hero__imageIconx`" />
                </div>
            </div>

        </div>
        <SocialIcon />
    </section>
  )
}

export default Hero