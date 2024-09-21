
import "./Navbar.css";
import { Link } from "react-router-dom";
import { navbarData } from "../data/data";

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
              {navbarData.map((item, index) => (
                <li className="nav__item" key={index}>
                  <Link
                    to={item.path}
                    className={item.isButton ? "btn" : "nav__link"}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
