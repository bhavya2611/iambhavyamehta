import React from "react";
import Typing from "react-typing-animation";

const MainPage = () => {
  return (
    <div>
      <button type="button" className="mobile-nav-toggle d-xl-none">
        <i className="icofont-navigation-menu"></i>
      </button>

      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img
              src="../assets/img/about.jpg"
              alt=""
              className="img-fluid rounded-circle"
            />
            <h1 className="text-light">
              <a href="index.html">Bhavya Mehta</a>
            </h1>
            <div className="social-links mt-3 text-center">
              <a
                href="https://www.linkedin.com/in/bhavya-y-mehta/"
                className="linkedin"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
              <a href="https://github.com/bhavya2611" className="github">
                <i className="bx bxl-github"></i>
              </a>
              <a
                href="https://www.instagram.com/iambhavyamehta/"
                className="instagram"
              >
                <i className="bx bxl-instagram"></i>
              </a>
            </div>
          </div>

          <nav className="nav-menu">
            <ul>
              <li className="active">
                <a href="index.html">
                  <i className="bx bx-home"></i> <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about">
                  <i className="bx bx-user"></i> <span>About</span>
                </a>
              </li>
              <li>
                <a href="#resume">
                  <i className="bx bx-file-blank"></i> <span>Resume</span>
                </a>
              </li>
              {/* <!-- <li><a href="#portfolio"><i className="bx bx-book-content"></i> Portfolio</a></li> --> */}
              <li>
                <a href="#services">
                  <i className="bx bx-server"></i> Services
                </a>
              </li>
              <li>
                <a href="#contact">
                  <i className="bx bx-envelope"></i>Contact
                </a>
              </li>
            </ul>
          </nav>
          <button type="button" className="mobile-nav-toggle d-xl-none">
            <i className="icofont-navigation-menu"></i>
          </button>
        </div>
      </header>

      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="hero-container">
          <h1>Bhavya Mehta</h1>
          <div>
            <p>
              I am{" "}
              <Typing>
                <span>a DEVELOPER</span>
                <Typing.Delay ms={500} />
                <Typing.Backspace count={11} />
                <Typing.Delay ms={500} />
                <span>a FREELANCER</span>
                <Typing.Delay ms={500} />
                <Typing.Backspace count={12} />
                <Typing.Delay ms={500} />
                <span>an EXPLORER</span>
                <Typing.Delay ms={500} />
              </Typing>
            </p>
          </div>
        </div>
      </section>

      <main id="main">
        <section id="about" className="about">
          <div className="container">
            <div className="section-title">
              <h2>About</h2>
              <p>
                I am primarily a web developer, and have extensively worked on
                the MERN stack. Challenges drive me and building solutions is
                what motivates me to get out of my bed and work each day. My
                short term goal is to become an expert in ReactJS and NodeJS. In
                the long run I wish to impact millions of lives positively
                worlwide, with the aid of technolgy and holisitic education.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <img
                  src="../assets/img/about.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div
                style={{ paddingLeft: "5px" }}
                className="col-lg-8 pt-4 pt-lg-0 content"
              >
                <h3>Full Stack Web Developer &amp; Frontend Engineer.</h3>
                <p className="font-italic">
                  I have coded for over 5670 hours in JavaScript. My experience
                  includes working on full fledged React projects, React Native
                  apps, PWA's, SPA's, Vanilla JS apps, simple statice websites
                  in HTML/CSS and a lot of project management and understanding
                  business requirements.
                </p>
                <div className="row">
                  <div style={{ padding: "5px" }} className="col-lg-6">
                    <ul>
                      {/* <!-- <li><i className="icofont-rounded-right"></i> <strong>Birthday:</strong> 26 November 1995</li> --> */}
                      <li>
                        <i className="icofont-rounded-right"></i>{" "}
                        <strong>Website:</strong> www.bhavyamehta.com
                      </li>
                      <li>
                        <i className="icofont-rounded-right"></i>{" "}
                        <strong>Phone:</strong> +91 82374 52611
                      </li>
                      <li>
                        <i className="icofont-rounded-right"></i>{" "}
                        <strong>City:</strong> Pune, India
                      </li>
                    </ul>
                  </div>
                  <div style={{ padding: "5px" }} className="col-lg-6">
                    <ul>
                      {/* <!-- <li><i className="icofont-rounded-right"></i> <strong>Age:</strong> 24</li> --> */}
                      <li>
                        <i className="icofont-rounded-right"></i>{" "}
                        <strong>Degree:</strong> Bachelor's - 8.4 CGPA
                      </li>
                      <li>
                        <i className="icofont-rounded-right"></i>{" "}
                        <strong>Email Id:</strong> bhavya.y.mehta@gmail.com
                      </li>
                      <li>
                        <i className="icofont-rounded-right"></i>{" "}
                        <strong>Freelance:</strong> Available
                      </li>
                    </ul>
                  </div>
                </div>
                <p>
                  If you any opportunities for me, need help with any work in
                  the web dev world, or want to learn React, feel free to drop
                  by and say HI!. Also, I love to discuss everything under the
                  sky, but more than that I love to get to know people and
                  understand what makes them want to live, also I am always up
                  for travel.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="facts" className="facts">
          <div className="container">
            <div className="section-title">
              <h2>Facts</h2>
              <p>Some good things that I have done put down in numbers</p>
            </div>

            <div className="row no-gutters">
              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="icofont-simple-smile"></i>
                  <span data-toggle="counter-up">12</span>
                  <p>
                    <strong>Happy Clients</strong>
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="icofont-document-folder"></i>
                  <span data-toggle="counter-up">18</span>
                  <p>
                    <strong>Projects</strong>
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="icofont-live-support"></i>
                  <span data-toggle="counter-up">2611</span>
                  <p>
                    <strong>Hours Of Freelance Work</strong>
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="icofont-users-alt-5"></i>
                  <span data-toggle="counter-up">26</span>
                  <p>
                    <strong>Lives Impacted Positively</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="skills section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Skills</h2>
              <p>
                I don't feel my technical skills are the only thing that I bring
                to the table. Three things that set me apart are the ability to
                learn quickly, a knack for solving problems / building
                solutions, and lastly how smoothly I can adapt to new
                environments. Also, I am a cheerful guy, you'd always find me in
                a group, with everyone laughing their hearts out.
              </p>
            </div>

            <div className="row skills-content">
              <div className="col-lg-6">
                <div className="progress">
                  <span className="skill">
                    HTML <i className="val">100%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    CSS <i className="val">90%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    JavaScript <i className="val">75%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="progress">
                  <span className="skill">
                    React <i className="val">80%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    Node <i className="val">90%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    MongoDB <i className="val">55%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="55"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="resume" className="resume">
          <div className="container">
            <div className="section-title">
              <h2>
                Resume{" "}
                <a target="_blank" href="./assets/Bhavya_Mehta_Resume.pdf">
                  <i className="icofont-download download"></i>
                </a>
              </h2>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                  <h4>
                    Bachelor of Technology in Electronics &amp;
                    Telecommunications
                  </h4>
                  <h5>CPI - 8.39</h5>
                  <h5>2014 - 2018</h5>
                  <p>
                    <em>VISHWAKARMA INSTITUTE OF TECHNOLOGY, Pune</em>
                  </p>
                  <p>
                    Related Courses: Data Structures and Algorithms, Computer
                    Architecture and Operating Systems, Linux, Real Time
                    Embedded Systems, Programming Language – C, Calculus.
                  </p>
                </div>
                <h3 className="resume-title">Technical Skills</h3>
                <div className="resume-item">
                  <h5>JavaScript</h5>
                  <h5>HTML5</h5>
                  <h5>CSS3</h5>
                  <h5>Bootstrap</h5>
                  <h5>ReactJS</h5>
                  <h5>NodeJS</h5>
                  <h5>MongoDB</h5>
                  <h5>SQL Server</h5>
                  <h5>Git</h5>
                  <h5>Redux</h5>
                </div>
                <h3 className="resume-title">Achievements</h3>
                <div className="resume-item">
                  <p>
                    <ul>
                      <li>
                        Was shortlisted for the final round of CODE19 Hackathon,
                        it was based on the current coronavirus pandemic.
                      </li>
                      <li>
                        My team bagged the first prize in FinIQ JavaScript
                        Hackathon.
                      </li>
                      <li>
                        Ranked 10th in Talent Search Test after training in
                        FinIQ.
                      </li>
                      <li>
                        Won runners up at Abhikalp, University Level Project
                        Competition for my major project.
                      </li>
                      <li>
                        Two-time speaker, Abhivriddhi – Resume Building
                        Workshop.
                      </li>
                      <li>
                        Completed a trek to Stok Kangri, base camp. (18500ft
                        altitude)
                      </li>
                    </ul>
                  </p>
                </div>
                <h3 className="resume-title">Extra Curricular</h3>
                <div className="resume-item">
                  <p>
                    <ul>
                      <li>
                        Working as a Coding facilitator for The Apprentice
                        Project, an NGO. I teach coding to kids from a public
                        school.
                        <li>Served as a trek leader for Treks and Trails.</li>
                        <li>
                          Have built a few websites. (gathaevents.com,
                          areya.tech, pineappleview.com )
                        </li>
                        <li>Represented the junior college football team.</li>
                        <li>
                          Worked as Mathematics Teacher at Manshil Academy. Have
                          taught over 250 kids in my tenure.
                        </li>
                        <li>
                          Published a React Component on NPM -
                          https://www.npmjs.com/package/customizable-progress-bar
                        </li>
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <h3 className="resume-title">Professional Experience</h3>
                <div className="resume-item">
                  <h4>FREELANCER | Full Stack Web Developer</h4>
                  <h5>Jan 2019 - Present</h5>
                  <p>
                    <em>Pune, India </em>
                  </p>
                  <p>
                    <ul>
                      <li>
                        Technologies - Jquery, JavaScript, HTML, CSS, MongoDB,
                        React, Node, Express, SQL, TypeScript
                      </li>
                      <li>
                        Serving as a consultant for React for a couple of
                        companies
                      </li>
                      <li>Developed an MVP in React for a FinTech company</li>
                      <li>Built a website for a Lead Generation company</li>
                      <li>Fixed issues/bugs in multiple projects</li>
                      <li>
                        Working on another product to help people build their
                        resume https://10skills.co
                      </li>
                      <li>Built a superior UI for https://theprepcafe.com</li>
                    </ul>
                  </p>
                </div>
                <div className="resume-item">
                  <h4>Software Engineer - UI</h4>
                  <h5>Jul 2020 - Present</h5>
                  <p>
                    <em>DeepIntent, Pune</em>
                  </p>
                  <p>
                    <ul>
                      <li>
                        Technologies: JavaScript, HTML, CSS, React, GraphQL,
                        Apollo, Git
                      </li>
                      <li>
                        I am working with the UI team to build one of a kinf
                        AdTech platform mainly for the Health Care Sector.{" "}
                      </li>
                      <li>
                        I am involved with building new screens, enhancements,
                        developing new features and solving production
                        issues/bugs.
                      </li>
                    </ul>
                  </p>
                </div>
                <div className="resume-item">
                  <h4>Full Stack Software Developer</h4>
                  <h5>Jul 2018 - Dec 2019</h5>
                  <p>
                    <em>FINIQ CONSULTING PVT LTD, Pune</em>
                  </p>
                  <p>
                    <ul>
                      <li>
                        Technologies: JavaScript, HTML, CSS, React, Redux, Node,
                        Express, jQuery, SQL
                      </li>
                      <li>
                        I was involved in development of a financial engineering
                        platform for private and investment banks, to price
                        multiple financial instruments from one screen with the
                        capacity to save prices and book deals on the same price
                        in future.{" "}
                      </li>
                      <li>
                        It was made with an outlook to run across all
                        screen-sizes and bought the traditional 30-minute
                        pricing/order cycle down to 30 seconds.
                      </li>
                    </ul>
                  </p>
                </div>
                <div className="resume-item">
                  <h4>Data Analyst Intern</h4>
                  <h5>Jul 2017 - Dec 2017</h5>
                  <p>
                    <em>DATA SCIENCE TECHNOLOGIES PVT LTD, Pune</em>
                  </p>
                  <p>
                    <ul>
                      <li>
                        Technologies: R, SQL, JavaScript, HTML,CSS,
                        Bootstrap.js, jQuery, D3.js
                      </li>
                      <li>
                        Developed a prototype of an automated tool with
                        predictive capabilities using machine learning
                        algorithms like K-means clustering, multivariate
                        regression models and random forest, to help sales
                        representatives generate marketing and advertising
                        campaign insights.{" "}
                      </li>
                      <li>
                        Built a module using Google Maps API and Web
                        technologies to efficiently plan everyday routes for a
                        salesman.{" "}
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="portfolio" className="portfolio section-bg">
        <div className="container">
  
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>The work I am happy to showcase:</p>
          </div>
  
          <div className="row" >
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">All</li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Card</li>
                <li data-filter=".filter-web">Web</li>
              </ul>
            </div>
          </div>
  
          <div className="row portfolio-container"  >
  
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" className="venobox"
                    title="App 1"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" className="venobox"
                    title="Web 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-3.jpg" data-gall="portfolioGallery" className="venobox"
                    title="App 2"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-4.jpg" data-gall="portfolioGallery" className="venobox"
                    title="Card 2"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-5.jpg" data-gall="portfolioGallery" className="venobox"
                    title="Web 2"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-6.jpg" data-gall="portfolioGallery" className="venobox"
                    title="App 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-7.jpg" data-gall="portfolioGallery" className="venobox"
                    title="Card 1"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-8.jpg" data-gall="portfolioGallery" className="venobox"
                    title="Card 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt=""/>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-9.jpg" data-gall="portfolioGallery" className="venobox"
                    title="Web 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
  
          </div>
  
        </div>
      </section> */}

        <section id="services" className="services">
          <div className="container">
            <div className="section-title">
              <h2>Services</h2>
              <p></p>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box iconbox">
                  <div className="icon">
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 600 600"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke="none"
                        strokeWidth="0"
                        fill="#f5f5f5"
                        d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
                      ></path>
                    </svg>
                    <i className="bx bxl-dribbble"></i>
                  </div>
                  <h5>Web & Mobile App Development</h5>
                  <p>
                    I can help you build all kinds of WebApps, from SPA's to
                    PWA's to a full fledged ecommerce. Furthermore I can also
                    build hybrid mobile apps, these can work across Android,
                    iOS, and Web.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                <div className="icon-box iconbox ">
                  <div className="icon">
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 600 600"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke="none"
                        strokeWidth="0"
                        fill="#f5f5f5"
                        d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"
                      ></path>
                    </svg>
                    <i className="bx bx-file"></i>
                  </div>
                  <h5>Website Design & Development</h5>
                  <p>
                    If you are a business/organization and need a beautiful
                    informative website which is a precise reflection of your
                    brand, then reach out to me.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                <div className="icon-box iconbox">
                  <div className="icon">
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 600 600"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke="none"
                        strokeWidth="0"
                        fill="#f5f5f5"
                        d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781"
                      ></path>
                    </svg>
                    <i className="bx bx-tachometer"></i>
                  </div>
                  <h5>Exclusive Frontend Development</h5>
                  <p>
                    I am good with frontend, I can develop animations, smooth UI
                    with responsive designs. If you need any help in building
                    any kind of frontend right from a website, to a hybrid app,
                    I am right here.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box iconbox">
                  <div className="icon">
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 600 600"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke="none"
                        strokeWidth="0"
                        fill="#f5f5f5"
                        d="M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813"
                      ></path>
                    </svg>
                    <i className="bx bx-layer"></i>
                  </div>
                  <h5>Automation / API Development </h5>
                  <p>
                    I have built 5 automation scripts, mainly to scrape data
                    from LinkedIn, Instagram, Indeed, WikiPedia and Naukri. I
                    also have proven experience with REST API's. Reach out to me
                    if that is what you are looking for
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box iconbox">
                  <div className="icon">
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 600 600"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke="none"
                        strokeWidth="0"
                        fill="#f5f5f5"
                        d="M300,532.3542879108572C369.38199826031484,532.3153073249985,429.10787420159085,491.63046689027357,474.5244479745417,439.17860296908856C522.8885846962883,383.3225815378663,569.1668002868075,314.3205725914397,550.7432151929288,242.7694973846089C532.6665558377875,172.5657663291529,456.2379748765914,142.6223662098291,390.3689995646985,112.34683881706744C326.66090330228417,83.06452184765237,258.84405631176094,53.51806209861945,193.32584062364296,78.48882559362697C121.61183558270385,105.82097193414197,62.805066853699245,167.19869350419734,48.57481801355237,242.6138429142374C34.843463184063346,315.3850353017275,76.69343916112496,383.4422959591041,125.22947124332185,439.3748458443577C170.7312796277747,491.8107796887764,230.57421082200815,532.3932930995766,300,532.3542879108572"
                      ></path>
                    </svg>
                    <i className="bx bx-slideshow"></i>
                  </div>
                  <h5>Support - Hourly/On Contract</h5>
                  <p>
                    If your workload has increased or you have tasks with urgent
                    deadlines, I can help you deliever quality work on time by
                    working on contract/hourly basis.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box iconbox">
                  <div className="icon">
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 600 600"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke="none"
                        strokeWidth="0"
                        fill="#f5f5f5"
                        d="M300,566.797414625762C385.7384707136149,576.1784315230908,478.7894351017131,552.8928747891023,531.9192734346935,484.94944893311C584.6109503024035,417.5663521118492,582.489472248146,322.67544863468447,553.9536738515405,242.03673114598146C529.1557734026468,171.96086150256528,465.24506316201064,127.66468636344209,395.9583748389544,100.7403814666027C334.2173773831606,76.7482773500951,269.4350130405921,84.62216499799875,207.1952322260088,107.2889140133804C132.92018162631612,134.33871894543012,41.79353780512637,160.00259165414826,22.644507872594943,236.69541883565114C3.319112789854554,314.0945973066697,72.72355303640163,379.243833228382,124.04198916343866,440.3218312028393C172.9286146004772,498.5055451809895,224.45579914871206,558.5317968840102,300,566.797414625762"
                      ></path>
                    </svg>
                    <i className="bx bx-arch"></i>
                  </div>
                  <h5>Consulting, Teaching & Mentorship</h5>
                  <p>
                    If you are a new company looking to build an application in
                    the JS stack, or a newbie trying to learn the JS stack,
                    reach out. For this I don't charge, it is my way of giving
                    back.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="testimonials" className="testimonials section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Testimonials</h2>
              <p>
                You don't need to take my word when I say I'll get the work
                done, read what my clients, and colleagues say about me.
              </p>
            </div>

            <div className="owl-carousel testimonials-carousel">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam, risus at
                  semper.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img
                  src="assets/img/testimonials/testimonials-1.jpg"
                  className="testimonial-img"
                  alt=""
                />
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
              </div>

              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Export tempor illum tamen malis malis eram quae irure esse
                  labore quem cillum quid cillum eram malis quorum velit fore
                  eram velit sunt aliqua noster fugiat irure amet legam anim
                  culpa.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img
                  src="assets/img/testimonials/testimonials-2.jpg"
                  className="testimonial-img"
                  alt=""
                />
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
              </div>

              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Enim nisi quem export duis labore cillum quae magna enim sint
                  quorum nulla quem veniam duis minim tempor labore quem eram
                  duis noster aute amet eram fore quis sint minim.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img
                  src="assets/img/testimonials/testimonials-3.jpg"
                  className="testimonial-img"
                  alt=""
                />
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
              </div>

              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                  multos export minim fugiat minim velit minim dolor enim duis
                  veniam ipsum anim magna sunt elit fore quem dolore labore
                  illum veniam.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img
                  src="assets/img/testimonials/testimonials-4.jpg"
                  className="testimonial-img"
                  alt=""
                />
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
              </div>

              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
                  veniam tempor noster veniam enim culpa labore duis sunt culpa
                  nulla illum cillum fugiat legam esse veniam culpa fore nisi
                  cillum quid.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img
                  src="assets/img/testimonials/testimonials-5.jpg"
                  className="testimonial-img"
                  alt=""
                />
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
              </div>
            </div>
          </div>
        </section> */}

        <section id="contact" className="contact">
          <div className="container">
            <div className="section-title">
              <h2>Contact</h2>
              <p>
                If you are in Pune. let's catch up over a coffee, if not let's
                get on a call and plan to where we will have coffee one we are
                in the same city.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-5 d-flex align-items-stretch">
                <div className="info">
                  <div className="address">
                    <i className="icofont-google-map"></i>
                    <h4>Location:</h4>
                    <p>Pune, India, 411037</p>
                  </div>

                  <div className="email">
                    <i className="icofont-envelope"></i>
                    <h4>Email:</h4>
                    <p>bhavya.y.mehta@gmail.com</p>
                  </div>

                  <div className="phone">
                    <i className="icofont-phone"></i>
                    <h4>Call:</h4>
                    <p>+91 82374 52611</p>
                  </div>

                  <iframe
                    title="Address"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d356.5341739170913!2d73.86532954974673!3d18.480555007630738!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eaa1def2a24b%3A0x54ccbb9c94f44e70!2sVasanth%20Vihar!5e0!3m2!1sen!2sus!4v1593842174561!5m2!1sen!2sus"
                    frameBorder="0"
                    style={{ border: 0, width: "100%", height: "290px" }}
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                <form
                  action="forms/contact.php"
                  method="post"
                  className="php-email-form"
                >
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                      />
                      <div className="validate"></div>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Your Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        data-rule="email"
                        data-msg="Please enter a valid email"
                      />
                      <div className="validate"></div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 8 chars of subject"
                    />
                    <div className="validate"></div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Message</label>
                    <textarea
                      className="form-control"
                      name="message"
                      rows="10"
                      data-rule="required"
                      data-msg="Please write something for us"
                    ></textarea>
                    <div className="validate"></div>
                  </div>
                  <div className="mb-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <a href="#home" className="back-to-top">
        <i className="icofont-simple-up"></i>
      </a>
    </div>
  );
};

export default MainPage;
