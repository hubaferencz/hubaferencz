import React from "react";

function PortfolioItem(props) {
  let category = props.category;
  let project = props.project;

  return (
    <li
      key={project.id}
      className="project-item active"
      data-filter-item
      data-category={category.title}
    >
      <div className="project-item-hover-container">
        <figure className="project-img">
          <div className="project-item-icon-box">
            {project.source && (
              <ul className="icon-box-flat">
                <li>
                  {" "}
                  <a
                    href={project.url}
                    className="project-item-icon link-icon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ion-icon
                      name="link-outline"
                      alt={"link to " + project.title}
                    />
                  </a>
                </li>

                {/* check if project has project.source only render if has */}
                <li>
                  {" "}
                  <a
                    href={project.source}
                    className="project-item-icon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ion-icon
                      name="logo-github"
                      alt={project.title + " github source code"}
                    />
                  </a>
                </li>
              </ul>
            )}
            {!project.source && (
              <div className="lone-link">
                <a
                  href={project.url}
                  className="project-item-icon link-icon "
                  target="_blank"
                  rel="noreferrer"
                >
                  <ion-icon
                    name="link-outline"
                    alt={"link to " + project.title}
                  />
                </a>
              </div>
            )}
          </div>
          <img
            src={require("../../images/" + project.image)}
            alt={project.title + " portfolio item"}
            loading="lazy"
          />
        </figure>
      </div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-category">{project.description}</p>
    </li>
  );
}

export default PortfolioItem;
