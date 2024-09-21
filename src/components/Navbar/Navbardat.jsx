import "./Navbar.css";
import { Link } from "react-router-dom";
import data from "../data/data";
const Navbar = () => {
  return (
    <header className="nav">
      <div className="nav__cont container">
        <Link to={"/"} className="nav__left">
          <div className="nav__logoBg">
            <div className="nav__round"></div>
            <div className="nav__round nav__round--blue"></div>
          </div>
          <h3 className="nav__logoNme">Pankaj</h3>
        </Link>
        <div className="nav__right">
          <nav className="nav__navbar">
            <ul className="nav__list">
             {data.map((item,index)=>{
              <li className="nav__item" key={index}>
                <Link to={item.path} className="nav__link">Home</Link>
              </li>

             })}

              <li className="nav__item">
                <Link to={"/About"} className="nav__link">About Me</Link>
              </li>
              <li className="nav__item">
                <Link to={"/Services"} className="nav__link">Services</Link>
              </li>
              <li className="nav__item">
                <Link to={"/Projects"} className="nav__link">Projects</Link>
              </li>
              <li className="nav__item">
                <Link to={"/Testimonials"} className="nav__link">Testimonials</Link>
              </li>
              <li className="nav__item">
                <Link to={"/Contact"} className="btn">Contact Me</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
