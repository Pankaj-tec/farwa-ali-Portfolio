import { Rating } from "react-simple-star-rating";
import "./Testimonials.css";
import johnImg from "../../../public/images/john.svg"
// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    // appendDots: dots => (
    //   <div
    //     style={{
    //       backgroundColor: "#ddd",
    //       borderRadius: "10px",
    //       padding: "10px"
    //     }}
    //   >
    //     <ul style={{ margin: "0px" }}> {dots} </ul>
    //   </div>
    // ),
    // customPaging: i => (
    //   <div
    //     style={{
    //       display:"flex",
    //       gap:"24px",
    //       width: "38px",
    //       height:"13px",
    //       borderRadius:"13px",
    //       // color: "blue",
    //       backgroundColor:"#D9D9D9",
    //       border: "1px blue solid"
    //     }}
    //   >
    //     {i + 1}
    //   </div>
    // )

  };
  return (
    <section className="testimonails">
      <div className="testimonails__cont container">
        <h1 className="testimonails__heading">Testimonials</h1>
        <p className="testimonials__desc">
          Lorem ipsum dolor sit amet consectetur. Id pulvinar consequat enim
          molestie dolor commodo mauris dolor amet. Nulla pellentesque Id
          pulvinar consequat eni
        </p>
        <div className="testimonials__cards">
        <Slider {...settings}>

          <div className="testimonials__card">
            <div className="testimonials__profile">
              <img src={johnImg} alt="profile" className="testimonials__profileImg" />
            </div>
            <p className="testimonials__cardDesc">
              Lorem ipsum dolor sit amet consectetur. Id pulvinar consequat enim
              molestie dolor commodo mauris dolor amet. Lorem ipsum dolor sit
              amet consectetur.
            </p>
            <div className="testimonials__details">
              <div className="testimonials__detail">
                <p className="testimonials__authName">John Wade</p>
                <p className="testimonials__position">CEO</p>
              </div>
              <div className="testimonials__rating">
                
                <Rating size={26} />
              </div>
            </div>
          </div>
          <div className="testimonials__card">
            <div className="testimonials__profile">
              <img src={johnImg} alt="profile" className="testimonials__profileImg" />
            </div>
            <p className="testimonials__cardDesc">
              Lorem ipsum dolor sit amet consectetur. Id pulvinar consequat enim
              molestie dolor commodo mauris dolor amet. Lorem ipsum dolor sit
              amet consectetur.
            </p>
            <div className="testimonials__details">
              <div className="testimonials__detail">
                <p className="testimonials__authName">John Wade</p>
                <p className="testimonials__position">CEO</p>
              </div>
              <div className="testimonials__rating">
                
                <Rating size={26} />
              </div>
            </div>
          </div>
          <div className="testimonials__card">
            <div className="testimonials__profile">
              <img src={johnImg} alt="profile" className="testimonials__profileImg" />
            </div>
            <p className="testimonials__cardDesc">
              Lorem ipsum dolor sit amet consectetur. Id pulvinar consequat enim
              molestie dolor commodo mauris dolor amet. Lorem ipsum dolor sit
              amet consectetur.
            </p>
            <div className="testimonials__details">
              <div className="testimonials__detail">
                <p className="testimonials__authName">John Wade</p>
                <p className="testimonials__position">CEO</p>
              </div>
              <div className="testimonials__rating">
                
                <Rating size={26} />
              </div>
            </div>
          </div>

        </Slider>
        </div>
      </div>
    
    </section>
  );
};

export default Testimonials;
