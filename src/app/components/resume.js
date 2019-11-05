import React, { Component } from "react";

class Resume extends Component {
  render() {
    return (
      <div className="p-5">
        <div className="row">
          <div className="col-sm-12 col-12">
            <h1 className="mb-5 main-title">Resume</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 text-center">
            <h4 className="mb-5 main-title">Summary</h4>
            <p className="text-left">
              Driven, personable and motivated individual with a cerfication in
              Full-Stack Web Development. Currently seeking a role as an
              entry-level software developer or technical sales analyst. Skilled
              in front-end web development with significant exposure to back-end
              web development.{" "}
            </p>
            <br></br>
            <h4 className="mb-4 main-title">Education</h4>
            <p className="text-left">
              <strong>
                <i>Cleveland State University</i>
              </strong>
            </p>
            <p className="text-left"> 2014 - 2018</p>
            <p className="text-left">
              Bachelor of Health Science, Minor in Business
            </p>
            <hr/>
            <p className="text-left">
              <strong>
                <i>Case Western Reserve University</i>
              </strong>
            </p>
            <p className="text-left"> 1.2019 - 8.2019</p>
            <p className="text-left">
              Full-Stack Flex Coding Bootcamp Certification
            </p>
            <br></br>
            <h4 className="mb-4 main-title">Skills</h4>
            <ul class="text-left">
              <li>HTML5, CSS3</li>
              <li>Bootstrap, Materialize, Semantic UI</li>
              <li>Javascript, jQuery</li>
              <li>React.js</li>
              <li>Firebase</li>
              <li>Node.js, Express.js, Java</li>
              <li>MySQL, SQL Workbench</li>
              <li>NoSQL, MongoDB</li>
              <li>Git, Git Version Control</li>
              <li>Deployment with Heroku and Netlify</li>
              <li>Health Information Technology</li>
              <li>Significant knowledge of the U.S. Healthcare system </li>
              <li>Capable business knowledge</li>
              <li>Strong written and verbal communication skills</li>
              <li>Proficient in Microsoft Office</li>
              <li>Strong attention to detail</li>
              <li>Interpersonal skills</li>
            </ul>
          </div>
          <div className="col-lg-6 text-center">
            <h4 className="mb-5 main-title">Experience</h4>
            <p className="text-right">
              <strong>
                <i>
                  Health Informatics Intern at Mercy Medical Center - Lorain
                </i>
              </strong>
            </p>
            <p className="text-right"> 1.2018 - 7.2018</p>
            <ul className="text-left">
              <li>
                Encouraged patient enrollment of new technological programs
              </li>
              <li>
                Introduced and registered patients for medical applications that
                promote remote care
              </li>
              <li>Followed-up with patients to ensure quality.</li>
              <li>
                Worked in billing to organize patient records for physicians to
                log completed procedures to meet system-wide standard
              </li>
            </ul>
            <hr/>
            <p className="text-right">
              <strong>
                <i>Web Developer at Case Western Reserve University</i>
              </strong>
            </p>
            <p className="text-right"> 1.2019 - 8.2019</p>
            <ul className="text-left">
              <li>
                Worked individually and in teams to build Full-Stack web
                applications.
              </li>
              <li>Improved knowledge of web development and technology</li>
              <li>Received Full-Stack Web Development Certificate</li>
            </ul>
            <br></br>
            <h4 className="mb-5 main-title">Projects and Applications</h4>
            <p className="text-center">
              <strong>
                <i>Get On Brand</i>
              </strong>
            </p>
            <p className="text-left">
              Get on Brand is an online shop for a start-up clothing brand. The
              site features a Home page, an About page, an e-commerce shop page
              and a blog. The site was built using React.js and Bootstrap
              components. To allow transactions between the user and owner, the
              Paypal API was utilized.{" "}
            </p>
            <strong>
              <a href="https://onbrand.netlify.com/">Link to Get On Brand</a>
            </strong>
            <hr/>
            <p className="text-center mt-3">
              <strong>
                <i>CookBook</i>
              </strong>
            </p>
            <p className="text-left">
              A full-stack application using React, CookBook is a web app where
              a user is able to search for recipes by ingredient. To retrieve
              recipes, an API called edamam was integrated to return recipes
              that consist of the search paramers. The user is also able to view
              an image of the dish, health labels and a link to the full recipe.{" "}
            </p>
            <strong>
              <a href="https://arrogant-loon-52350.herokuapp.com/">
                Link to CookBook
              </a>
            </strong>
            <hr/>
            <p className="text-center mt-3">
              <strong>
                <i>CityGuide</i>
              </strong>
            </p>
            <p className="text-left">
              A front-end application where users may search cities across the
              U.S. for events such as concerts and sporting events. Weather for
              that particular day is also displayed. The API's used to retrieve
              data were ticketmaster and weather.
            </p>
            <strong>
              <a href=" ​https://github.com/jvassas/cityguide">
                Link to GitHub Repo
              </a>
            </strong>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
