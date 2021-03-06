import React from "react";
import "./App.css";
import { Navbar, Nav } from 'react-bootstrap';

import Main from "./app/components/main";
import Footer from "./app/components/footer";
// import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navigation justify-content-center">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/about">ABOUT</Nav.Link>
            <Nav.Link href="/contact">CONTACT</Nav.Link>
            <Nav.Link href="/projects">PROJECTS</Nav.Link>
            <Nav.Link href="/resume">RESUME</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Main bg="dark" variant="dark"/>
      <Footer />
    </div>
  );
}

export default App;

// react-mdl old code


  // <div style={{height: '300px', position: 'relative'}}>
    // <Layout fixedHeader>
    //     <Header className="header-color" title={<span><span style={{ color: '#ddd' }}> </span><strong>Jacob Vassas</strong></span>}>
    //         <Navigation>
    //             <a href="/">HOME</a>
    //             <a href="/resume">RESUME</a>
    //             <a href="/aboutme">ABOUT</a>
    //             <a href="/projects">PROJECTS</a>
    //             <a href="/contact">CONTACT</a>
    //         </Navigation>
    //     </Header>
    //     <Drawer title="JV">
    //         <Navigation>
    //             <a href="/">HOME</a>
    //             <a href="/resume">RESUME</a>
    //             <a href="/aboutme">ABOUT</a>
    //             <a href="/projects">PROJECTS</a>
    //             <a href="/contact">CONTACT</a>
    //         </Navigation>
    //     </Drawer>
    //      <Content>
    //        <div className="page-content"/>
    //        <Main/>
    //      </Content>
    // </Layout> */
