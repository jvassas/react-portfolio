import React, { Component } from "react";
import { CardDeck, Card } from "react-bootstrap";
import Cookbook from "../../src/cookbook.png";
import NFL from "../../src/click-game.png";
import LIRI from "../../src/liri.png";
import City from "../../src/CityGuide.png";
import Gif from "../../src/CarGif.png";
import NBA from "../../src/NBATrivia.png";
import Crystal from "../../src/CrystalCollector.png";
import Hang from "../../src/SportsHangman.png";
import Burg from "../../src/eatburger.png";
import Port from "../../src/portfolio.png";
import Train from "../../src/train.png";
import Bam from "../../src/bamazon.png";
import GOB from "../../src/gob.png";
import VTC from "../../src/vtc.png";


class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <h1>Individual Projects</h1>
        <CardDeck>
          {/* <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
        <CardDeck>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Straka Photography</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card> */}
          <Card>
            <Card.Img variant="top" src={VTC} />
            <Card.Body>
              <Card.Title>VTC</Card.Title>
              <Card.Text>
                <p>VTC is a Telecommunications Consulting firm that was in need of a website. I wrote the application using AngularJS and Node. This project was my first time using the Angular framework and although it presented many challenges, I am very happy with the result.</p>
                <p>The application features a standard home, about and services page, along with a contact form with validation and a testimonials page where clients are able to post reviews about their experience with the company. Bootstrap was used for mobile responsiveness and some media queries were added to ensure full responsiveness.</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small><a href="https://vtc.netlify.com/">Netlify Link</a></small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={GOB} />
            <Card.Body>
              <Card.Title>Get On Brand</Card.Title>
              <Card.Text>
                <p>Get On Brand is a React application that I created for a friend in need of a functioning e-commerce website to sell merchandise. The site features a Home page, About page and Products page.</p>
                <p>Users are able to view products for sale, add items to a cart and buy items via the Paypal API. React and Bootstrap were utlized to create the layout of the website with a custom CSS style sheet. The node package 'Styled-Components' was also used to style minor portions of the site such as card displays and buttons. Navigate to the link to view the site and show support by purchasing some <strong>On Brand</strong> merchandise!</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small><a href="https://onbrand.netlify.com/">Netlify Link</a></small>
            </Card.Footer>
          </Card>
        </CardDeck>

        {/* Start of bootcamp projects */}

        <h1>Bootcamp Projects</h1>
        <CardDeck>
          <Card>
            <Card.Img variant="top" src={NFL} />
            <Card.Body>
              <Card.Title>NFL Click-Game</Card.Title>
              <Card.Text>
               <p>This React application tests your memory by clicking different logos of NFL teams. Click all 12 logos without clicking the same logo twice and you win.</p>
               <p>The application breaks user interface into components by using React.js. The state of the components are also managed and respond to user events. CSS was used to style the page.</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small> <a href="https://evening-bayou-85872.herokuapp.com/">Heroku Link</a></small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={Cookbook} />
            <Card.Body>
              <Card.Title>CookBook</Card.Title>
              <Card.Text>
                <p>CookBook is a Full-Stack React web application that allows a user to search for recipes by ingredient(s).</p>
                <p>React components were used to build this application while custom CSS was applied for style. An API called edamam takes in paramaters provided by the user, then returns images of recipes that match the user input. The API also returns health labels and a link to the full recipe.  </p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small> <a href="https://arrogant-loon-52350.herokuapp.com/">Heroku Link</a></small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={Burg} />
            <Card.Body>
              <Card.Title>Eat a Burger</Card.Title>
              <Card.Text>
                <p>In this application, you can create a burger in the input field, then click 'Devour' to <i>eat</i> the burger.</p>
                <p>To make this burger logging application, MySQL, Node.js, Express.js, Handlebars and a custom ORM were utilized. The application uses a MVC design pattern while Node and MySQL are used to route and query data. The appearance of the HTML is generated by Handlebars, while Bootstrap and a custom CSS file were used to design the app.  </p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small><a href="https://github.com/jvassas/burger">GitHub Repository</a></small>
            </Card.Footer>
          </Card>
        </CardDeck>
        <CardDeck>
          <Card>
            <Card.Img variant="top" src={Bam} />
            <Card.Body>
              <Card.Title>Bamazon</Card.Title>
              <Card.Text>
                <p>This is a customer view of an artificial online store with mock data (products) where users are able to <i>purchase</i> inventory. The application shows a table of products and asks the user which product they would like to buy based on the product ID number. The application then asks for the quantity and if there are enough, the item may be purchased. If the user asks for more products than what is in store, a message of "Insufficient quantity" is displayed. </p>
                <p>Bamazon customer was built using Node.js and MySQL. The data is stored in a MySQL database and is displayed using the npm package console.table. The npm package inquirer prompts questions for the user and a javascript function updates the MySQL database after purchases. </p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small><a href="https://github.com/jvassas/bamazon">GitHub Repository</a></small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={LIRI} />
            <Card.Body>
              <Card.Title>LIRI Bot</Card.Title>
              <Card.Text>
              <p>Search for information about songs, concerts and movies through a Language Interpretation and Recognition Interface (LIRI). </p>
               <p>LIRI is a Node.js application that is used entirely on the command line. Three different API's are used in this application: Spotify, Bands in Town and OMDB. Spotify is used to return information about a searched song and Bands in Town is used to search for concert information regarding a specific band or artist. Lastly the OMDB API searches for information about movies that are searched. </p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small> <a href="https://github.com/jvassas/liri-node-app">GitHub Respository</a></small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={City} />
            <Card.Body>
              <Card.Title>City Guide</Card.Title>
              <Card.Text>
              <p>City Guide is a front end HTML, CSS and Javascript application that allows a user to view upcoming concerts and sporting events happening in the city that is searched. The weather is also provided for the current day.</p>
                <p>The application's functionality consists of two API calls using AJAX. The first, ticketmaster returns information regarding concerts and sporting events, and the weather API returns the forecast for the current day. Our group also made a user login using Firebase, which allows a user to sign up and login to the app. CSS was used to style the page and Greensock was integreted for animations. </p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small><a href="https://github.com/jvassas/cityguide">GitHub Repository</a></small>
            </Card.Footer>
          </Card>
        </CardDeck>
        <CardDeck>
          <Card>
            <Card.Img variant="top" src={Gif} />
            <Card.Body>
              <Card.Title>Gif Generator</Card.Title>
              <Card.Text>
              <p>In this front-end web application, a user is able to click buttons to search for gifs specific to the buttons category. Users are also able to add a custom button and search for gifs of that category.</p>
              <p>Bootstrap and a custom CSS file were used to design the app. An AJAX call to the Giphy API is used to return gifs that are specific to the button clicked. Javascript was the main language used in the overall functionality of the application. </p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small><a href="https://github.com/jvassas/CarGif">Github Repository</a></small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={Train} />
            <Card.Body>
              <Card.Title>TrainTime</Card.Title>
              <Card.Text>
                <p>TrainTime is a Javascript and HTML application that tracks the arrival times and how many minutes away a train is from arrival. Simply input the name of the train, it's destination, the time the first train arrives, and the frequency and the app will do the rest.</p>
                <p>Once the information is inserted by the user, the application returns the next arrival of the train and how many minutes away it is. TrainTime was built using HTML and Javascript while integrating Moment.js to do the math for us. Train info is also logged in Firebase. Bootstrap was used for the framework of the application and a custom CSS file was used to do some minor styling.</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small><a href="https://github.com/jvassas/traintime">Github Repository</a></small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={NBA} />
            <Card.Body>
              <Card.Title>NBA Trivia</Card.Title>
              <Card.Text>
               <p>NBA Trivia puts your knowledge of recent NBA facts and statistics to the test. This front-end Javascript application asks the user 10 NBA related questions on a timer of 24 seconds per question.</p>
               <p>The app was mainly built using HTML and Javascript, while custom CSS was used to style the page. Javascript determines the functionality of the app and timers were used to give the user a countdown to provide an answer. </p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small><a href="https://github.com/jvassas/NBA-Trivia">Github Repository</a></small>
            </Card.Footer>
          </Card>
        </CardDeck>
        <CardDeck>
          <Card>
            <Card.Img variant="top" src={Crystal} />
            <Card.Body>
              <Card.Title>Crystal Collector</Card.Title>
              <Card.Text>
                <p>Javascript, HTML and CSS were used to create Crystal Collector, a front-end web application. Four jewels are displayed and are assigned unknown values from 1-12. It is the users task to match their sum of the jewels clicked, to the number displayed on the screen. If the user score is higher than the given number, it is counted as a loss. A user wins when their score equals the given number.  </p>
                <p>The overall functionality of the app is maintained by Javascript. The random numbers are generated using a Javascript function and the game resets after every win or loss.</p>
   
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small><a href="https://github.com/jvassas/jewel-collector">Github Repository</a></small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={Hang} />
            <Card.Body>
              <Card.Title>Sports Hangman</Card.Title>
              <Card.Text>
                <p>Sports Hangman is a front-end Javascript application that is exactly as it sounds. The user simply guesses letters in hopes to figure out what sport is the answer.</p>
                <p>Basic Javascript was used to make this app functional. An array of sports is used to generate the random sport, then a user has 10 attempts to figure out the word. </p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small><a href="https://github.com/jvassas/sports-hangman">Github Repository</a></small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={Port} />
            <Card.Body>
              <Card.Title>Basic Portfolio</Card.Title>
              <Card.Text>
                <p>My first coding assignment, where I built version one of my personal porfolio. With little development experience, I used Bootstrap, and CSS to design the framework of what my portfolio is today. </p>
                <p>While I deployed this initial project on github pages, I uploaded my projects week by week to give me an idea of what I wanted my website to look like. This project served as the scaffolding of my current website that you are on now!</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small><a href="https://github.com/jvassas/portfolio">Github Repository</a></small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default Projects;
