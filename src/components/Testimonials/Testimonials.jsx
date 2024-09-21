// Testimonials.js
import { Rating } from "react-simple-star-rating";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";
import { testimonialsConfig } from "../data/data";

const Testimonials = () => {
  const { heading, description, sliderSettings, testimonials } = testimonialsConfig;

  return (
    <section className="testimonials">
      <div className="testimonials__cont container">
        <h1 className="testimonials__heading">{heading}</h1>
        <p className="testimonials__desc">{description}</p>
        <div className="testimonials__cards">
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial) => (
              <div className="testimonials__card" key={testimonial.id}>
                <div className="testimonials__profile">
                  <img
                    src={testimonial.image}
                    alt="profile"
                    className="testimonials__profileImg"
                  />
                </div>
                <p className="testimonials__cardDesc">
                  {testimonial.description}
                </p>
                <div className="testimonials__details">
                  <div className="testimonials__detail">
                    <p className="testimonials__authName">{testimonial.authorName}</p>
                    <p className="testimonials__position">{testimonial.position}</p>
                  </div>
                  <div className="testimonials__rating">
                    <Rating
                      initialValue={testimonial.rating}
                      size={26}
                      readonly
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
