// navbar data
export const navbarData = [
  { path: "/", label: "Home" },
  { path: "/About", label: "About Me" },
  { path: "/Services", label: "Services" },
  { path: "/Projects", label: "Projects" },
  { path: "/Testimonials", label: "Testimonials" },
  { path: "/Contact", label: "Contact Me", isButton: true },
];
// Hero data

export const heroContent = {
  title: "Hi",
  subtitle: "Pankaj Sharma",
  heading: "Frontend Web Developer",
  description:
    "Lorem ipsum dolor sit amet consectetur. Nunc eget vestibulum porttitor massa at ullamcorper duis vitae. Ullamcorper suspendisse quis nibh libero pharetra tristique.",
  buttons: [
    { label: "Hire", className: "hero__hire btn", type: "button" },
    {
      label: "Download CV",
      className: "btn hero__download",
      type: "button",
      iconSrc: "/images/download.svg",
      iconAlt: "download",
    },
  ],
  image: "/images/hero.png",
};
// about data

export const aboutConfig = {
  title: "About Me",
  description:
    "Lorem ipsum dolor sit amet consectetur. Nunc eget vestibulum porttitor massa at ullamcorper duis vitae. Ullamcorper suspendisse quis nibh libero pharetra tristique.",
  image: "/images/about-img.png",
  skills: [
    { name: "UX", percentage: "92%" },
    { name: "Website Design", percentage: "86%" },
    { name: "App Design", percentage: "80%" },
    { name: "Graphic Design", percentage: "90%" },
  ],
};
// service data

import uiImg from "../../../public/images/ui-ux.png";
import creativeImg from "../../../public/images/creative-sol.png";
import appDevlopment from "../../../public/images/app-devlopment.png";
import grapicImg from "../../../public/images/graphic.png";
import design from "../../../public/images/web-design.png";
import devlopment from "../../../public/images/development.png";

export const serviceConfig = {
  title: "Services",
  description:
    "Lorem ipsum dolor sit amet consectetur. Nunc eget vestibulum porttitor massa at ullamcorper duis vitae. Ullamcorper suspendisse quis nibh libero pharetra tristique.",
  services: [
    {
      image: uiImg,
      title: "UI/UX",
      description:
        "Lorem ipsum dolor sit amet consectetur. Id pulvinar consequat enim",
    },
    {
      image: grapicImg,
      title: "GRAPHICS",
      description:
        "Lorem ipsum dolor sit amet consectetur. Id pulvinar consequat enim",
    },
    {
      image: design,
      title: "WEB DESIGN",
      description:
        "Lorem ipsum dolor sit amet consectetur. Id pulvinar consequat enim",
    },
    {
      image: devlopment,
      title: "DEVELOPMENT",
      description:
        "Lorem ipsum dolor sit amet consectetur. Id pulvinar consequat enim",
    },
    {
      image: creativeImg,
      title: "CREATIVE SOL",
      description:
        "Lorem ipsum dolor sit amet consectetur. Id pulvinar consequat enim",
    },
    {
      image: appDevlopment,
      title: "APP DESIGN",
      description:
        "Lorem ipsum dolor sit amet consectetur. Id pulvinar consequat enim",
    },
  ],
};

// project data

import projectIcon from "../../../public/images/project1.png";
import projectgrow from "../../../public/images/project2.png";

export const projectsConfig = {
  heading: "My Projects",
  description: "Lorem ipsum dolor sit amet consectetur. Id pulvinar consequat enim molestie dolor commodo mauris dolor amet. Nulla pellentesque Id pulvinar consequat eni",
  categories: [
    "All",
    "UI UX",
    "Website Design", 
    "Graphic Design",
    "App Design"
  ],
  projects: [
    {
      id: 1,
      category: "Website Design",
      image: projectIcon,
      name: "Web Design",
      title: "Marketing Landing Page Design"
    },
    {
      id: 2,
      category: "Graphic Design",
      image: projectgrow,
      name: "Graphic Design",
      title: "Brand Identity Design"
    },
    {
      id: 3,
      category: "App Design",
      image: projectgrow,
      name: "App Design",
      title: "Mobile App UI/UX"
    }
  ]
};

 

// conatct data

export const contactConfig = {
  heading: "Lets Design Together",
  description: "Lorem ipsum dolor sit amet consectetur. Id pulvinar consequat enim molestie dolor commodo mauris dolor amet. Nulla pellentesque Id pulvinar consequat eni",
  formFields: [
    { label: "Name*", type: "text", id: "name" },
    { label: "Email*", type: "email", id: "email" },
    { label: "Message*", type: "textarea", id: "message" }
  ],
  submitButtonText: "Submit"
};



  // Testimonials data

import johnImg from "../../../public/images/john.svg";

export const testimonialsConfig = {
  heading: "Testimonials",
  description:
    "Lorem ipsum dolor sit amet consectetur. Id pulvinar consequat enim molestie dolor commodo mauris dolor amet. Nulla pellentesque Id pulvinar consequat eni",
  sliderSettings: {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  },
  testimonials: [
    {
      id: 1,
      image: johnImg,
      description:
        "Lorem ipsum dolor sit amet consectetur. Id pulvinar consequat enim molestie dolor commodo mauris dolor amet. Lorem ipsum dolor sit amet consectetur.",
      authorName: "John Wade",
      position: "CEO",
      rating: 4, // Assuming rating out of 5
    },
    {
      id: 2,
      image: johnImg,
      description:
        "Lorem ipsum dolor sit amet consectetur. Id pulvinar consequat enim molestie dolor commodo mauris dolor amet. Lorem ipsum dolor sit amet consectetur.",
      authorName: "John Wade",
      position: "CEO",
      rating: 5, // Example rating
    },
    {
      id: 3,
      image: johnImg,
      description:
        "Lorem ipsum dolor sit amet consectetur. Id pulvinar consequat enim molestie dolor commodo mauris dolor amet. Lorem ipsum dolor sit amet consectetur.",
      authorName: "John Wade",
      position: "CEO",
      rating: 3, // Example rating
    },
  ],
};

// Footer data
import facbookIcon from "../../../public/images/facebook.svg";
import instagramIcon from "../../../public/images/instagram.svg";
import twitterIcon from "../../../public/images/twitter.svg";
import linkedInIcon from "../../../public/images/likededIn.svg";
import whatsappIcon from "../../../public/images/whatsapp.svg";

export const footerConfig = {
  logo: {
    path: "/",
    name: "Pankaj",
  },
  navLinks: [
    { path: "/", label: "Home" },
    { path: "/About", label: "About Me" },
    { path: "/Services", label: "Services" },
    { path: "/Projects", label: "Projects" },
    { path: "/Testimonials", label: "Testimonials" },
  ],
  socialLinks: [
    { icon: facbookIcon, alt: "Facebook", url: "#" },
    { icon: instagramIcon, alt: "Instagram", url: "#" },
    { icon: linkedInIcon, alt: "LinkedIn", url: "#" },
    { icon: twitterIcon, alt: "Twitter", url: "#" },
    { icon: whatsappIcon, alt: "WhatsApp", url: "#" },
  ],
  backToTopText: "Back To Top",
  copyright: "© 2023 Farwa Ali All Rights Reserved, Inc.",
  copyrightLink: {
    path: "/",
    label: "Farwa Ali",
  },
};

 

export default { navbarData, heroContent, aboutConfig, serviceConfig ,contactConfig,projectsConfig,testimonialsConfig,footerConfig};
