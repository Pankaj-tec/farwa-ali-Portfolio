import React, { useState } from "react";
import "./Project.css";
import projectIcon from "../../../public/images/project1.png";
import projectgrow from "../../../public/images/project2.png";
// import projectCreative from "../../../public/images/project3.png";

const Project = () => {
  // State to manage the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Sample data for projects
  const projects = [
    {
      id: 1,
      category: "Web Design",
      name: "Web Design",
      title: "Marketing Landing Page Design",
      imgSrc: projectIcon,
    },
    {
      id: 2,
      category: "Web Design",
      name: "Web Design",
      title: "Marketing Landing Page Design",
      imgSrc: projectgrow,
    },
    {
      id: 3,
      category: "Web Design",
      name: "Web Design",
      title: "Marketing Landing Page Design",
      imgSrc: projectgrow,
    },
  ];

  // Filter projects based on the selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="project">
      <div className="project__cont container">
        <h1 className="project__heading">My Projects</h1>
        <p className="project__desc">
          Lorem ipsum dolor sit amet consectetur. Id pulvinar consequat enim
          molestie dolor commodo mauris dolor amet. Nulla pellentesque Id
          pulvinar consequat eni
        </p>
        <div className="project__inner">
          <ul className="project__list">
            <li
              className={`project__item ${
                selectedCategory === "All" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("All")}
            >
              All
            </li>
            <li
              className={`project__item ${
                selectedCategory === "UI UX" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("UI UX")}
            >
              UI UX
            </li>
            <li
              className={`project__item ${
                selectedCategory === "Website Design" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("Website Design")}
            >
              Website Design
            </li>
            <li
              className={`project__item ${
                selectedCategory === "Graphic Design" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("Graphic Design")}
            >
              Graphic Design
            </li>
            <li
              className={`project__item ${
                selectedCategory === "App Design" ? "active" : ""
              }`}
              onClick={() => setSelectedCategory("App Design")}
            >
              App Design
            </li>
          </ul>
          <div className="project__sections">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project__section">
                <div className="project__img">
                  <img src={project.imgSrc} alt={project.name} />
                </div>
                <p className="project__name">{project.name}</p>
                <p className="project__title">{project.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
