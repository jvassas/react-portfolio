import React, { Component } from "react";
import { Image } from "react-bootstrap";
import Avatar from "../../assets/images/selfie.png";
import HTML from "../../assets/images/html.png";
import CSS from "../../assets/images/css.png";
import JS from "../../assets/images/javascript.png";
import Rlogo from "../../assets/images/react.png";

class AboutMe extends Component {
  render() {
    return (
      <div className="container">
        <h1>About</h1>
        <Image src={Avatar} roundedCircle className="avatar" />
      
        <div className="links">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <button className="linked">
                <a
                  href="https://www.linkedin.com/in/jacob-vassas-b46b9915a/"
                  className="linked"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </button>
              <button className="gh">
                <a href="https://github.com/jvassas" className="gh">
                  <i className="fab fa-github"></i>
                </a>
              </button>
              <button className="insta">
                <a
                  href="https://www.instagram.com/jakevassas/"
                  className="insta"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-xs-12" id="p-about">
            <p>
              Some call me Jacob, most call me Jake. I am a certified Full-Stack
              Web Developer from Cleveland, Ohio. I recently graduated from Case
              Western Reserve University’s Full-Stack Flex coding bootcamp,
              where my peers and I were taught how to do this thing we call
              WebDev. Prior to my time in Cleveland’s University Circle
              district, I spent 3 years at Cleveland State University, where I
              received a Bachelor's degree in Health Science, and a Minor in
              Business.
            </p>
            <p>
              While interning at local health system in their Health Informatics
              department, I became very interested in code. I researched roles,
              viewed blogs, knocked out some tutorials and read a lot about
              technology. I realized very quickly that technology, and more
              specifically web-development, was the field that I needed to be
              in. Simply being able to create something from scratch, and to see
              your work benefit a large number of individuals, truly captures a
              desire of mine to make a greater impact on this small world.
            </p>
            <p>
              My skills include a strong knowledge of HTML 5, CSS3, Javascript
              and jQuery. A thorough understanding of CSS frameworks, git
              version control, and a good understanding of back-end technologies
              such as Node.js and Express.js. I also have exposure to MySQL and
              NoSql databases such as MongoDB, and I am proficient in React.js.
              I have not been coding for long, though I love to learn new
              technologies to expand my knowledge of the ever-changing
              programming world. Many challenges have surfaced in my journey but
              if it were easy, everyone would do it.
            </p>
            <p>
              During my spare time, you might see me at a Cleveland sporting
              event or a local micro-brewery tasting new drafts. I also love to
              stay active, whether that being an evening at the gym or running
              5-on-5 at an open gym or the park. My personal interests include
              technology, urban areas and large cities, food, travel and
              menswear.
            </p>
          </div>
        </div>
        {/* <div class="accomplishments">
          <h3 class="text-center">Accomplishments</h3>
          <ul>
            <li>Dean's List Spring and Fall of 2018</li>
            <li>Recipient of CSU Scholarship</li>
            <li>Recipient of JHS Basketball Scholarship</li>
          </ul>
        </div> */}
        <p className="languages">
          <Image src={HTML} className="html p-2" rounded/>
          <Image src={CSS} className="css p-2" rounded />
          <Image src={JS} className="javascript p-2" rounded />
          <Image src={Rlogo} className="react p-2" />
        </p>
      </div>
    );
  }
}

export default AboutMe;
