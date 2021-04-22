
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function GameHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" + require("assets/img/iceland.jpg") + ")",
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
            <div class="contour_game"></div>
        </Container>
      </div>
    </>
  );
}

export default GameHeader;