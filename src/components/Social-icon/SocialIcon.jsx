import "./SocialIcon.css"
import facbookIcon from "../../../public/images/facebook.svg";
import instagramIcon from "../../../public/images/instagram.svg";
import twitterIcon from "../../../public/images/twitter.svg";
import linkedInIcon from "../../../public/images/likededIn.svg";
import whatsappIcon from "../../../public/images/whatsapp.svg";

const SocialIcon = () => {
  return (
<section className="social">
    <div className="social__cont container">
        <div className="social__icons">
            <img src={facbookIcon} alt="facebook" className="social__icon"/>
        </div>
        <div className="social__icons">
            <img src={linkedInIcon} alt="linkedInIcon" className="social__icon"/>
        </div>
        <div className="social__icons">
            <img src={twitterIcon} alt="twitterIcon}"className="social__icon" />
        </div>
        <div className="social__icons">
            <img src={instagramIcon} alt="instagramIcon"className="social__icon" />
        </div>
        <div className="social__icons">
            <img src={whatsappIcon} alt="whatsappIcon" className="social__icon"/>
        </div>
    </div>
</section>
  )
}

export default SocialIcon