import React from "react";
import Profile from "./profile/Profile";
import Navbar from "./Navbar";
// import about
import About from "../pages/about/About";

function Base() {
  return (
    <>
      <Profile />
      {/*
- #main-content
    */}
      <div className="main-content">
 
        <Navbar />
        {/*
  - #ABOUT
*/}
        <About />
        {/*
  - #RESUME
*/}
        <article className="resume" data-page="resume">
          <header>
            <h2 className="h2 article-title">Resume</h2>
          </header>
          <section className="timeline">
            <div className="title-wrapper">
              <div className="icon-box">
                <ion-icon name="book-outline" />
              </div>
              <h3 className="h3">Education</h3>
            </div>
            <ol className="timeline-list">
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">
                  University school of the arts
                </h4>
                <span>2007 — 2008</span>
                <p className="timeline-text">
                  Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
                  delenit atque corrupti, quos dolores et quas molestias
                  exceptur.
                </p>
              </li>
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">
                  New york academy of art
                </h4>
                <span>2006 — 2007</span>
                <p className="timeline-text">
                  Ratione voluptatem sequi nesciunt, facere quisquams facere
                  menda ossimus, omnis voluptas assumenda est omnis..
                </p>
              </li>
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">
                  High school of art and design
                </h4>
                <span>2002 — 2004</span>
                <p className="timeline-text">
                  Duis aute irure dolor in reprehenderit in voluptate, quila
                  voluptas mag odit aut fugit, sed consequuntur magni dolores
                  eos.
                </p>
              </li>
            </ol>
          </section>
          <section className="timeline">
            <div className="title-wrapper">
              <div className="icon-box">
                <ion-icon name="book-outline" />
              </div>
              <h3 className="h3">Experience</h3>
            </div>
            <ol className="timeline-list">
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">Creative director</h4>
                <span>2015 — Present</span>
                <p className="timeline-text">
                  Nemo enim ipsam voluptatem blanditiis praesentium voluptum
                  delenit atque corrupti, quos dolores et qvuas molestias
                  exceptur.
                </p>
              </li>
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">Art director</h4>
                <span>2013 — 2015</span>
                <p className="timeline-text">
                  Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
                  delenit atque corrupti, quos dolores et quas molestias
                  exceptur.
                </p>
              </li>
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">Web designer</h4>
                <span>2010 — 2013</span>
                <p className="timeline-text">
                  Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
                  delenit atque corrupti, quos dolores et quas molestias
                  exceptur.
                </p>
              </li>
            </ol>
          </section>
          <section className="skill">
            <h3 className="h3 skills-title">My skills</h3>
            <ul className="skills-list content-card">
              <li className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5">Web design</h5>
                  <data value={80}>80%</data>
                </div>
                <div className="skill-progress-bg">
                  <div
                    className="skill-progress-fill"
                    style={{ width: "80%" }}
                  />
                </div>
              </li>
              <li className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5">Graphic design</h5>
                  <data value={70}>70%</data>
                </div>
                <div className="skill-progress-bg">
                  <div
                    className="skill-progress-fill"
                    style={{ width: "70%" }}
                  />
                </div>
              </li>
              <li className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5">Branding</h5>
                  <data value={90}>90%</data>
                </div>
                <div className="skill-progress-bg">
                  <div
                    className="skill-progress-fill"
                    style={{ width: "90%" }}
                  />
                </div>
              </li>
              <li className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5">WordPress</h5>
                  <data value={50}>50%</data>
                </div>
                <div className="skill-progress-bg">
                  <div
                    className="skill-progress-fill"
                    style={{ width: "50%" }}
                  />
                </div>
              </li>
            </ul>
          </section>
        </article>
        {/*
  - #PORTFOLIO
*/}
        <article className="portfolio" data-page="portfolio">
          <header>
            <h2 className="h2 article-title">Portfolio</h2>
          </header>
          <section className="projects">
            <ul className="filter-list">
              <li className="filter-item">
                <button className="active" data-filter-btn="">
                  All
                </button>
              </li>
              <li className="filter-item">
                <button data-filter-btn="">Web design</button>
              </li>
              <li className="filter-item">
                <button data-filter-btn="">Applications</button>
              </li>
              <li className="filter-item">
                <button data-filter-btn="">Web development</button>
              </li>
            </ul>
            <div className="filter-select-box">
              <button className="filter-select" data-select="">
                <div className="select-value" data-selecct-value="">
                  Select category
                </div>
                <div className="select-icon">
                  <ion-icon name="chevron-down" />
                </div>
              </button>
              <ul className="select-list">
                <li className="select-item">
                  <button data-select-item="">All</button>
                </li>
                <li className="select-item">
                  <button data-select-item="">Web design</button>
                </li>
                <li className="select-item">
                  <button data-select-item="">Applications</button>
                </li>
                <li className="select-item">
                  <button data-select-item="">Web development</button>
                </li>
              </ul>
            </div>
            <ul className="project-list">
              <li
                className="project-item  active"
                data-filter-item=""
                data-category="web development"
              >
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline" />
                    </div>
                    <img
                      src="./assets/images/project-1.jpg"
                      alt="finance"
                      loading="lazy"
                    />
                  </figure>
                  <h3 className="project-title">Finance</h3>
                  <p className="project-category">Web development</p>
                </a>
              </li>
              <li
                className="project-item  active"
                data-filter-item=""
                data-category="web development"
              >
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline" />
                    </div>
                    <img
                      src="./assets/images/project-2.png"
                      alt="orizon"
                      loading="lazy"
                    />
                  </figure>
                  <h3 className="project-title">Orizon</h3>
                  <p className="project-category">Web development</p>
                </a>
              </li>
              <li
                className="project-item  active"
                data-filter-item=""
                data-category="web design"
              >
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline" />
                    </div>
                    <img
                      src="./assets/images/project-3.jpg"
                      alt="fundo"
                      loading="lazy"
                    />
                  </figure>
                  <h3 className="project-title">Fundo</h3>
                  <p className="project-category">Web design</p>
                </a>
              </li>
              <li
                className="project-item  active"
                data-filter-item=""
                data-category="applications"
              >
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline" />
                    </div>
                    <img
                      src="./assets/images/project-4.png"
                      alt="brawlhalla"
                      loading="lazy"
                    />
                  </figure>
                  <h3 className="project-title">Brawlhalla</h3>
                  <p className="project-category">Applications</p>
                </a>
              </li>
              <li
                className="project-item  active"
                data-filter-item=""
                data-category="web design"
              >
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline" />
                    </div>
                    <img
                      src="./assets/images/project-5.png"
                      alt="dsm."
                      loading="lazy"
                    />
                  </figure>
                  <h3 className="project-title">DSM.</h3>
                  <p className="project-category">Web design</p>
                </a>
              </li>
              <li
                className="project-item  active"
                data-filter-item=""
                data-category="web design"
              >
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline" />
                    </div>
                    <img
                      src="./assets/images/project-6.png"
                      alt="metaspark"
                      loading="lazy"
                    />
                  </figure>
                  <h3 className="project-title">MetaSpark</h3>
                  <p className="project-category">Web design</p>
                </a>
              </li>
              <li
                className="project-item  active"
                data-filter-item=""
                data-category="web development"
              >
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline" />
                    </div>
                    <img
                      src="./assets/images/project-7.png"
                      alt="summary"
                      loading="lazy"
                    />
                  </figure>
                  <h3 className="project-title">Summary</h3>
                  <p className="project-category">Web development</p>
                </a>
              </li>
              <li
                className="project-item  active"
                data-filter-item=""
                data-category="applications"
              >
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline" />
                    </div>
                    <img
                      src="./assets/images/project-8.jpg"
                      alt="task manager"
                      loading="lazy"
                    />
                  </figure>
                  <h3 className="project-title">Task Manager</h3>
                  <p className="project-category">Applications</p>
                </a>
              </li>
              <li
                className="project-item  active"
                data-filter-item=""
                data-category="web development"
              >
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline" />
                    </div>
                    <img
                      src="./assets/images/project-9.png"
                      alt="arrival"
                      loading="lazy"
                    />
                  </figure>
                  <h3 className="project-title">Arrival</h3>
                  <p className="project-category">Web development</p>
                </a>
              </li>
            </ul>
          </section>
        </article>
        {/*
  - #BLOG
*/}
        <article className="blog" data-page="blog">
          <header>
            <h2 className="h2 article-title">Blog</h2>
          </header>
          <section className="blog-posts">
            <ul className="blog-posts-list">
              <li className="blog-post-item">
                <a href="#">
                  <figure className="blog-banner-box">
                    <img
                      src="./assets/images/blog-1.jpg"
                      alt="Design conferences in 2022"
                      loading="lazy"
                    />
                  </figure>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <p className="blog-category">Design</p>
                      <span className="dot" />
                      <time dateTime="2022-02-23">Fab 23, 2022</time>
                    </div>
                    <h3 className="h3 blog-item-title">
                      Design conferences in 2022
                    </h3>
                    <p className="blog-text">
                      Veritatis et quasi architecto beatae vitae dicta sunt,
                      explicabo.
                    </p>
                  </div>
                </a>
              </li>
              <li className="blog-post-item">
                <a href="#">
                  <figure className="blog-banner-box">
                    <img
                      src="./assets/images/blog-2.jpg"
                      alt="Best fonts every designer"
                      loading="lazy"
                    />
                  </figure>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <p className="blog-category">Design</p>
                      <span className="dot" />
                      <time dateTime="2022-02-23">Fab 23, 2022</time>
                    </div>
                    <h3 className="h3 blog-item-title">
                      Best fonts every designer
                    </h3>
                    <p className="blog-text">
                      Sed ut perspiciatis, nam libero tempore, cum soluta nobis
                      est eligendi.
                    </p>
                  </div>
                </a>
              </li>
              <li className="blog-post-item">
                <a href="#">
                  <figure className="blog-banner-box">
                    <img
                      src="./assets/images/blog-3.jpg"
                      alt="Design digest #80"
                      loading="lazy"
                    />
                  </figure>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <p className="blog-category">Design</p>
                      <span className="dot" />
                      <time dateTime="2022-02-23">Fab 23, 2022</time>
                    </div>
                    <h3 className="h3 blog-item-title">Design digest #80</h3>
                    <p className="blog-text">
                      Excepteur sint occaecat cupidatat no proident, quis
                      nostrum exercitationem ullam corporis suscipit.
                    </p>
                  </div>
                </a>
              </li>
              <li className="blog-post-item">
                <a href="#">
                  <figure className="blog-banner-box">
                    <img
                      src="./assets/images/blog-4.jpg"
                      alt="UI interactions of the week"
                      loading="lazy"
                    />
                  </figure>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <p className="blog-category">Design</p>
                      <span className="dot" />
                      <time dateTime="2022-02-23">Fab 23, 2022</time>
                    </div>
                    <h3 className="h3 blog-item-title">
                      UI interactions of the week
                    </h3>
                    <p className="blog-text">
                      Enim ad minim veniam, consectetur adipiscing elit, quis
                      nostrud exercitation ullamco laboris nisi.
                    </p>
                  </div>
                </a>
              </li>
              <li className="blog-post-item">
                <a href="#">
                  <figure className="blog-banner-box">
                    <img
                      src="./assets/images/blog-5.jpg"
                      alt="The forgotten art of spacing"
                      loading="lazy"
                    />
                  </figure>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <p className="blog-category">Design</p>
                      <span className="dot" />
                      <time dateTime="2022-02-23">Fab 23, 2022</time>
                    </div>
                    <h3 className="h3 blog-item-title">
                      The forgotten art of spacing
                    </h3>
                    <p className="blog-text">
                      Maxime placeat, sed do eiusmod tempor incididunt ut labore
                      et dolore magna aliqua.
                    </p>
                  </div>
                </a>
              </li>
              <li className="blog-post-item">
                <a href="#">
                  <figure className="blog-banner-box">
                    <img
                      src="./assets/images/blog-6.jpg"
                      alt="Design digest #79"
                      loading="lazy"
                    />
                  </figure>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <p className="blog-category">Design</p>
                      <span className="dot" />
                      <time dateTime="2022-02-23">Fab 23, 2022</time>
                    </div>
                    <h3 className="h3 blog-item-title">Design digest #79</h3>
                    <p className="blog-text">
                      Optio cumque nihil impedit uo minus quod maxime placeat,
                      velit esse cillum.
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </section>
        </article>
        {/*
  - #CONTACT
*/}
        <article className="contact" data-page="contact">
          <header>
            <h2 className="h2 article-title">Contact</h2>
          </header>
          <section className="mapbox" data-mapbox="">
            <figure>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21563.762025862892!2d19.0520325!3d47.50023244999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc154c687d4d%3A0x500c4290c1ed580!2sBudapest%2C%20District%20V.%2C%20Hungary!5e0!3m2!1sen!2sro!4v1673551232521!5m2!1sen!2sro"
                width={400}
                height={300}
                loading="lazy"
              />
              
            </figure>
          </section>
          <section className="contact-form">
            <h3 className="h3 form-title">Contact Form</h3>
            <form action="#" className="form" data-form="">
              <div className="input-wrapper">
                <input
                  type="text"
                  name="fullname"
                  className="form-input"
                  placeholder="Full name"
                  required=""
                  data-form-input=""
                />
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="Email address"
                  required=""
                  data-form-input=""
                />
              </div>
              <textarea
                name="message"
                className="form-input"
                placeholder="Your Message"
                required=""
                data-form-input=""
                defaultValue={""}
              />
              <button
                className="form-btn"
                type="submit"
                disabled=""
                data-form-btn=""
              >
                <ion-icon name="paper-plane" />
                <span>Send Message</span>
              </button>
            </form>
          </section>
        </article>
      </div>
    </>
  );
}

export default Base;
