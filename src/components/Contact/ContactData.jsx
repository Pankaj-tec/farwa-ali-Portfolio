// Contact.js
import "./Contact.css";
import contactConfig from "./contactConfig";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__cont container">
        <div className="contact__left">
          <h1 className="contact__heading">
            {contactConfig.heading.split(" ").map((word, index) => (
              <React.Fragment key={index}>
                {index > 0 && <br />}
                {word}
              </React.Fragment>
            ))}
          </h1>
          <p className="contact__desc">
            {contactConfig.description}
          </p>
        </div>
        <div className="contact__right">
          <form action="" className="contact__form">
            {contactConfig.form.fields.map((field, index) => (
              <label htmlFor={field.name} className="contact__label" key={index}>
                {field.label}
                {field.type === "textarea" ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    className="contact__input textarea"
                  ></textarea>
                ) : (
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    className="contact__input"
                  />
                )}
              </label>
            ))}
            <input
              type="submit"
              value={contactConfig.form.submitButton.label}
              className={contactConfig.form.submitButton.className}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
