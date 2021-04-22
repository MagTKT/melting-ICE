
import React, { useState } from "react";

// reactstrap components
import { Container } from "reactstrap";
import Quiz from "components/Quiz/Quiz.js";

function LandingPageHeader() {
  let pageHeader = React.createRef();
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
		<Quiz />
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
