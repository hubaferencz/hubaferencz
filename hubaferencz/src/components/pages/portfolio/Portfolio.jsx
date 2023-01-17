import React, { useState } from "react";
import portfolioData from "./Portfolio.json";

function Portfolio() {
  // create filter function for portfolio
  const filter = (e) => {
    const filterBtns = document.querySelectorAll("[data-filter-btn]");
    const filterItems = document.querySelectorAll("[data-filter-item]");
    const filterValue = e.target.dataset.filterBtn;

    filterBtns.forEach((btn) => {
      btn.classList.remove("active");
    });

    e.target.classList.add("active");

    filterItems.forEach((item) => {
      if (item.dataset.category === filterValue || filterValue === "all") {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  };

  // create select function for portfolio
  const select = (e) => {
    const selectBtn = document.querySelector("[data-select]");
    const selectList = document.querySelector("[data-select-list]");
    const selectItem = document.querySelectorAll("[data-select-item]");
    const selectValue = document.querySelector("[data-selecct-value]");

    selectBtn.classList.toggle("active");
    selectList.classList.toggle("active");

    selectItem.forEach((item) => {
      item.addEventListener("click", () => {
        selectValue.textContent = item.textContent;
        selectBtn.classList.remove("active");
        selectList.classList.remove("active");
      });
    });
  };

  // create array for portfolio items
  // const portfolioItems = [
  //   {
  //     id: 1,
  //     title: "Project 1",
  //     category: "web design",
  //     img: "https://picsum.photos/300/200",
  //   },
  //   {
  //     id: 2,
  //     title: "Project 2",
  //     category: "web development",
  //     img: "https://picsum.photos/300/200",
  //   },
  //   {
  //     id: 3,
  //     title: "Project 3",
  //     category: "applications",
  //     img: "https://picsum.photos/300/200",
  //   },
  //   {
  //     id: 4,
  //     title: "Project 4",
  //     category: "web design",
  //     img: "https://picsum.photos/300/200",
  //   },
  //   {
  //     id: 5,
  //     title: "Project 5",
  //     category: "web development",
  //     img: "https://picsum.photos/300/200",
  //   },
  //   {
  //     id: 6,
  //     title: "Project 6",
  //     category: "applications",
  //     img: "https://picsum.photos/300/200",
  //   },
  //   {
  //     id: 7,
  //     title: "Project 7",
  //     category: "web design",
  //     img: "https://picsum.photos/300/200",
  //   },
  //   {
  //     id: 8,
  //     title: "Project 8",
  //     category: "web development",
  //     img: "https://picsum.photos/300/200",
  //   },
  //   {
  //     id: 9,
  //     title: "Project 9",
  //     category: "applications",
  //     img: "https://picsum.photos/300/200",
  //   },
  // ];

  // create state for portfolio items
  const [portfolio] = useState(portfolioData.portfolio.categories);
  // console.log(portfolio);

  // map through portfolio items and console.log them
  //   useEffect(() => {
  //     portfolio.map((item) => {
  //       console.log(item.title);
  //     });
  //   }, []);

  // return portfolio just like in Portfolio1.jsx
  return (
    <article className="portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>
      <section className="projects">
        {/* create ul filter-list with filter functionality */}
        <ul className="filter-list">
          <li className="filter-item">
            <button
              className="filter-btn active"
              data-filter-btn="all"
              onClick={filter}
            >
              All
            </button>
          </li>
          {/* map through portfolio and create filter-item */}
          {portfolio.map((item) => {
            return (
              <li className="filter-item" key={item.id}>
                <button
                  className="filter-btn"
                  data-filter-btn={item.title}
                  onClick={filter}
                >
                  {item.title}
                </button>
              </li>
            );
          })}
        </ul>
        {/* create filter-select-box with select functionality */}
        <div className="filter-select-box">
          <button className="filter-select" data-select onClick={select}>
            <span className="filter-value" data-selecct-value>
              All
            </span>
            <span className="filter-icon">
              <i className="fas fa-chevron-down"></i>
            </span>
          </button>
          <ul className="select-list" data-select-list>
            {/* map through portfolio and create select-item */}
            <li className="select-item" data-select-item>
              <button data-select-item data-filter-btn="all" onClick={filter}>
                {" "}
                All
              </button>
            </li>
            {portfolio.map((item) => {
              return (
                <li className="select-item" data-select-item key={item.id}>
                  <button
                    data-select-item
                    data-filter-btn={item.title}
                    onClick={filter}
                  >
                    {item.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="project-list">
          {/* map through portfolio */}
          {portfolio.map((category) => {
            return category.projects.map((project) => {
              return (
                <li
                  key={project.id}
                  className="project-item active"
                  data-filter-item
                  data-category={category.title}
                >
                  <a href={project.link}>
                    <figure className="project-img">
                      <div className="project-item-icon-box">
                        <ion-icon name="eye-outline" />
                      </div>
                      <img
                        src={require("../../images/" + project.image)}
                        alt={project.title}
                        loading="lazy"
                      />
                    </figure>

                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-category">{project.description}</p>
                  </a>
                </li>
              );
            });
          })}
        </ul>
      </section>
    </article>
  );
}

export default Portfolio;
