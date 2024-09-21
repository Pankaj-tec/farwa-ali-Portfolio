import { useState } from "react";
import "./Project.css";
import { projectsConfig } from "../data/data";

const Project = () => {
  const { heading, description, categories, projects } = projectsConfig;
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter projects based on the active category
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="project">
      <div className="project__cont container">
        <h1 className="project__heading">{heading}</h1>
        <p className="project__desc">{description}</p>
        <div className="project__inner">
          <ul className="project__list">
            {categories.map((category) => (
              <li
                key={category}
                className={`project__item ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
          <div className="project__sections">
            {filteredProjects.map((project) => (
              <div className="project__section" key={project.id}>
                <div className="project__img">
                  <img src={project.image} alt={project.name} />
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
