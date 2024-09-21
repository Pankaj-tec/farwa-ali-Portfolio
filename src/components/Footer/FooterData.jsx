
import "./Footer.css"
import { Link } from 'react-router-dom'

import facbookIcon from "../../../public/images/facebook.svg";
import instagramIcon from "../../../public/images/instagram.svg";
import twitterIcon from "../../../public/images/twitter.svg";
import linkedInIcon from "../../../public/images/likededIn.svg";
import whatsappIcon from "../../../public/images/whatsapp.svg"
const Footer = () => {
  return (
   <footer className='ftr'>
    <div className='ftr__container container'>
    <Link to={"/"} className="ftr__logo">
          <div className="ftr__logoBg">
            <div className="ftr__round"></div>
            <div className="ftr__round ftr__round--blue"></div>
          </div>
          <h3 className="ftr__logoNme">Pankaj</h3>
        </Link>
        <div className='ftr__navbar'>
          <ul className='ftr__list'>
            <li className='ftr__item'>
              <Link to={"/"} className="ftr__link">Home</Link>
            </li>
            <li className='ftr__item'>
              <Link to={"/About"} className="ftr__link">About Me</Link>
            </li>
            <li className='ftr__item'>
              <Link to={"/Services"}className="ftr__link">Services</Link>
            </li>
            <li className='ftr__item'>
              <Link to={"/Projects"}className="ftr__link">Projects</Link>
            </li>
            <li className='ftr__item'>
              <Link to={"/Testimonials"}className="ftr__link">Testimonials</Link>
            </li>
         
          </ul>
          <div className="ftr__socials ">
           <div className="ftr__social">
            <img src={facbookIcon} alt="icons" className="ftr__socialIcons" />
           </div>
           <div className="ftr__social">
            <img src={instagramIcon} alt="icons" className="ftr__socialIcons" />
           </div>
           <div className="ftr__social">
            <img src={linkedInIcon} alt="icons" className="ftr__socialIcons" />
           </div>
           <div className="ftr__social">
            <img src={twitterIcon} alt="icons" className="ftr__socialIcons" />
           </div>
           <div className="ftr__social">
            <img src={whatsappIcon} alt="icons" className="ftr__socialIcons" />
           </div>
          </div>
        </div>
        
        <button className='btn ftr__backTop'>Back Top Top</button>
    </div>
   
    <div className="ftr__btm">
      <p className='ftr__copyRight'>© 2023 <Link to={"/"} className="ftr__copyRgtLink">Farwa Ali All</Link> Rights Reserved , Inc.</p>
    </div>
   </footer>
  )
}

export default Footer