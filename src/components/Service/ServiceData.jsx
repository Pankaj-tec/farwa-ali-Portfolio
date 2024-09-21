import "./Service.css";
import uiImg from "../../../public/images/ui-ux.png";
import creativeImg from "../../../public/images/creative-sol.png";
import appDevlopment from "../../../public/images/app-devlopment.png";
import grapicImg from "../../../public/images/graphic.png";
import design from "../../../public/images/web-design.png";
import devlopment from "../../../public/images/development.png";



const Service = () => {
  return (
    <section className="service">
        <div className="service__cont container">
           <h1 className="service__heading">Services</h1>
           <p className="service__desc">Lorem ipsum dolor sit amet consectetur. Nunc eget vestibulum porttitor massa at ullamcorper duis vitae. Ullamcorper suspendisse quis nibh libero pharetra tristique. </p>
           <div className="service__cards">
            <div className="service__card">
                <div className="service__cardImg">
                    <img src={uiImg} alt="ui image" />
                </div>
                <h3 className="service__cardHeading">UI/UX</h3>
                <p className="service__cardDesc">Lorem ipsum dolor sit amet consectetur. Id pulvinar consequat enim </p>
            </div>
            <div className="service__card">
                <div className="service__cardImg">
                    <img src={grapicImg} alt="ui image" />
                </div>
                <h3 className="service__cardHeading">GRAPHICS</h3>
                <p className="service__cardDesc">Lorem ipsum dolor sit amet consectetur. Id pulvinar consequat enim </p>
            </div>
            <div className="service__card">
                <div className="service__cardImg">
                    <img src={design} alt="ui image" />
                </div>
                <h3 className="service__cardHeading">WEB DESIGN</h3>
                <p className="service__cardDesc">Lorem ipsum dolor sit amet consectetur. Id pulvinar consequat enim </p>
            </div>
            <div className="service__card">
                <div className="service__cardImg">
                    <img src={devlopment} alt="ui image" />
                </div>
                <h3 className="service__cardHeading">DEVELOPMENT</h3>
                <p className="service__cardDesc">Lorem ipsum dolor sit amet consectetur. Id pulvinar consequat enim </p>
            </div>
            <div className="service__card">
                <div className="service__cardImg">
                    <img src={creativeImg} alt="ui image" />
                </div>
                <h3 className="service__cardHeading">CREATIVE SOL</h3>
                <p className="service__cardDesc">Lorem ipsum dolor sit amet consectetur. Id pulvinar consequat enim </p>
            </div>
            <div className="service__card">
                <div className="service__cardImg">
                    <img src={appDevlopment} alt="ui image" />
                </div>
                <h3 className="service__cardHeading">APP DESIGN</h3>
                <p className="service__cardDesc">Lorem ipsum dolor sit amet consectetur. Id pulvinar consequat enim </p>
            </div>
           </div>
        </div>
    </section>
  )
}

export default Service