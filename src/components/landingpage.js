import React, { Component } from "react";
import { Jumbotron, Container, CardDeck, Card } from "react-bootstrap";
import Code from "../../src/code-image.png";
import Health from "../../src/healthcare-image.png";
import Business from "../../src/business-image.png";


class Landing extends Component {
  render() {
    return (
      <div className="jumbo">
        <Jumbotron fluid>
          <Container />
        </Jumbotron>
        <CardDeck className="skills">
          <Card>
            <Card.Img variant="top" className="code" src={Code}/>
            <Card.Body>
              <Card.Title><h3>Full Stack Developer</h3></Card.Title>
              <Card.Text>
                <p> I was presented a Certificate of Full-Stack Web Development from Case Western University in July 2019. The program helped me become skilled in both Front and Back portions of web applications. </p>
                <p> My knowledge of front-end technologies consists of HTML5, CSS3, UI frameworks such as Bootstrap and Materialize, Javascript, jQuery, ES6, AJAX and React.js.</p> 
                <p> My understanding of back-end technologies is composed of the Command Line, Node.js, Express.js, MySQL, MongoDB and Java. I also possess deployment skills using Heroku and Git.  </p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" className="health" src={Health} />
            <Card.Body>
              <Card.Title><h3>Bachelors of Science</h3></Card.Title>
              <Card.Text>
                <p>I received my Bachelors of Science from Cleveland State University in December of 2018. During my time at CSU, I gained self-directed and engaged learning skills necessary for a lifetime of learning. </p>
                <p>The program included a great core knowledge of cultural and ethical considerations not only specific to healthcare, but rather everyday life. I was also taught the basics of healthcare in the United States such as how a health system operates, insurance practices and communication within the medical field. </p>
                <p>The scheme of this degree also stressed new medical practices and the future of medicine. I took multiple classes that covered health psychology, modern medicine and humanities.</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" className="business" src={Business} />
            <Card.Body>
              <Card.Title><h3>Business Minor</h3></Card.Title>
              <Card.Text>
              <p>As I continued my educational path, I felt that I needed to gain a better understanding of concepts in business. </p>
              <p>Over time while pursuing my business minor, I obtained a solid foundational comprehension of the core applications of business. The courses I took provided the apprehension of finance concepts, fundamentals of marketing, management and supply chain operations.  </p>
              </Card.Text>
            </Card.Body> 
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default Landing;
