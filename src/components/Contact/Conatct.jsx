import { useState } from "react";
import "./Contact.css";
import { contactConfig } from "../data/data";

const Contact = () => {
  const { heading, description, formFields, submitButtonText } = contactConfig;

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form submitted", formData);
  };

  return (
    <section className="contact">
      <div className="contact__cont container">
        <div className="contact__left">
          <h1 className="contact__heading">
            {heading.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </h1>
          <p className="contact__desc">{description}</p>
        </div>
        <div className="contact__right">
          <form action="" className="contact__form" onSubmit={handleSubmit}>
            {formFields.map(({ label, type, id }) => (
              <label key={id} htmlFor={id} className="contact__label">
                {label}
                {type === "textarea" ? (
                  <textarea
                    id={id}
                    className="contact__input textarea"
                    value={formData[id] || ""}
                    onChange={handleChange}
                  ></textarea>
                ) : (
                  <input
                    type={type}
                    id={id}
                    className="contact__input"
                    value={formData[id] || ""}
                    onChange={handleChange}
                  />
                )}
              </label>
            ))}
            <input type="submit" value={submitButtonText} className="btn" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
