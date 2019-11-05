import React, { Component } from "react";
import { Carousel, Button } from "react-bootstrap";
import Jumbo from "./jumbtron";
import Cle from "../../assets/images/cle.png";
import Palm from "../../assets/images/palm.png";
import Colorado from "../../assets/images/colorado.png";
import Wine from "../../assets/images/wine.png";
import Browns from "../../assets/images/browns.png";
import Edge from "../../assets/images/edge.png";
import Book from "../../assets/images/book.png";
import Brick from "../../assets/images/brick.png";
import Stairs from "../../assets/images/stairs.png";

class Landing extends Component {
  render() {
    return (
      <div>
        <Jumbo />
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src={Book}
              alt="First slide"
            />
            <Carousel.Caption>
              <div className="row">
                <div className="col-sm-12 text-right">
                  <div className="onesText">
                    <h2 className="text-right car-title">EDUCATION</h2>
                    <h2 className="univ">Cleveland State University</h2>

                    <h4 className="deg">Bachelors of Health Science</h4>
                    <h4 className="deg">Minor in Business</h4>

                    <h2 className="univ">Case Western Reserve University</h2>

                    <h4 className="deg">Full-Stack Flex Coding Certificate</h4>
                  </div>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src={Brick}
              alt="Third slide"
            />

            <Carousel.Caption>
              <div class="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="twosText text-fluid">
                    {/* <h2 className="text-center car-title">WEB DEVELOPMENT</h2> */}
                    <h3 className="services">
                      Full-Stack Developer offering freelance services
                    </h3>
                    <br />
                    <Button
                      variant="info"
                      size="lg"
                      href="/contact"
                      className="car-btn p-2 mx-2"
                    >
                      Contact
                    </Button>
                    <Button
                      variant="info"
                      className="car-btn p-2 mx-2"
                      size="lg"
                      href="/projects"
                    >
                      Projects
                    </Button>
                  </div>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src={Stairs}
              alt="Third slide"
            />

            <Carousel.Caption>
              <div className="row">
                <div className="text-left">
                  <div className="threesText">
                    <h2 className="car-title">STATUS</h2>
                    <h3 className="seek">
                      Seeking a Front-End Development Role
                    </h3>
                    <br />
                    <Button
                      variant="info"
                      size="lg"
                      href="/contact"
                      className="car-btn p-2 mx-2"
                    >
                      Contact
                    </Button>
                    <Button
                      variant="info"
                      size="lg"
                      href="/resume"
                      className="car-btn p-2 mx-2"
                    >
                      Resume
                    </Button>
                  </div>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="row bg-dark pics p-5">
          <div className="col-xs-12 col-md-6 col-lg-6 text-center">
            <img src={Cle} id="decor" alt="cle" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-6 text-center">
            <img src={Colorado} id="decor" alt="palm" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-6 text-center">
            <img src={Browns} id="decor" alt="cle" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-6 text-center">
            <img src={Wine} id="decor" alt="palm" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-6 text-center">
            <img src={Palm} id="decor" alt="cle" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-6 text-center">
            <img src={Edge} id="decor" alt="palm" />
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;

{
  /* <Col xs={12} md={12} lg={12}>
          <CardDeck className="skills">
            <Card>
              <Card.Img variant="top" className="code" src={Code} />
              <Card.Body>
                <Card.Title>
                  <h3>Full Stack Developer</h3>
                </Card.Title>
                <Card.Text>
                  <p>
                    {" "}
                    I was presented a Certificate of Full-Stack Web Development
                    from Case Western University in July 2019. The program
                    helped me become skilled in both Front and Back portions of
                    web applications.{" "}
                  </p>
                  <p>
                    {" "}
                    My knowledge of front-end technologies consists of HTML5,
                    CSS3, UI frameworks such as Bootstrap and Materialize,
                    Javascript, jQuery, ES6, AJAX and React.js.
                  </p>
                  <p>
                    {" "}
                    My understanding of back-end technologies is composed of the
                    Command Line, Node.js, Express.js, MySQL, MongoDB and Java.
                    I also possess deployment skills using Heroku and Git.{" "}
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" className="health" src={Health} />
              <Card.Body>
                <Card.Title>
                  <h3>Bachelors of Science</h3>
                </Card.Title>
                <Card.Text>
                  <p>
                    I received my Bachelors of Science from Cleveland State
                    University in December of 2018. During my time at CSU, I
                    gained self-directed and engaged learning skills necessary
                    for a lifetime of learning.{" "}
                  </p>
                  <p>
                    The program included a great core knowledge of cultural and
                    ethical considerations not only specific to healthcare, but
                    rather everyday life. I was also taught the basics of
                    healthcare in the United States such as how a health system
                    operates, insurance practices and communication within the
                    medical field.{" "}
                  </p>
                  <p>
                    The scheme of this degree also stressed new medical
                    practices and the future of medicine. I took multiple
                    classes that covered health psychology, modern medicine and
                    humanities.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" className="business" src={Business} />
              <Card.Body>
                <Card.Title>
                  <h3>Business Minor</h3>
                </Card.Title>
                <Card.Text>
                  <p>
                    As I continued my educational path, I felt that I needed to
                    gain a better understanding of concepts in business.{" "}
                  </p>
                  <p>
                    Over time while pursuing my business minor, I obtained a
                    solid foundational comprehension of the core applications of
                    business. The courses I took provided the apprehension of
                    finance concepts, fundamentals of marketing, management and
                    supply chain operations.{" "}
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Col> */
}
