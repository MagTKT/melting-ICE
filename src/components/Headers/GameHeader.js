import React from "react";
import Iframe from 'react-iframe'

// reactstrap components
import { Container } from "reactstrap";

// core components

function GameHeader() {
  let pageHeader = React.createRef();
  return (
    <>
      <div
         style={{
          backgroundImage:
            "url(" + require("assets/img/iceland.jpg").default + ")",
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
        <div className="motto text-center">
        <h1>A vous de jouer</h1>
            <br />
          </div>
            <div class="contour_game">
            <Iframe url="https://nostalgic-wilson-c210f9.netlify.app/pingoin.html"
              width="700px"
              height="400px"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"
              />
            </div>
          <h3 style={{color:"white",fontWeight:"bold",textAlign:"center",zIndex:1,position: "relative"}}>
            On y est à vous de défier les glaçons le but, attraper le plus possible, pour cela notre petit pingouin est là pour vous aider !
          </h3>
          <p style={{color:"white",fontWeight:"bold",textAlign:"center",margin: "20px 0px",zIndex:1,position: "relative"}}>Aider vous des flèches directionnelles de votre clavier pour réussir votre mission.</p>
        </Container>
      </div>
    </>
  );
}

export default GameHeader;