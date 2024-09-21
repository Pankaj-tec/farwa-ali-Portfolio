// Service.js
import "./Service.css";
import { serviceConfig } from "../data/data";

const Service = () => {
  return (
    <section className="service">
      <div className="service__cont container">
        <h1 className="service__heading">{serviceConfig.title}</h1>
        <p className="service__desc">{serviceConfig.description}</p>
        <div className="service__cards">
          {serviceConfig.services.map((service, index) => (
            <div className="service__card" key={index}>
              <div className="service__cardImg">
                <img src={service.image} alt={service.title} />
              </div>
              <h3 className="service__cardHeading">{service.title}</h3>
              <p className="service__cardDesc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
